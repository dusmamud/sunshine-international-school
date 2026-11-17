<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { safetyPoints } from '#lib/data/more';
</script>

<PageHero
	title="Campus Safety"
	subtitle="Your child's safety is our first job — CCTV, supervised buses, a full-time nurse and drills every term. (Demo content.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life', href: '/campus-life' }, { label: 'Safety' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each safetyPoints as s, i}
			<Reveal cls="min-w-0" delay={i % 3 * 100}>
				<article class="card-lift h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name={s.icon} cls="h-6 w-6" /></span>
					<h2 class="mt-4 font-display text-xl font-bold">{s.name}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
				</article>
			</Reveal>
		{/each}
	</div>
	<Reveal>
		<div class="mt-12 grid gap-4 rounded-lg bg-maroon-800 p-6 text-white sm:grid-cols-3 sm:p-8">
			<div>
				<p class="text-xs font-extrabold tracking-[0.25em] text-gold-400">EMERGENCY — SCHOOL OFFICE</p>
				<p class="mt-2 font-display text-2xl font-bold">+91 98765 43210</p>
				<p class="mt-1 text-sm text-white/70">Mon – Sat, 8:00 AM – 4:00 PM</p>
			</div>
			<div>
				<p class="text-xs font-extrabold tracking-[0.25em] text-gold-400">INFIRMARY</p>
				<p class="mt-2 font-display text-2xl font-bold">Ext. 102</p>
				<p class="mt-1 text-sm text-white/70">Full-time nurse · Doctor on call</p>
			</div>
			<div>
				<p class="text-xs font-extrabold tracking-[0.25em] text-gold-400">TRANSPORT HELPLINE</p>
				<p class="mt-2 font-display text-2xl font-bold">Ext. 105</p>
				<p class="mt-1 text-sm text-white/70">Live GPS tracking for parents</p>
			</div>
		</div>
	</Reveal>
</section>
