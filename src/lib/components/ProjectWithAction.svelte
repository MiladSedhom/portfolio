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

<div bind:this={container} bg-neutral-300 border-rd-xl>
	{#if isIn}
		<div
			use:mouseSticky
			in:fly={{ duration: 1000, opacity: 0.7, y: 50 }}
			class="container min-h-25 text-3 border-rd-xl {classes} "
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
	{/if}
</div>
