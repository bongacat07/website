# You don't need an IP address.



Wait, what? How? 

While implementing ping from absolute scratch over a TAP interface, just parsing raw Ethernet frames byte by byte,  I ran into something that's easy to take for granted.

## ARP

ARP stands for Address Resolution Protocol. It's the thing that maps a *dynamic, logical IP address (Layer 3)* to a **fixed, physical MAC address (Layer 2)** on a local network. 

Sounds dead simple: it's basically a *dictionary* for MAC addresses.

That got me thinking: if MAC addresses are physical, fixed identifiers, why do we even need a separate logical address layered on top? 

---

Let me try to reconstruct this:

To send data from one machine to another, all you really need is an identifier for the machine, and a way to say "this piece of data is for this process on that machine", which is what a **port number** does. Address plus port. That's it.

So theoretically, could you eliminate an entire layer of the OSI model? Sounds entirely plausible to me. 

---

## No. Not really 

But the reason why not is more interesting than the question itself. Let's get into it.

### Strategy 1

Say there's machine A, and it wants to send data to machine B.
Sounds simple. Except,

> where does B even exist? 

A: "I have no idea where's that guy exists. All I know is, that dude is alive SOMEWHERE, out there"

So how do I even reach B?

The dumbest possible strategy: send the packet to every machine you know of, and hope it eventually reaches B.

This actually isn't as absurd as it sounds. Because it's been used and still in use at some places. 

It's called **flooding**.

Limited versions of it exist in real networks today. But at any real scale, it falls apart immediately. Every machine forwarding to every machine it knows means traffic multiplies explosively as the network grows. 

You're *drowning* the network to deliver one message.

Okay, what's next then?

### Strategy 2: "Grouping the chaos"

A better idea:

> instead of every machine knowing about every other machine, organize machines into groups. Say C, D, and E form one group. F, G, and H form another.

Now, if you know B lives in some group, you don't flood the entire network. You just need to get the packet to that group, and let the group sort out internal delivery.

But that raises a question...

>Who do you actually hand the packet to, to reach a group? 

You need a single entry point. Not "broadcast to the group and hope," because that's just flooding at a smaller scale.

So each group gets a **representative**.

Think of it as a messenger: Give it to the representative and it either delivers it to the right machine inside the group, or, if the packet isn't meant for anyone in this group, passes it along to another representative.

The representative be like: Idk, my buddy over there might know.

That messenger is what we call a **router**.

Now, you might have a question. 

>How does the rep know where to send it?

Here's where it gets interesting. Say there are N machines and M groups. Instead of N machines flooding the whole network, you've cut it down to roughly N/M packets per delivery. Already a massive win.

But N/M can still be *huge*.

So? Group the groups. Take your M groups and organize them into X bigger groups. Now you're down to N/M/X. Keep doing this, and you eventually hit a sweet spot: a structure where lookups stay small and manageable, no matter how big the network gets.

This is recursive. Groups of groups of groups, each with its own representative. A rep at the bottom level knows its machines. A rep one level up knows the rep below it, not individual machines. And so on, up the chain.

Each rep keeps a list of what it's responsible for, for a low-level leader, that's machines; for a rep further up, that's other reps. That list is what we call a **routing table**.

---

## And there it is

Flat addressing doesn't scale. Hierarchical addressing does and the moment you need hierarchy, you need an address format that encodes that hierarchy: which top level group, which group within that, which machine within that. Not a flat, arbitrary identifier like a MAC address, but a structured one.
That's an IP address. The "network portion" and "host portion" of an IP address aren't arbitrary, they're literally the group and the machine-within-the-group, baked into the number itself. That's why routers can summarize entire blocks of addresses as "send anything in this range that direction" instead of memorizing every individual machine. That's why the internet doesn't melt under its own weight as it grows.

---

So... do you technically need an IP address? No. MAC addresses alone are globally unique, in a world with a handful of machines, you could absolutely route by MAC alone.
But you don't live in that world. You live in one with billions of devices, and flat addressing collapses under that weight

>IP isn't a fundamental law of networking it's an elegant, hierarchical solution to a **scaling problem** that was inevitable the moment the network got big.

Underneath all of it, by the way, MAC addresses never went away. They're still doing the one job IP can't replace: the last mile, actually putting a frame on a wire to a specific machine. IP gets you to the right neighborhood. MAC still has to ring the doorbell.

---

So, whether IP is integral to networking is up for debate. But to me? 

> They're an *elegant* solution to an **inevitable** scaling problem.


