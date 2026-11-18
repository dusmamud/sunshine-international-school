<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
import { activities } from '#lib/data/site';
	import { imgWidth, imgHeight, imgSrcset } from '#lib/images';
</script>
<svelte:head>
	<meta name="description" content="Campus life at Sunshine International School, New Delhi — sports, performing arts, clubs and friendships that make life beyond the classroom." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/campus-life" />
	<meta property="og:title" content="Campus Life | Sunshine International School" />
	<meta property="og:description" content="Campus life at Sunshine International School, New Delhi — sports, performing arts, clubs and friendships that make life beyond the classroom." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/campus-life" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/sports-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Campus Life | Sunshine International School" />
	<meta name="twitter:description" content="Campus life at Sunshine International School, New Delhi — sports, performing arts, clubs and friendships that make life beyond the classroom." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/sports-students.webp" />
</svelte:head>

<PageHero title="Campus Life" subtitle="Sports, arts, clubs and friendships — life beyond the classroom." crumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each activities as a}
		<Reveal cls="min-w-0"><article id={{ Sports: 'sports', 'Performing Arts': 'arts', 'Visual Arts': 'visual-arts', 'Life Skills': 'life-skills', 'Community Service': 'community', 'Clubs & Societies': 'clubs' }[a.title]} class="scroll-mt-28 overflow-hidden rounded-lg shadow-sm ring-1 ring-ink/5"><img src={a.img} alt={a.title} width={imgWidth(a.img)} height={imgHeight(a.img)} srcset={imgSrcset(a.img)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" class="h-52 w-full object-cover" loading="lazy" /><div class="p-5"><h2 class="font-display text-xl font-bold">{a.title}</h2><p class="mt-1 text-sm text-ink/65">Part of everyday life at SIS — with expert coaches, dedicated spaces and regular showcases. (Demo content.)</p></div></article></Reveal>
	{/each}
	</div>
	<Reveal><div id="library" class="mt-12 grid gap-6 md:grid-cols-2"><img src="/images/library.jpg" alt="School library" width="900" height="600" srcset={imgSrcset('/images/library.jpg')} sizes="(max-width: 768px) 100vw, 600px" class="h-64 w-full rounded-lg object-cover shadow" loading="lazy" /><div><h2 class="font-display text-2xl font-bold">Library &amp; Labs</h2><p class="mt-3 leading-relaxed text-ink/70">A 20,000-book library, 10+ science labs, computer and robotics labs and 50+ smart classrooms on a 10-acre digital campus. (Demo figures.)</p></div></div></Reveal>
</section>
