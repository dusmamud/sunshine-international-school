<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<PageHero title="Alumni" subtitle="Sunshiners across the world — doctors, engineers, artists and entrepreneurs. (Demo profiles.)" crumb={[{ label: 'Home', href: '/' }, { label: 'Alumni' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-3">
	{#each [{ n: 'Ananya Singh', d: 'B.A. LL.B., NLS Bengaluru · Batch of 2023', q: 'Debate club and the annual stage taught me to speak up and lead.' }, { n: 'Rohan Verma', d: 'B.Tech, IIT Delhi · Batch of 2021', q: 'My Physics teachers stayed back after school until every concept was clear.' }, { n: 'Dr. Kavya Jha', d: 'MBBS, AIIMS New Delhi · Batch of 2019', q: 'Sunshine taught me discipline — the morning assembly, the labs, the mentors.' }] as a}
		<Reveal cls="min-w-0"><div class="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm"><span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-800 font-display text-lg font-bold text-gold-400">{a.n.split(' ').map(x=>x[0]).slice(-2).join('')}</span><p class="mt-3 font-bold">{a.n}</p><p class="text-xs text-ink/60">{a.d}</p><p class="mt-3 text-sm leading-relaxed text-ink/70">"{a.q}"</p></div></Reveal>
	{/each}
	</div>
</section>
