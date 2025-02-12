

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CYv6LBrU.js","_app/immutable/chunks/disclose-version.D8AfmCe7.js","_app/immutable/chunks/runtime.9BV--RzT.js"];
export const stylesheets = ["_app/immutable/assets/0.D0QCLZpE.css"];
export const fonts = [];
