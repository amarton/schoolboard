
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>Local News Network Election Guide 2024</title>\n\t\t<meta name=\"description\" content=\"Local News Network Election Guide 2024\">\n\t\t<meta name=\"author\" content=\"Local News Network, Merrill College of Journalism, UMD\">\n\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\n\t\t<!-- METRICS -->\n\t\t<meta name=\"parsely-title\" content=\"Local News Network Board of Education Voter Guide 2024\" />\n\t\t<meta name=\"parsely-link\" content=\"https://schoolboard2024.netlify.app/\" />\n\t\t<meta name=\"parsely-type\" content=\"post\" />\n\t\t<meta name=\"parsely-image-url\" content=\"https://schoolboard2024.netlify.app/_app/immutable/assets/voter-guide-logo.DUQIbJzc.png\" />\n\t\t<meta name=\"parsely-pub-date\" content=\"2024-09-17\" />\n\t\t<meta name=\"parsely-section\" content=\"Local\" />\n\t\t<meta name=\"parsely-author\" content=\"Local News Network\" />\n\t\t<meta name=\"parsely-tags\" content=\"election, local, voter guide, lnn, local news network, journalism, interactives\" />\n\n\t\t<meta property=\"og:type\" content=\"article\" />\n\t\t<meta property=\"og:title\" content=\"School Board Voter Guide\" />\n\t\t<meta property=\"og:url\" content=\"https://schoolboard2024.netlify.app/\" />\n\t\t<meta property=\"og:description\" content=\"The Local News Network sent a questionnaire to all 109 school board candidates in Maryland to get their views on important issues. See the results in this interactive guide.\" />\n\t\t<meta property=\"article:published_time\" content=\"2024-10-21T09:35:47+00:00\" />\n\t\t<meta property=\"og:site_name\" content=\"CNS Maryland\" />\n\t\t<meta property=\"og:image\" content=\"https://cnsmaryland.org/wp-content/uploads/2024/10/voter-guide-story-image-sd.png\" />\n\t\t<meta property=\"og:image:width\" content=\"1170\" />\n\t\t<meta property=\"og:image:height\" content=\"600\" />\n\t\t<meta property=\"og:image:alt\" content=\"Maryland-themed ballot box.\" />\n\t\t<meta property=\"og:locale\" content=\"en_US\" />\n\t\t<meta name=\"twitter:site\" content=\"@CNSmd\" />\n\t\t<meta name=\"twitter:text:title\" content=\"School Board Voter Guide\" />\n\t\t<meta name=\"twitter:image\" content=\"https://cnsmaryland.org/wp-content/uploads/2024/10/voter-guide-story-image-sd.png?w=640\"/>\n\t\t<meta name=\"twitter:image:alt\" content=\"Maryland-themed ballot box\" />\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t\t\n\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\n\t\t<!-- METRICS -->\n\t\t<!-- START Parse.ly Include: Standard -->\n\t\t<script id=\"parsely-cfg\" src=\"//cdn.parsely.com/keys/cnsmaryland.org/p.js\"></script>\n\t\t<!-- END Parse.ly Include: Standard -->\n\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1eiq1y6"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
