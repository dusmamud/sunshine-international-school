<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { school } from '#lib/data/site';
</script>

<PageHero
	title="Prospectus 2026–27"
	subtitle="Everything about Sunshine International School in one booklet — download it, or ask for a printed copy at the school office. (Demo prospectus.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Prospectus' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
		<Reveal cls="min-w-0">
			<div class="overflow-hidden rounded-lg bg-maroon-800 text-white shadow-lg">
				<div class="p-8">
					<p class="text-xs font-extrabold tracking-[0.3em] text-gold-400">SUNSHINE INTERNATIONAL SCHOOL</p>
					<h2 class="mt-3 font-display text-4xl leading-tight font-bold">Prospectus<br />2026–27</h2>
					<p class="mt-3 text-sm leading-relaxed text-white/75">Nurturing Minds. Shaping Futures.</p>
					<div class="mt-6 h-1 w-16 rounded bg-gold-500"></div>
					<ul class="mt-6 space-y-2 text-sm text-white/85">
						<li>· Admissions — Nursery to Class XII</li>
						<li>· CBSE curriculum, 2,500+ students</li>
						<li>· 10-acre campus, 50+ smart classrooms</li>
						<li>· Fees, scholarships, transport &amp; safety</li>
					</ul>
				</div>
				<div class="bg-maroon-900 px-8 py-4 text-xs text-white/60">123 Education Street, New Delhi – 110001 · +91 98765 43210</div>
			</div>
		</Reveal>
		<Reveal cls="min-w-0">
			<div>
				<h2 class="font-display text-2xl font-bold sm:text-3xl">Inside the prospectus</h2>
				<ul class="mt-5 space-y-3">
					{#each ['Our story, values and the Principal’s message', 'Academic programmes from Nursery to Class XII', 'Full fee structure, instalments and scholarships', 'Facilities, transport routes and campus safety', 'Admission process, age criteria and documents'] as f}
						<li class="flex gap-3 text-sm leading-relaxed text-ink/75"><Icon name="check" cls="mt-0.5 h-5 w-5 shrink-0 text-maroon-800" /> {f}</li>
					{/each}
				</ul>
				<div class="mt-7 flex flex-wrap gap-3">
					<a href="/downloads/prospectus.pdf" class="btn-shine inline-flex min-h-12 items-center gap-2 rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700"><Icon name="download" cls="h-4 w-4" /> DOWNLOAD PROSPECTUS (PDF)</a>
					<a href="/admissions" class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">APPLY FOR ADMISSION</a>
				</div>
				<p class="mt-4 text-sm text-ink/60">Printed copies are available free at the school office, {school.hours}.</p>
			</div>
		</Reveal>
	</div>
</section>
