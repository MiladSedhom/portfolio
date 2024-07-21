<script lang="ts">
	import { getRelativeMouse } from '$lib/getRelativeMouse.svelte'
	import { slidePrime } from '$lib/transitions/slidePrime'
	import { type Snippet } from 'svelte'
	import { elasticOut } from 'svelte/easing'

	type Props = {
		class?: string
		children?: Snippet
	}

	const { class: classes = undefined, children, ...rest }: Props = $props()

	let container = $state<HTMLElement>()
	let div = $state<HTMLElement>()
	let animationDone = $state(false)
	let mouse = getRelativeMouse(() => container, { min: -1, max: 1 })

	$effect(() => {
		if (!div) return
		if (mouse.isInside) div.style.transition = 'transform 0ms ease-out'
		if (!mouse.isInside) div.style.transition = 'transform 500ms ease-out'
	})
</script>

<div
	bind:this={container}
	class="fly-in min-h-25 bg-shadows border-rd-xl"
	onanimationend={() => {
		animationDone = true
	}}
>
	{#if animationDone}
		<div
			bind:this={div}
			in:slidePrime={{ duration: 2000, easing: elasticOut, bottom: 1, x: 0, y: 50 }}
			class="min-h-25 text-3 border-rd-xl {classes}"
			style="transform: perspective(3000px) rotateX({-20 * mouse.y}deg) rotateY({10 *
				mouse.x}deg) {mouse.isInside ? 'scale(.99)' : ''};"
			hover-shadow="xl opacity-20"
			{...rest}
		>
			{@render children?.()}
		</div>
	{/if}
</div>

<style>
	.fly-in {
		animation: fly-in 1000ms cubic-bezier(0.23, 1, 0.32, 1);
	}

	@keyframes fly-in {
		0% {
			opacity: 0.7;
			clip-path: inset(0 0 100% 0);
			transform: translateY(100%);
		}
		100% {
			opacity: 1;
			clip-path: inset(0);
			transform: translateY(0);
		}
	}
</style>
