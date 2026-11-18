import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			}),
			// Inline the built CSS into a <style> block so the render-blocking
			// stylesheet request is eliminated (PSI: ~110ms on home). This is a
			// top-level SvelteKit option (flat inside sveltekit({...}), NOT
			// nested under `kit:` — split_config() forwards a `kit:` key to
			// vite-plugin-svelte, where it would be silently ignored).
			// Built CSS is 51,770 bytes (build/_app/immutable/assets/0.*.css),
			// so 100000 covers it; each page's HTML grows by ~52 KB instead.
			inlineStyleThreshold: 100000
		})
	]
});
