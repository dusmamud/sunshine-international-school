<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { openDaySlots } from '#lib/data/more';

	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let slot = $state('');
	let children = $state('1 child');
	let errors = $state<Record<string, string>>({});
	let done = $state(false);

	function signup(e: Event) {
		e.preventDefault();
		errors = {};
		if (name.trim().length < 2) errors.name = 'Please enter your name.';
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ''))) errors.phone = 'Enter a valid 10-digit mobile number.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Please enter a valid email address.';
		if (!slot) errors.slot = 'Please choose a date and slot.';
		if (Object.keys(errors).length) return;
		done = true;
	}
</script>

<svelte:head>
	<meta name="description" content="Open Day at Sunshine International School, New Delhi — spend a morning on campus, tour the classrooms, meet the teachers and watch a live class." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/open-day" />
	<meta property="og:title" content="Open Day | Sunshine International School" />
	<meta property="og:description" content="Open Day at Sunshine International School, New Delhi — spend a morning on campus, tour the classrooms, meet the teachers and watch a live class." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/open-day" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Open Day | Sunshine International School" />
	<meta name="twitter:description" content="Open Day at Sunshine International School, New Delhi — spend a morning on campus, tour the classrooms, meet the teachers and watch a live class." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Open Day"
	subtitle="The best way to choose a school is to spend a morning in it. Join our Open Day — tour the campus, meet the teachers, watch a live class. (Demo event.)"
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Open Day' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
		<Reveal cls="min-w-0">
			<div>
				<h2 class="font-display text-2xl font-bold sm:text-3xl">What happens on Open Day?</h2>
				<ul class="mt-5 space-y-4">
					{#each [{ t: '10:00 AM — Welcome & assembly', d: 'Tea, a short welcome by the Principal and a look at the day ahead.' }, { t: '10:30 AM — Guided campus tour', d: 'Classrooms, labs, library, sports field and auditorium — with teachers at every stop.' }, { t: '11:30 AM — Live classes', d: 'Watch a real class in session and see activity-based learning up close.' }, { t: '12:15 PM — Admissions desk', d: 'One-to-one counselling on age criteria, documents, fees and scholarships.' }] as s}
						<li class="flex gap-3">
							<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-gold-400"><Icon name="check" cls="h-4 w-4" /></span>
							<div><p class="font-bold">{s.t}</p><p class="mt-0.5 text-sm leading-relaxed text-ink/65">{s.d}</p></div>
						</li>
					{/each}
				</ul>
				<div class="mt-6 rounded-lg bg-cream p-5">
					<p class="text-sm leading-relaxed text-ink/70"><strong class="text-maroon-800">Can't make it?</strong> Book any weekday tour from the <a href="/virtual-tour" class="font-bold text-maroon-800 underline">Virtual Tour</a> page instead.</p>
				</div>
			</div>
		</Reveal>
		<Reveal cls="min-w-0">
			<div class="rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
				{#if done}
					<div class="py-8 text-center">
						<span class="success-check mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name="check" cls="h-7 w-7" /></span>
						<h2 class="mt-4 font-display text-2xl font-bold text-maroon-800">See you on Open Day, {name.trim()}!</h2>
						<p class="mt-2 text-sm leading-relaxed text-ink/65">Your slot is <strong>{slot}</strong> for {children} (demo). A reminder will be sent to {email.trim()}.</p>
						<button type="button" onclick={() => { done = false; name = ''; phone = ''; email = ''; slot = ''; }} class="mt-5 min-h-11 rounded-sm border border-maroon-800 px-4 text-sm font-bold text-maroon-800">Book another family member</button>
					</div>
				{:else}
					<h2 class="font-display text-2xl font-bold">Book your Open Day slot</h2>
					<form class="mt-5 space-y-3" onsubmit={signup} novalidate>
						<div>
							<label for="od-name" class="text-xs font-bold tracking-wider text-ink/60">PARENT'S NAME</label>
							<input id="od-name" bind:value={name} placeholder="Full name" class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.name}<p class="mt-1 text-xs text-red-700">{errors.name}</p>{/if}
						</div>
						<div class="grid gap-3 sm:grid-cols-2">
							<div>
								<label for="od-phone" class="text-xs font-bold tracking-wider text-ink/60">MOBILE</label>
								<input id="od-phone" type="tel" bind:value={phone} placeholder="10-digit mobile" class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
								{#if errors.phone}<p class="mt-1 text-xs text-red-700">{errors.phone}</p>{/if}
							</div>
							<div>
								<label for="od-email" class="text-xs font-bold tracking-wider text-ink/60">EMAIL</label>
								<input id="od-email" type="email" bind:value={email} placeholder="Email address" class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
								{#if errors.email}<p class="mt-1 text-xs text-red-700">{errors.email}</p>{/if}
							</div>
						</div>
						<div>
							<label for="od-slot" class="text-xs font-bold tracking-wider text-ink/60">DATE &amp; SLOT</label>
							<select id="od-slot" bind:value={slot} class="mt-1 w-full rounded-sm border border-ink/20 bg-white px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none">
								<option value="" disabled>Select a date and time</option>
								{#each openDaySlots as d}
									{#each d.slots as s}
										<option value="{d.date} — {s}">{d.date} — {s}</option>
									{/each}
								{/each}
							</select>
							{#if errors.slot}<p class="mt-1 text-xs text-red-700">{errors.slot}</p>{/if}
						</div>
						<div>
							<label for="od-kids" class="text-xs font-bold tracking-wider text-ink/60">CHILDREN ATTENDING</label>
							<select id="od-kids" bind:value={children} class="mt-1 w-full rounded-sm border border-ink/20 bg-white px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none">
								<option>1 child</option><option>2 children</option><option>3+ children</option>
							</select>
						</div>
						<button type="submit" class="btn-shine min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">BOOK MY OPEN DAY SLOT</button>
						<p class="text-center text-[0.68rem] text-ink/45">Demo form — no data is sent anywhere.</p>
					</form>
				{/if}
			</div>
		</Reveal>
	</div>
</section>
