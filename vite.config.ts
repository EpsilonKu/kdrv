import { svelteTesting } from '@testing-library/svelte/vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import fs from 'node:fs';

const dirname =
	typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig(({ command, mode }) => {
	const isLibrary = mode === 'library';

	// Library build configuration
	if (isLibrary) {
		return {
			plugins: [
				svelte({
					compilerOptions: {
						dev: false
					}
				}),
				dts({
					include: ['src/lib'],
					outDir: 'dist'
				}),
				// Use CSS injection for components
				cssInjectedByJsPlugin(),
				// Custom plugin to copy CSS file
				{
					name: 'copy-css-file',
					writeBundle: {
						sequential: true,
						order: 'post',
						handler() {
							const source = path.resolve(dirname, 'src/lib/styles.css');
							const dest = path.resolve(dirname, 'dist/styles.css');
							fs.copyFileSync(source, dest);
							console.log('CSS file copied to dist/styles.css');
						}
					}
				}
			],
			resolve: {
				alias: {
					$lib: path.resolve(dirname, 'src/lib')
				}
			},
			build: {
				lib: {
					entry: path.resolve(dirname, 'src/lib/index.ts'),
					name: 'KdrvUI',
					formats: ['es'],
					fileName: (format) => `index.js`
				},
				outDir: 'dist',
				rollupOptions: {
					external: ['svelte', 'svelte/internal', 'svelte/store', 'svelte/motion', 'svelte/transition', 'svelte/animate', 'svelte/easing'],
					output: {
						globals: {
							svelte: 'Svelte',
							'svelte/internal': 'Svelte.internal',
							'svelte/store': 'Svelte.store',
							'svelte/motion': 'Svelte.motion',
							'svelte/transition': 'Svelte.transition',
							'svelte/animate': 'Svelte.animate',
							'svelte/easing': 'Svelte.easing'
						}
					}
				},
				sourcemap: true,
				emptyOutDir: true
			}
		};
	}

	// Development and standard build configuration
	return {
		plugins: [tailwindcss(), sveltekit()],
		server: {
			fs: {
				allow: ['src/lib/fonts', 'node_modules']
			},
			sourcemapIgnoreList(sourcePath, sourcemapPath) {
				return false
			}
		},
		test: {
			workspace: [
				{
					extends: './vite.config.ts',
					plugins: [svelteTesting()],
					test: {
						name: 'client',
						environment: 'jsdom',
						clearMocks: true,
						include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
						exclude: ['src/lib/server/**'],
						setupFiles: ['./vitest-setup-client.ts']
					}
				},
				{
					extends: './vite.config.ts',
					test: {
						name: 'server',
						environment: 'node',
						include: ['src/**/*.{test,spec}.{js,ts}'],
						exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
					}
				},
				{
					extends: true,
					plugins: [
						// The plugin will run tests for the stories defined in your Storybook config
						// See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
						storybookTest({
							configDir: path.join(dirname, '.storybook')
						})
					],
					test: {
						name: 'storybook',
						browser: {
							enabled: true,
							headless: true,
							provider: 'playwright',
							instances: [
								{
									browser: 'chromium'
								}
							]
						},
						setupFiles: ['.storybook/vitest.setup.ts']
					}
				}
			]
		}
	};
});
