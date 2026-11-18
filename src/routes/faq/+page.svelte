<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { generalFaqs } from '#lib/data/more';

	const cats = ['All', ...Array.from(new Set(generalFaqs.map((f) => f.category)))];
	let filter = $state('All');
	let open = $state<number | null>(0);
	let shown = $derived(filter === 'All' ? generalFaqs : generalFaqs.filter((f) => f.category === filter));
</script>

<svelte:head>
	<meta name="description" content="Frequently asked questions about Sunshine International School, New Delhi — school timings, CBSE affiliation, fees, transport, streams and parent updates." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/faq" />
	<meta property="og:title" content="Frequently Asked Questions | Sunshine International School" />
	<meta property="og:description" content="Frequently asked questions about Sunshine International School, New Delhi — school timings, CBSE affiliation, fees, transport, streams and parent updates." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/faq" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Frequently Asked Questions | Sunshine International School" />
	<meta name="twitter:description" content="Frequently asked questions about Sunshine International School, New Delhi — school timings, CBSE affiliation, fees, transport, streams and parent updates." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Frequently Asked Questions"
	subtitle="Answers to the questions parents ask us most. Still unsure? Call +91 98765 43210 or visit the Contact page."
	crumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
/>

<section class="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="tablist" aria-label="FAQ category">
			{#each cats as c}
				<button
					type="button"
					role="tab"
					aria-selected={filter === c}
					onclick={() => {
						filter = c;
						open = 0;
					}}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {filter === c
						? 'bg-maroon-800 text-white'
						: 'border border-maroon-800/25 bg-white text-maroon-800 hover:bg-maroon-50'}"
				>
					{c}
				</button>
			{/each}
		</div>
	</Reveal>

	<div class="mt-8 space-y-3">
		{#each shown as f, i}
			<Reveal>
				<div class="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
					<button
						type="button"
						aria-expanded={open === i}
						onclick={() => (open = open === i ? null : i)}
						class="flex min-h-14 w-full items-center justify-between gap-3 px-5 py-4 text-left"
					>
						<span class="font-bold">{f.q}</span>
						<Icon name="chevron-down" cls="h-5 w-5 shrink-0 text-maroon-800 transition-transform {open === i ? 'rotate-180' : ''}" />
					</button>
					<div class="grid transition-all duration-300 ease-in-out {open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}">
						<div class="overflow-hidden">
							<p class="border-t border-ink/5 px-5 py-4 text-sm leading-relaxed text-ink/70">{f.a}</p>
						</div>
					</div>
				</div>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-10 rounded-lg bg-maroon-800 p-6 text-center text-white">
			<h2 class="font-display text-2xl font-bold">Still have a question?</h2>
			<p class="mt-2 text-sm text-white/75">Our admissions team answers within one working day (demo).</p>
			<a href="/contact" class="mt-5 inline-flex min-h-12 items-center rounded-sm bg-white px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-gold-300">CONTACT US</a>
		</div>
	</Reveal>
</section>
