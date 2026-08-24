<script>
	import logo from '$lib/assets/profilepic.jpeg';
</script>

<section class="hero">
	<!-- floating doodles -->
	<span class="doodle d1">wait what was i doing</span>
	<span class="doodle d2">✦✦✦</span>
	<span class="doodle d3">ooh shiny →</span>
	<span class="doodle d4">← focus focus focus</span>
	<span class="doodle d5">anyway,</span>
	<span class="doodle d6">✶ ✶ ✶</span>
	<span class="doodle d7">hyperfocus mode: ON</span>
	<span class="doodle d8">brb forgot what i said</span>
	<span class="doodle d9">!!</span>
	<span class="doodle d10 red">CAAAATTSSSS</span>
	<span class="doodle d11">task 1 of 47...</span>
	<span class="doodle d12">where was i again</span>
	<!-- bg scribbles -->
	<svg class="bg-scribble s1" viewBox="0 0 120 40">
		<path
			d="M5,20 C15,5 30,35 50,18 C70,2 90,30 115,15"
			stroke="#ffee55"
			stroke-width="2"
			stroke-linecap="round"
			fill="none"
		/>
	</svg>
	<svg class="bg-scribble s2" viewBox="0 0 90 40">
		<path
			d="M5,30 C20,5 40,35 60,10 C75,2 85,25 88,30"
			stroke="#ff4444"
			stroke-width="2"
			stroke-linecap="round"
			fill="none"
		/>
	</svg>
	<svg class="bg-scribble s3" viewBox="0 0 70 70">
		<circle cx="35" cy="35" r="30" stroke="#ffee55" stroke-width="2" stroke-dasharray="6 4" />
	</svg>
	<div class="hero-inner">
		<img src="/favicon-cool.png" alt="" class="scatter-img fav" />
		<div class="hero-left">
			<div class="cloud-wrap">
				<svg class="cloud-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
					<path
						d="M10,80 C2,78 0,65 8,58 C2,50 5,36 16,36 C12,18 28,8 42,16 C50,4 68,5 72,20 C86,14 98,28 92,42 C100,48 100,65 88,68 C94,80 84,92 72,86 C64,97 46,97 40,86 C28,96 8,90 10,80 Z"
					/>
				</svg>
				<div class="cloud-content">
					<span class="stars-top">✦ ✶ ✦</span>
					<span class="name-wrap">
						<span class="annotation ann1">yes this is my real name</span>
						<h1>
							Bonga <span class="hatched">Cat</span>
						</h1>
						<span class="annotation ann2">no i won't explain it</span>
						<svg class="underline" viewBox="0 0 300 16">
							<path
								d="M0,8 C20,2 40,14 70,7 C100,0 130,13 160,6 C190,-1 220,12 250,6 C270,2 290,10 300,7"
								stroke="#ffee55"
								stroke-width="3.5"
								fill="none"
								stroke-linecap="round"
							/>
						</svg>
					</span>
					<div class="speech-row">
						<div class="speech-bubble">Networking Nerd, Carnatic Flautist</div>
						<span class="sidenote">& 12 other things</span>
					</div>
					<span class="stars-bottom">✶ ✦ ✶</span>
				</div>
			</div>
		</div>
		<div class="hero-right">
			<svg class="speed-lines" viewBox="0 0 400 400">
				<g opacity="0.12" stroke="#ffee55" stroke-width="1">
					{#each Array(20) as _, i}
						<line
							x1="200"
							y1="200"
							x2={Math.cos((i / 20) * Math.PI * 2) * 400 + 200}
							y2={Math.sin((i / 20) * Math.PI * 2) * 400 + 200}
						/>
					{/each}
				</g>
			</svg>
			<span class="pic-badge pb1">totally me btw</span>
			<span class="pic-badge pb2">maybe idk</span>
			<span class="pic-badge pb3">src: trust me</span>
			<div class="profile-frame">
				<div class="profile-placeholder">
					<img src={logo} alt="Bonga Cat" />
				</div>
				<img src="/black-nyan.png" alt="" class="scatter-img nyan" />
				<div class="intent-bubble">
					My most noble intentions are to indulge in innocuous levels of tomfoolery
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.profile-frame {
		position: relative;
		z-index: 1;
		display: inline-block;
	}

	.profile-placeholder {
		position: relative;
		z-index: 1;
	}

	.intent-bubble {
		position: absolute;
		bottom: -4.5rem;
		right: -5.0rem;
		z-index: 4;
		max-width: 12rem;
		background: #ff4444;
		color: #fff;
		font-family: 'Boogaloo', cursive;
		font-size: clamp(0.7rem, 1.1vw, 0.85rem);
		line-height: 1.3;
		padding: 0.5rem 0.85rem;
		border-radius: 2px 18px 18px 18px;
		border: 2.5px solid #000;
		box-shadow: 3px 3px 0 #000;
		transform: rotate(-3deg);
		animation: bob 3.2s ease-in-out infinite;
	}

	.intent-bubble::before {
		content: '';
		position: absolute;
		top: -14px;
		left: 12px;
		border: 7px solid transparent;
		border-bottom-color: #000;
	}
	.intent-bubble::after {
		content: '';
		position: absolute;
		top: -10px;
		left: 13px;
		border: 6px solid transparent;
		border-bottom-color: #ff4444;
	}

	@media (max-width: 768px) {
		.intent-bubble {
			right: -1.5rem;
			bottom: -4rem;
			max-width: 9rem;
		}
	}

	@media (max-width: 480px) {
		.intent-bubble {
			max-width: 7.5rem;
			font-size: 0.65rem;
			right: -1rem;
			bottom: -3.5rem;
			padding: 0.4rem 0.6rem;
		}
	}

	.scatter-img {
		position: absolute;
		z-index: 3;
		pointer-events: none;
	}

	/* favicon cat — unchanged, positioned relative to .hero-inner */
	.fav {
		bottom: -5.5rem;
		left: 4%;
		width: 140px;
		animation: pulse 4.6s ease-in-out infinite;
		animation-delay: 0.8s;
	}

	/* nyan cat — positioned relative to .profile-frame, tucked behind the profile pic */
	.nyan {
		top: -5%;
		right: -10.5rem;
		left: auto;
		width: 190px;
		z-index: 0;
		animation: pulse 4s ease-in-out infinite;
	}


	@media (max-width: 768px) {
		.fav {
			width: 95px;
			bottom: -1.5rem;
			left: 2%;
		}
		.nyan {
			width: 120px;
			top: -5%;
			right: -6.6rem;
		}
	}

	@media (max-width: 480px) {
		.fav {
			width: 70px;
			bottom: -1rem;
			left: 0%;
		}
		.nyan {
			width: 90px;
			top: -5%;
			right: -5rem;
		}
	}
</style>
