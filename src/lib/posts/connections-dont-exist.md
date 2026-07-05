# Connections don't really "exist"

Wait, what?

You got definitions like:

 - TCP Connection
 - HTTP Connection
 - Redis Client Connection

Okay, so what is a connection?

Often times, Googling it or even the way it's taught goes something like this:

> A network connection is the established link between two or more computing devices (like computers, phones, or servers) that enables them to communicate and share data, resources, or services.

Or

> A connection is simply a virtual pathway between two endpoints. With TCP, you open up the connection and start sending data through. It's guaranteed to arrive at the other end in order (assuming the network doesn't fail). Then you close down the connection.

Often times, it's **visualized** as a "pipe", or a "channel" that exists:

    Machine A
        =
        =
        =
        =
        =
    Machine B
        
        
   This gave me an intuitive and an imaginative way to understand what a connection was. The answer was satisfactory and helped me continue with life, until I started messing around and started implementing TCP and IP over a TUN interface.

Before that, let's ask a fundamental question: 

How is data even transmitted over the internet?

---
### Packet Switched Networks vs Circuit Switching


Okay, first, what if we do try to create a connection? A physical wire? 
 
Well..... connecting every device that's in Paraguay to every in India, is gonna be a hassle. It's physically impossible.(Obviously...)

So, a logical channel it is.

But **wait**, what is a logical channel?

Let's have two endpoints, *one* physical channel between Paraguay and India that every device in both the countries will use.
(and that's how networking is actually done, that one physical channel is the **Deep sea cable**: the invisible backbone of the global internet)

One physical channel, the actual undersea cable between Paraguay and India. Nobody gets their own wire and everyone shares this one physical thing. Let's slice up _time_ instead of slicing up the _wire_:

-   12:00am–8:00am → this whole cable belongs to Machine A talking to Machine B
-   8:00am–8:15am → now it belongs to Machine C talking to Machine D
-   8:15am–9:00am → Machine E and F
-   ...and so on, one pair "**owning**" the entire cable for their scheduled block.

Well, this works, but, you can immediately notice 3 **BIG** things that are wrong with it.

1. What if, Machine A wants to communicate to B at say 8:15 am?
2. There are *billions* of devices here between both countries, and creating a dedicated time slot for each of the connection combination would mean, two machines would see their slot again after a **couple of days.**
3. It might be possible that Machine E and F simply decide that they're gonna chill resulting a wasted slot of time.


Well.... yea, this doesn't scale.

---
So, what if we just... stopped reserving anything?

Instead, whenever a machine has something to say, it just chops it up into small chunks  called **packets** and slaps the destination address directly onto each one, and shoves it onto the wire. 


And this quietly solves all three problems at once, not one at a time:

1.  Want to talk _right now_? Just send. There's no slot to wait for.
2.  Billions of devices? Doesn't matter , nobody's tracking who owns what, so there's no schedule to explode in size.
3.  Nothing to say? Then you simply... don't send a packet. No wasted reservation, because nothing was ever reserved in the first place.

That is what you call **Packet switching.**


And this is exactly what **IP** (the network layer, IPv4/IPv6) does. Every packet carries its own destination address, and every router forwards it based purely on that address with no memory of the packet before it. That's why IP is called **connectionless**.

Why do we even need something like IP, and what's it actually doing when it routes a packet? I've sort of answered that already, in [You don't need IP addresses](https://www.ihateabstractions.fun/you-don_t-need-ip-addresses) (yes, the name was intentional). 

The short version? Routers can't afford to know the _whole_ internet's topology . That's why addresses are hierarchical, so a router only ever needs to know "*which direction*," never "***the whole path.***"

Turns out routers can't afford to remember the _conversation_ either. For the exact same reason. It doesn't scale.

There's no router tracking the conversation, 

It doesn't go:
" *Ahh yes*, Machine A and Machine B are mid conversation, packet 47 of who-knows-how-many-more-to-come".

Okay, then I need a way to know when the conversation starts and ends.

How?

---

### That's exactly what TCP does

It keeps track of everything. It keeps track of **state**.

With just IP, packets show up, but from whose perspective is this the _first_ packet vs. the _tenth_? Without some agreed-upon "hello, this is the beginning" and "goodbye, we're done," a receiver has no way to know if a batch of packets is a fresh request or the middle of something ongoing. This is exactly what a handshake (**SYN / SYN-ACK / ACK**) and teardown (**FIN**) exist to establish.

So a connection is nothing but **an agreement of state.**

And if you dig deeper,  even _before_ the 3-way handshake is done, if you route a TCP packet, there's a good chance it reaches the destination machine. That's just IP doing its job, unless the packet gets dropped mid-journey (and _that's_ why we need reliability, also handled by TCP, but more on that later).

So wait. If the packet _does_ reach my machine, why can't I see it?

Because your TCP/IP stack goes:

> _I don't have a connection yet. I haven't even said hello. Who's this guy?_

And proceeds to reject the packet.

The network delivered it perfectly. It's your machine that pretends nothing arrived not because anything failed, but because it has no _memory_ of ever agreeing to this conversation.

---
