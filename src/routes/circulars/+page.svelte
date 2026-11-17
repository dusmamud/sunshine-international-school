<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { circulars } from '#lib/data/more';

	let query = $state('');
	let cat = $state('All');
	const cats = ['All', ...Array.from(new Set(circulars.map((c) => c.category)))];
	let shown = $derived(
		circulars.filter(
			(c) =>
				(cat === 'All' || c.category === cat) &&
				c.title.toLowerCase().includes(query.trim().toLowerCase())
		)
	);
</script>

<PageHero
	title="Circulars"
	subtitle="Official notices and circulars from the school office — searchable, with downloadable copies. (Demo circulars.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'School', href: '/notice-board' }, { label: 'Circulars' }]}
/>

<section class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-col gap-3 sm:flex-row">
			<div class="relative flex-1">
				<Icon name="search" cls="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-ink/40" />
				<input type="search" bind:value={query} placeholder="Search circulars…" aria-label="Search circulars" class="w-full rounded-sm border border-ink/20 py-3 pr-3 pl-10 text-sm focus:border-maroon-700 focus:outline-none" />
			</div>
			<select bind:value={cat} aria-label="Filter by category" class="rounded-sm border border-ink/20 bg-white px-3 py-3 text-sm font-bold text-maroon-800 focus:border-maroon-700 focus:outline-none">
				{#each cats as c}<option>{c}</option>{/each}
			</select>
		</div>
	</Reveal>
	<div class="mt-6 space-y-3">
		{#each shown as c}
			<Reveal>
				<article class="flex flex-col gap-3 rounded-lg border border-ink/10 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
					<div class="min-w-0">
						<p class="text-xs font-extrabold tracking-wider text-maroon-800">{c.date.toUpperCase()} · {c.category.toUpperCase()}</p>
						<h2 class="mt-1 font-bold leading-snug">{c.title}</h2>
					</div>
					<a href={c.file} class="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm border border-maroon-800 px-4 text-xs font-extrabold tracking-wider text-maroon-800 transition hover:bg-maroon-50"><Icon name="download" cls="h-4 w-4" /> PDF</a>
				</article>
			</Reveal>
		{:else}
			<p class="rounded-lg border border-dashed border-ink/20 bg-cream px-4 py-8 text-center text-sm text-ink/60">No circulars match your search — try a different word or category.</p>
		{/each}
	</div>
	<p class="mt-6 text-center text-xs text-ink/45">Older circulars are available at the school office. This is a demo archive.</p>
</section>
