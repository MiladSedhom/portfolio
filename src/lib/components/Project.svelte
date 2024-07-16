<script lang="ts">
	import { mouseSticky } from '$lib/actions/mouseSticky.svelte'
	import { getRelativeMouse } from '$lib/getRelativeMouse.svelte'
	import { onMount } from 'svelte'
	import { fade, fly } from 'svelte/transition'

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

	$effect.pre(() => {
		if (!div) return
		if (mouse.isHovering) div.style.transition = 'transform 0s cubic-bezier(0, 0, 0.1, 1)'
		if (!mouse.isHovering) div.style.transition = 'transform 500ms cubic-bezier(0, 0, 0.1, 1)'
		console.log('adjusting transitionDuration thing', div.style.transitionDuration)
	})
</script>

<div bind:this={container} class="fly-in" bg-neutral-300 border-rd-xl>
	<div
		bind:this={div}
		style="transform: perspective(3000px) rotateX({-12 * mouse.y}deg) rotateY({8 *
			mouse.x}deg) {mouse.isHovering && 'scale(.99)'};"
		class="fly-in-delayed opacity-0 container min-h-25 text-3 border-rd-xl {classes} "
		hover-shadow="xl opacity-20"
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
		}
	}
</style>
