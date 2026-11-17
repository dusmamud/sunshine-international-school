<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { timetables } from '#lib/data/more';

	let stage = $state(0);
</script>

<PageHero
	title="Class Timetables"
	subtitle="A school day at Sunshine, stage by stage — assemblies, periods, breaks and clubs. (Demo timetables for 2026–27.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'Timetables' }]}
/>

<section class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="tabs-underline flex flex-wrap gap-1 border-b border-ink/10" role="tablist" aria-label="Stages">
			{#each timetables as t, i}
				<button type="button" role="tab" aria-selected={stage === i} onclick={() => (stage = i)} class="min-h-12 px-3 text-xs font-extrabold tracking-wide transition sm:px-4 sm:text-sm {stage === i ? 'text-maroon-800' : 'text-ink/55 hover:text-maroon-800'}">{t.stage}</button>
			{/each}
			<span class="tab-indicator" style="--tab-index: {stage}; --tab-count: {timetables.length}"></span>
		</div>
		<div class="mt-6">
			<h2 class="font-display text-2xl font-bold">{timetables[stage].stage} <span class="text-lg text-ink/55">· {timetables[stage].classes}</span></h2>
			<p class="mt-1 text-sm text-ink/60">{timetables[stage].note}</p>
			<ul class="mt-5 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
				{#each timetables[stage].periods as p, i}
					<li class="flex items-center gap-3 px-5 py-3.5 text-sm {i % 2 === 0 ? 'bg-white' : 'bg-cream/60'}">
						<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-maroon-50 text-xs font-extrabold text-maroon-800">{i + 1}</span>
						<span class="leading-relaxed">{p}</span>
					</li>
				{/each}
			</ul>
		</div>
	</Reveal>
	<p class="mt-6 text-center text-xs text-ink/45">Timings may change on exam days and festival days — see the <a href="/academic-calendar" class="font-bold text-maroon-800 underline">Academic Calendar</a>.</p>
</section>
