import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DmxDsqrY.js","_app/immutable/chunks/disclose-version.D8AfmCe7.js","_app/immutable/chunks/runtime.9BV--RzT.js","_app/immutable/chunks/utils.CTnNvTix.js","_app/immutable/chunks/props.mYTzdRFX.js"];
export const stylesheets = ["_app/immutable/assets/2.BzAniPq_.css"];
export const fonts = [];
