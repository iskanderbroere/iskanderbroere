import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'default-src': ['self'],
				'object-src': ["'none'"],
				'img-src': ["'self'"],
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline'],
				'connect-src': ['self'],
				'font-src': ['self', 'data:'],
				'manifest-src': ['self'],
				'frame-ancestors': ['none'],
				'frame-src': ['none'],
			},
		},
	},
};

export default config;
