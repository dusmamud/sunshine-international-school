<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { notices } from '#lib/data/more';

	let query = $state('');
	let shown = $derived(
		notices.filter(
			(n) =>
				!query.trim() ||
				(n.title + ' ' + n.category + ' ' + n.date).toLowerCase().includes(query.trim().toLowerCase())
		)
	);
	let pinned = $derived(shown.filter((n) => n.pinned));
	let rest = $derived(shown.filter((n) => !n.pinned));
</script>

<PageHero
	title="Notice Board"
	subtitle="Official notices for parents and students. Pinned notices stay at the top. All notices are demo data for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Notice Board' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<label for="notice-search" class="sr-only">Search notices</label>
		<div class="relative max-w-xl">
			<input
				id="notice-search"
				type="search"
				bind:value={query}
				placeholder="Search notices — try “admissions”, “fees”, “sports”…"
				class="w-full rounded-lg border border-ink/20 bg-white px-4 py-3.5 pr-11 text-sm focus:border-maroon-700 focus:outline-none"
			/>
			<Icon name="search" cls="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-ink/40" />
		</div>
	</Reveal>

	{#if pinned.length}
		<Reveal>
			<h2 class="mt-10 text-xs font-extrabold tracking-[0.25em] text-maroon-800">PINNED NOTICES</h2>
			<ul class="mt-4 space-y-3">
				{#each pinned as n}
					<li class="flex gap-4 rounded-lg border-l-4 border-gold-500 bg-cream px-5 py-4 shadow-sm">
						<Icon name="pin" cls="mt-0.5 h-5 w-5 shrink-0 text-maroon-800" />
						<div class="min-w-0">
							<p class="font-bold leading-snug">{n.title}</p>
							<p class="mt-1 text-xs font-bold tracking-wider text-maroon-800">{n.date} · {n.category.toUpperCase()}</p>
						</div>
					</li>
				{/each}
			</ul>
		</Reveal>
	{/if}

	<Reveal>
		<h2 class="mt-10 text-xs font-extrabold tracking-[0.25em] text-maroon-800">ALL NOTICES</h2>
		<ul class="mt-4 space-y-3">
			{#each rest as n}
				<li class="flex gap-4 rounded-lg border border-ink/10 bg-white px-5 py-4 shadow-sm">
					<span class="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-md bg-maroon-50 text-maroon-800">
						<span class="text-[0.6rem] font-bold tracking-wider">{n.date.split(' ')[1]}</span>
						<span class="font-display text-base leading-none font-bold">{n.date.split(' ')[0]}</span>
					</span>
					<div class="min-w-0">
						<p class="font-bold leading-snug">{n.title}</p>
						<p class="mt-1 text-xs font-bold tracking-wider text-maroon-800">{n.date} · {n.category.toUpperCase()}</p>
					</div>
				</li>
			{:else}
				<li class="rounded-lg border border-ink/10 bg-white px-5 py-8 text-center text-ink/60">
					No notices match “{query}”.
				</li>
			{/each}
		</ul>
		<p class="mt-8 text-center text-xs text-ink/40">Demo website — all notices are mock content for client presentation.</p>
	</Reveal>
</section>
