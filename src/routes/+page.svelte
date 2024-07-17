<script lang="ts">
	import Card from '$lib/components/Card.svelte'
</script>

<main p-4 max-w-65ch m-auto>
	<div flex justify-between items-start m-b-6>
		<h1
			class="slide-prime text-tcolor text-6 fw-bold font-display inline-block
		pos-relative"
			underline="~ wavy 2 primary offset-4"
		>
			Milad Sedhom
		</h1>

		<a
			href="http://github.com/MiladSedhom"
			target="_blank"
			class="border-rd-50% line-height-1 p-2"
			hover-outline="dotted 3 primary offset--2"
		>
			<div class="i-logos-github-icon?mask bg-tcolor text-5"></div>
		</a>
	</div>

	<p text-tcolor-1>
		Hi there, I am a fullstack web developer, passionate about creating pretty UIs and unique user
		experiences I am currently studying Computer Science and Physics.
	</p>

	<div p-5></div>

	<h2 class="text-4 fw-bold m-b-4 font-display">Projects</h2>
	<section flex="~ col gap-6">
		<Card class="border-dashed border-3 border-green-600 bg-bgcolor">
			<a
				href="https://github.com/MiladSedhom/PennyPal"
				target="_blank"
				class="block min-h-full p-4"
			>
				<div flex justify-between>
					<h1 fw-bold text-5 font-display>PennyPal</h1>
					<div p-2>
						<div class="i-logos-svelte-icon text-5"></div>
						<div class="i-logos-prisma text-5"></div>
						<div class="i-logos-supabase-icon?mask bg-#288e5c text-5"></div>
					</div>
				</div>
				<p text-14px>a modern and intuitive expenses tracker</p>
			</a>
		</Card>
		<Card class="border-dashed border-3 border-#219C84 bg-bgcolor">
			<a
				href="https://github.com/MiladSedhom/grad-project"
				target="_blank"
				class="block min-h-full p-4"
			>
				<div flex justify-between>
					<h1 fw-bold text-5 font-display>Science Talk</h1>
					<div p-2>
						<div class="i-logos-svelte-icon text-5"></div>
						<div class="i-logos-prisma text-5"></div>
						<div class="i-logos-supabase-icon text-5"></div>
					</div>
				</div>
				<p text-14px>Social media application for students and students only.</p>
				<p text-3>
					Was made by a team of 2 as a graduation project for Department of Physcics and Computer
					Science, Facultiy of Science, Ain Shams unveristy
				</p>
			</a>
		</Card>
	</section>
</main>

<style>
	.slide-prime {
		animation: slide-prime 1000ms cubic-bezier(0.23, 1, 0.32, 1);
	}
	@keyframes slide-prime {
		0% {
			clip-path: inset(0 100% 0 100%);
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
