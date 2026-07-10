# Syscalls are cooked

---

Me being me, casually carrying on with life, trying out programming languages and finding the ones where it felt like I am *talking* to a machine directly, encountered **Zig**. 

The networking nerd in me decided to write a very simple TCP echo world server. 

And this is where, what should have been a simple one hour excercise turned into rabbit hole spanning 3 days.

...

After loading up the docs, I encountered something *weird*:

```zig
pub fn socket(domain: u32, socket_type: u32, protocol: u32) usize {
if (native_arch == .x86) {
    return socketcall(SC.socket, &[3]usize{
        domain,
        socket_type,
        protocol,
    });
}
return syscall3(.socket, domain, socket_type, protocol);

}
```

Why is the return type a *usize*, not an int?

The man pages document something like this:

```text
int socket(int domain, int type , int protocol );
```

And

```text
return syscall3(.socket, domain, socket_type, protocol);

```
Why is a function, returning a function?

What is even happening here?

Before all of that, let's try to understand, what a **syscall** is

---

## Kernel Protection Rings

Modern CPUs implement privilege levels (called **Protection Rings**) in hardware.

The operating system kernel runs with the highest privilege (Ring 0), while normal applications execute in a much less privileged mode (Ring 3).

**Why?**

The kernel simply doesn't trust you bro. There is no guarantee that you, won't crash the system into oblivion by directly accessing hardware or disabling interrupts.

Okay...

Then, let's say I do want my userspace code to do some stuff which involves those things the kernel doesn't trust me with... then what? 

You require a *controlled* mechanism for requesting services from the kernel.

Similar to a kid asking a trusted adult to do something for them. 

That mechanism is the **system call/syscall**.

A syscall is **not** simply a library function. It is a CPU-supported mechanism for transitioning execution from user mode into kernel mode.

Something like this:

```text
User Program ( My TCP Echo server program)
    ↓ 
"I need something privileged."
    ↓  
CPU performs a controlled privilege transition. 
    ↓
Kernel executes the requested operation. 
    ↓
CPU returns execution to user space.
```



---
### SOCKET():

A simple program that returns the file descriptor for creating a UDP socket.

```zig
const std = @import("std");
const linux = std.os.linux;
pub fn main() !void {
const fd = linux.syscall3(
    .socket,
    linux.AF.INET,
    linux.SOCK.DGRAM,
    linux.IPPROTO.UDP,
);
std.debug.print("fd = {}\n", .{fd});}
```

I get an output: 

> fd = 3

Okay... what exactly is happening here?

```asm
(gdb) disassemble 'main.main'
Dump of assembler code for function main.main:
   0x00000000011d7210 <+0>:	push   %rbp
   0x00000000011d7211 <+1>:	mov    %rsp,%rbp
   0x00000000011d7214 <+4>:	sub    $0x10,%rsp
   0x00000000011d7218 <+8>:	mov    $0x29,%eax
   0x00000000011d721d <+13>:	mov    $0x2,%edx
   0x00000000011d7222 <+18>:	mov    $0x2,%ebx
   0x00000000011d7227 <+23>:	mov    $0x11,%ecx
   0x00000000011d722c <+28>:	call   0x10ddbb0 <os.linux.x86_64.syscall3>
   0x00000000011d7231 <+33>:	mov    %rax,(%rsp)
   0x00000000011d7235 <+37>:	mov    %rax,0x8(%rsp)
   0x00000000011d723a <+42>:	mov    0x8(%rsp),%rax
   0x00000000011d723f <+47>:	call   0x11d7f30 <debug.print__anon_32712>
   0x00000000011d7244 <+52>:	xor    %eax,%eax
   0x00000000011d7246 <+54>:	mov    %rbp,%rsp
   0x00000000011d7249 <+57>:	pop    %rbp
   0x00000000011d724a <+58>:	ret
End of assembler dump.
(gdb) 
```
x86 registors for reference:

![The sixteen x86-64 general purpose registers and their sub-registers. |  Download Scientific Diagram](https://www.researchgate.net/publication/342043300/figure/tbl1/AS:900496000827404@1591706385889/The-sixteen-x86-64-general-purpose-registers-and-their-sub-registers.png)


Take a close look here:

```asm
mov    $0x29,%eax
mov    $0x2,%edx
mov    $0x2,%ebx
mov    $0x11,%ecx
```

What are these weird numbers that are being moved around and in *what* register are they being moved into?

-   **0x29** = 41
-   **0x2** = 2
-   **0x11** = 17

What do these numbers represent?

 - **17 (0x11)** = UDP (User Datagram Protocol).
 - **2 (0x02)** = **`AF_INET`**
 - **41 (0x29)** = ****system call number** for `socket` on x86-64 Linux** 
 -  **0x02** = **`SOCK_DGRAM`** (Datagram sockets, the one used for UDP)


These are essentially, the argument's that we passed in userspace.

What is EAX,EBX etc...??


> In x86-64 assembly, `RAX`, `RBX`, `RCX`, and `RDX` are the primary
> 64-bit general-purpose registers
`EAX` is **not another register.**

It is simply the lower 32 bits of `RAX`.
```
RAX (64 bits)

└── EAX (lower 32 bits)
  └── AX
    ├── AH
    └── AL

```

Writing to `EAX` automatically zeroes the upper 32 bits of `RAX`.

Therefore:

```
mov $41, %eax
```

results in

```
RAX = 41
```

Compilers frequently generate instructions targeting `EAX` instead of `RAX` because they are shorter while producing the same 64-bit value.

Now, let's take a look at this line:

```asm
call   0x10ddbb0 <os.linux.x86_64.syscall3>
```

```asm
(gdb) disassemble 0x10ddbb0
Dump of assembler code for function os.linux.x86_64.syscall3:
   0x00000000010ddbb0 <+0>:	push   %rbp
   0x00000000010ddbb1 <+1>:	mov    %rsp,%rbp
   0x00000000010ddbb4 <+4>:	push   %r11
   0x00000000010ddbb6 <+6>:	sub    $0x38,%rsp
   0x00000000010ddbba <+10>:	mov    %rax,(%rsp)
   0x00000000010ddbbe <+14>:	mov    %rdx,0x8(%rsp)
   0x00000000010ddbc3 <+19>:	mov    %rbx,0x10(%rsp)
   0x00000000010ddbc8 <+24>:	mov    %rcx,0x18(%rsp)
   0x00000000010ddbcd <+29>:	mov    %rax,0x20(%rsp)
   0x00000000010ddbd2 <+34>:	mov    0x20(%rsp),%rax
   0x00000000010ddbd7 <+39>:	mov    %rdx,%rdi //Focus
   0x00000000010ddbda <+42>:	mov    %rbx,%rsi //Focus
   0x00000000010ddbdd <+45>:	mov    %rdx,0x28(%rsp)
   0x00000000010ddbe2 <+50>:	mov    %rcx,%rdx //Focus
   0x00000000010ddbe5 <+53>:	mov    %rcx,0x30(%rsp)
   0x00000000010ddbea <+58>:	syscall //Focus
   0x00000000010ddbec <+60>:	lea    -0x8(%rbp),%rsp
   0x00000000010ddbf0 <+64>:	pop    %r11
   0x00000000010ddbf2 <+66>:	pop    %rbp
   0x00000000010ddbf3 <+67>:	ret
End of assembler dump.
(gdb) 
```


## Here's the interesting part

Now look at these four instructions:

```
mov %rdx,%rdi  
mov %rbx,%rsi  
mov %rcx,%rdx  
syscall
```
THIS is the **entire reason** `syscall3` exists.

Initially:
```
RAX = 41
RDX = 2
RBX = 2
RCX = 17
```

Then:
```
mov %rdx,%rdi
```

Now:

```
RDI = 2
```

which is `AF_INET`.

----------

Then:

```
mov %rbx,%rsi
```

Now:

```
RSI = 2
```

which is `SOCK_DGRAM`.

----------

Then:

```
mov %rcx,%rdx
```

Now:

```
RDX = 17
```

which is `IPPROTO_UDP`.

----------

At this exact moment, right before the `syscall` instruction, the CPU registers are:

At this exact moment, right before the `syscall` instruction, the CPU registers are:


|Register    | Value    |
|--|--|
| RAX |41  |
| RDI | 2 |
| RSI | 2 |
| RDX | 17 |


That's **exactly** the Linux x86-64 syscall ABI.

Then:

```
syscall
```

The CPU switches from Ring 3 to Ring 0.

Hmmm, wait....

Who are these new guys? RDI, RSI??

   In **x86-64 assembly** (under the System V ABI used on Linux/macOS), **RDI**, **RSI**, and **RDX** are 64-bit general-purpose registers. 
   They are primarily used to pass the first three arguments into functions

Wait, these are registers used for function? Wait, what is happening?

---

### Functions vs syscalls

At a high level, both look very similar and often times they're confused and mixed and assumed as a function too.

|Function Call  |System Call  |
|--|--|
|Takes arguments  | Takes arguments |
|Performs work | Performs work |
|Returns a value  | Returns a value |

That's why they _feel_ so similar.

The difference is **who you're calling** and **how control is transferred**.

Let's take a simple C program for example

(Not zig because, Because C is designed around the idea that **any function could be called from another translation unit** and ZIg just sometimes chooses not to because of compiler optimizations, but more on that later).

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main(void) {
    int sum = add(7, 3);
    printf("%d\n", sum); 
    return 0;
}
```

The assembly output:

```asm
(gdb) disassemble main
Dump of assembler code for function main:
   0x000000000040047a <+0>:	push   %rbp
   0x000000000040047b <+1>:	mov    %rsp,%rbp
   0x000000000040047e <+4>:	sub    $0x10,%rsp
   0x0000000000400482 <+8>:	mov    $0x3,%esi
   0x0000000000400487 <+13>:	mov    $0x7,%edi
   0x000000000040048c <+18>:	call   0x400466 <add>
   0x0000000000400491 <+23>:	mov    %eax,-0x4(%rbp)
   0x0000000000400494 <+26>:	mov    -0x4(%rbp),%eax
   0x0000000000400497 <+29>:	mov    %eax,%esi
   0x0000000000400499 <+31>:	mov    $0x401180,%edi
   0x000000000040049e <+36>:	mov    $0x0,%eax
   0x00000000004004a3 <+41>:	call   0x400370 <printf@plt>
   0x00000000004004a8 <+46>:	mov    $0x0,%eax
   0x00000000004004ad <+51>:	leave
   0x00000000004004ae <+52>:	ret
End of assembler dump.
```

You can see the values being moved into esi and edi registers. The ones responsible for executing functions.


```asm
(gdb) break *0x40048c
Breakpoint 1 at 0x40048c
(gdb) run
Starting program: /home/bongacat/c/sum 
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib64/libthread_db.so.1".

Breakpoint 1, 0x000000000040048c in main ()
(gdb) info registers rip rsp
rip            0x40048c            0x40048c <main+18>
rsp            0x7fffffffdb20      0x7fffffffdb20
(gdb) x/gx $rsp
0x7fffffffdb20:	0x0000000000000000
(gdb) si
0x0000000000400466 in add ()
(gdb) info registers rip rsp
rip            0x400466            0x400466 <add>
rsp            0x7fffffffdb18      0x7fffffffdb18
(gdb) x/gx $rsp
0x7fffffffdb18:	0x0000000000400491
(gdb) until *0x400479
0x0000000000400479 in add ()
(gdb) x/gx $rsp
0x7fffffffdb18:	0x0000000000400491
(gdb) si
0x0000000000400491 in main ()
(gdb) info registers rip rsp
rip            0x400491            0x400491 <main+23>
rsp            0x7fffffffdb20      0x7fffffffdb20
(gdb) 
```

When the CPU reached the `call add` instruction, it performed two operations as part of executing that single instruction. First, it **pushed the address of the next instruction** (`0x400491`) onto the stack by decreasing the stack pointer (`RSP`) by 8 bytes and storing the return address there. Then it **loaded the instruction pointer (`RIP`) with the address of `add`** (`0x400466`), transferring execution to the function. We verified this by observing that `RSP` changed from `0x7fffffffdb20` to `0x7fffffffdb18`, and the top of the stack contained `0x400491`, exactly matching the instruction immediately following the `call`.

A **function call** is a controlled transfer of execution between two pieces of code running at the **same privilege level**.

But a syscall doesn't do that.


 A **system call** is a controlled transfer of execution between **userspace and the kernel**, using CPU hardware specifically designed for privilege transitions.

--- 
Back to:

```asm
mov %rdx,%rdi  
mov %rbx,%rsi  
mov %rcx,%rdx  
syscall
```

These weird transfers happen because, 


The Linux **syscall ABI** is different:

```
RAX = syscall number
RDI = arg1
RSI = arg2
RDX = arg3
R10 = arg4
R8  = arg5
R9  = arg6
```

Those register moves exist because **Zig's internal calling convention** isn't the Linux syscall ABI.

So `syscall3()` translates between them.

`call syscall3` is an ordinary function call from my program into Zig's standard library. The `syscall` instruction executed inside `syscall3` is what actually transitions into the Linux kernel.

Unlike a normal function call, executing the `syscall` instruction does **not** push a return address onto the userspace stack. A normal `call` stores the address of the next instruction on the stack so that `ret` can later resume execution. A system call uses a different CPU mechanism for returning from kernel mode and therefore does not rely on the userspace stack to remember where to continue.

---

### Executing syscall

At a high level, both are mechanisms for **transferring control somewhere else, doing work**, and eventually *returning a result*.

```asm
   0x000000000040047a <+0>:	push   %rbp
   0x000000000040047b <+1>:	mov    %rsp,%rbp
   0x000000000040047e <+4>:	sub    $0x10,%rsp
   0x0000000000400482 <+8>:	mov    $0x3,%esi
   0x0000000000400487 <+13>:	mov    $0x7,%edi
   0x000000000040048c <+18>:	call   0x400466 <add>
   0x0000000000400491 <+23>:	mov    %eax,-0x4(%rbp)
   0x0000000000400494 <+26>:	mov    -0x4(%rbp),%eax
   0x0000000000400497 <+29>:	mov    %eax,%esi
   0x0000000000400499 <+31>:	mov    $0x401180,%edi
   0x000000000040049e <+36>:	mov    $0x0,%eax
   0x00000000004004a3 <+41>:	call   0x400370 <printf@plt>
   0x00000000004004a8 <+46>:	mov    $0x0,%eax
   0x00000000004004ad <+51>:	leave
   0x00000000004004ae <+52>:	ret
```

Remember the earlier C program?

Let's look at something closely : What happens *before* the function call

```
(gdb) break 
*0x40048cBreakpoint 1 at 0x40048c
```

Breakpoint set at the `call add` instruction (`0x40048c`). The program will stop **before** the `call` executes.



```
(gdb) runStarting program: 
/home/bongacat/c/sumBreakpoint 1, 0x000000000040048c in main ()
```

Execution stops just before the `call` instruction. At this point, nothing related to the function call has happened yet.



```
(gdb) info registers rip rsprip           
 0x40048c            0x40048c <main+18>rsp           
  0x7fffffffdaf0      0x7fffffffdaf0
```

**`RIP` (Instruction Pointer)** points to the instruction that will execute next—in this case, `call add`.

**`RSP` (Stack Pointer)** points to the current top of the stack.


```
(gdb) x/gx 
$rsp0x7fffffffdaf0:  0x0000000000000000
```

Examine the memory at the **top** of the stack. The value happens to be `0`, but it isn't related to the upcoming function call. It's simply whatever was already stored there.


```
(gdb) si
0x0000000000400466 in add ()
```

**`si` (step instruction)** executes exactly *one* machine instruction*.

That single instruction was `call add`, which internally:

1.  Decreases `RSP` by 8 bytes (making room for an 8-byte return address).
2.  Pushes the return address (`0x400491`) onto the stack.
3.  Sets `RIP` to `0x400466`, the first instruction of `add()`.



```
(gdb) info registers rip rsprip            
0x400466            0x400466 <add>rsp           
 0x7fffffffdae8      0x7fffffffdae8
```

`**RIP**` now points to the beginning of `add()`.

`RSP` has decreased from `0x7fffffffdaf0` to `0x7fffffffdae8` (8 bytes) because the CPU pushed the return address onto the stack.



```
(gdb) x/gx 
$rsp0x7fffffffdae8:  0x0000000000400491
```

The **top of the stack now contains `0x400491`**, which is the **return address**.

When `add()` executes `ret`, the CPU will:

-   Read `0x400491` from the top of the stack.
-   Load it into `RIP`.
-   Increase `RSP` by 8 bytes.

Execution will then continue at `main+23`, immediately after the original `call`.

```
(gdb) finish
Run till exit from #0  0x0000000000400466 in add ()0x0000000000400491 in main ()
```

`finish` runs the remainder of the current function.

When `add()` reaches its `ret` instruction, the CPU **pops the return address (`0x400491`) from the stack and places it into `RIP`**, returning execution to `main()`.


```
(gdb) info registers rip rsprip            
0x400491            0x400491 <main+23>rsp            
0x7fffffffdaf0      0x7fffffffdaf0
```

Execution has resumed **immediately after the `call` instruction**.

Notice that **`RSP` is back to its original value**, because `ret` removed the 8-byte return address from the stack, restoring it to the same state it was in before the function call.


Then 

So the CPU changes:

```
Before

Ring = 3
RIP = userspace
RSP = user stack
```

into

```
After

Ring = 0
RIP = kernel entry
RSP = kernel stack
```

without Linux executing a single instruction yet. **This is all done by the CPU itself.**

Now holdup, you might have a question: Why not store the return address in registers rather than user space stack??


**Good question.**

The kernel cannot trust the userspace stack. Since user programs completely control their own memory, the stack pointer (`RSP`) could point to invalid memory, unmapped memory, or even be deliberately manipulated by a malicious program.

If the CPU tried to push a return address onto the userspace stack during the privilege transition, that memory access could fail or be exploited before the kernel had a chance to take control.

Instead, the CPU stores the return address in **`RCX`** and the saved flags in **`R11`**, then immediately switches to a **trusted kernel stack**. Only after the kernel is safely running on its own stack can it decide what information to save and where to save it. This design ensures that the transition from user mode to kernel mode doesn't depend on any userspace-controlled memory.

Now, often times, you may have seen the word **clobbering** and people reffering to `RAX`, `RCX`, `R11`as *clobbered* registers.

What does that mean?

>In computing, clobbering is **the act of overwriting a resource such as a file, processor register or a region of memory, such that its content is lost**

And that exactly what happens. After executing this instruction, you must assume the old value in that register is gone.

Before `syscall`:

```
RAX : 49
RCX : 1234
R11 : 5678
```

When the CPU executes `syscall`, it erases and rewrites some of those whiteboards:

```
RAX : (later overwritten by kernel with return value)
RCX : return address
R11 : saved RFLAGS
```

The previous contents are lost. That's exactly what people mean when they say those registers are **clobbered**: you must treat their old values as destroyed and unavailable after the instruction.

It's just technical jargon to say these registers are overwritten and handle it carefully.

Now back to the original question:

----

### Why does Zig return usize rather than integer value?


The CPU does not return a **typed value** after executing a system call. When the kernel finishes handling the request, it simply places a machine-sized value into the return register (**`RAX`** on x86-64) according to the system call ABI.

To the processor, these bits have _no inherent meaning_. They are neither an integer, nor a pointer, nor a file descriptor. They are simply a sequence of bits stored in a register. The interpretation of those bits is left **entirely** to software running in userspace.

Zig's raw syscall interface reflects this philosophy by returning a **`usize`**, exposing the raw machine-sized value exactly as it was returned by the kernel _without imposing any higher-level interpretation_. It is then the **caller's responsibility** to decide whether that value represents a pointer, a byte count, a file descriptor, a success code, or an error code, depending on the specific syscall that was invoked.

Higher-level libraries take a different approach. For example, **libc** knows the contract of each syscall and converts the raw return value into the appropriate C type while also translating negative kernel error codes into **`errno`**. Similarly, **Rustix** provides an even more expressive interface by interpreting the raw return value and exposing it as strongly typed, memory-safe Rust abstractions such as **`Result<T, Errno>`** or **`OwnedFd`**.

In other words, _the kernel merely returns a raw machine-sized value in `RAX`_; assigning semantic meaning to that value and exposing a convenient, typed API is the responsibility of **userspace libraries**, not the CPU or the kernel itself.










---
