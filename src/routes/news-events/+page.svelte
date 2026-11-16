<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<PageHero title="News & Events" subtitle="What's happening at Sunshine International School. (Demo items.)" crumb={[{ label: 'Home', href: '/' }, { label: 'News & Events' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-3">
	{#each [{ d: '20 MAY 2024', t: 'Summer Camp 2024 Registrations Open!', x: 'Cricket, coding, music and art — four weeks of fun learning.' }, { d: '15 MAY 2024', t: 'Parent-Teacher Meeting', x: 'Saturday, 25 May 2024, 9 AM – 1 PM across all classes.' }, { d: '10 MAY 2024', t: 'Admissions Open for 2024-25 Session', x: 'Nursery to Class XII — apply online or visit the campus.' }, { d: '02 MAY 2024', t: 'Annual Sports Day Winners', x: 'Red House lifts the overall championship trophy.' }, { d: '25 APR 2024', t: 'Science Exhibition 2024', x: '120 student projects on display — parents welcome.' }, { d: '18 APR 2024', t: 'Inter-School Debate Champions', x: 'SIS team wins the Delhi inter-school debate.' }] as n}
		<Reveal cls="min-w-0"><article class="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm"><p class="text-xs font-extrabold tracking-wider text-maroon-800">{n.d}</p><h2 class="mt-2 font-display text-xl font-bold">{n.t}</h2><p class="mt-2 text-sm leading-relaxed text-ink/65">{n.x}</p></article></Reveal>
	{/each}
	</div>
</section>
