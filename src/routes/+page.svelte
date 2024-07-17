<script lang="ts">
	import Project from '$lib/components/Project.svelte'
</script>

<main p-4 max-w-65ch m-auto>
	<h1
		class="slide-prime text-tcolor text-6 fw-bold font-display inline-block m-b-6
		pos-relative"
		underline="~ wavy 2 primary offset-4"
	>
		Milad Sedhom
	</h1>

	<p text-gray-5>
		Hi there, I am a fullstack web developer, passionate about creating pretty UIs and unique user
		experiences I am currently studying Computer Science and Physics.
	</p>

	<div p-5></div>

	<h2 class="text-4 fw-bold m-b-4 font-display">Projects</h2>
	<section flex="~ col gap-6">
		<Project
			class="border-dashed border-3 border-green-600 bg-bgcolor"
			name="PennyPal"
			description="a modern and intuitive expenses tracker"
			link="https://github.com/MiladSedhom/PennyPal"
		/>
		<Project
			class="border-dashed border-3 border-#219C84 bg-bgcolor"
			name="Science Talk"
			description="Social media application for students and students only."
			link="https://github.com/MiladSedhom/grad-project"
			body="Was made by a team of 2 as a graduation project for Department of Physcics and Computer Science, Facultiy of Science, Ain Shams unveristy"
		/>
	</section>
</main>

<style>
	.slide-prime {
		animation: slide-prime 1000ms cubic-bezier(0.23, 1, 0.32, 1);
	}
	@keyframes slide-prime {
		0% {
			clip-path: inset(0 100% 0 100% round 40rem);
			transform: translateX(-100%);
		}
		/* 90% {
			clip-path: inset(round 2rem);
			transform: translateX(15px);
		} */
		100% {
			clip-path: inset(0);
			transform: translateX(0);
		}
	}
</style>
