<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { extraTestimonials } from '#lib/data/more';
	import { testimonial } from '#lib/data/site';

	const all = [
		{ quote: testimonial.quote, name: testimonial.name, role: testimonial.detail },
		...extraTestimonials
	];
	const roles = ['All', 'Parent', 'Student', 'Alumnus'];
	let filter = $state('All');
	let shown = $derived(
		filter === 'All' ? all : all.filter((t) => t.role.toLowerCase().includes(filter.toLowerCase()))
	);
</script>

<svelte:head>
	<meta name="description" content="Testimonials — what parents, students and alumni say about Sunshine International School, New Delhi, from Nursery classrooms to the alumni network." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/testimonials" />
	<meta property="og:title" content="Testimonials | Sunshine International School" />
	<meta property="og:description" content="Testimonials — what parents, students and alumni say about Sunshine International School, New Delhi, from Nursery classrooms to the alumni network." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/testimonials" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Testimonials | Sunshine International School" />
	<meta name="twitter:description" content="Testimonials — what parents, students and alumni say about Sunshine International School, New Delhi, from Nursery classrooms to the alumni network." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Testimonials"
	subtitle="What parents, students and alumni say about Sunshine International School. All testimonials are demo content for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter testimonials">
			{#each roles as r}
				<button
					type="button"
					role="tab"
					aria-selected={filter === r}
					onclick={() => (filter = r)}
					class="min-h-11 rounded-full px-5 text-sm font-extrabold tracking-wide transition {filter === r
						? 'bg-maroon-800 text-white'
						: 'border border-maroon-800/25 bg-white text-maroon-800 hover:bg-maroon-50'}"
				>
					{r === 'All' ? 'All' : r + 's'}
				</button>
			{/each}
		</div>
	</Reveal>

	<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each shown as t}
			<Reveal cls="min-w-0">
				<figure class="flex h-full flex-col rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<Icon name="quote" cls="h-8 w-8 text-gold-500" />
					<blockquote class="mt-3 flex-1 leading-relaxed text-ink/75">“{t.quote}”</blockquote>
					<figcaption class="mt-5 flex items-center gap-3 border-t border-ink/5 pt-4">
						<span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-sm font-bold text-gold-400">
							{t.name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/, '').split(' ').map((w) => w[0]).slice(0, 2).join('')}
						</span>
						<span>
							<span class="block font-bold">{t.name}</span>
							<span class="block text-xs text-ink/60">{t.role}</span>
						</span>
					</figcaption>
				</figure>
			</Reveal>
		{:else}
			<p class="col-span-full rounded-lg border border-ink/10 bg-white px-5 py-8 text-center text-ink/60">No testimonials in this category.</p>
		{/each}
	</div>
	<p class="mt-10 text-center text-xs text-ink/40">Demo website — all testimonials are mock content for client presentation.</p>
</section>
