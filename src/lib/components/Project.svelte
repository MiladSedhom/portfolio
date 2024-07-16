<script lang="ts">
	import { getRelativeMouse } from '$lib/getRelativeMouse.svelte'
	import { onMount } from 'svelte'

	type Props = {
		name: string
		description: string
		link: string
		class?: string
		body?: string
	}

	const {
		name,
		description,
		link,
		class: classes = undefined,
		body = undefined,
		...rest
	}: Props = $props()

	let container = $state<HTMLElement>()
	let div = $state<HTMLElement>()
	let animationDone = $state(false)
	let isIn = $state<boolean>()
	let mouse = getRelativeMouse(() => container, { min: -1, max: 1 })

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) isIn = e.isIntersecting
			})
		})
		container && observer.observe(container)
	})
	$effect(() => {
		if (!div) return
		if (mouse.isInside) div.style.transition = 'transform 0ms ease-out'
		if (!mouse.isInside) div.style.transition = 'transform 500ms ease-out'
	})
</script>

<div bind:this={container} class="fly-in" bg-neutral-300 border-rd-xl>
	<div
		bind:this={div}
		style="transform: perspective(3000px) rotateX({-20 * mouse.y}deg) rotateY({10 *
			mouse.x}deg) {mouse.isInside ? 'scale(.99)' : ''};"
		style:opacity={animationDone ? '1' : '0'}
		class:fly-in-delayed={!animationDone}
		class="min-h-25 text-3 border-rd-xl {classes}"
		hover-shadow="xl opacity-20"
		onanimationend={() => {
			animationDone = true
		}}
		{...rest}
	>
		<a href={link} target="_blank" class="block min-h-full p-4">
			<h1 fw-bold text-6 font-display>{name}</h1>
			<p text-14px fw-semibolds>{description}</p>
			{#if body}
				<p text-3>{body}</p>
			{/if}
		</a>
	</div>
</div>

<style>
	.fly-in-delayed {
		animation: fly-in 1000ms cubic-bezier(0.23, 1, 0.32, 1) 500ms forwards;
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
