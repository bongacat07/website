<script lang="ts">
	let { children } = $props();
</script>

<div class="blog-wrap">
	<a href="/" class="back-link">← back to the chaos</a>
	<article class="blog-post">
		{@render children()}
	</article>
</div>

<style>
	.blog-wrap {
		max-width: 1000px;
		margin: 0 auto;
		padding: 4rem 3rem 8rem;
		position: relative;
		z-index: 1;
	}

	.back-link {
		display: inline-block;
		font-family: 'Boogaloo', cursive;
		font-size: 1rem;
		color: #ffee55;
		text-decoration: none;
		margin-bottom: 3rem;
		opacity: 0.7;
		transform: rotate(-1deg);
		transition: opacity 0.2s;
	}
	.back-link:hover {
		opacity: 1;
	}

	/* H1 — post title */
	.blog-post :global(h1) {
		font-family: 'Kranky', cursive;
		font-size: clamp(2.5rem, 6vw, 5rem);
		color: #fff;
		-webkit-text-stroke: 1.5px #000;
		paint-order: stroke fill;
		filter: drop-shadow(3px 3px 0 #ffee55) drop-shadow(-1px -1px 0 #ff4444);
		line-height: 1.15;
		margin-bottom: 0.5rem;
	}

	/* H2 */
	.blog-post :global(h2) {
		font-family: 'Kranky', cursive;
		font-size: clamp(1.8rem, 4vw, 3rem);
		color: #fff;
		-webkit-text-stroke: 1px #000;
		paint-order: stroke fill;
		filter: drop-shadow(2px 2px 0 #ffee55);
		margin-top: 3.5rem;
		margin-bottom: 1rem;
		line-height: 1.2;
	}

	/* H3 */
	.blog-post :global(h3) {
		font-family: 'Kranky', cursive;
		font-size: clamp(1.3rem, 2.5vw, 2rem);
		color: #ffee55;
		margin-top: 2.5rem;
		margin-bottom: 0.8rem;
		line-height: 1.2;
	}

	/* paragraphs */
	.blog-post :global(p) {
		font-family: 'Fredoka', sans-serif;
		font-weight: 400;
		font-size: clamp(1.05rem, 2vw, 1.25rem);
		color: #ccc;
		line-height: 1.8;
		margin-bottom: 1.5rem;
	}

	/* strong / bold — yellow and bold */
.blog-post :global(strong) {
    font-weight: 800;
    color: #ffee55;
}

/* em / italic — red and italic */
.blog-post :global(em) {
    font-style: italic;
    color: #ff4444;
}
	/* inline code */
	.blog-post :global(code) {
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
		background: #1a1a1a;
		color: #ffee55;
		padding: 2px 7px;
		border-radius: 3px;
		border: 1px solid #333;
	}

	/* code blocks */
	.blog-post :global(pre) {
		background: #111;
		border: 2px solid #222;
		border-radius: 4px;
		padding: 1.5rem;
		overflow-x: auto;
		margin-bottom: 2rem;
		box-shadow: 4px 4px 0 #ffee55;
	}

	.blog-post :global(pre code) {
		background: none;
		border: none;
		padding: 0;
		color: #ddd;
		font-size: 0.95rem;
		line-height: 1.7;
	}

	/* blockquote */
	.blog-post :global(blockquote) {
		border-left: 4px solid #ffee55;
		margin: 2rem 0;
		padding: 0.8rem 1.5rem;
		background: rgba(255, 238, 85, 0.05);
		transform: rotate(-0.5deg);
	}

	.blog-post :global(blockquote p) {
		color: #ffee55;
		margin-bottom: 0;
		font-style: italic;
	}

	/* horizontal rule */
	.blog-post :global(hr) {
		border: none;
		border-top: 2px dashed #333;
		margin: 3rem 0;
	}

	/* links */
	.blog-post :global(a) {
		color: #ffee55;
		text-decoration: none;
		border-bottom: 1.5px solid #ffee55;
		transition:
			color 0.2s,
			border-color 0.2s;
	}
	.blog-post :global(a:hover) {
		color: #ff4444;
		border-color: #ff4444;
	}

	/* lists */
	.blog-post :global(ul),
	.blog-post :global(ol) {
		font-family: 'Fredoka', sans-serif;
		font-size: clamp(1.05rem, 2vw, 1.2rem);
		color: #ccc;
		line-height: 1.8;
		padding-left: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.blog-post :global(li::marker) {
		color: #ffee55;
	}

	/* images */
	.blog-post :global(img) {
		max-width: 100%;
		border-radius: 4px;
		border: 2px solid #222;
		box-shadow: 4px 4px 0 #ffee55;
		margin: 1.5rem 0;
		display: block;
	}

	/* divider after h1 — date/meta feel */
	.blog-post :global(h1 + p) {
		color: #555;
		font-size: 0.95rem;
		margin-top: -0.3rem;
		margin-bottom: 2.5rem;
		border-bottom: 2px dashed #222;
		padding-bottom: 2rem;
	}

	@media (max-width: 600px) {
		.blog-wrap {
			padding: 2.5rem 1.2rem 5rem;
		}
	}

	/* tables */
		.blog-post :global(table) {
			width: 100%;
			max-width: 800px;
			margin: 2rem auto;
			border-collapse: separate;
			border-spacing: 0;
			background: #111;
			border: 2px solid #222;
			border-radius: 6px;
			overflow: hidden;
			box-shadow: 4px 4px 0 #ffee55;
		}
		.blog-post :global(thead) {
			background: #1a1a1a;
		}
		.blog-post :global(th) {
			font-family: 'Kranky', cursive;
			font-size: clamp(1.1rem, 2vw, 1.5rem);
			color: #ffee55;
			text-align: center;
			padding: 1rem 1.2rem;
			border-bottom: 2px solid #ffee55;
			letter-spacing: 0.5px;
		}
		.blog-post :global(td) {
			font-family: 'Fredoka', sans-serif;
			font-size: clamp(1rem, 1.8vw, 1.15rem);
			color: #ccc;
			text-align: center;
			padding: 0.9rem 1.2rem;
			border-bottom: 1px solid #222;
		}
		.blog-post :global(tbody tr:last-child td) {
			border-bottom: none;
		}
		.blog-post :global(tbody tr:hover) {
			background: rgba(255, 238, 85, 0.06);
		}
		.blog-post :global(tbody tr:nth-child(even)) {
			background: rgba(255, 255, 255, 0.02);
		}
		/* wrap tables so they scroll on small screens instead of breaking layout */
		.blog-post :global(table) {
			display: table;
		}
		@media (max-width: 600px) {
			.blog-post :global(table) {
				font-size: 0.9rem;
			}
			.blog-post :global(th),
			.blog-post :global(td) {
				padding: 0.6rem 0.7rem;
			}
		}
</style>
