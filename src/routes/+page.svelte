<script lang="ts">
	import Card from '$lib/components/Card.svelte'
</script>

<main p-4 max-w-65ch m-auto>
	<div flex justify-between items-start m-b-6>
		<h1
			class="slide-prime-left text-tcolor text-6 fw-bold font-display inline-block
					pos-relative"
			underline="~ wavy 2 primary offset-4"
		>
			Milad Sedhom
		</h1>

		<div class="slide-prime-right">
			{@render iconLink('http://x.com/winter1v9', 'i-ri-twitter-x-fill')}
			{@render iconLink('http://github.com/MiladSedhom', 'i-logos-github-icon')}
		</div>
	</div>

	<p text-tcolor-1>
		Hi there, I am a fullstack web developer, passionate about creating pretty UIs and unique user
		experiences I am currently studying Computer Science and Physics.
	</p>

	<div p-5></div>

	<h2 class="text-4 fw-bold m-b-4 font-display">Projects</h2>
	<section flex="~ col gap-6">
		<Card class="border-dashed border-3 border-green-600 bg-bgcolor">
			<div class="block min-h-full p-4">
				<div flex justify-between>
					<a
						href="https://github.com/MiladSedhom/PennyPal"
						target="_blank"
						class="fw-bold text-5 font-display"
					>
						<span inline-flex items-center>
							PennyPal
							<div class="i-ri-arrow-right-up-line bg-tcolor-1 text-4"></div>
						</span>
					</a>
					<div p-2>
						<div class="i-logos-svelte-icon text-5"></div>
						<div class="i-logos-prisma text-5"></div>
						<div class="i-logos-supabase-icon?mask bg-#288e5c text-5"></div>
					</div>
				</div>
				<p text-14px>a modern and intuitive expenses tracker</p>
			</div>
		</Card>
		<Card class="border-dashed border-3 border-#219C84 bg-bgcolor">
			<div class="block min-h-full p-4">
				<div flex justify-between>
					<a
						href="https://github.com/MiladSedhom/grad-project"
						target="_blank"
						class="fw-bold text-5 font-display"
					>
						<span inline-flex items-center>
							Science Talk
							<div class="i-ri-arrow-right-up-line bg-tcolor-1 text-4"></div>
						</span>
					</a>
					<div p-2>
						<div class="i-logos-svelte-icon text-5"></div>
						<div class="i-logos-prisma text-5"></div>
						<div class="i-logos-supabase-icon?mask bg-#288e5c text-5"></div>
					</div>
				</div>
				<p text-14px>Social media application for students and students only.</p>
				<p text-3>
					Was made by a team of 2 as a graduation project for Department of Physics and Computer
					Science, Faculty of Science, Ain Shams university
				</p>
			</div></Card
		>
	</section>
</main>

{#snippet iconLink(href: string, icon: string)}
	<a {href} target="_blank" class="group inline-block border-rd-50% p-2 line-height-1 pos-relative">
		<div
			class="rotate w-36px h-36px border-rd-50% pos-absolute top-0 left-0 hidden"
			group-hover="block"
			outline="dotted 3 primary offset--2"
		></div>
		<div class="{icon}?mask bg-tcolor text-5"></div>
	</a>
{/snippet}

<style>
	.slide-prime-left {
		animation: slide-prime-left 1000ms cubic-bezier(0.23, 1, 0.32, 1);
	}
	@keyframes slide-prime-left {
		0% {
			clip-path: inset(0 100% 0 100%);
			transform: translateX(-100%);
		}

		100% {
			clip-path: inset(0);
			transform: translateX(0);
		}
	}
	.slide-prime-right {
		animation: slide-prime-right 1000ms cubic-bezier(0.23, 1, 0.32, 1);
	}
	@keyframes slide-prime-right {
		0% {
			clip-path: inset(0 100% 0 100%);
			transform: translateX(100%);
		}

		100% {
			clip-path: inset(0);
			transform: translateX(0);
		}
	}
	.rotate {
		animation: rotate 2000ms cubic-bezier(0, 0, 0.1, 1);
	}
	@keyframes rotate {
		0% {
			opacity: 0.7;
			transform: rotate(180deg);
		}

		100% {
			opacity: 1;
			transform: rotate(0deg);
		}
	}
</style>
