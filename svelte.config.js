import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

// const dev = "production" === "development";
// const dev = true;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: "docs",
			assets:"docs"
		}),
		trailingSlash: "always",
		paths: {
			base: "/portfolio",
		},
		// prerender:{
		// 	entries:["*", "/air-pollution-monitoring"]
		// }
	}
};

export default config;
