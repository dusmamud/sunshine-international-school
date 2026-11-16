<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { calendarTerms, calendarEvents } from '#lib/data/more';

	let filter = $state('All');
	const cats = ['All', 'Holiday', 'Exam', 'Event', 'Activity'];
	let shown = $derived(filter === 'All' ? calendarEvents : calendarEvents.filter((e) => e.category === filter));
</script>

<PageHero
	title="Academic Calendar"
	subtitle="Session 2026–27 — terms, holidays, examinations and school events. All dates are demo data for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'Academic Calendar' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-2">
		{#each calendarTerms as t}
			<Reveal cls="min-w-0">
				<div class="h-full rounded-lg bg-maroon-800 p-6 text-white shadow-sm sm:p-8">
					<p class="text-xs font-extrabold tracking-[0.25em] text-gold-400">{t.term.toUpperCase()}</p>
					<h2 class="mt-2 font-display text-2xl font-bold">{t.period}</h2>
					<p class="mt-2 text-sm text-white/75">{t.note}</p>
				</div>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter events">
			{#each cats as c}
				<button
					type="button"
					role="tab"
					aria-selected={filter === c}
					onclick={() => (filter = c)}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {filter === c
						? 'bg-maroon-800 text-white'
						: 'border border-maroon-800/25 bg-white text-maroon-800 hover:bg-maroon-50'}"
				>
					{c}
				</button>
			{/each}
		</div>
		<div class="mt-6 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="w-full min-w-[560px] text-left text-sm">
				<thead>
					<tr class="bg-maroon-800 text-white">
						<th class="px-5 py-3">Date</th>
						<th class="px-5 py-3">Event</th>
						<th class="px-5 py-3">Category</th>
					</tr>
				</thead>
				<tbody>
					{#each shown as e}
						<tr class="border-b border-ink/5 last:border-0">
							<td class="px-5 py-3 font-bold whitespace-nowrap text-maroon-800">{e.date}</td>
							<td class="px-5 py-3">{e.event}</td>
							<td class="px-5 py-3"><span class="rounded-full bg-maroon-50 px-3 py-1 text-xs font-bold text-maroon-800">{e.category}</span></td>
						</tr>
					{:else}
						<tr><td colspan="3" class="px-5 py-6 text-center text-ink/60">No events in this category.</td></tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-6 text-center text-xs text-ink/40">Demo website — all dates are mock content for client presentation.</p>
	</Reveal>
</section>
