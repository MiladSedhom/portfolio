<script lang="ts">
	import Project from '$lib/components/Project.svelte';
</script>

<main p-4 max-w-65ch m-auto>
	<h1 text="tcolor 12" fw-bold font-display>Milad Sedhom</h1>
	<p>Hi there, I am a web deverloper, passionate about creating pretty UIs</p>

	<div p-10></div>

	<section flex="~ col gap-8">
		<Project
			class="bg-green-600"
			name="PennyPal"
			description="a modern and intutive expenses tracker"
			link="https://github.com/MiladSedhom/PennyPal"
		/>
		<Project
			class="bg-#219C84"
			name="Science Talk"
			description="Social media application for students and students only."
			link="https://github.com/MiladSedhom/grad-project"
			body="Was made by a team of 2 as a graduation project for Department of Physcics and Computer Science, Facultiy of Science, Ain Shams unveristy"
		/>
	</section>
</main>
