export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.3jmJJcUM.js","app":"_app/immutable/entry/app.C2gC91Uo.js","imports":["_app/immutable/entry/start.3jmJJcUM.js","_app/immutable/chunks/entry.D14CCXN_.js","_app/immutable/chunks/runtime.9BV--RzT.js","_app/immutable/entry/app.C2gC91Uo.js","_app/immutable/chunks/runtime.9BV--RzT.js","_app/immutable/chunks/render._DlSpBZ1.js","_app/immutable/chunks/utils.CTnNvTix.js","_app/immutable/chunks/disclose-version.D8AfmCe7.js","_app/immutable/chunks/props.mYTzdRFX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
