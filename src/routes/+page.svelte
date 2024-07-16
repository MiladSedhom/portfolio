<script lang="ts">
	import Project from '$lib/components/Project.svelte'
	import ProjectWithAction from '$lib/components/ProjectWithAction.svelte'
</script>

<main p-4 max-w-65ch m-auto>
	<h1
		class="slide-prime"
		text="tcolor 12"
		fw-bold
		font-display
		inline-block
		bg="amber"
		p-2
		border-rd-xl
	>
		Milad Sedhom
	</h1>

	<p>Hi there, I am a web deverloper, passionate about creating pretty UIs</p>

	<div p-10></div>

	<section flex="~ col gap-8">
		<Project
			class="bg-green-600"
			name="PennyPal"
			description="a modern and intutive expenses tracker"
			link="https://github.com/MiladSedhom/PennyPal"
		/>
		<ProjectWithAction
			class="bg-#219C84"
			name="Science Talk"
			description="Social media application for students and students only."
			link="https://github.com/MiladSedhom/grad-project"
			body="Was made by a team of 2 as a graduation project for Department of Physcics and Computer Science, Facultiy of Science, Ain Shams unveristy"
		/>
	</section>
</main>

<style>
	.slide-prime {
		animation: slide-prime 1500ms cubic-bezier(0.23, 1, 0.32, 1);
	}
	@keyframes slide-prime {
		0% {
			clip-path: inset(0 100% 0 100% round 70rem);
			transform: translateX(-100%);
		}
		89% {
			clip-path: inset(round 2rem);
			transform: translateX(15px);
		}
		100% {
			clip-path: inset(0);
			transform: translateX(0);
		}
	}
</style>
