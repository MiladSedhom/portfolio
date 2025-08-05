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
			<a
				href="http://x.com/winter1v9"
				target="_blank"
				aria-label="Go to my twitter profile"
				class="group inline-block border-rd-50% p-2 line-height-1 pos-relative"
			>
				<div
					class="rotate w-36px h-36px border-rd-50% pos-absolute top-0 left-0 hidden"
					group-hover="block"
					outline="dotted 3 primary offset--2"
				></div>
				<div class="i-ri-twitter-x-fill?mask bg-tcolor text-5"></div>
			</a>

			<a
				href="http://github.com/MiladSedhom"
				target="_blank"
				aria-label="Go to my github profile"
				class="group inline-block border-rd-50% p-2 line-height-1 pos-relative"
			>
				<div
					class="rotate w-36px h-36px border-rd-50% pos-absolute top-0 left-0 hidden"
					group-hover="block"
					outline="dotted 3 primary offset--2"
				></div>
				<div class="i-logos-github-icon?mask bg-tcolor text-5"></div>
			</a>
		</div>
	</div>

	<p text-tcolor-1>
		Hello! I'm a fullstack developer passionate about creating meaningful digital experiences. I
		enjoy every part of the process – from figuring out how things should work to making sure they
		feel great to use.
		<a
			href="https://docs.google.com/document/d/1z1kJvo1gIBqgginSPViKgkoqldOc5lZ0cXtRa7RR9Eo/edit?usp=sharing"
			target="_blank"
			aria-label="View my CV"
			class="flex items-center text-tcolor-1 font-semibold hover:text-primary transition-colors"
		>
			<span class="text-14px">Full Resume</span>
			<span class="i-ri-arrow-right-up-line text-5"></span>
		</a>
	</p>

	<div p-5></div>

	<h2 class="text-4 fw-bold m-b-4 font-display">Work Experience</h2>
	<section flex="~ col gap-4" m-b-8>
		<Card class="border-dashed border-3 border-#7123ba bg-bgcolor">
			<div class="block min-h-full p-4">
				<div flex justify-between items-start m-b-2>
					<div>
						<h3 class="fw-bold text-4 font-display">PlayPlex</h3>
						<p class="text-3 text-tcolor-1">Fullstack Developer</p>
					</div>
					<span class="text-3 text-tcolor-1">5/2025 - Present</span>
				</div>
				<ul class="text-14px text-tcolor-1 list-none list-inside space-y-1">
					<li>
						Built comprehensive e-commerce marketplace for gaming services with advanced dashboard
						features
					</li>
					<li>
						Architected backend systems with tRPC and PostgreSQL, creating order management
						workflows and digital inventory systems with CSV import/export capabilities, implemented
						stock reservation system during payment sessions
					</li>
					<li>
						Implemented comprehensive testing suites including unit tests and integration tests,
						ensuring code quality and system reliability
					</li>
				</ul>
			</div>
		</Card>

		<Card class="border-dashed border-3 border-#117070 bg-bgcolor">
			<div class="block min-h-full p-4">
				<div flex justify-between items-start m-b-2>
					<div>
						<h3 class="fw-bold text-4 font-display">Bench HR</h3>
						<p class="text-3 text-tcolor-1">Frontend Developer</p>
					</div>
					<span class="text-3 text-tcolor-1">10/2024 - 4/2025</span>
				</div>
				<ul class="text-14px text-tcolor-1 list-none list-inside space-y-1">
					<li>
						Led web application development using React with complex UI components and state
						management
					</li>
					<li>
						Participated in daily standups and sprint planning for cross-functional team
						coordination
					</li>
					<li>
						Contributed to API design discussions to ensure optimal frontend-backend integration
					</li>
				</ul>
			</div>
		</Card>

		<Card class="border-dashed border-3 border-#219ac2 bg-bgcolor">
			<div class="block min-h-full p-4">
				<div flex justify-between items-start m-b-2>
					<div>
						<h3 class="fw-bold text-4 font-display">Kian Solutions</h3>
						<p class="text-3 text-tcolor-1">
							Fullstack Software <span class="font-semibold"> Intern </span>
						</p>
					</div>
					<span class="text-3 text-tcolor-1">05/2024 - 08/2024</span>
				</div>
				<ul class="text-14px text-tcolor-1 list-none list-inside space-y-1">
					<li>Built web applications with React using Redux, TanStack Query, and Ant Design</li>
					<li>Contributed to mobile app development using Flutter for cross-platform experience</li>
					<li>Participated in code reviews and agile development processes</li>
				</ul>
			</div>
		</Card>
	</section>

	<h2 class="text-4 fw-bold m-b-4 font-display">Recent Projects</h2>
	<section flex="~ col gap-6">
		<Card class="border-dashed border-3 border-green-600 bg-bgcolor">
			<div class="block min-h-full p-4">
				<div flex justify-between>
					<a
						href="https://github.com/MiladSedhom/PennyPal"
						target="_blank"
						aria-label="View this project on github"
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
						aria-label="View this project on github"
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

<style>
	li::before {
		content: '•';
		font-size: 1.25rem;
		margin-right: 6px;
	}

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
		animation: rotate 3500ms cubic-bezier(0, 0, 0.1, 1) forwards;
	}
	@keyframes rotate {
		0% {
			opacity: 0.7;
			transform: rotate(270deg);
		}

		100% {
			opacity: 1;
			transform: rotate(90deg);
		}
	}
</style>
