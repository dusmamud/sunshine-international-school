<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { examTables } from '#lib/data/more';

	let band = $state(0);
</script>

<svelte:head>
	<meta name="description" content="Examinations at Sunshine International School, New Delhi — date sheets, assessment patterns and results for Classes VI to XII, all in one place." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/examination" />
	<meta property="og:title" content="Examinations | Sunshine International School" />
	<meta property="og:description" content="Examinations at Sunshine International School, New Delhi — date sheets, assessment patterns and results for Classes VI to XII, all in one place." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/examination" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Examinations | Sunshine International School" />
	<meta name="twitter:description" content="Examinations at Sunshine International School, New Delhi — date sheets, assessment patterns and results for Classes VI to XII, all in one place." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Examinations"
	subtitle="Date sheets, assessment patterns and results — everything about how we assess, in one place. (Demo dates for 2026–27.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'Examinations' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="tabs-underline flex flex-wrap gap-1 border-b border-ink/10" role="tablist" aria-label="Class bands">
			{#each examTables as t, i}
				<button type="button" role="tab" aria-selected={band === i} onclick={() => (band = i)} class="min-h-12 px-4 text-sm font-extrabold tracking-wide transition {band === i ? 'text-maroon-800' : 'text-ink/55 hover:text-maroon-800'}">{t.band}</button>
			{/each}
			<span class="tab-indicator" style="--tab-index: {band}; --tab-count: {examTables.length}"></span>
		</div>
		<p class="mt-5 rounded-lg bg-cream px-4 py-3 text-sm leading-relaxed text-ink/75"><strong class="text-maroon-800">Assessment pattern:</strong> {examTables[band].pattern}</p>
		<div class="mt-5 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-maroon-800 text-white">
						<th class="px-5 py-4 font-extrabold">Examination</th>
						<th class="px-5 py-4 font-extrabold">Dates</th>
						<th class="px-5 py-4 font-extrabold">Subjects / Syllabus</th>
					</tr>
				</thead>
				<tbody>
					{#each examTables[band].rows as r, i}
						<tr class={i % 2 === 0 ? 'bg-white' : 'bg-cream/60'}>
							<td class="px-5 py-4 font-bold text-maroon-800">{r.exam}</td>
							<td class="px-5 py-4 whitespace-nowrap">{r.dates}</td>
							<td class="px-5 py-4 text-ink/75">{r.subjects}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Reveal>
	<Reveal>
		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			<a href="/board-results" class="card-lift block rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
				<h2 class="font-display text-xl font-bold">Board Results</h2>
				<p class="mt-2 text-sm leading-relaxed text-ink/65">100% pass in Classes X and XII for three years running — see toppers and year-wise results.</p>
				<span class="mt-3 inline-flex items-center gap-1 text-xs font-extrabold tracking-wider text-maroon-800">VIEW RESULTS <span aria-hidden="true">→</span></span>
			</a>
			<a href="/academic-calendar" class="card-lift block rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
				<h2 class="font-display text-xl font-bold">Academic Calendar</h2>
				<p class="mt-2 text-sm leading-relaxed text-ink/65">Holidays, events and exam windows for the full 2026–27 session.</p>
				<span class="mt-3 inline-flex items-center gap-1 text-xs font-extrabold tracking-wider text-maroon-800">VIEW CALENDAR <span aria-hidden="true">→</span></span>
			</a>
		</div>
	</Reveal>
</section>
