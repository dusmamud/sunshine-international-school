<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { newsItems } from '#lib/data/more';

	let subEmail = $state('');
	let subError = $state('');
	let subDone = $state(false);

	function subscribe(e: Event) {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail.trim())) {
			subError = 'Please enter a valid email address.';
			return;
		}
		subError = '';
		subDone = true;
	}
</script>

<PageHero title="News & Events" subtitle="What's happening at Sunshine International School. (Demo items.)" crumb={[{ label: 'Home', href: '/' }, { label: 'News & Events' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-3">
	{#each newsItems as n}
		<Reveal cls="min-w-0">
			<a href="/news-events/{n.slug}" class="block h-full overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm transition hover:shadow-lg">
				<img src={n.img} alt={n.title} class="h-44 w-full object-cover" loading="lazy" />
				<div class="p-6">
					<p class="text-xs font-extrabold tracking-wider text-maroon-800">{n.date} · {n.category.toUpperCase()}</p>
					<h2 class="mt-2 font-display text-xl font-bold">{n.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{n.excerpt}</p>
					<span class="mt-3 inline-block text-xs font-extrabold tracking-wider text-maroon-800">READ MORE →</span>
				</div>
			</a>
		</Reveal>
	{/each}
	</div>
	<Reveal>
		<div class="mt-12 rounded-lg bg-maroon-800 p-6 text-white sm:p-8">
			<div class="grid items-center gap-6 lg:grid-cols-[1fr_1.2fr]">
				<div>
					<h2 class="font-display text-2xl font-bold">Never miss school news</h2>
					<p class="mt-2 text-sm leading-relaxed text-white/75">Get event invitations, results and circulars in your inbox — once a month, no spam (demo).</p>
				</div>
				{#if subDone}
					<p class="flex items-center gap-3 rounded-md bg-white/10 px-4 py-4 text-sm font-bold text-gold-300"><Icon name="check" cls="h-5 w-5 shrink-0" /> Thank you! You are subscribed to school news.</p>
				{:else}
					<form class="flex flex-col gap-2 sm:flex-row" onsubmit={subscribe} novalidate>
						<label for="news-email" class="sr-only">Email address</label>
						<input id="news-email" type="email" bind:value={subEmail} placeholder="Your email address" class="min-w-0 flex-1 rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-gold-400 focus:outline-none" />
						<button type="submit" class="btn-shine min-h-12 shrink-0 rounded-sm bg-gold-500 px-6 text-sm font-extrabold tracking-wide text-maroon-950 transition hover:bg-gold-400">SUBSCRIBE</button>
					</form>
					{#if subError}<p class="mt-2 text-xs text-red-300">{subError}</p>{/if}
				{/if}
			</div>
		</div>
	</Reveal>
</section>
