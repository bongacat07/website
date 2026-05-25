<footer class="footer-bar">
	<!-- LinkedIn -->
	<a href="#" class="icon" aria-label="LinkedIn">
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path
				d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1C12.9 8.9 14.7 8 16.6 8 21 8 22 10.6 22 14.1V24h-5v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-5V8z"
			/>
		</svg>
	</a>

	<!-- GitHub -->
	<a href="#" class="icon" aria-label="GitHub">
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path
				d="M12 .5C5.7.5.5 5.8.5 12.3c0 5.2 3.4 9.6 8.1 11.1.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.9 2.1 2.9 1.5.1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.5 11.5 0 0 1 6.2 0C17.9 4 18.9 4.3 18.9 4.3c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.4 0 4.8-2.9 5.9-5.6 6.2.5.4.9 1.2.9 2.5v3.7c0 .3.2.7.8.6 4.7-1.5 8.1-5.9 8.1-11.1C23.5 5.8 18.3.5 12 .5z"
			/>
		</svg>
	</a>

	<!-- Email -->
	<a href="#" class="icon" aria-label="Email">
		<svg viewBox="0 0 24 24" fill="currentColor">
			<path
				d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
			/>
		</svg>
	</a>
</footer>

<style>
	.footer-bar {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);

		display: flex;
		align-items: center;
		gap: 1.2rem;

		padding: 0.75rem 1.1rem;

		background: rgba(20, 20, 20, 0.35);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);

		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 999px;

		box-shadow:
			8px 8px 0 #000,
			0 0 0 1px rgba(0, 0, 0, 0.4);

		z-index: 999;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;

		color: #ffee55;
		transition:
			transform 0.2s ease,
			color 0.2s ease;
	}

	.icon svg {
		width: 22px;
		height: 22px;
	}

	.icon:hover {
		transform: scale(1.35);
		color: #ff4444;
	}

	/* MOBILE */
	@media (max-width: 480px) {
		.footer-bar {
			bottom: 12px;
			gap: 0.9rem;
			padding: 0.55rem 0.9rem;
		}

		.icon svg {
			width: 18px;
			height: 18px;
		}

		.icon:hover {
			transform: scale(1.2);
		}
	}
</style>
