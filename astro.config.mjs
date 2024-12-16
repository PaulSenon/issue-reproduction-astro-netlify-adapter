import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

const NETLIFY_DEPLOY_URL =
	process.env.CONTEXT === 'production'
		? process.env.URL
		: process.env.DEPLOY_PRIME_URL;

export default defineConfig({
	site: NETLIFY_DEPLOY_URL || 'https://localhost:4321',
	output: 'static',
	adapter: netlify({
		edgeMiddleware: true,
	}),
});
