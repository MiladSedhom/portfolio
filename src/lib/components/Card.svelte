<script lang="ts">
	import { getRelativeMouse } from '$lib/getRelativeMouse.svelte'
	import { type Snippet } from 'svelte'

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

<div bind:this={container} class="fly-in bg-shadows border-rd-xl">
	<div
		bind:this={div}
		class="min-h-25 text-3 border-rd-xl {classes}"
		class:fly-in-delayed={!animationDone}
		style:opacity={animationDone ? '1' : '0'}
		style="transform: perspective(3000px) rotateX({-20 * mouse.y}deg) rotateY({10 *
			mouse.x}deg) {mouse.isInside ? 'scale(.99)' : ''};"
		hover-shadow="xl opacity-20"
		onanimationend={() => {
			animationDone = true
		}}
		{...rest}
	>
		{@render children?.()}
	</div>
</div>

<style>
	.fly-in-delayed {
		animation: fly-in 700ms cubic-bezier(0.23, 1, 0.32, 1) 500ms forwards;
	}

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
