<script>
	import 'virtual:uno.css'
	import '@unocss/reset/tailwind.css'
</script>

<div class="min-h-screen min-w-screen font-sans color-tcolor bg-bgcolor">
	<header class=" h-16 p-4"></header>
	<slot />
</div>

<style>
	:global(:root) {
		--h: 160;
		--primary: hsl(var(--h), 80%, 50%);
		--bg: hsl(var(--h), 20%, 90%);
		--text: hsl(var(--h), 15%, 15%);
		--text-alt: hsl(var(--h), 8%, 95%);
	}
</style>
