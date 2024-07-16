<script lang="ts">
	import { mouseSticky } from '$lib/actions/mouseSticky.svelte'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

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
	let isIn = $state<boolean>()

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) isIn = e.isIntersecting
			})
		})

		container && observer.observe(container)
	})
</script>

<div bind:this={container} h-50 bg-neutral-300>
	{#if isIn}
		<div
			use:mouseSticky
			in:fly={{ duration: 1000, opacity: 0.7, y: 50 }}
			class="container h-50 min-h-50 outline-2 outline-solid text-3 {classes}"
			hover-shadow="xl opacity-20"
			{...rest}
		>
			<a href={link} target="_blank" class="block min-h-full p-4">
				<h1 fw-bold text-8 font-display>{name}</h1>
				<p>{description}</p>
				{#if body}
					<p>{body}</p>
				{/if}
			</a>
		</div>
	{/if}
</div>
