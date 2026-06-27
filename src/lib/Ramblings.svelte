<script lang="ts">
	const ramblings = [
		{
			title: 'Why not a 2 way handshake?',
			teaser:
				"I mean? That's a fair question isn't it? But I never really could answer why until I wrote it from scratch.",
			slug: 'why-not-a-2-way-handshake',
			date: 'May, 2025',
			tag: 'first principles,TCP'
		},
		{
			title: 'What is even a networking protocol?',
			teaser: 'Well, how do people even make one?',
			slug: 'what-is-even-a-networking-protocol',
			date: 'June 2025',
			tag: 'first principles,protocol'
		},
		{
			title: "You don't need IP addresses",
			teaser: 'Actually, yes.',
			slug: 'you-don_t-need-ip-addresses',
			date: 'June 2025',
			tag: 'first principles,protocol,TCP/IP'
		}
	];
</script>

<section class="ramblings">
	<span class="r-doodle rd1">thinking out loud →</span>
	<span class="r-doodle rd2">✦ ✶ ✦</span>
	<span class="r-doodle rd3">← cleaned up. mostly.</span>

	<div class="r-inner">
		<div class="r-header">
			<h2 class="r-title">Ramblings</h2>
			<p class="r-desc">
				I write when something doesn't make sense and then suddenly does.That includes:
				<span class="hl-y">abstractions that annoyed me,</span>
				things I rebuilt from scratch,
				<span class="hl-r">f irst principles I had to find myself.</span>
				Just me thinking out loud, cleaned up a little.
			</p>
		</div>

		<div class="tickets">
			{#each ramblings as r, i}
				<a href="/{r.slug}" class="ticket t{i + 1}">
					<!-- torn edge top -->
					<div class="tear tear-top">
						<svg viewBox="0 0 400 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0,10 C20,2 40,16 70,8 C100,0 130,14 160,7 C190,0 220,13 250,6 C280,-1 310,12 340,6 C365,1 385,14 400,8 L400,18 L0,18 Z"
								fill="#0d0d0d"
							/>
						</svg>
					</div>

					<div class="ticket-body">
						<div class="ticket-left">
							<span class="ticket-tag">{r.tag}</span>
							<h3 class="ticket-title">{r.title}</h3>
							<p class="ticket-teaser">{r.teaser}</p>
						</div>
						<div class="ticket-right">
							<span class="ticket-date">{r.date}</span>
							<span class="ticket-arrow">→</span>
						</div>
					</div>

					<!-- torn edge bottom -->
					<div class="tear tear-bottom">
						<svg viewBox="0 0 400 18" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0,8 C20,16 40,2 70,10 C100,18 130,4 160,11 C190,18 220,5 250,12 C280,19 310,6 340,12 C365,17 385,4 400,10 L400,0 L0,0 Z"
								fill="#0d0d0d"
							/>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.ramblings {
		position: relative;
		padding: 6rem 2rem 7rem;
		border-top: 2px dashed #222;
		overflow: hidden;
		display: block;
	}

	/* doodles */
	.r-doodle {
		position: absolute;
		font-family: 'Boogaloo', cursive;
		pointer-events: none;
		white-space: nowrap;
		z-index: 0;
	}
	.rd1 {
		top: 5%;
		left: 1%;
		font-size: 0.8rem;
		color: #ffee55;
		transform: rotate(-8deg);
		opacity: 0.5;
		animation: wiggle 4s ease-in-out infinite;
	}
	.rd2 {
		top: 30%;
		right: 1%;
		font-size: 0.9rem;
		color: #ff4444;
		transform: rotate(6deg);
		opacity: 0.4;
	}
	.rd3 {
		bottom: 8%;
		right: 2%;
		font-size: 0.75rem;
		color: #ffee55;
		transform: rotate(-5deg);
		opacity: 0.45;
		animation: bob 3.5s ease-in-out infinite;
	}

	.r-inner {
		max-width: 860px;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	/* header */
	.r-header {
		margin-bottom: 3.5rem;
	}

	.r-title {
		font-family: 'Kranky', cursive;
		font-size: clamp(2.5rem, 5vw, 5rem);
		color: #fff;
		-webkit-text-stroke: 1.5px #000;
		paint-order: stroke fill;
		filter: drop-shadow(3px 3px 0 #ffee55) drop-shadow(-1px -1px 0 #ff4444);
		display: block;
		margin-bottom: 1.2rem;
	}

	.r-desc {
		font-family: 'Boogaloo', cursive;
		font-size: clamp(1rem, 1.8vw, 1.2rem);
		color: #888;
		line-height: 1.7;
		max-width: 600px;
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

	/* tickets */
	.tickets {
		display: block;
	}

	.ticket {
		display: block;
		text-decoration: none;
		margin-bottom: 2rem;
		position: relative;
		transition: transform 0.2s;
	}
	.ticket:hover {
		transform: translateY(-3px);
	}

	.t1 {
		transform: rotate(-1deg);
	}
	.t2 {
		transform: rotate(0.8deg);
	}
	.t3 {
		transform: rotate(-0.6deg);
	}

	.t1:hover {
		transform: rotate(-1deg) translateY(-4px);
	}
	.t2:hover {
		transform: rotate(0.8deg) translateY(-4px);
	}
	.t3:hover {
		transform: rotate(-0.6deg) translateY(-4px);
	}

	/* torn edges */
	.tear {
		display: block;
		line-height: 0;
	}
	.tear svg {
		display: block;
		width: 100%;
	}

	.tear-top svg {
		filter: drop-shadow(0 -2px 0 #333);
	}
	.tear-bottom svg {
		filter: drop-shadow(0 2px 0 #333);
	}

	/* ticket body */
	.ticket-body {
		background: #111;
		border-left: 3px solid #ffee55;
		border-right: 3px solid #ffee55;
		padding: 1.2rem 1.8rem;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 1.5rem;
	}

	.t2 .ticket-body {
		border-color: #ff4444;
	}

	/* left side */
	.ticket-left {
		display: block;
	}

	.ticket-tag {
		font-family: 'Boogaloo', cursive;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #555;
		display: block;
		margin-bottom: 0.3rem;
	}

	.ticket-title {
		font-family: 'Kranky', cursive;
		font-size: clamp(1.2rem, 2.5vw, 1.8rem);
		color: #fff;
		-webkit-text-stroke: 1px #000;
		paint-order: stroke fill;
		filter: drop-shadow(2px 2px 0 #ffee55);
		line-height: 1.2;
		margin-bottom: 0.5rem;
		display: block;
	}

	.t2 .ticket-title {
		filter: drop-shadow(2px 2px 0 #ff4444);
	}

	.ticket-teaser {
		font-family: 'Boogaloo', cursive;
		font-size: clamp(0.9rem, 1.5vw, 1.05rem);
		color: #999;
		line-height: 1.5;
		display: block;
	}

	/* right side */
	.ticket-right {
		display: block;
		text-align: right;
		flex-shrink: 0;
	}

	.ticket-date {
		font-family: 'Boogaloo', cursive;
		font-size: 0.75rem;
		color: #444;
		display: block;
		margin-bottom: 0.8rem;
		white-space: nowrap;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
	}

	.ticket-arrow {
		font-family: 'Boogaloo', cursive;
		font-size: 1.5rem;
		color: #ffee55;
		display: block;
	}

	.t2 .ticket-arrow {
		color: #ff4444;
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

	@media (max-width: 600px) {
		.ramblings {
			padding: 3rem 1.2rem 4rem;
		}
		.ticket-body {
			grid-template-columns: 1fr;
		}
		.ticket-right {
			display: none;
		}
		.r-doodle {
			display: none;
		}
	}
</style>
