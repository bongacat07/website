import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			layout: resolve(__dirname, './src/lib/BlogLayout.svelte')
		})
	],
	kit: { adapter: adapter() }
};
