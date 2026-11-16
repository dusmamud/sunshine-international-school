<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';

	let { data } = $props();
	const item = $derived(data.item);
	const body = $derived(data.body);
	const related = $derived(data.related);
</script>

<svelte:head>
	<title>{item.title} | Sunshine International School</title>
	<meta name="description" content={item.excerpt} />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/news-events/{item.slug}" />
</svelte:head>

<PageHero
	title={item.title}
	subtitle="{item.date} · {item.category}"
	crumb={[{ label: 'Home', href: '/' }, { label: 'News & Events', href: '/news-events' }, { label: item.title }]}
/>

<section class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<img src={item.img} alt={item.title} class="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96" />
		{#each body as p}
			<p class="mt-6 text-[1.05rem] leading-relaxed text-ink/80">{p}</p>
		{/each}
		<p class="mt-8 text-xs text-ink/40">Demo website — this article is mock content for client presentation.</p>
	</Reveal>

	<Reveal>
		<h2 class="mt-14 font-display text-2xl font-bold sm:text-3xl">More News &amp; Events</h2>
		<div class="mt-6 grid gap-4 sm:grid-cols-3">
			{#each related as r}
				<a href="/news-events/{r.slug}" class="block overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:shadow-lg">
					<img src={r.img} alt={r.title} class="h-36 w-full object-cover" loading="lazy" />
					<div class="p-4">
						<p class="text-[0.65rem] font-extrabold tracking-wider text-maroon-800">{r.date}</p>
						<h3 class="mt-1 font-display font-bold leading-snug">{r.title}</h3>
					</div>
				</a>
			{/each}
		</div>
		<a href="/news-events" class="mt-8 inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">← ALL NEWS &amp; EVENTS</a>
	</Reveal>
</section>
