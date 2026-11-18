

<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
import { programs } from '#lib/data/site';
	import { imgWidth, imgHeight, imgSrcset } from '#lib/images';
</script>
<svelte:head>
	<meta name="description" content="Academics at Sunshine International School, New Delhi — programs designed for every stage, from Nursery and pre-primary to Class XII senior secondary." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/academics" />
	<meta property="og:title" content="Academics | Sunshine International School" />
	<meta property="og:description" content="Academics at Sunshine International School, New Delhi — programs designed for every stage, from Nursery and pre-primary to Class XII senior secondary." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/academics" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/pre-primary.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Academics | Sunshine International School" />
	<meta name="twitter:description" content="Academics at Sunshine International School, New Delhi — programs designed for every stage, from Nursery and pre-primary to Class XII senior secondary." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/pre-primary.jpg" />
</svelte:head>

<PageHero title="Academics" subtitle="Programs designed for every stage — Nursery to Class XII." crumb={[{ label: 'Home', href: '/' }, { label: 'Academics' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="space-y-12">
	{#each programs as p}
		<Reveal><article id={p.id} class="grid scroll-mt-28 gap-6 md:grid-cols-2">
			<img src={p.img} alt={p.title} width={imgWidth(p.img)} height={imgHeight(p.img)} srcset={imgSrcset(p.img)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px" class="h-64 w-full rounded-lg object-cover shadow" loading="lazy" />
			<div class="min-w-0"><h2 class="font-display text-2xl font-bold sm:text-3xl">{p.title}</h2><p class="mt-1 font-bold text-maroon-800">{p.tagline}</p><p class="mt-3 leading-relaxed text-ink/70">{p.text} Classes, assessment and activities are designed for the age group, with a 25:1 student-teacher ratio and smart classrooms across the campus. (Demo content.)</p><a href="/admissions" class="mt-4 inline-flex min-h-11 items-center rounded-sm bg-maroon-800 px-5 text-sm font-extrabold text-white">ENQUIRE FOR {p.title.toUpperCase()}</a></div>
		</article></Reveal>
	{/each}
	</div>
</section>
