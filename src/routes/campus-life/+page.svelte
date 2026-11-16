<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
import { activities } from '#lib/data/site';
</script>
<PageHero title="Campus Life" subtitle="Sports, arts, clubs and friendships — life beyond the classroom." crumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each activities as a}
		<Reveal cls="min-w-0"><article id={{ Sports: 'sports', 'Performing Arts': 'arts', 'Visual Arts': 'visual-arts', 'Life Skills': 'life-skills', 'Community Service': 'community', 'Clubs & Societies': 'clubs' }[a.title]} class="scroll-mt-28 overflow-hidden rounded-lg shadow-sm ring-1 ring-ink/5"><img src={a.img} alt={a.title} class="h-52 w-full object-cover" loading="lazy" /><div class="p-5"><h2 class="font-display text-xl font-bold">{a.title}</h2><p class="mt-1 text-sm text-ink/65">Part of everyday life at SIS — with expert coaches, dedicated spaces and regular showcases. (Demo content.)</p></div></article></Reveal>
	{/each}
	</div>
	<Reveal><div id="library" class="mt-12 grid gap-6 md:grid-cols-2"><img src="/images/library.jpg" alt="School library" class="h-64 w-full rounded-lg object-cover shadow" loading="lazy" /><div><h2 class="font-display text-2xl font-bold">Library &amp; Labs</h2><p class="mt-3 leading-relaxed text-ink/70">A 20,000-book library, 10+ science labs, computer and robotics labs and 50+ smart classrooms on a 10-acre digital campus. (Demo figures.)</p></div></div></Reveal>
</section>
