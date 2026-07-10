<section class="projects">
	<span class="proj-doodle pd1">down the rabbit hole...</span>
	<span class="proj-doodle pd2">RFC 793 pg.47 →</span>
	<span class="proj-doodle pd3">✦ ✶ ✦</span>
	<span class="proj-doodle pd4">kernel who?</span>
	<span class="proj-doodle pd5">still going...</span>
	<span class="proj-doodle pd6">bytes all the way down</span>
	<span class="proj-doodle pd7">← not a bug, a feature</span>

	<div class="proj-header">
		<h2 class="proj-title">The Rabbit Hole</h2>
		<br />
		<span class="proj-sub">each project is a chapter. each chapter is a reason.</span>
	</div>

	<div class="spine-wrap">
		<div class="spine-line"></div>

		<!-- ORIGIN -->
		<div class="chapter ch-left">
			<div class="ch-dot"></div>
			<div class="ch-card">
				<span class="chaos-note cn-tl">it started with paranoia</span>
				<span class="ch-num">origin</span>
				<h3 class="ch-name">The Paranoia</h3>
				<p class="ch-why">
					"If I was responsible for something real, I needed to understand it completely."
				</p>
				<p class="ch-body">
					Frontend was fun until it wasn't. Then my friends pulled me into a venture. Handle the
					backend and infra. I said yes. Then the paranoia hit. Not "I know how to deploy things"
					understand. I mean, open Wireshark, see an RST packet, and know <span class="hl-y"
						>immediately why the connection terminated.</span
					>
					That kind of understanding. So I started at the beginning with Beej's guide. One thing stuck:
					<span class="hl-r">sockets are endpoints. Bytes go in, bytes come out.</span> That was enough
					to keep going.
				</p>
				<span class="ch-aside">that's where your process touches the network →</span>
			</div>
		</div>

		<!-- CH 01: CSFTP -->
		<div class="chapter ch-right">
			<div class="ch-dot"></div>
			<div class="ch-card">
				<span class="chaos-note cn-tr">Go lied to me</span>
				<span class="ch-num">chapter 01</span>
				<h3 class="ch-name">
					CSFTP
					<a class="gh-link" href="https://github.com/bongacat07/csftp-go" target="_blank" title="GitHub">
						<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
					</a>
				</h3>
				<p class="ch-why">"I needed to know what a protocol actually was, from the byte up."</p>
				<p class="ch-body">
					Everyone said learn a language by building something real. So I opened the Go docs and
					immediately noticed, all the syscalls, the bind, the listen, all of it was gone. <span
						class="hl-r">One line and you have a listening socket.</span
					>
					And then it hit me. If Go is abstracting all of that away, and all a protocol really is is bytes
					sent and meaningfully parsed... I could just make my own. So instead of building an HTTP server,
					I built <span class="hl-y">CSFTP</span> — my own file transfer protocol. Not because FTP
					needed reimplementing. Because I needed to understand what a protocol
					<em>actually was.</em>
				</p>
				<span class="ch-aside">not terrible. educational. okay maybe a little terrible ←</span>
			</div>
		</div>

		<!-- CH 02: VegoshDB -->
		<div class="chapter ch-left">
			<div class="ch-dot"></div>
			<div class="ch-card">
				<span class="chaos-note cn-tl">beat redis btw</span>
				<span class="chaos-note cn-bl">in a very specific way</span>
				<span class="ch-num">chapter 02</span>
				<h3 class="ch-name">
					VegoshDB
					<a class="gh-link" href="https://github.com/bongacat07/Vegosh" target="_blank" title="GitHub">
						<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
					</a>
				</h3>
				<p class="ch-why">
					"I can't beat Redis broadly. So I found a specific constraint where I could win."
				</p>
				<p class="ch-body">
					I wanted it faster. Faster meant C. CSFTP had disk IO so I wanted a pure networking
					problem: a KV store. Which is basically Redis. I obviously can't beat Redis broadly. So I
					found a specific constraint: <span class="hl-y"
						>64 byte entries, cache aligned to a single cache line, 1 million key static hash table.</span
					>
					Deterministic performance. For that specific payload,
					<span class="hl-r">VegoshDB aims to beat Redis.</span> That's not a limitation. That's the design.
				</p>
				<span class="ch-aside">cache lines are beautiful actually →</span>
			</div>
		</div>

		<!-- CH 02.5: Vegosh Hashmap -->
		<div class="chapter ch-right">
			<div class="ch-dot"></div>
			<div class="ch-card">
				<span class="chaos-note cn-tr">the rabbit hole within the rabbit hole</span>
				<span class="ch-num">chapter 02.5</span>
				<h3 class="ch-name">
					Vegosh Hashmap
					<span class="lang-links">
						<a class="lang-link rust" href="https://github.com/bongacat07/vegosh-rs" title="Rust" target="_blank" rel="noopener noreferrer">
							<img src="https://cdn.simpleicons.org/rust" alt="Rust" width="48" height="48" />
						</a>
						<a class="lang-link zig" href="https://github.com/bongacat07/veg-zig" title="Zig" target="_blank" rel="noopener noreferrer">
							<img src="https://cdn.simpleicons.org/zig" alt="Zig" width="48" height="48" />
						</a>
						<a class="lang-link cpp" href="https://github.com/bongacat07/vegosh-Cpp" title="C++" target="_blank" rel="noopener noreferrer">
							<img src="https://cdn.simpleicons.org/cplusplus" alt="C++" width="48" height="48" />
						</a>
						<a class="benchmark-link" href="#" title="Benchmarks" target="_blank" rel="noopener noreferrer">
							<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" /></svg>
						</a>
					</span>
				</h3>
				<p class="ch-why">"Well.... that was a side quest!"</p>
				<p class="ch-body">
					VegoshDB was built around a specific hashmap design: 64 byte slots, 16 byte keys, 32 byte
					values, robin hood probing, prefetching. This hashmap was me venturing into the rabbit
					hole of memory. Built it in <span class="hl-y">Rust, Zig, and C++</span> Now I'm
					<span class="hl-r">benchmarking it against hashbrown and ABSL.</span>
				</p>
				<span class="ch-aside">the engine powering everything ←</span>
			</div>
		</div>

		<!-- CH 03: Network Stack in Userspace (Rust) -->
		<div class="chapter ch-left">
			<div class="ch-dot dot-ongoing"></div>
			<div class="ch-card card-ongoing">
				<span class="chaos-note cn-tl">Everything userspace, hehe</span>
				<span class="ch-num">chapter 03</span>
				<div class="ongoing-badge">🟣 ongoing</div>
				<h3 class="ch-name">
					Network Stack in Userspace
					<span class="ch-name-chaos">— Rust</span>
					<a class="gh-link" href="https://github.com/bongacat07/userspace-netstack-rs" target="_blank" title="GitHub">
						<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
					</a>
				</h3>
				<p class="ch-why">"Why stop at TCP?"</p>
				<p class="ch-body">
					After progressing quite a bit on my TCP implementation over a TUN interface, I realised,
					why not do more? So, I decided to implement, ICMP, UDP and TCP over a <span class="hl-y"
						>TAP interface.</span
					>
					Implementing my own ARP, ping from absolute scratch. As close as to a NIC I could get
					<span class="hl-r">with minimal abstractions</span>
				</p>
				<span class="ch-aside">whaaaaaaaaaaaaaaaat →</span>
			</div>
		</div>


		<div class="chapter ch-right">
			<div class="ch-dot"></div>
			<div class="ch-card">
				<span class="chaos-note cn-tr"></span>
				<span class="ch-num">chapter 03.5.1</span>
				<h3 class="ch-name">Rawz: A Minimal type safe syscall wrapper 					<a class="gh-link" href="https://github.com/bongacat07/rawz" target="_blank" title="GitHub">
					<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
				</a></h3>
				<p class="ch-why">"Wait, why usize?"</p>
				<p class="ch-body">
					While exploring zig, I saw zig's library returning a usize for syscalls. The question why usize led me into deep dive into <span class="hl-r">x86 architecture, understanding syscalls down to the CPU instruction</span> and I came out of the rabbit hole with a minimal type safe wrapper over x86 syscalls.
				</p>
				<span class="ch-aside">One heck of a rabbit hole ←</span>
			</div>
		</div>

		<!-- CH 03.5.2: TODO -->
		<div class="chapter ch-left">
			<div class="ch-dot"></div>
			<div class="ch-card">
				<span class="chaos-note cn-tl">x86 go brrrrrrr</span>
				<span class="ch-num">2.5.2</span>
				<h3 class="ch-name">ASMVER 					<a class="gh-link" href="https://github.com/bongacat07/asmver" target="_blank" title="GitHub">
					<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
				</a></h3>
				<p class="ch-why">"Assembly, the final abstraction??"</p>
				<p class="ch-body">
                If I understood syscalls down to the CPU instruction, the next obvious but unhinged step had to be to write a server in x86 assembly. So I wrote a really basic TCP echo server.
				</p>
				<span class="ch-aside">No more scared of assembly →</span>
			</div>
		</div>

		<!-- CH 04: miniNC -->
		<div class="chapter ch-right">
			<div class="ch-dot dot-ongoing"></div>
			<div class="ch-card card-ongoing">
				<span class="chaos-note cn-tr">nc was wrong actually</span>
				<span class="ch-num">chapter 04</span>
				<div class="ongoing-badge">🟣 ongoing</div>
				<h3 class="ch-name">
					miniNC <span class="ch-name-chaos">+ chaos mode</span>
					<a class="gh-link" href="https://github.com/bongacat07/minc" target="_blank" title="GitHub">
						<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
					</a>
				</h3>
				<p class="ch-why">
					"nc doesn't do a proper 4 way teardown. that bothered me enough to rewrite it."
				</p>
				<p class="ch-body">
					I was using nc to test my TCP implementation. Quit the process and my impl got stuck in
					the last ACK state. So I wrote miniNC with a terminate command that <span class="hl-y"
						>completes the handshake correctly.</span
					>
					Then I thought, why stop there? Why not send packets at completely wrong states?
					<span class="hl-r">SYN during ESTABLISHED. RST when the connection is half open.</span>
					See if the implementation actually holds. So I added chaos mode. Because
					<span class="hl-y">WHY NOT.</span>
				</p>
				<span class="ch-aside">hehe →</span>
			</div>
		</div>

		<!-- CH 05: MUDP -->
		<div class="chapter ch-left">
			<div class="ch-dot dot-planned"></div>
			<div class="ch-card card-planned">
				<span class="chaos-note cn-tl">Wait, how do kernel's speak networking?</span>
				<span class="ch-num">chapter 05</span>
				<div class="planned-badge">🟠 planned</div>
				<h3 class="ch-name">
					MUDP
					<a class="gh-link" href="https://github.com/bongacat07/mudp" target="_blank" title="GitHub">
						<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
					</a>
				</h3>
				<p class="ch-why">"Kernel's where slow, but I wanted to FEEL why."</p>
				<p class="ch-body">
					MUDP or My UDP. I wanted to know how kernels implemented networking, because <span
						class="hl-y">you can't bypass something you truly don't understand</span
					>
					My own UDP implementation which is a kernel module and can be called via socket().
				</p>
				<span class="ch-aside">One step closer to the final boss ←</span>
			</div>
		</div>

		<!-- CH 06: Load Balancer (AF_XDP) -->
		<div class="chapter ch-right">
			<div class="ch-dot dot-planned"></div>
			<div class="ch-card card-planned">
				<span class="chaos-note cn-tr">Hopefully the last step?</span>
				<span class="ch-num">chapter 06</span>
				<div class="planned-badge">🟠 planned</div>
				<h3 class="ch-name">
					Load Balancer
					<span class="ch-name-chaos">— AF_XDP</span>
					<a class="gh-link" href="https://github.com/bongacat07/lb-af-xdp" target="_blank" title="GitHub">
						<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
					</a>
				</h3>
				<p class="ch-why">"Well... I don't have a NIC....."</p>
				<p class="ch-body">
					DPDK requires specialized Poll Mode Drivers (PMDs) to talk directly to the hardware. My
					laptop can't do that.... So XDP is just me fiddling around until I get access to an
					enterprise grade NIC.
				</p>
			</div>
		</div>

		<!-- CH 07: QEMU NIC -->
		<div class="chapter ch-left">
			<div class="ch-dot dot-planned"></div>
			<div class="ch-card card-planned">
				<span class="chaos-note cn-tl">what even is a NIC</span>
				<span class="chaos-note cn-bl">(i know now)</span>
				<span class="ch-num">chapter 07</span>
				<div class="planned-badge">🟠 planned</div>
				<h3 class="ch-name">QEMU NIC Driver</h3>
				<p class="ch-why">"Understanding TCP wasn't enough."</p>
				<p class="ch-body">
					TCP from scratch got me far. But I needed to understand <span class="hl-r"
						>everything the kernel does silently</span
					>
					before a single byte reaches your application. So I am writing virtual NIC driver in QEMU. Now
					epoll and io_uring aren't fast paths I'm blindly following.
					<span class="hl-y">They're things I actually understand from underneath.</span>
				</p>
				<span class="ch-aside">layers all the way down ←</span>
			</div>
		</div>

		<!-- CH 08: DPDK -->
		<div class="chapter ch-right">
			<div class="ch-dot dot-inprog"></div>
			<div class="ch-card card-inprog">
				<span class="chaos-note cn-tl">the whole point</span>
				<span class="ch-num">chapter 08</span>
				<div class="inprog-badge">⚡ the goal</div>
				<h3 class="ch-name">DPDK</h3>
				<p class="ch-why">"The original goal. Still the horizon."</p>
				<p class="ch-body">
					This was always where it was heading. Kernel bypass networking. The point where the
					abstraction doesn't just get thin — <span class="hl-r">it disappears entirely.</span> I
					spent six chapters making sure I actually understand what I'm bypassing.
					<span class="hl-y">That's the whole point.</span>
				</p>
				<span class="ch-aside">story isn't over →</span>
			</div>
		</div>
	</div>
</section>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body {
		background: #0d0d0d;
		min-height: 100vh;
	}

	@keyframes pulse-red {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}
	@keyframes pulse-purple {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}
	@keyframes pulse-orange {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}
	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(-3deg);
		}
		50% {
			transform: rotate(3deg);
		}
	}
	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	.projects {
		position: relative;
		padding: 5rem 2rem 6rem;
		overflow: hidden;
		z-index: 1;
	}

	.proj-header {
		text-align: center;
		margin-bottom: 4rem;
	}
	.proj-title {
		font-family: 'Kranky', cursive;
		font-size: clamp(2.5rem, 5vw, 5rem);
		color: #fff;
		-webkit-text-stroke: 1.5px #000;
		paint-order: stroke fill;
		filter: drop-shadow(3px 3px 0 #ffee55) drop-shadow(-1px -1px 0 #ff4444);
		margin-bottom: 0.5rem;
		display: inline-block;
	}
	.proj-sub {
		font-family: 'Boogaloo', cursive;
		font-size: clamp(1rem, 2vw, 1.3rem);
		color: #888;
		transform: rotate(-1deg);
		display: inline-block;
		margin-top: 0.5rem;
	}

	.spine-wrap {
		position: relative;
		max-width: 1000px;
		margin: 0 auto;
	}
	.spine-line {
		position: absolute;
		left: 50%;
		top: 0;
		bottom: 0;
		width: 2px;
		background: repeating-linear-gradient(
			to bottom,
			#ffee55 0px,
			#ffee55 10px,
			transparent 10px,
			transparent 20px
		);
		transform: translateX(-50%);
		z-index: 0;
	}

	.chapter {
		position: relative;
		display: flex;
		align-items: flex-start;
		margin-bottom: 4rem;
		z-index: 1;
	}
	.ch-left {
		justify-content: flex-start;
		padding-right: calc(50% + 2rem);
	}
	.ch-right {
		justify-content: flex-end;
		padding-left: calc(50% + 2rem);
	}

	.ch-dot {
		position: absolute;
		left: 50%;
		top: 1.4rem;
		transform: translateX(-50%);
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: #ffee55;
		border: 3px solid #0d0d0d;
		outline: 2px solid #ffee55;
		z-index: 2;
	}
	.dot-ongoing {
		background: #a855f7;
		outline-color: #a855f7;
		animation: pulse-purple 1.5s ease-in-out infinite;
	}
	.dot-inprog {
		background: #ff4444;
		outline-color: #ff4444;
		animation: pulse-red 1.5s ease-in-out infinite;
	}
	.dot-planned {
		background: #f97316;
		outline-color: #f97316;
		animation: pulse-orange 1.5s ease-in-out infinite;
	}

	.ch-card {
		background: #111;
		border: 2px solid #222;
		border-radius: 4px;
		padding: 1.4rem 1.6rem;
		position: relative;
		max-width: 420px;
		width: 100%;
	}
	.ch-left .ch-card {
		box-shadow: 4px 4px 0 #ffee55;
	}
	.ch-right .ch-card {
		box-shadow: -4px 4px 0 #ffee55;
	}
	.card-ongoing {
		border-color: #a855f7;
		box-shadow: 4px 4px 0 #a855f7 !important;
	}
	.card-inprog {
		border-color: #ff4444;
		box-shadow: 4px 4px 0 #ff4444 !important;
	}
	.card-planned {
		border-color: #f97316;
		box-shadow: 4px 4px 0 #f97316 !important;
	}

	.ch-num {
		font-family: 'Boogaloo', cursive;
		font-size: 0.75rem;
		color: #555;
		text-transform: uppercase;
		letter-spacing: 2px;
		display: block;
		margin-bottom: 0.3rem;
	}
	.ch-name {
		font-family: 'Kranky', cursive;
		font-size: clamp(1.4rem, 2.5vw, 2rem);
		color: #fff;
		-webkit-text-stroke: 1px #000;
		paint-order: stroke fill;
		filter: drop-shadow(2px 2px 0 #ffee55);
		margin-bottom: 0.6rem;
		line-height: 1.2;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		flex-wrap: wrap;
	}
	.ch-name-chaos {
		color: #ff4444;
		filter: drop-shadow(2px 2px 0 #ffee55);
		font-size: 0.85em;
	}

	.gh-link {
		display: inline-flex;
		align-items: center;
		color: #555;
		text-decoration: none;
		transition:
			color 0.2s,
			transform 0.2s;
		transform-origin: center;
		filter: none;
		-webkit-text-stroke: 0;
	}
	.gh-link:hover {
		color: #ff4444;
		transform: scale(1.35);
	}
	.gh-link svg {
		width: 0.9em;
		height: 0.9em;
		fill: currentColor;
	}

	.ch-why {
		font-family: 'Boogaloo', cursive;
		font-size: clamp(0.85rem, 1.4vw, 1rem);
		color: #ffee55;
		font-style: italic;
		margin-bottom: 0.8rem;
		opacity: 0.9;
		line-height: 1.4;
	}
	.ch-body {
		font-family: 'Boogaloo', cursive;
		font-size: clamp(0.9rem, 1.5vw, 1.05rem);
		color: #bbb;
		line-height: 1.65;
		margin-bottom: 0.8rem;
	}
	.hl-y {
		background: #ffee55;
		color: #111;
		padding: 0 4px;
		border-radius: 2px;
	}
	.hl-r {
		background: #ff4444;
		color: #fff;
		padding: 0 4px;
		border-radius: 2px;
	}
	.ch-aside {
		font-family: 'Boogaloo', cursive;
		font-size: 0.75rem;
		color: #ff4444;
		opacity: 0.7;
		display: block;
		font-style: italic;
	}

	.ongoing-badge {
		display: inline-block;
		font-family: 'Boogaloo', cursive;
		font-size: 0.8rem;
		background: #a855f7;
		color: #fff;
		padding: 2px 10px;
		border-radius: 999px;
		border: 2px solid #000;
		box-shadow: 2px 2px 0 #000;
		margin-bottom: 0.5rem;
		animation: pulse-purple 1.5s ease-in-out infinite;
	}
	.inprog-badge {
		display: inline-block;
		font-family: 'Boogaloo', cursive;
		font-size: 0.8rem;
		background: #ff4444;
		color: #fff;
		padding: 2px 10px;
		border-radius: 999px;
		border: 2px solid #000;
		box-shadow: 2px 2px 0 #000;
		margin-bottom: 0.5rem;
		animation: pulse-red 1.5s ease-in-out infinite;
	}
	.planned-badge {
		display: inline-block;
		font-family: 'Boogaloo', cursive;
		font-size: 0.8rem;
		background: #f97316;
		color: #fff;
		padding: 2px 10px;
		border-radius: 999px;
		border: 2px solid #000;
		box-shadow: 2px 2px 0 #000;
		margin-bottom: 0.5rem;
		animation: pulse-orange 1.5s ease-in-out infinite;
	}

	.chaos-note {
		position: absolute;
		font-family: 'Boogaloo', cursive;
		font-size: 0.72rem;
		color: #ffee55;
		pointer-events: none;
		white-space: nowrap;
		opacity: 0.55;
		z-index: 3;
	}
	.cn-tl {
		top: -1.2rem;
		left: 0;
		transform: rotate(-5deg);
	}
	.cn-tr {
		top: -1.2rem;
		right: 0;
		transform: rotate(4deg);
		color: #ff4444;
	}
	.cn-bl {
		bottom: -1.2rem;
		left: 0;
		transform: rotate(3deg);
		color: #ff4444;
	}
	.cn-br {
		bottom: -1.2rem;
		right: 0;
		transform: rotate(-4deg);
	}

	.proj-doodle {
		position: absolute;
		font-family: 'Boogaloo', cursive;
		pointer-events: none;
		z-index: 0;
		white-space: nowrap;
	}
	.pd1 {
		top: 4%;
		left: 1%;
		font-size: 0.8rem;
		color: #ffee55;
		transform: rotate(-10deg);
		opacity: 0.5;
		animation: wiggle 4s ease-in-out infinite;
	}
	.pd2 {
		top: 20%;
		right: 1%;
		font-size: 0.75rem;
		color: #ff4444;
		transform: rotate(7deg);
		opacity: 0.45;
		animation: bob 3.5s ease-in-out infinite;
	}
	.pd3 {
		top: 42%;
		left: 0.5%;
		font-size: 0.7rem;
		color: #ffee55;
		transform: rotate(-6deg);
		opacity: 0.4;
	}
	.pd4 {
		top: 62%;
		right: 1%;
		font-size: 0.8rem;
		color: #ff4444;
		transform: rotate(9deg);
		opacity: 0.45;
		animation: wiggle 5s ease-in-out infinite;
	}
	.pd5 {
		bottom: 12%;
		left: 1%;
		font-size: 0.75rem;
		color: #ffee55;
		transform: rotate(-12deg);
		opacity: 0.4;
		animation: bob 4s ease-in-out infinite;
	}
	.pd6 {
		top: 33%;
		right: 0.5%;
		font-size: 0.68rem;
		color: #ffee55;
		transform: rotate(-8deg);
		opacity: 0.35;
	}
	.pd7 {
		top: 75%;
		left: 0.5%;
		font-size: 0.7rem;
		color: #ff4444;
		transform: rotate(6deg);
		opacity: 0.4;
		animation: wiggle 6s ease-in-out infinite;
	}

	/* Language icon links */
	.lang-links {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-left: 0.2rem;
	}
	.lang-link {
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		transition:
			color 0.2s,
			transform 0.2s;
		transform-origin: center;
		-webkit-text-stroke: 0;
		font-size: 0.85em;
	}
	.lang-link:hover {
		transform: scale(1.35);
	}
	.lang-link svg {
		width: 1.1em;
		height: 1.1em;
	}
	.lang-link.rust {
		color: #555;
	}
	.lang-link.rust:hover {
		color: #ce422b;
	}
	.lang-link.zig {
		color: #555;
	}
	.lang-link.zig:hover {
		color: #f7a41d;
	}
	.lang-link.cpp {
		color: #555;
	}
	.lang-link.cpp:hover {
		color: #00599c;
	}
	.benchmark-link {
		display: inline-flex;
		align-items: center;
		color: #555;
		text-decoration: none;
		transition:
			color 0.2s,
			transform 0.2s;
		transform-origin: center;
		margin-left: 0.3rem;
	}
	.benchmark-link:hover {
		color: #ffee55;
		transform: scale(1.35);
	}
	.benchmark-link svg {
		width: 0.9em;
		height: 0.9em;
		fill: currentColor;
	}

	@media (max-width: 700px) {
		.spine-line {
			display: none;
		}
		.chapter {
			padding: 0 !important;
			justify-content: center !important;
			flex-direction: column;
			align-items: center;
			margin-bottom: 2.5rem;
		}
		.ch-dot {
			position: static;
			transform: none;
			margin-bottom: 0.8rem;
		}
		.ch-card {
			max-width: 100%;
			box-shadow: 4px 4px 0 #ffee55 !important;
		}
		.card-ongoing {
			box-shadow: 4px 4px 0 #a855f7 !important;
		}
		.card-inprog {
			box-shadow: 4px 4px 0 #ff4444 !important;
		}
		.card-planned {
			box-shadow: 4px 4px 0 #f97316 !important;
		}
		.proj-header {
			margin-bottom: 2.5rem;
		}
		.projects {
			padding: 3rem 1.2rem 4rem;
		}
		.proj-doodle,
		.chaos-note {
			display: none;
		}
	}
</style>
