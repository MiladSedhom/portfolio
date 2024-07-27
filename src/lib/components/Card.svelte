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
		if (mouse.isInside) div!.style.transitionDuration = '0s'
		if (!mouse.isInside) div!.style.transition = 'transform 1200ms var(--spring-easing-extra)'
	})
</script>

<div bind:this={container} class="fly-in bg-shadows border-rd-xl">
	<div
		bind:this={div}
		class="min-h-25 text-3 border-rd-xl {classes}"
		style:opacity={animationDone ? '1' : '0'}
		class:fly-in-delayed={!animationDone}
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
	:global(:root) {
		--spring-easing: linear(
			0,
			1.2272 16%,
			0.8788 28%,
			1.0428 44%,
			0.9855 59%,
			1.0044 73%,
			0.9986 88%,
			1
		);
		--spring-easing-extra: linear(
			0,
			1.4572 16%,
			0.7788 28%,
			1.1528 44%,
			0.9255 59%,
			1.0344 73%,
			0.9926 88%,
			1
		);
	}

	.fly-in-delayed {
		animation: fly-in 1200ms var(--spring-easing) 450ms forwards;
	}

	.fly-in {
		animation: fly-in 600ms cubic-bezier(0.23, 1, 0.32, 1);
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
