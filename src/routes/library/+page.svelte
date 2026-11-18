<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { libraryInfo } from '#lib/data/more';
</script>

<svelte:head>
	<meta name="description" content="Library at Sunshine International School, New Delhi — 20,000+ books, a reading hall for 120 students and a programme that makes every child a reader." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/library" />
	<meta property="og:title" content="Library | Sunshine International School" />
	<meta property="og:description" content="Library at Sunshine International School, New Delhi — 20,000+ books, a reading hall for 120 students and a programme that makes every child a reader." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/library" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Library | Sunshine International School" />
	<meta name="twitter:description" content="Library at Sunshine International School, New Delhi — 20,000+ books, a reading hall for 120 students and a programme that makes every child a reader." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Library"
	subtitle="20,000+ books, a reading hall for 120 students and a programme that makes every child a reader. (Demo content.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life', href: '/campus-life' }, { label: 'Library' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each libraryInfo.highlights as h, i}
			<Reveal cls="min-w-0" delay={i * 100}>
				<article class="card-lift h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name="book" cls="h-6 w-6" /></span>
					<h2 class="mt-4 font-display text-xl font-bold">{h.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{h.desc}</p>
				</article>
			</Reveal>
		{/each}
	</div>
	<Reveal>
		<div class="mt-12 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
			<div class="bg-maroon-800 px-6 py-4 text-white"><h2 class="font-display text-xl font-bold">Library Timings</h2></div>
			<ul class="divide-y divide-ink/5">
				{#each libraryInfo.timings as t}
					<li class="flex flex-col gap-1 px-6 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
						<span class="font-bold text-maroon-800">{t.who}</span>
						<span class="text-ink/70">{t.time}</span>
					</li>
				{/each}
			</ul>
		</div>
	</Reveal>
	<Reveal>
		<div class="mt-10 rounded-lg bg-cream p-6 text-center">
			<h2 class="font-display text-2xl font-bold">Borrowing rules</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink/65">Two books per student, issued for 14 days and renewable once. Lost books are charged at the cover price. Class library periods are on the timetable — see the <a href="/timetable" class="font-bold text-maroon-800 underline">class timetables</a>.</p>
		</div>
	</Reveal>
</section>
