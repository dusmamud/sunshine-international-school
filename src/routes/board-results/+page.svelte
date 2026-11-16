<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { boardResults } from '#lib/data/more';

	let year = $state(boardResults[0].year);
	let current = $derived(boardResults.find((r) => r.year === year) ?? boardResults[0]);
</script>

<PageHero
	title="Board Results"
	subtitle="CBSE Class X & XII results for the last three years. All figures are demo data for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'Board Results' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="tablist" aria-label="Result year">
			{#each boardResults as r}
				<button
					type="button"
					role="tab"
					aria-selected={year === r.year}
					onclick={() => (year = r.year)}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {year === r.year
						? 'bg-maroon-800 text-white'
						: 'border border-maroon-800/25 bg-white text-maroon-800 hover:bg-maroon-50'}"
				>
					{r.year}
				</button>
			{/each}
		</div>
	</Reveal>

	<div class="mt-8 grid gap-6 md:grid-cols-2">
		{#each [{ cls: 'Class X', data: current.x }, { cls: 'Class XII', data: current.xii }] as c}
			<Reveal cls="min-w-0">
				<article class="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
					<p class="text-xs font-extrabold tracking-[0.25em] text-maroon-800">CBSE BOARD · {current.year}</p>
					<h2 class="mt-2 font-display text-3xl font-bold">{c.cls}</h2>
					<p class="mt-4 font-display text-5xl font-bold text-maroon-800">{c.data.pass}% <span class="text-xl text-ink/60">pass rate</span></p>
					<dl class="mt-6 space-y-3 text-sm">
						<div class="flex justify-between border-b border-ink/5 pb-2"><dt class="text-ink/60">Students appeared</dt><dd class="font-bold">{c.data.appeared}</dd></div>
						<div class="flex justify-between border-b border-ink/5 pb-2"><dt class="text-ink/60">Students passed</dt><dd class="font-bold">{c.data.passed}</dd></div>
						<div class="flex justify-between border-b border-ink/5 pb-2"><dt class="text-ink/60">Scored above 90%</dt><dd class="font-bold">{c.data.above90}</dd></div>
						<div class="flex justify-between"><dt class="text-ink/60">School topper</dt><dd class="font-bold">{c.data.topper} — {c.data.topScore}</dd></div>
					</dl>
				</article>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-10 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-maroon-800 text-white">
						<th class="px-5 py-3">Year</th>
						<th class="px-5 py-3">Class X pass %</th>
						<th class="px-5 py-3">Class X topper</th>
						<th class="px-5 py-3">Class XII pass %</th>
						<th class="px-5 py-3">Class XII topper</th>
					</tr>
				</thead>
				<tbody>
					{#each boardResults as r}
						<tr class="border-b border-ink/5 last:border-0">
							<td class="px-5 py-3 font-bold">{r.year}</td>
							<td class="px-5 py-3">{r.x.pass}% ({r.x.above90} above 90%)</td>
							<td class="px-5 py-3">{r.x.topper} — {r.x.topScore}</td>
							<td class="px-5 py-3">{r.xii.pass}% ({r.xii.above90} above 90%)</td>
							<td class="px-5 py-3">{r.xii.topper} — {r.xii.topScore}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-6 text-center text-xs text-ink/40">Demo website — all results are mock content for client presentation.</p>
	</Reveal>
</section>
