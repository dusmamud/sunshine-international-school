<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { downloads } from '#lib/data/more';
</script>

<PageHero
	title="Downloads"
	subtitle="Forms and documents for parents — print, fill and submit at the school office. Every link below downloads a real PDF."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Downloads' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each downloads as d}
			<Reveal cls="min-w-0">
				<article class="flex h-full flex-col rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-50 text-maroon-800">
						<Icon name="file" cls="h-6 w-6" />
					</span>
					<h2 class="mt-4 font-display text-xl font-bold">{d.title}</h2>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{d.desc}</p>
					<p class="mt-3 text-xs font-bold tracking-wider text-ink/45">{d.pages.toUpperCase()} · PDF</p>
					<a
						href={d.file}
						download
						class="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-maroon-800 px-5 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700"
					>
						<Icon name="download" cls="h-4 w-4" /> DOWNLOAD PDF
					</a>
				</article>
			</Reveal>
		{/each}
	</div>
	<p class="mt-10 text-center text-xs text-ink/40">
		Demo website — these forms are mock content for client presentation.
	</p>
</section>
