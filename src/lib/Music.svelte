<script>
	import logo from '$lib/assets/mypic.jpeg';
</script>

<section class="music">
	<span class="m-doodle md1">carnatic × chaos</span>
	<span class="m-doodle md2">♩ ♪ ♫ ♬</span>
	<span class="m-doodle md3">shouldn't work. does anyway.</span>
	<span class="m-doodle md4">8000 people btw →</span>

	<div class="music-header">
		<h2 class="music-title">Also, I play music.</h2>
	</div>

	<div class="orbit-zone">
		<!-- top-left: Revels opening act -->
		<div class="ach-orbit ao1">
			<div style="position:relative; display:inline-block; width:100%;">
				<span
					class="sticky"
					style="top:-1.5rem; right:-0.8rem; background:#ff4444; color:#fff; transform:rotate(-3deg);"
					>wasnt nervous at all...</span
				>
				<div class="ach-card">
					<span class="ach-label">Samsara · Opening Act</span>
					<h4 class="ach-name">Revels '24 Pro-Show Night</h4>
					<p class="ach-body">
						Opened for <span class="hl-y">Salim–Sulaiman, Javed Ali & KR$NA</span> in front of
						<span class="hl-r">8000+</span> people. MIT Manipal.
					</p>
					<span class="ach-aside">opening. for that lineup. →</span>
				</div>
			</div>
		</div>

		<!-- top-right: Revels win -->
		<div class="ach-orbit ao2">
			<div class="ach-card">
				<span class="ach-label">Samsara · 1st Place</span>
				<h4 class="ach-name">Revels '24</h4>
				<p class="ach-body">
					Beat <span class="hl-y">20+ bands</span> at one of India's largest student-run cultural fests.
				</p>
				<span class="ach-aside">then opened the pro-show night. same festival. ←</span>
			</div>
		</div>

		<!-- left-mid: Sea Rock -->
		<div class="ach-orbit ao5">
			<div class="ach-card">
				<span class="ach-label">Samsara · Semi-finalist</span>
				<h4 class="ach-name">Sea Rock, BITS Pilani</h4>
				<p class="ach-body">
					One of India's largest <span class="hl-r">semi-professional</span> band competitions. Waves,
					BITS Goa.
				</p>
				<span class="ach-aside">semi-pro. we were students. →</span>
			</div>
		</div>

		<!-- CENTER: photo -->
		<div class="photo-wrap">
			<div style="position:relative; display:inline-block;">
				<span
					class="sticky"
					style="top:-1.5rem; right:-0.8rem; background:#ff4444; color:#fff; transform:rotate(4deg); animation: wiggle 4s ease-in-out infinite;"
					>actually me btw</span
				>
				<div class="photo-circle">
					<img src={logo} alt="Vaibhav Anand" />
				</div>
			</div>
			<div class="photo-bands">
				<span class="band-pill bp1">Samsara</span>
				<span class="band-pill bp2">Moksha</span>
				<span class="band-pill bp3">7.84</span>
			</div>
		</div>

		<!-- bottom-left: Invictus -->
		<div class="ach-orbit ao3">
			<div class="ach-card">
				<span class="ach-label">Moksha · Runners-up</span>
				<h4 class="ach-name">Invictus '25</h4>
				<p class="ach-body">Intercollegiate cultural fest of KMC Manipal, MAHE.</p>
			</div>
		</div>

		<!-- bottom-right: Sentia -->
		<div class="ach-orbit ao4">
			<div class="ach-card">
				<span class="ach-label">7.84 · 1st Place</span>
				<h4 class="ach-name">Sentia '25, MITE</h4>
				<p class="ach-body">
					Took home <span class="hl-y">₹50,000.</span>
				</p>
				<span class="ach-aside"> won. went home. →</span>
			</div>
		</div>
	</div>

	<!-- INTRO -->
	<div class="intro-wrap">
		<p>
			I'm a <span class="hl-y">Carnatic flautist</span>Indian classical music from southern India.
			University threw me into collabs, which slowly became <span class="hl-r">fusion work.</span>
			Carnatic music getting mixed with metal, prog rock, jazz and basically
			<span class="hl-y">everything that probably shouldn't work together.</span> It does anyway.
		</p>
	</div>
</section>

<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background: #0d0d0d;
		color: #f0f0f0;
		font-family: sans-serif;
		min-height: 100vh;
		overflow-x: hidden;
	}

	body::before {
		content: '';
		position: fixed;
		inset: 0;
		background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px);
		background-size: 20px 20px;
		pointer-events: none;
		z-index: 0;
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
			transform: translateY(-6px);
		}
	}

	.music {
		position: relative;
		padding: 6rem 2rem 8rem;
		overflow: hidden;
		z-index: 1;
		border-top: 2px dashed #222;
	}

	.m-doodle {
		position: absolute;
		font-family: 'Boogaloo', cursive;
		pointer-events: none;
		z-index: 0;
		white-space: nowrap;
	}
	.md1 {
		top: 3%;
		left: 1%;
		font-size: 0.9rem;
		color: #ffee55;
		transform: rotate(-9deg);
		opacity: 0.5;
		animation: wiggle 4s ease-in-out infinite;
	}
	.md2 {
		top: 12%;
		right: 1%;
		font-size: 0.85rem;
		color: #ff4444;
		transform: rotate(6deg);
		opacity: 0.45;
		animation: bob 3.5s ease-in-out infinite;
	}
	.md3 {
		bottom: 10%;
		left: 1%;
		font-size: 0.8rem;
		color: #ffee55;
		transform: rotate(-7deg);
		opacity: 0.4;
		animation: bob 4s ease-in-out infinite;
	}
	.md4 {
		bottom: 5%;
		right: 1%;
		font-size: 0.85rem;
		color: #ff4444;
		transform: rotate(10deg);
		opacity: 0.4;
		animation: wiggle 5s ease-in-out infinite;
	}

	/* HEADER */
	.music-header {
		text-align: center;
		margin-bottom: 5rem;
		position: relative;
		z-index: 2;
	}

	.music-title {
		font-family: 'Kranky', cursive;
		font-size: clamp(3rem, 6vw, 6rem);
		color: #fff;
		-webkit-text-stroke: 1.5px #000;
		paint-order: stroke fill;
		filter: drop-shadow(3px 3px 0 #ffee55) drop-shadow(-1px -1px 0 #ff4444);
		display: inline-block;
	}

	.music-sub {
		display: block;
		font-family: 'Boogaloo', cursive;
		font-size: clamp(1.1rem, 2.2vw, 1.5rem);
		color: #888;
		margin-top: 0.8rem;
		transform: rotate(-1deg);
	}
	.music-sub em {
		color: #ffee55;
		font-style: normal;
	}

	/* ORBIT ZONE */
	.orbit-zone {
		position: relative;
		max-width: 960px;
		margin: 0 auto 5rem;
		min-height: 700px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	/* CENTER PHOTO */
	.photo-wrap {
		position: relative;
		z-index: 5;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.photo-circle {
		width: clamp(180px, 24vw, 280px);
		height: clamp(180px, 24vw, 280px);
		border-radius: 50%;
		border: 4px solid #fff;
		outline: 5px solid #000;
		box-shadow:
			6px 6px 0 #ffee55,
			9px 9px 0 #000;
		overflow: hidden;
		background: #1a1a1a;
		background-image: radial-gradient(circle, #333 1.2px, transparent 1.2px);
		background-size: 10px 10px;
	}

	.photo-circle img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.photo-bands {
		margin-top: 1.2rem;
		display: flex;
		gap: 0.6rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.band-pill {
		font-family: 'Boogaloo', cursive;
		font-size: 0.88rem;
		padding: 3px 12px;
		border-radius: 999px;
		border: 2px solid #000;
		box-shadow: 2px 2px 0 #000;
		white-space: nowrap;
	}
	.bp1 {
		background: #ffee55;
		color: #111;
		transform: rotate(-2deg);
	}
	.bp2 {
		background: #ff4444;
		color: #fff;
		transform: rotate(1.5deg);
	}
	.bp3 {
		background: #111;
		color: #ffee55;
		border-color: #ffee55;
		box-shadow: 2px 2px 0 #ffee55;
		transform: rotate(-1deg);
	}

	/* ORBITING CARDS */
	.ach-orbit {
		position: absolute;
		z-index: 4;
	}

	.ao1 {
		top: 10px;
		left: 0;
	}
	.ao2 {
		top: 10px;
		right: 0;
	}
	.ao3 {
		bottom: 60px;
		left: 30px;
	}
	.ao4 {
		bottom: 60px;
		right: 30px;
	}
	.ao5 {
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	.ach-card {
		background: #111;
		border: 2px solid #222;
		border-radius: 4px;
		padding: 1.1rem 1.3rem;
		width: 230px;
	}

	.ao1 .ach-card {
		transform: rotate(-3deg);
		box-shadow: 4px 4px 0 #ffee55;
	}
	.ao2 .ach-card {
		transform: rotate(2.5deg);
		box-shadow: -4px 4px 0 #ffee55;
	}
	.ao3 .ach-card {
		transform: rotate(2deg);
		box-shadow: 4px 4px 0 #ff4444;
		border-color: #1a1a1a;
	}
	.ao4 .ach-card {
		transform: rotate(-2deg);
		box-shadow: -4px 4px 0 #ffee55;
	}
	.ao5 .ach-card {
		transform: rotate(3.5deg);
		box-shadow: 4px 4px 0 #ffee55;
	}

	.ach-label {
		font-family: 'Boogaloo', cursive;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		color: #555;
		display: block;
		margin-bottom: 0.3rem;
	}

	.ach-name {
		font-family: 'Kranky', cursive;
		font-size: clamp(1.1rem, 2vw, 1.4rem);
		color: #fff;
		-webkit-text-stroke: 1px #000;
		paint-order: stroke fill;
		filter: drop-shadow(2px 2px 0 #ffee55);
		line-height: 1.2;
		margin-bottom: 0.4rem;
	}
	.ao3 .ach-name {
		filter: drop-shadow(2px 2px 0 #ff4444);
	}

	.ach-body {
		font-family: 'Boogaloo', cursive;
		font-size: 0.9rem;
		color: #999;
		line-height: 1.5;
	}

	.hl-y {
		background: #ffee55;
		color: #111;
		padding: 0 3px;
		border-radius: 2px;
	}
	.hl-r {
		background: #ff4444;
		color: #fff;
		padding: 0 3px;
		border-radius: 2px;
	}

	.ach-aside {
		display: block;
		font-family: 'Boogaloo', cursive;
		font-size: 0.7rem;
		color: #ff4444;
		opacity: 0.65;
		font-style: italic;
		margin-top: 0.5rem;
	}

	/* annotation shared style */
	.sticky {
		position: absolute;
		font-family: 'Boogaloo', cursive;
		font-size: 0.95rem;
		padding: 3px 10px;
		border-radius: 3px;
		box-shadow: 2px 2px 0 #000;
		white-space: nowrap;
		z-index: 10;
		display: block;
	}

	/* INTRO */
	.intro-wrap {
		max-width: 700px;
		margin: 0 auto;
		text-align: center;
		position: relative;
		z-index: 2;
		padding: 0 1rem;
	}

	.intro-wrap p {
		font-family: 'Boogaloo', cursive;
		font-size: clamp(1.1rem, 2vw, 1.35rem);
		color: #bbb;
		line-height: 1.8;
	}

	/* MOBILE */
	@media (max-width: 700px) {
		.music {
			padding: 3rem 1.2rem 4rem;
		}
		.orbit-zone {
			flex-direction: column;
			min-height: unset;
			gap: 2rem;
		}
		.ach-orbit {
			position: static;
			transform: none !important;
			width: 100%;
		}
		.ach-card {
			width: 100%;
			transform: none !important;
			box-shadow: 4px 4px 0 #ffee55 !important;
		}
		.ao3 .ach-card {
			box-shadow: 4px 4px 0 #ff4444 !important;
		}
		.photo-wrap {
			order: -1;
		}
		.m-doodle {
			display: none;
		}
		.music-header {
			margin-bottom: 2.5rem;
		}
	}
</style>
