<script>
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
</script>

<div class="min-h-screen min-w-screen bg-bgcolor font-sans color-tcolor">
	<header class=" h-16 p-4"></header>
	<slot />
</div>

<style>
	:global(:root) {
		--h: 29;
		--primary: hsl(var(--h), 65%, 45%);
		--bg: hsl(var(--h), 8%, 95%);
		--text: hsl(var(--h), 8%, 15%);
		--text-alt: hsl(var(--h), 8%, 95%);
	}
</style>
