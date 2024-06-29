<script lang="ts">
	import { mouseSticky } from '$lib/actions/mouseSticky.svelte'

	const {
		name,
		description,
		link,
		class: classes = undefined,
		body = undefined,
		...rest
	}: Props = $props()

	type Props = {
		name: string
		description: string
		link: string
		class?: string
		body?: string
	}
</script>

<div
	use:mouseSticky
	class="h-50 min-h-50 outline-2 outline-solid text-3 {classes}"
	hover-shadow="xl opacity-20"
	transition="property-transform 300 ease-in"
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
