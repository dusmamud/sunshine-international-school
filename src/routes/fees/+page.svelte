<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { feeStructure, feeInstalments, paymentOptions } from '#lib/data/more';

	const inr = (n: number) => '₹' + n.toLocaleString('en-IN');
</script>

<svelte:head>
	<meta name="description" content="Fee structure at Sunshine International School, New Delhi — transparent fees for Nursery to Class XII in three easy instalments, with no hidden charges." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/fees" />
	<meta property="og:title" content="Fee Structure | Sunshine International School" />
	<meta property="og:description" content="Fee structure at Sunshine International School, New Delhi — transparent fees for Nursery to Class XII in three easy instalments, with no hidden charges." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/fees" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Fee Structure | Sunshine International School" />
	<meta name="twitter:description" content="Fee structure at Sunshine International School, New Delhi — transparent fees for Nursery to Class XII in three easy instalments, with no hidden charges." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Fee Structure"
	subtitle="Transparent fees for Nursery to Class XII — three easy instalments, no hidden charges. All amounts below are demo figures for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Fees' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-maroon-800 text-white">
						<th class="px-5 py-4 font-extrabold">Stage</th>
						<th class="px-5 py-4 font-extrabold">Classes</th>
						<th class="px-5 py-4 font-extrabold">Tuition / year</th>
						<th class="px-5 py-4 font-extrabold">Admission (one-time)</th>
						<th class="px-5 py-4 font-extrabold">Transport / month</th>
					</tr>
				</thead>
				<tbody>
					{#each feeStructure as f, i}
						<tr class={i % 2 === 0 ? 'bg-white' : 'bg-cream/60'}>
							<td class="px-5 py-4 font-bold text-maroon-800">{f.stage}</td>
							<td class="px-5 py-4 text-ink/75">{f.classes}</td>
							<td class="px-5 py-4 font-bold">{inr(f.tuition)}</td>
							<td class="px-5 py-4">{inr(f.admission)}</td>
							<td class="px-5 py-4">{inr(f.transport)} <span class="text-xs text-ink/50">(optional)</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-xs text-ink/50">Registration fee ₹500 (one-time, at application). Sibling concession: 10% off tuition for the second child. Alumni wards: 10% off the one-time admission fee.</p>
	</Reveal>

	<Reveal>
		<h2 class="mt-14 font-display text-2xl font-bold sm:text-3xl">Pay in Three Instalments</h2>
		<div class="mt-6 grid gap-4 md:grid-cols-3">
			{#each feeInstalments as t}
				<div class="card-lift rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<p class="text-xs font-extrabold tracking-[0.25em] text-maroon-800">{t.term.toUpperCase()}</p>
					<p class="mt-2 font-display text-2xl font-bold text-ink">{t.share}</p>
					<p class="mt-2 flex items-center gap-2 text-sm font-bold text-maroon-800"><Icon name="calendar" cls="h-4 w-4" /> Due {t.due}</p>
					<p class="mt-1 text-sm text-ink/65">{t.note}</p>
				</div>
			{/each}
		</div>
	</Reveal>

	<Reveal>
		<h2 class="mt-14 font-display text-2xl font-bold sm:text-3xl">Ways to Pay</h2>
		<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each paymentOptions as p}
				<div class="card-lift rounded-lg border border-ink/10 bg-white p-6 text-center shadow-sm">
					<span class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name={p.icon} cls="h-6 w-6" /></span>
					<h3 class="mt-3 font-bold">{p.name}</h3>
					<p class="mt-1 text-sm leading-relaxed text-ink/65">{p.detail}</p>
				</div>
			{/each}
		</div>
	</Reveal>

	<Reveal>
		<div class="mt-12 flex flex-col items-center justify-between gap-4 rounded-lg bg-maroon-800 p-6 text-white sm:flex-row">
			<div>
				<h2 class="font-display text-2xl font-bold">Pay fees online (demo)</h2>
				<p class="mt-1 text-sm text-white/75">Look up your ward by admission number and pay Term 2 in under a minute.</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a href="/fee-payment" class="btn-shine inline-flex min-h-12 items-center rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-maroon-950 transition hover:bg-gold-400">PAY FEE ONLINE</a>
				<a href="/downloads/fee-structure.pdf" class="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-white/60 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-white/10"><Icon name="download" cls="h-4 w-4" /> DOWNLOAD PDF</a>
			</div>
		</div>
	</Reveal>
</section>
