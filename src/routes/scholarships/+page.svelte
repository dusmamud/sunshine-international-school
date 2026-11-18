<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { scholarshipsList } from '#lib/data/more';
</script>

<svelte:head>
	<meta name="description" content="Scholarships at Sunshine International School, New Delhi — merit, need-based, sibling and sports &amp; arts awards that make a Sunshine education affordable." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/scholarships" />
	<meta property="og:title" content="Scholarships | Sunshine International School" />
	<meta property="og:description" content="Scholarships at Sunshine International School, New Delhi — merit, need-based, sibling and sports &amp; arts awards that make a Sunshine education affordable." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/scholarships" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Scholarships | Sunshine International School" />
	<meta name="twitter:description" content="Scholarships at Sunshine International School, New Delhi — merit, need-based, sibling and sports &amp; arts awards that make a Sunshine education affordable." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Scholarships"
	subtitle="Talent and effort deserve support — four scholarships that make a Sunshine education more affordable. (Demo scheme.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Scholarships' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 md:grid-cols-2">
		{#each scholarshipsList as s, i}
			<Reveal cls="min-w-0" delay={i % 2 * 100}>
				<article class="card-lift h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name={s.icon} cls="h-6 w-6" /></span>
					<h2 class="mt-4 font-display text-xl font-bold">{s.name}</h2>
					<p class="mt-1 text-sm font-extrabold text-gold-600">{s.cover}</p>
					<p class="mt-3 text-sm leading-relaxed text-ink/70"><strong class="text-ink">Who can apply:</strong> {s.who}</p>
					<p class="mt-2 text-sm leading-relaxed text-ink/70"><strong class="text-ink">How to apply:</strong> {s.how}</p>
				</article>
			</Reveal>
		{/each}
	</div>
	<Reveal>
		<div class="mt-12 flex flex-col items-center justify-between gap-4 rounded-lg bg-maroon-800 p-6 text-white sm:flex-row">
			<div>
				<h2 class="font-display text-2xl font-bold">Apply for a scholarship</h2>
				<p class="mt-1 text-sm text-white/75">Download the form, attach the documents and submit at the school office by 31 March.</p>
			</div>
			<a href="/downloads/scholarship-form.pdf" class="btn-shine inline-flex min-h-12 items-center gap-2 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-maroon-950 transition hover:bg-gold-400"><Icon name="download" cls="h-4 w-4" /> SCHOLARSHIP FORM (PDF)</a>
		</div>
	</Reveal>
</section>
