<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { imgWidth, imgHeight, imgSrcset } from '#lib/images';

	let { data } = $props();
	const item = $derived(data.item);
	const body = $derived(data.body);
	const related = $derived(data.related);
	const truncate = (s: string, n = 155) =>
		s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
	const desc = $derived(
		truncate(`${item.title} — ${item.excerpt} ${item.date}, Sunshine International School, New Delhi.`)
	);
	const articleLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: item.title,
		description: item.excerpt,
		image: 'https://sunshine-international-school.pages.dev' + item.img,
		author: {
			'@type': 'Organization',
			'@id': 'https://sunshine-international-school.pages.dev/#school',
			name: 'Sunshine International School'
		},
		publisher: {
			'@type': 'Organization',
			'@id': 'https://sunshine-international-school.pages.dev/#school',
			name: 'Sunshine International School',
			logo: {
				'@type': 'ImageObject',
				url: 'https://sunshine-international-school.pages.dev/favicon.svg'
			}
		},
		datePublished: item.dateIso,
		dateModified: item.dateIso,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://sunshine-international-school.pages.dev/news-events/' + item.slug
		}
	});
</script>

<svelte:head>
	<title>{item.title} | Sunshine International School</title>
	<meta name="description" content={desc} />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/news-events/{item.slug}" />
	<meta property="og:title" content="{item.title} | Sunshine International School" />
	<meta property="og:description" content={desc} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/news-events/{item.slug}" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev{item.img}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{item.title} | Sunshine International School" />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev{item.img}" />
	{@html `<script type="application/ld+json">${JSON.stringify(articleLd)}</script>`}
</svelte:head>

<PageHero
	title={item.title}
	subtitle="{item.date} · {item.category}"
	crumb={[{ label: 'Home', href: '/' }, { label: 'News & Events', href: '/news-events' }, { label: item.title }]}
/>

<section class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<img src={item.img} alt={item.title} width={imgWidth(item.img)} height={imgHeight(item.img)} srcset={imgSrcset(item.img)} sizes="(max-width: 640px) 100vw, 900px" class="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96" />
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
					<img src={r.img} alt={r.title} width={imgWidth(r.img)} height={imgHeight(r.img)} srcset={imgSrcset(r.img)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" class="h-36 w-full object-cover" loading="lazy" />
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
