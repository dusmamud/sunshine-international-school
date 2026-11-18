<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { tourStops, openDaySlots } from '#lib/data/more';
	import { imgWidth, imgHeight, imgSrcset } from '#lib/images';

	let stop = $state(0);
	let name = $state('');
	let phone = $state('');
	let slot = $state('');
	let errors = $state<Record<string, string>>({});
	let done = $state(false);

	function book(e: Event) {
		e.preventDefault();
		errors = {};
		if (name.trim().length < 2) errors.name = 'Please enter your name.';
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ''))) errors.phone = 'Enter a valid 10-digit mobile number.';
		if (!slot) errors.slot = 'Please choose a tour slot.';
		if (Object.keys(errors).length) return;
		done = true;
	}
</script>

<svelte:head>
	<meta name="description" content="Virtual tour of Sunshine International School, New Delhi — walk the campus from your sofa, from the main gate to the auditorium, in six stops." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/virtual-tour" />
	<meta property="og:title" content="Virtual Tour | Sunshine International School" />
	<meta property="og:description" content="Virtual tour of Sunshine International School, New Delhi — walk the campus from your sofa, from the main gate to the auditorium, in six stops." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/virtual-tour" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/main-gate.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Virtual Tour | Sunshine International School" />
	<meta name="twitter:description" content="Virtual tour of Sunshine International School, New Delhi — walk the campus from your sofa, from the main gate to the auditorium, in six stops." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/main-gate.webp" />
</svelte:head>

<PageHero
	title="Virtual Tour"
	subtitle="Walk the campus from your sofa — six stops, from the main gate to the auditorium. Then come and see it for real. (Demo tour.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life', href: '/campus-life' }, { label: 'Virtual Tour' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-ink/5">
			<div class="relative">
				<img src={tourStops[stop].img} alt={tourStops[stop].name} width={imgWidth(tourStops[stop].img)} height={imgHeight(tourStops[stop].img)} srcset={imgSrcset(tourStops[stop].img)} sizes="(max-width: 640px) 100vw, 900px" class="h-72 w-full object-cover sm:h-[26rem]" />
				<span class="absolute top-4 left-4 rounded-full bg-maroon-800 px-3 py-1 text-xs font-extrabold tracking-wider text-white">STOP {stop + 1} OF {tourStops.length}</span>
				<div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white sm:p-6">
					<h2 class="font-display text-2xl font-bold sm:text-3xl">{tourStops[stop].name}</h2>
					<p class="mt-1 max-w-2xl text-sm leading-relaxed text-white/85">{tourStops[stop].desc}</p>
				</div>
			</div>
			<div class="flex items-center justify-between gap-3 p-4">
				<button type="button" onclick={() => (stop = (stop + tourStops.length - 1) % tourStops.length)} class="inline-flex min-h-11 items-center gap-1 rounded-sm border border-maroon-800/25 px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-50" aria-label="Previous stop"><Icon name="chevron-left" cls="h-4 w-4" /> Prev</button>
				<div class="flex gap-2">
					{#each tourStops as s, i}
						<button type="button" onclick={() => (stop = i)} aria-label="Go to stop {s.name}" class="h-3 w-3 rounded-full transition {i === stop ? 'bg-maroon-800 scale-125' : 'bg-maroon-800/25 hover:bg-maroon-800/50'}"></button>
					{/each}
				</div>
				<button type="button" onclick={() => (stop = (stop + 1) % tourStops.length)} class="inline-flex min-h-11 items-center gap-1 rounded-sm border border-maroon-800/25 px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-50" aria-label="Next stop">Next <Icon name="chevron-right" cls="h-4 w-4" /></button>
			</div>
		</div>
	</Reveal>

	<Reveal>
		<div class="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
			{#each tourStops as s, i}
				<button type="button" onclick={() => (stop = i)} class="overflow-hidden rounded-lg text-left ring-2 transition {i === stop ? 'ring-maroon-800' : 'ring-transparent hover:ring-maroon-800/40'}">
					<img src={s.img} alt={s.name} width={imgWidth(s.img)} height={imgHeight(s.img)} srcset={imgSrcset(s.img)} sizes="(max-width: 640px) 25vw, 200px" class="h-20 w-full object-cover" loading="lazy" />
					<span class="block bg-white px-2 py-2 text-xs font-bold text-ink">{i + 1}. {s.name}</span>
				</button>
			{/each}
		</div>
	</Reveal>

	<Reveal>
		<div class="mt-12 grid gap-8 rounded-lg bg-maroon-800 p-6 text-white sm:p-8 lg:grid-cols-[1fr_1.2fr]">
			<div>
				<h2 class="font-display text-2xl font-bold sm:text-3xl">Book a Real Campus Tour</h2>
				<p class="mt-2 text-sm leading-relaxed text-white/75">Tours run Monday to Saturday, 10:00 AM – 1:00 PM, and take about 45 minutes. Meet our counsellors, visit a live class and ask anything.</p>
				<ul class="mt-4 space-y-2 text-sm text-white/85">
					<li class="flex gap-2"><Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Guided walk of classrooms, labs and library</li>
					<li class="flex gap-2"><Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Meet the Principal or Vice Principal</li>
					<li class="flex gap-2"><Icon name="check" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-400" /> Admissions counselling and fee guidance</li>
				</ul>
			</div>
			{#if done}
				<div class="rounded-lg bg-white p-6 text-center text-ink">
					<span class="success-check mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name="check" cls="h-7 w-7" /></span>
					<p class="mt-3 font-display text-xl font-bold text-maroon-800">Tour booked, {name.trim()}!</p>
					<p class="mt-1 text-sm text-ink/65">Your slot is {slot} (demo). Our admissions team will call you to confirm.</p>
				</div>
			{:else}
				<form class="rounded-lg bg-white p-6 text-ink" onsubmit={book} novalidate>
					<div class="grid gap-3 sm:grid-cols-2">
						<div>
							<label for="vt-name" class="text-xs font-bold tracking-wider text-ink/60">YOUR NAME</label>
							<input id="vt-name" bind:value={name} placeholder="Parent's name" class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.name}<p class="mt-1 text-xs text-red-700">{errors.name}</p>{/if}
						</div>
						<div>
							<label for="vt-phone" class="text-xs font-bold tracking-wider text-ink/60">MOBILE</label>
							<input id="vt-phone" type="tel" bind:value={phone} placeholder="10-digit mobile" class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.phone}<p class="mt-1 text-xs text-red-700">{errors.phone}</p>{/if}
						</div>
					</div>
					<div class="mt-3">
						<label for="vt-slot" class="text-xs font-bold tracking-wider text-ink/60">CHOOSE A SLOT</label>
						<select id="vt-slot" bind:value={slot} class="mt-1 w-full rounded-sm border border-ink/20 bg-white px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none">
							<option value="" disabled>Select a day and time</option>
							{#each openDaySlots as d}
								{#each d.slots as s}
									<option value="{d.date} — {s}">{d.date} — {s}</option>
								{/each}
							{/each}
						</select>
						{#if errors.slot}<p class="mt-1 text-xs text-red-700">{errors.slot}</p>{/if}
					</div>
					<button type="submit" class="btn-shine mt-4 min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">BOOK MY TOUR</button>
					<p class="mt-2 text-center text-[0.68rem] text-ink/45">Demo form — no data is sent anywhere.</p>
				</form>
			{/if}
		</div>
	</Reveal>
</section>
