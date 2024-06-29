<script lang="ts">
	import { mapRange } from '$lib/utils';

	const { name, description, link, class: classes, ...rest }: Props = $props();

	const mouse = $state<{ x: number; y: number }>({ x: 0, y: 0 });

	let div: HTMLDivElement;
	let divRect: DOMRect;

	$effect(() => {
		divRect = div.getBoundingClientRect();
	});

	const mouseMoveHandler = (e: MouseEvent) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		mouse.x = mapRange((mouseX - divRect.x) / divRect.width, 0, 1, -1, 1);
		mouse.y = mapRange((mouseY - divRect.y) / divRect.height, 0, 1, -1, 1);
	};

	type Props = {
		name: string;
		description: string;
		link: string;
		class: string;
	};
</script>

<div
	onmousemove={mouseMoveHandler}
	onmouseleave={() => {
		mouse.x = 0;
		mouse.y = 0;
	}}
	style={`transform: translate(${8 * mouse.x}px, ${4 * mouse.y}px) rotate(${-1 * mouse.x}deg) ;
                ${mouse.x + mouse.y && 'transition-duration: 0s;'} `}
	role="banner"
	bind:this={div}
	class="h-50 min-h-50 outline-2 outline-solid text-3 {classes}"
	hover-shadow="xl opacity-20"
	transition="property-transform 300 ease-in"
	{...rest}
>
	<a href={link} target="_blank" class="block min-h-full p-4">
		<h1 fw-bold text-8 font-display>{name}</h1>
		<p>{description}</p>
	</a>
</div>
