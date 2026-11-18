<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { facultyDirectory, teacherSlug } from '#lib/data/more';
</script>

<svelte:head>
	<meta name="description" content="Our Faculty at Sunshine International School, New Delhi — 150+ experienced educators, mentors and coaches across every department and wing." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/faculty" />
	<meta property="og:title" content="Our Faculty | Sunshine International School" />
	<meta property="og:description" content="Our Faculty at Sunshine International School, New Delhi — 150+ experienced educators, mentors and coaches across every department and wing." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/faculty" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Our Faculty | Sunshine International School" />
	<meta name="twitter:description" content="Our Faculty at Sunshine International School, New Delhi — 150+ experienced educators, mentors and coaches across every department and wing." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Our Faculty"
	subtitle="150+ experienced educators, mentors and coaches — average experience 12 years. All profiles are demo data for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Faculty' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	{#each facultyDirectory as dept}
		<Reveal>
			<h2 class="mt-10 font-display text-2xl font-bold first:mt-0 sm:text-3xl">{dept.department}</h2>
			<div class="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each dept.members as m}
					<a
						href="/faculty/{teacherSlug(m.name)}"
						class="block rounded-lg border border-ink/10 bg-white p-5 shadow-sm transition hover:border-maroon-800/40 hover:shadow-md"
					>
						<span class="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-800 font-display text-xl font-bold text-gold-400">{m.initials}</span>
						<p class="mt-3 font-display text-lg font-bold">{m.name}</p>
						<p class="text-sm font-bold text-maroon-800">{m.role}</p>
						<p class="mt-1 text-xs text-ink/60">{m.note}</p>
						<span class="mt-3 inline-block text-xs font-extrabold tracking-wider text-maroon-800">VIEW PROFILE →</span>
					</a>
				{/each}
			</div>
		</Reveal>
	{/each}
	<p class="mt-12 text-center text-xs text-ink/40">Demo website — all faculty profiles are mock content for client presentation.</p>
</section>
