<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { newsItems } from '#lib/data/more';
</script>

<PageHero title="News & Events" subtitle="What's happening at Sunshine International School. (Demo items.)" crumb={[{ label: 'Home', href: '/' }, { label: 'News & Events' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-3">
	{#each newsItems as n}
		<Reveal cls="min-w-0">
			<a href="/news-events/{n.slug}" class="block h-full overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:shadow-lg">
				<img src={n.img} alt={n.title} class="h-44 w-full object-cover" loading="lazy" />
				<div class="p-6">
					<p class="text-xs font-extrabold tracking-wider text-maroon-800">{n.date} · {n.category.toUpperCase()}</p>
					<h2 class="mt-2 font-display text-xl font-bold">{n.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{n.excerpt}</p>
					<span class="mt-3 inline-block text-xs font-extrabold tracking-wider text-maroon-800">READ MORE →</span>
				</div>
			</a>
		</Reveal>
	{/each}
	</div>
</section>
