<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { admissionStages } from '#lib/data/more';
	import { page } from '$app/state';

	let { data }: { data: { stage: (typeof admissionStages)[number] } } = $props();
	const stage = $derived(data.stage);
	const others = admissionStages.filter((s) => s.slug !== stage.slug);
	const currentIndex = $derived(admissionStages.findIndex((s) => s.slug === stage.slug));
	const prev = $derived(admissionStages[(currentIndex + admissionStages.length - 1) % admissionStages.length]);
	const next = $derived(admissionStages[(currentIndex + 1) % admissionStages.length]);
</script>

<PageHero
	title="Admissions — {stage.title}"
	subtitle="{stage.classes} · {stage.age}"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: stage.title }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
		<div class="min-w-0">
			<Reveal>
				<div class="rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
					<div class="flex flex-wrap items-center gap-4">
						<span class="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-800 text-white"><Icon name={stage.icon} cls="h-7 w-7" /></span>
						<div>
							<h2 class="font-display text-2xl font-bold">{stage.title} <span class="text-lg text-ink/55">· {stage.classes}</span></h2>
							<p class="mt-1 text-sm text-ink/65">{stage.age}</p>
						</div>
					</div>
					<p class="mt-5 rounded-lg bg-cream px-4 py-3 text-sm font-bold text-maroon-800">{stage.seats} · {stage.feesNote}</p>
					<h3 class="mt-7 font-display text-xl font-bold">How admission works</h3>
					<ol class="mt-3 space-y-3">
						{#each stage.process as p, i}
							<li class="flex gap-3 text-sm leading-relaxed text-ink/75">
								<span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-maroon-50 text-xs font-extrabold text-maroon-800">{i + 1}</span>
								{p}
							</li>
						{/each}
					</ol>
					<h3 class="mt-7 font-display text-xl font-bold">Documents needed</h3>
					<ul class="mt-3 space-y-2">
						{#each stage.docs as d}
							<li class="flex gap-2 text-sm text-ink/75"><Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-maroon-800" /> {d}</li>
						{/each}
					</ul>
				</div>
			</Reveal>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/admissions#enquire" class="btn-shine inline-flex min-h-12 items-center rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">ENQUIRE FOR {stage.title.toUpperCase()}</a>
				<a href="/fees" class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">FEE STRUCTURE</a>
			</div>
			<div class="mt-6 flex justify-between gap-3">
				<a href="/admissions/{prev.slug}" class="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-maroon-800">← {prev.title}</a>
				<a href="/admissions/{next.slug}" class="inline-flex min-h-11 items-center gap-1 text-sm font-bold text-maroon-800">{next.title} →</a>
			</div>
		</div>
		<Reveal cls="min-w-0">
			<aside class="rounded-lg bg-cream p-6">
				<h3 class="font-display text-xl font-bold">Other stages</h3>
				<ul class="mt-4 space-y-2">
					{#each others as o}
						<li><a href="/admissions/{o.slug}" class="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-4 py-3 text-sm font-bold transition hover:border-maroon-800/40 hover:text-maroon-800">{o.title} <span class="text-xs text-ink/50">{o.classes}</span></a></li>
					{/each}
				</ul>
				<div class="mt-6 rounded-lg bg-maroon-800 p-5 text-white">
					<h4 class="font-display text-lg font-bold">Not sure which stage?</h4>
					<p class="mt-1 text-sm text-white/75">Call the admissions office — we will help you pick the right class for your child's age.</p>
					<a href="tel:+919876543210" class="mt-3 inline-flex min-h-11 items-center gap-2 rounded-sm bg-white px-4 text-sm font-extrabold text-maroon-800 transition hover:bg-gold-300"><Icon name="phone" cls="h-4 w-4" /> +91 98765 43210</a>
				</div>
			</aside>
		</Reveal>
	</div>
</section>
