

<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
import { programs } from '#lib/data/site';
</script>
<PageHero title="Academics" subtitle="Programs designed for every stage — Nursery to Class XII." crumb={[{ label: 'Home', href: '/' }, { label: 'Academics' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="space-y-12">
	{#each programs as p}
		<Reveal><article id={p.id} class="grid scroll-mt-28 gap-6 md:grid-cols-2">
			<img src={p.img} alt={p.title} class="h-64 w-full rounded-lg object-cover shadow" loading="lazy" />
			<div class="min-w-0"><h2 class="font-display text-2xl font-bold sm:text-3xl">{p.title}</h2><p class="mt-1 font-bold text-maroon-800">{p.tagline}</p><p class="mt-3 leading-relaxed text-ink/70">{p.text} Classes, assessment and activities are designed for the age group, with a 25:1 student-teacher ratio and smart classrooms across the campus. (Demo content.)</p><a href="/admissions" class="mt-4 inline-flex min-h-11 items-center rounded-sm bg-maroon-800 px-5 text-sm font-extrabold text-white">ENQUIRE FOR {p.title.toUpperCase()}</a></div>
		</article></Reveal>
	{/each}
	</div>
</section>
