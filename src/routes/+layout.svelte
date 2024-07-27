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
		--primary: hsl(18, 90%, 48%);
		--bg: hsl(18, 15%, 95%);
		--shadows: hsl(202, 10%, 84%);
		--text: hsl(18, 15%, 15%);
		--text-1: hsl(18, 15%, 35%);
		--text-alt: hsl(18, 40%, 90%);
	}
</style>
