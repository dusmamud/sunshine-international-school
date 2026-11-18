<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { facilitiesList } from '#lib/data/more';
	import { imgWidth, imgHeight, imgSrcset } from '#lib/images';
</script>

<svelte:head>
	<meta name="description" content="Facilities at Sunshine International School, New Delhi — a 10-acre campus with smart classrooms, science labs, library, sports and safe transport." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/facilities" />
	<meta property="og:title" content="Facilities | Sunshine International School" />
	<meta property="og:description" content="Facilities at Sunshine International School, New Delhi — a 10-acre campus with smart classrooms, science labs, library, sports and safe transport." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/facilities" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/primary-classroom.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Facilities | Sunshine International School" />
	<meta name="twitter:description" content="Facilities at Sunshine International School, New Delhi — a 10-acre campus with smart classrooms, science labs, library, sports and safe transport." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/primary-classroom.webp" />
</svelte:head>

<PageHero
	title="Facilities"
	subtitle="A 10-acre campus built for learning, sport and safety — smart classrooms, labs, library, sports and more. (Demo content.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life', href: '/campus-life' }, { label: 'Facilities' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each facilitiesList as f, i}
			<Reveal cls="min-w-0" delay={i % 3 * 100}>
				<article class="card-lift group h-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-ink/5">
					<div class="relative overflow-hidden">
						<img src={f.img} alt={f.name} width={imgWidth(f.img)} height={imgHeight(f.img)} srcset={imgSrcset(f.img)} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
						<span class="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-maroon-800 text-white shadow"><Icon name={f.icon} cls="h-5 w-5" /></span>
					</div>
					<div class="p-6">
						<h2 class="font-display text-xl font-bold">{f.name}</h2>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">{f.desc}</p>
					</div>
				</article>
			</Reveal>
		{/each}
	</div>
	<Reveal>
		<div class="mt-12 rounded-lg bg-cream p-6 text-center sm:p-8">
			<h2 class="font-display text-2xl font-bold">See them in person</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink/65">The best way to judge a campus is to walk it. Book a guided tour or join our next Open Day.</p>
			<div class="mt-5 flex flex-wrap justify-center gap-3">
				<a href="/virtual-tour" class="inline-flex min-h-12 items-center rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">VIRTUAL TOUR</a>
				<a href="/open-day" class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">BOOK OPEN DAY</a>
			</div>
		</div>
	</Reveal>
</section>
