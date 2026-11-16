<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CountUp from '#lib/components/CountUp.svelte';
	import {
		school,
		heroFeatures,
		welcomeStats,
		programs,
		campusStats,
		activities,
		announcements,
		testimonial
	} from '#lib/data/site';

	// Enquiry form (demo only — no backend; success state is local)
	let parentName = $state('');
	let email = $state('');
	let phone = $state('');
	let grade = $state('');
	let errors = $state<Record<string, string>>({});
	let enquiryDone = $state(false);

	function submitEnquiry(e: Event) {
		e.preventDefault();
		errors = {};
		if (parentName.trim().length < 2) errors.name = 'Please enter the parent’s name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Please enter a valid email address.';
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ''))) errors.phone = 'Enter a valid 10-digit mobile number.';
		if (!grade) errors.grade = 'Please choose a grade.';
		if (Object.keys(errors).length) return;
		enquiryDone = true;
	}

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'School',
		name: 'Sunshine International School',
		url: 'https://sunshine-international-school.pages.dev/',
		telephone: '+91-98765-43210',
		email: 'info@sunshineschool.edu.in',
		address: {
			'@type': 'PostalAddress',
			streetAddress: '123 Education Street',
			addressLocality: 'New Delhi',
			postalCode: '110001',
			addressCountry: 'IN'
		}
	};
</script>

<svelte:head>
	<title>Sunshine International School, New Delhi | Nurturing Minds. Shaping Futures.</title>
	<meta
		name="description"
		content="Sunshine International School, New Delhi — empowering students with knowledge, values and skills to thrive in a changing world. Admissions open 2024-25, Nursery to Class XII."
	/>
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/" />
	<meta property="og:title" content="Sunshine International School, New Delhi" />
	<meta
		property="og:description"
		content="Learn. Grow. Succeed. Admissions open 2024-25."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<!-- HERO -->
<section class="relative overflow-hidden bg-cream">
	<img
		src="/images/school-building.webp"
		alt=""
		aria-hidden="true"
		class="hero-kenburns pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
	/>
	<div class="relative mx-auto grid max-w-7xl gap-8 px-4 pt-10 pb-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:px-8 lg:pt-14">
		<div class="fade-up min-w-0">
			<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">WHERE YOUNG MINDS</p>
			<h1 class="mt-3 font-display text-5xl leading-[1.05] font-bold text-ink sm:text-6xl lg:text-7xl">
				Learn. Grow.<br />
				<span class="text-maroon-800">Succeed.</span>
			</h1>
			<p class="mt-5 max-w-md leading-relaxed text-ink/70">
				Empowering students with knowledge, values and skills to thrive in a changing world.
			</p>
			<div class="mt-7 flex flex-wrap gap-3">
				<a
					href="/admissions"
					class="inline-flex min-h-12 items-center rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700"
				>
					ADMISSIONS OPEN 2024-25
				</a>
				<a
					href="/contact"
					class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50"
				>
					TAKE A CAMPUS TOUR
				</a>
			</div>
			<div class="mt-10 grid max-w-lg grid-cols-3 gap-4 sm:grid-cols-5">
				{#each heroFeatures as f}
					<div class="min-w-0 text-center">
						<span class="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-maroon-800/15 bg-white text-maroon-800 shadow-sm">
							<Icon name={f.icon} cls="h-5 w-5" />
						</span>
						<p class="mt-2 text-[0.68rem] leading-tight font-semibold text-ink/70">{f.title}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class="min-w-0">
			<img
				src="/images/hero-students.webp"
				alt="Two smiling Sunshine International School students in maroon blazers in front of the school"
				class="h-80 w-full rounded-lg object-cover object-center shadow-xl sm:h-[26rem]"
				fetchpriority="high"
			/>
			<!-- Enquiry card -->
			<div class="mt-4 overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-maroon-800/10">
				<div class="bg-maroon-800 px-5 py-4 text-white">
					<h2 class="text-lg font-extrabold tracking-wide">ENQUIRE NOW</h2>
					<p class="text-xs text-white/75">We will get in touch with you!</p>
				</div>
				{#if enquiryDone}
					<div class="px-5 py-6 text-center">
						<Icon name="check" cls="mx-auto h-10 w-10 text-maroon-800" />
						<p class="mt-3 font-bold text-maroon-800">Thank you, {parentName.trim()}!</p>
						<p class="mt-1 text-sm text-ink/65">
							Your enquiry for {grade} has been received (demo). Our admissions team will call you
							soon.
						</p>
						<button
							type="button"
							onclick={() => {
								enquiryDone = false;
								parentName = '';
								email = '';
								phone = '';
								grade = '';
							}}
							class="mt-4 min-h-11 rounded-sm border border-maroon-800 px-4 text-sm font-bold text-maroon-800"
						>
							Send another enquiry
						</button>
					</div>
				{:else}
					<form class="space-y-3 px-5 py-5" onsubmit={submitEnquiry} novalidate>
						<div>
							<label for="eq-name" class="sr-only">Parent's Name</label>
							<input id="eq-name" bind:value={parentName} placeholder="Parent's Name" class="w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.name}<p class="mt-1 text-xs text-red-700">{errors.name}</p>{/if}
						</div>
						<div>
							<label for="eq-email" class="sr-only">Email Address</label>
							<input id="eq-email" type="email" bind:value={email} placeholder="Email Address" class="w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.email}<p class="mt-1 text-xs text-red-700">{errors.email}</p>{/if}
						</div>
						<div>
							<label for="eq-phone" class="sr-only">Phone Number</label>
							<input id="eq-phone" type="tel" bind:value={phone} placeholder="Phone Number" class="w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.phone}<p class="mt-1 text-xs text-red-700">{errors.phone}</p>{/if}
						</div>
						<div>
							<label for="eq-grade" class="sr-only">Grade Applying For</label>
							<select id="eq-grade" bind:value={grade} class="w-full rounded-sm border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink/80 focus:border-maroon-700 focus:outline-none">
								<option value="" disabled>Grade Applying For</option>
								<option>Nursery</option><option>KG</option><option>Class I – V</option>
								<option>Class VI – VIII</option><option>Class IX – X</option><option>Class XI – XII</option>
							</select>
							{#if errors.grade}<p class="mt-1 text-xs text-red-700">{errors.grade}</p>{/if}
						</div>
						<button type="submit" class="min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">
							SUBMIT ENQUIRY
						</button>
						<p class="text-center text-[0.68rem] text-ink/45">Demo form — no data is sent anywhere.</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- WELCOME -->
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<Reveal>
		<div class="grid items-center gap-10 lg:grid-cols-2">
			<img src="/images/school-building.webp" alt="Sunshine International School building, New Delhi" class="h-72 w-full rounded-lg object-cover shadow-lg sm:h-96" loading="lazy" />
			<div class="min-w-0">
				<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">WELCOME TO SIS</p>
				<h2 class="mt-3 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl">
					A Place Where Every Child Can Shine
				</h2>
				<p class="mt-4 leading-relaxed text-ink/70">
					At Sunshine International School, we focus on academic excellence, character building and
					all-round development to prepare students for a successful future.
				</p>
				<a href="/about" class="mt-6 inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">
					KNOW MORE ABOUT US
				</a>
			</div>
		</div>
	</Reveal>
	<Reveal>
		<div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
			{#each welcomeStats as s}
				<div class="min-w-0 rounded-lg border border-maroon-800/10 bg-cream px-3 py-5 text-center">
					<Icon name={s.icon} cls="mx-auto h-7 w-7 text-maroon-800" />
					<p class="mt-2 font-display text-2xl font-bold text-maroon-800 sm:text-3xl">
						<CountUp value={s.value} suffix={s.suffix} />
					</p>
					<p class="mt-1 text-xs leading-snug font-semibold text-ink/65">{s.label}</p>
				</div>
			{/each}
		</div>
	</Reveal>
</section>

<!-- ACADEMIC PROGRAMS -->
<section class="bg-cream/70 py-14 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<Reveal>
			<div class="text-center">
				<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">OUR ACADEMIC PROGRAMS</p>
				<h2 class="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Programs Designed for Every Stage</h2>
			</div>
		</Reveal>
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each programs as p, i}
				<Reveal cls="min-w-0">
					<article class="group h-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-ink/5 transition hover:shadow-lg">
						<div class="relative">
							<img src={p.img} alt="{p.title} at Sunshine International School" class="h-44 w-full object-cover" loading="lazy" />
							<span class="absolute -bottom-5 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-maroon-800 text-white shadow">
								<Icon name={p.icon} cls="h-5 w-5" />
							</span>
						</div>
						<div class="px-4 pt-8 pb-5">
							<h3 class="font-display text-lg font-bold text-ink">{p.title}</h3>
							<p class="mt-1 text-sm font-bold text-maroon-800">{p.tagline}</p>
							<p class="mt-2 text-sm leading-relaxed text-ink/65">{p.text}</p>
							<a href="/academics#{p.id}" class="mt-3 inline-flex min-h-11 items-center gap-1 text-xs font-extrabold tracking-wider text-maroon-800">
								READ MORE <Icon name="arrow-right" cls="h-3.5 w-3.5" />
							</a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- MAROON STATS BAND -->
<section class="bg-maroon-800 py-10 text-white">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
		{#each campusStats as s}
			<div class="min-w-0">
				<Icon name={s.icon} cls="mx-auto h-8 w-8 text-gold-400" />
				<p class="mt-2 font-display text-3xl font-bold text-gold-400">{s.value}</p>
				<p class="mt-1 text-xs font-semibold tracking-wide text-white/80">{s.label}</p>
			</div>
		{/each}
	</div>
</section>

<!-- BEYOND CLASSROOMS -->
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
	<Reveal>
		<div class="text-center">
			<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">BEYOND CLASSROOMS</p>
			<h2 class="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Holistic Development Through Activities</h2>
		</div>
	</Reveal>
	<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each activities as a}
			<Reveal cls="min-w-0">
				<a href="/campus-life" class="group block overflow-hidden rounded-lg shadow-sm ring-1 ring-ink/5 transition hover:shadow-lg">
					<div class="relative">
						<img src={a.img} alt="{a.title} at Sunshine International School" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
						<span class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-maroon-800 py-1.5 pr-4 pl-1.5 text-sm font-bold text-white shadow">
							<span class="flex h-7 w-7 items-center justify-center rounded-full bg-white/15"><Icon name={a.icon} cls="h-4 w-4" /></span>
							{a.title}
						</span>
					</div>
				</a>
			</Reveal>
		{/each}
	</div>
</section>

<!-- BOTTOM ROW: testimonial / announcements / tour -->
<section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
	<div class="grid gap-6 lg:grid-cols-3">
		<Reveal cls="min-w-0">
			<div class="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
				<h3 class="text-xs font-extrabold tracking-[0.25em] text-maroon-800">WHAT PARENTS SAY</h3>
				<Icon name="quote" cls="mt-4 h-8 w-8 text-gold-500" />
				<blockquote class="mt-3 leading-relaxed text-ink/75">“{testimonial.quote}”</blockquote>
				<div class="mt-5 flex items-center gap-3">
					<span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-800 font-display text-lg font-bold text-gold-400">PS</span>
					<div>
						<p class="font-bold text-ink">{testimonial.name}</p>
						<p class="text-xs text-ink/60">{testimonial.detail}</p>
					</div>
				</div>
			</div>
		</Reveal>
		<Reveal cls="min-w-0">
			<div class="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
				<h3 class="text-xs font-extrabold tracking-[0.25em] text-maroon-800">LATEST ANNOUNCEMENTS</h3>
				<ul class="mt-4 space-y-4">
					{#each announcements as a}
						<li class="flex gap-3">
							<span class="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-md bg-maroon-50 text-maroon-800">
								<span class="font-display text-xl leading-none font-bold">{a.day}</span>
								<span class="text-[0.6rem] font-bold tracking-wider">{a.month}</span>
							</span>
							<div class="min-w-0">
								<p class="text-sm leading-snug font-bold text-ink">{a.title}</p>
								<p class="mt-0.5 text-xs text-maroon-800">{a.text}</p>
							</div>
						</li>
					{/each}
				</ul>
				<a href="/news-events" class="mt-4 inline-flex min-h-11 items-center text-xs font-extrabold tracking-wider text-maroon-800">Know More →</a>
			</div>
		</Reveal>
		<Reveal cls="min-w-0">
			<div class="flex h-full flex-col justify-between rounded-lg bg-maroon-800 p-6 text-white shadow-sm">
				<div>
					<h3 class="font-display text-2xl font-bold">SCHEDULE A CAMPUS TOUR</h3>
					<p class="mt-2 text-sm leading-relaxed text-white/75">Visit the campus and experience the SIS difference in person.</p>
				</div>
				<a href="/admissions#visit" class="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-gold-300">
					BOOK YOUR TOUR <Icon name="calendar" cls="h-4 w-4" />
				</a>
			</div>
		</Reveal>
	</div>
	<p class="mt-8 text-center text-xs text-ink/40">
		Demo website — all names, fees, dates, testimonials and photos are mock content for client presentation.
	</p>
</section>
