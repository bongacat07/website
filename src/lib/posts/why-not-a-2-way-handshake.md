# Why not a 2-way handshake?

---

Most explanations often when asked the purpose of a 3 way-handshake, they just say:

> “3-way handshake establishes a connection”

A client sending a SYN packet, a server responding with a SYN-ACK packet and the client establishing a connection with finally sending an ACK packet.

----------

The obvious question would be, why not a 2-way handshake? Why not end it all with just a SYN and an ACK packet? I mean, to establish a connection, all you need is someone sending a request to connect and you acknowledging it and boom, you both are connected.

The statement machine can just be:

-   SynReceived
    
-   SynSent
    
-   Established
    

And often times, the answer given to me was in the form of an analogy:

Client calls the server and asks "_hey, are you there?_".

Server responds _"yes, I am here_".

Client says, _"gotcha, let's start talking"_.

While, the “hey / yes / okay” story _sounded_ intuitive, but it quietly simplifies away the very thing TCP is solving. It made it feel like:

-   it’s just politeness
    
-   or just confirming presence.
    

The analogy gave me an intuitive enough explanation to carry on with life accepting it, although the question still kept bugging me for a long time.

Until, I decided to implement a userspace TCP implementation from scratch.

And finally it clicked.

----------

We all have heard the famous differentiate between TCP vs UDP question in exams. Often times, the answer would be limited to something like:

> **TCP** is a **reliable, connection-oriented** protocol that ensures data arrives **intact, in order, and without errors** by establishing a connection, using acknowledgments, and retransmitting lost packets—ideal for web browsing, email, and file transfers.

> **UDP** is a **fast, connectionless** protocol that sends data **without guarantees**, making it **lightweight and low-latency**, perfect for real-time applications like gaming, VoIP, and streaming where speed matters more than perfect delivery.

(Literally googled: a short answer differentiating TCP and UDP lol)

Although this answer isn't incorrect, it's _incomplete._

A huge part of what makes TCP, _TCP_ and UDP_, UDP_ was sidelined.

Now, forget TCP and UDP. Let's talk about how data is transmitted.

The mode of transmission: **Byte stream** vs **Datagrams:**

Say, I wanna send the message "Hello_World!". So what happens when I use a Datagram for it?

Network says: max 4 bytes at a time. So the maximum size of a datagram is 4 bytes.

**With a datagram:**

```
Hell  → packet 1
o_Wo  → packet 2
rld!  → packet 3
```

3 clean packets. Elegant. Let's take a look at hello world through a byte stream.

```
H  e  l  l  o  _  W  o  r  l  d  !
0  1  2  3  4  5  6  7  8  9  10 11



He   → starts at 0
ll   → starts at 2
o_Wo → starts at 4
r    → starts at 8
ld!  → starts at 9
```

**With a byte stream**, the network decides to send chunks of data as it pleases. It's chopped up randomly, looks horrendous. You may even ask, why would I even use this? Datagrams are so elegant and perfect.

Now the network gets moody. Network drops o_Wo.

A byte stream knows exactly what's missing: bytes 4, 5, 6, 7. A datagram just knows _something_ didn't arrive. Which packet? Where does it belong in the message?

Now, you might be thinking:

> **I can just number the packets, right? What's stopping me?**

_Good question._

Same example, "o_Wo" gets lost. You try to retransmit.

Network says, _wait, hold up._ **Max 2 bytes at a time.** (Networks are moody like that, congestion, route change and yes, they do that too.).

"o_Wo" has to become "o_" and "Wo". Now what's the packet number?

2a and 2b? Congrats, the numbering broke. And what guarantees that a moody network won't end up with creating a monstrosity like 2aa, 2ab...2az, then 2ba...

Now byte stream? "_Oh, byte 4,5,6,7 haven't reached. Wait, is the maximum 2 bytes now? No problem, just send 4 and 5 together and 6 and 7 together. Easy."_

----------

TCP uses byte stream to establish

_Some code incoming:_

```
pub struct TCPHeader {
    pub src_port: u16,
    pub dst_port: u16,
    pub seq_num: u32,
    pub ack_num: u32,
    pub data_offset: u8,
    pub flags: u16,
    pub window: u16,
    pub checksum: u16,
    pub urgent_ptr: u16,
}
```

This is the structure of a TCP header which is appended to the packet.

Say I parse the headers, and I find it to be a SYN packet:

```
if (flags & 0x02) != 0 && (flags & 0x10) == 0 {
    let recv_ip = &h.header.fields;
    let recv_tcp = &tcp.header;

    let iss: u32 = 1000; // for now

    let mut tcp_packet = TCPPacket {
        header: TCPHeader {
            src_port: recv_tcp.dst_port,
            dst_port: recv_tcp.src_port,
            seq_num: iss,
            ack_num: recv_tcp.seq_num + 1,
            data_offset: 5,
            flags: 0x12, // SYN-ACK
            window: 64240,
            checksum: 0,
            urgent_ptr: 0,
        },
        payload: vec![],
    };

}
```

Now, all of this looks scary, but let's break it down bit-by bit:

That line is just checking specific **TCP flags** using bitwise operations.

```
if (flags & 0x02) != 0 && (flags & 0x10) == 0
```

Break it down:

-   flags is a bitmask (each bit represents a TCP flag)
    
-   & is a bitwise AND → it “picks out” specific bits
    

Now the constants:

-   0x02 → **SYN flag**
    
-   0x10 → **ACK flag**
    

So:

### (flags & 0x02) != 0

Checks: _Is the SYN bit set?_ If yes → this is a SYN packet

### (flags & 0x10) == 0

Checks: _Is the ACK bit NOT set?_ If true → this is **not** an ACK

----------

### Combined meaning:

> “This is a SYN packet, and it is NOT an ACK”

Now, since it's a SYN packet, I should respond with a **SYN-ACK** packet.

```
let iss: u32 = 1000; //for now
```

ISS, the Initial Send Sequence. Some resources and RFCs call it ISN, Initial Sequence Number. Same thing essentially: the starting position of a side's stream.

I would go as far as saying, this is the **_most important_** step in replying to the SYN packet. Ideally, it should be a random number, but for simplicity sake, let's give it a value of 1000.

The ISS becomes the seq_num, the ack_num is the received TCP packet's sequence number. Now what are these fields in the TCP header? What is the point of a sequence number and acknowledgment number?

```
H  e  l  l  o  _  W  o  r  l  d  !
0  1  2  3  4  5  6  7  8  9  10 11

He   → starts at 0
ll   → starts at 2
o_Wo → starts at 4
r    → starts at 8
ld!  → starts at 9
```

The **seq_ num is a position in the stream.** When the sender ships o_Wo, it attaches a seq_num of 4 and the payload is 4 bytes long. The receiver does the math: starts at 4, covers 4 bytes: bytes 4, 5, 6, 7.

The receiver responds with an **ack_num** of 8 : "I have everything up to byte 7, send me byte 8 next." How does it know to say 8? seq_num + payload_length = 4 + 4 = 8.

If o_Wo never arrived? The ack_num stays at 4. The sender sees it stuck at 4 and knows exactly what to re transmit, bytes 4 through 7. Not "some packet." Exactly those bytes,

And since you know what to transmit, how you do it doesn't really matter, you can send byte 4 alone, then 5,6,7 or altogether or one at a time too. Anything the moody networks wish to.

(In reality, TCP doesn't ack every single chunk individually because that would be a lot of back and forth. It uses cumulative acknowledgments. But more on that later.)

----------

So back to the original question. Why not a 2-way handshake?

Look at the code again:

```
seq_num: iss,                   // server's starting position
ack_num: recv_tcp.seq_num + 1,  // client's starting position, acknowledged
```

Two streams. Two starting positions.

The client has a stream. The server has a stream. They're talking to each other simultaneously, the client sends data to the server, the server sends data to the client. Both streams need a starting position. Both sides need to know the other's starting position before a single byte of real data moves.

So what actually needs to happen before the connection is "established"?

1.  Client picks its ISS, sends it to the server. (SYN)
    
2.  Server picks its own ISS, sends it to the client. Also acknowledges the client's ISS. (SYN-ACK)
    
3.  Client acknowledges the server's ISS. (ACK)
    

That's it. That's why there are 3 steps.

A 2-way handshake where its just a SYN, SYN-ACK and you stop there. The server never finds out if the client received _the server's_ ISS. The server's stream has a starting position that the client hasn't confirmed. You can't send data on a stream whose starting position the other side hasn't acknowledged.

The third ACK isn't politeness. It's the client saying "_I know where your stream starts._"

----------

And that "_hey / yes / okay_" analogy? It wasn't wrong. It was just describing the surface while the real story was happening underneath.

It synchronizes two streams before either side sends a single byte of real data
