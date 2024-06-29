<script lang="ts">
	const mouse = $state<{ x: number; y: number }>({ x: 0, y: 0 });
	let d = $state();
	let div: HTMLDivElement;

	$effect(() => {
		d = div.getBoundingClientRect();
	});

	function mapRange(value: number, oldMin: number, oldMax: number, newMin: number, newMax: number) {
		return newMin + ((newMax - newMin) * (value - oldMin)) / (oldMax - oldMin);
	}

	const mouseMoveHandler = (e: MouseEvent) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		mouse.x = mapRange((mouseX - d.x) / d.width, 0, 1, -1, 1);
		mouse.y = mapRange((mouseY - d.y) / d.height, 0, 1, -1, 1);
	};
</script>

<main p-4 max-w-65ch m-auto>
	<h1 text="tcolor 12" fw-bold font-display>Milad Sedhom</h1>
	<p>Hi there, I am a web deverloper, passionate about creating pretty UIs</p>

	<div p-10></div>

	<section flex="~ col gap-8">
		<div
			onmousemove={mouseMoveHandler}
			onmouseleave={() => {
				mouse.x = 0;
				mouse.y = 0;
			}}
			style={` translate: ${4 * mouse.x}px ${4 * mouse.y}px;
					 rotate: ${-1 * mouse.x}deg;
				`}
			role="banner"
			bind:this={div}
			class="flex min-h-50 p-4 bg-green-600"
			outline="2 solid "
			hover-shadow="green-900 xl opacity-20"
			transition="property-transform property-shadow 150 ease-in"
			text-3
		>
			<a href="https://github.com/MiladSedhom/PennyPal" target="_blank">
				<h1 fw-bold text-8 font-display>PennyPal</h1>
				<p>a modern and intutive expenses tracker</p>
			</a>
		</div>

		<div
			style="--color: #219C84"
			class="flex min-h-50 p-4 bg-[var(--color)]"
			outline="2 solid "
			hover="rotate--2"
			hover-shadow="#219C84 xl opacity-20"
			transition="property-transform property-shadow 150 ease-in"
			text="3 tcolor-alt"
		>
			<a href="https://github.com/MiladSedhom/grad-project" target="_blank">
				<h1 fw-bold text-8 font-display>Science Talk</h1>
				<p>Social media application for students and students only.</p>
				<p>
					Was made by a team of 2 as a graduation project for Department of Physcics and Computer
					Science, Facultiy of Science, Ain Shams unveristy
				</p>
			</a>
		</div>
	</section>
</main>
