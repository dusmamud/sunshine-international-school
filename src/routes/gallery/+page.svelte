<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { fade, scale } from 'svelte/transition';
import { galleryItems } from '#lib/data/site';
	import { imgWidth, imgHeight, imgSrcset } from '#lib/images';
	let cat=$state('All'); let light=$state<number|null>(null);
	let cats=['All','Campus','Academics','Sports','Arts'];
	let items=$derived(cat==='All'?galleryItems:galleryItems.filter(i=>i.cat===cat));
</script>
<svelte:head>
	<meta name="description" content="Gallery — moments from campus life at Sunshine International School, New Delhi, from classrooms and sports to arts, clubs and the school campus." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/gallery" />
	<meta property="og:title" content="Gallery | Sunshine International School" />
	<meta property="og:description" content="Gallery — moments from campus life at Sunshine International School, New Delhi, from classrooms and sports to arts, clubs and the school campus." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/gallery" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Gallery | Sunshine International School" />
	<meta name="twitter:description" content="Gallery — moments from campus life at Sunshine International School, New Delhi, from classrooms and sports to arts, clubs and the school campus." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero title="Gallery" subtitle="Moments from campus life at Sunshine International School." crumb={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
	{#each cats as c}<button type="button" onclick={()=>cat=c} aria-pressed={cat===c} class="min-h-11 rounded-full border px-4 text-sm font-bold {cat===c?'border-maroon-800 bg-maroon-800 text-white':'border-ink/20 text-ink/70'}">{c}</button>{/each}
	</div>
	<div class="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3">
	{#each items as it, i}
		<button type="button" onclick={()=>light=i} class="group overflow-hidden rounded-lg text-left" aria-label="Open photo: {it.alt}">
			<img src={it.src} alt={it.alt} width={imgWidth(it.src)} height={imgHeight(it.src)} srcset={imgSrcset(it.src)} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px" class="h-44 w-full object-cover transition group-hover:scale-105 sm:h-56" loading="lazy" />
		</button>
	{/each}
	</div>
	{#if items.length===0}<p class="mt-8 text-ink/60">No photos in this category yet.</p>{/if}
</section>
{#if light!==null}
	<div transition:fade={{ duration: 250 }} class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" role="dialog" aria-label="Photo viewer">
		<button type="button" aria-label="Close" onclick={()=>light=null} class="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white text-2xl">×</button>
		<button type="button" aria-label="Previous photo" onclick={()=>light=(light!+items.length-1)%items.length} class="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white text-2xl sm:left-6">‹</button>
		<img transition:scale={{ duration: 300, start: 0.92 }} src={items[light].src} alt={items[light].alt} width={imgWidth(items[light].src)} height={imgHeight(items[light].src)} srcset={imgSrcset(items[light].src)} sizes="100vw" class="max-h-[85vh] max-w-full rounded-lg object-contain" />
		<button type="button" aria-label="Next photo" onclick={()=>light=(light!+1)%items.length} class="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white text-2xl sm:right-6">›</button>
		<p class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1 text-xs font-bold text-white">{light+1} / {items.length} — {items[light].alt}</p>
	</div>
{/if}
