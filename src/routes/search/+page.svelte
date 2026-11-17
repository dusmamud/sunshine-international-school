<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { searchIndex } from '#lib/data/site';

	let q = $state('');
	const popular = ['Admissions', 'Fees', 'Library', 'Transport', 'Scholarships', 'Open Day'];

	const stem = (s: string) =>
		s.toLowerCase().split(/\s+/).map((w) => w.replace(/s$/, '')).join(' ');
	let results = $derived(
		q.trim()
			? searchIndex.filter((item) => stem(item.label + ' ' + item.section).includes(stem(q.trim())))
			: []
	);
</script>

<PageHero
	title="Search"
	subtitle="Search every page of the Sunshine International School website — admissions, fees, faculty, circulars and more."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Search' }]}
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="relative">
			<Icon name="search" cls="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-ink/40" />
			<input
				type="search"
				bind:value={q}
				placeholder="Try “admissions”, “fees”, “library”, “transport”…"
				aria-label="Search the site"
				class="w-full rounded-lg border border-ink/20 py-4 pr-4 pl-12 text-base focus:border-maroon-700 focus:outline-none"
			/>
		</div>
		{#if !q.trim()}
			<p class="mt-6 text-xs font-extrabold tracking-[0.25em] text-maroon-800">POPULAR SEARCHES</p>
			<div class="mt-3 flex flex-wrap gap-2">
				{#each popular as p}
					<button type="button" onclick={() => (q = p)} class="min-h-11 rounded-full border border-maroon-800/25 bg-white px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-800 hover:text-white">{p}</button>
				{/each}
			</div>
		{/if}
	</Reveal>
	{#if q.trim()}
		<p class="mt-6 text-sm text-ink/60">{results.length} result{results.length === 1 ? '' : 's'} for “{q.trim()}”</p>
		<ul class="mt-4 space-y-2">
			{#each results as r}
				<li>
					<a href={r.href} class="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-5 py-4 shadow-sm transition hover:border-maroon-800/40 hover:shadow-md">
						<span class="font-bold">{r.label}</span>
						<span class="shrink-0 rounded-full bg-maroon-50 px-3 py-1 text-xs font-extrabold tracking-wider text-maroon-800">{r.section.toUpperCase()}</span>
					</a>
				</li>
			{:else}
				<li class="rounded-lg border border-dashed border-ink/20 bg-cream px-4 py-8 text-center text-sm text-ink/60">No results for “{q.trim()}” — try admissions, fees, library or transport.</li>
			{/each}
		</ul>
	{/if}
</section>
