<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { eLearning } from '#lib/data/more';
</script>

<svelte:head>
	<meta name="description" content="E-Learning at Sunshine International School, New Delhi — free, trusted resources our teachers recommend, from NCERT and CBSE to coding and libraries." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/e-learning" />
	<meta property="og:title" content="E-Learning | Sunshine International School" />
	<meta property="og:description" content="E-Learning at Sunshine International School, New Delhi — free, trusted resources our teachers recommend, from NCERT and CBSE to coding and libraries." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/e-learning" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="E-Learning | Sunshine International School" />
	<meta name="twitter:description" content="E-Learning at Sunshine International School, New Delhi — free, trusted resources our teachers recommend, from NCERT and CBSE to coding and libraries." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="E-Learning"
	subtitle="Free, trusted learning resources our teachers recommend — NCERT, CBSE, coding and the National Digital Library."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Academics', href: '/academics' }, { label: 'E-Learning' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each eLearning as r, i}
			<Reveal cls="min-w-0" delay={i % 3 * 100}>
				<a href={r.href} target="_blank" rel="noopener noreferrer" class="card-lift group block h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<div class="flex items-start justify-between gap-3">
						<span class="rounded-full bg-maroon-50 px-3 py-1 text-xs font-extrabold tracking-wider text-maroon-800">{r.tag.toUpperCase()}</span>
						<Icon name="external" cls="h-5 w-5 shrink-0 text-ink/30 transition group-hover:text-maroon-800" />
					</div>
					<h2 class="mt-4 font-display text-xl font-bold transition group-hover:text-maroon-800">{r.name}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{r.desc}</p>
					<span class="mt-3 inline-flex items-center gap-1 text-xs font-extrabold tracking-wider text-maroon-800">VISIT SITE <span aria-hidden="true">→</span></span>
				</a>
			</Reveal>
		{/each}
	</div>
	<p class="mt-8 text-center text-xs text-ink/45">External sites open in a new tab. Parents are advised to supervise younger children online.</p>
</section>
