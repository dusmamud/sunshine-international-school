<script lang="ts">
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';

	let { data } = $props();
	const teacher = $derived(data.teacher);
	const prev = $derived(data.prev);
	const next = $derived(data.next);
	const siblings = $derived(data.siblings);
	const firstName = $derived(
		teacher.name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/, '').split(' ')[0]
	);
</script>

<svelte:head>
	<title>{teacher.name} — {teacher.role} | Sunshine International School</title>
	<meta
		name="description"
		content="{teacher.name}, {teacher.role} ({teacher.department}) at Sunshine International School, New Delhi. {teacher.bio}"
	/>
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/faculty/{teacher.slug}" />
</svelte:head>

<!-- Portfolio hero -->
<section class="relative overflow-hidden bg-maroon-900">
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.07]"
		style="background-image: radial-gradient(circle at 20% 30%, #c9a227 0, transparent 32%), radial-gradient(circle at 80% 20%, #ffffff 0, transparent 28%), radial-gradient(circle at 60% 90%, #c9a227 0, transparent 30%);"
		aria-hidden="true"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
		<nav
			aria-label="Breadcrumb"
			class="flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-wider text-white/60"
		>
			<a href="/" class="transition hover:text-gold-300">HOME</a>
			<span aria-hidden="true">/</span>
			<a href="/faculty" class="transition hover:text-gold-300">FACULTY</a>
			<span aria-hidden="true">/</span>
			<span class="text-gold-400">{teacher.name.toUpperCase()}</span>
		</nav>
		<div class="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
			<span
				class="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-gold-500 font-display text-4xl font-bold text-maroon-950 ring-4 ring-white/20 sm:h-32 sm:w-32"
			>
				{teacher.initials}
			</span>
			<div>
				<p class="text-xs font-extrabold tracking-[0.28em] text-gold-400 uppercase">
					{teacher.department} · Sunshine International School
				</p>
				<h1 class="mt-2 font-display text-4xl leading-tight font-bold text-white sm:text-5xl">
					{teacher.name}
				</h1>
				<p class="mt-2 text-lg font-bold text-gold-400">{teacher.role}</p>
				<p class="mt-1 text-sm text-white/70">{teacher.note}</p>
			</div>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-3">
		<!-- Main column -->
		<div class="lg:col-span-2">
			<Reveal>
				<h2 class="font-display text-2xl font-bold sm:text-3xl">About {firstName}</h2>
				<p class="mt-5 text-[1.05rem] leading-relaxed text-ink/80">{teacher.bio}</p>
				<blockquote
					class="mt-8 rounded-lg border-l-4 border-gold-500 bg-cream px-6 py-5 font-display text-xl leading-relaxed text-maroon-900 italic"
				>
					“{teacher.quote}”
				</blockquote>
			</Reveal>

			<section class="mt-12">
				<Reveal>
					<h2 class="font-display text-2xl font-bold">Subjects &amp; Focus</h2>
					<div class="mt-4 flex flex-wrap gap-2">
						{#each teacher.subjects as s}
							<span class="rounded-full bg-maroon-50 px-4 py-2 text-sm font-bold text-maroon-800">{s}</span>
						{/each}
					</div>
				</Reveal>
			</section>

			<section class="mt-12">
				<Reveal>
					<h2 class="font-display text-2xl font-bold">Achievements</h2>
					<ul class="mt-4 space-y-3">
						{#each teacher.achievements as a}
							<li class="flex gap-3 rounded-lg border border-maroon-900/10 bg-white px-5 py-4 shadow-sm">
								<Icon name="award" cls="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
								<span class="text-sm leading-relaxed font-medium text-ink/80">{a}</span>
							</li>
						{/each}
					</ul>
				</Reveal>
			</section>
		</div>

		<!-- Side column -->
		<aside>
			<Reveal>
				<div class="rounded-lg border border-maroon-900/10 bg-white p-6 shadow-sm">
					<h2 class="font-display text-xl font-bold">Meet {firstName}</h2>
					<ul class="mt-4 space-y-3 text-sm">
						<li class="flex gap-2.5">
							<Icon name="clock" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
							<span>
								<span class="font-bold">Office hours</span><br />
								<span class="text-ink/70">{teacher.office}</span>
							</span>
						</li>
						<li class="flex gap-2.5">
							<Icon name="users" cls="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
							<span>
								<span class="font-bold">Department</span><br />
								<span class="text-ink/70">{teacher.department}</span>
							</span>
						</li>
					</ul>
					<a
						href="/contact"
						class="mt-6 flex min-h-12 items-center justify-center rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700"
					>
						BOOK A MEETING
					</a>
					<p class="mt-2 text-center text-[0.68rem] text-ink/45">Demo — the contact form does not send data anywhere.</p>
				</div>
			</Reveal>

			{#if siblings.length}
				<Reveal>
					<div class="mt-6 rounded-lg border border-maroon-900/10 bg-white p-6 shadow-sm">
						<h2 class="font-display text-xl font-bold">Also in {teacher.department}</h2>
						<ul class="mt-4 space-y-3">
							{#each siblings as s}
								<li>
									<a href="/faculty/{s.slug}" class="group flex items-center gap-3">
										<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-800 text-sm font-bold text-gold-400">{s.initials}</span>
										<span>
											<span class="block text-sm font-bold group-hover:text-maroon-800">{s.name}</span>
											<span class="block text-xs text-ink/60">{s.role}</span>
										</span>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</Reveal>
			{/if}
		</aside>
	</div>

	<!-- Prev / next -->
	<nav class="mt-14 flex flex-col gap-3 sm:flex-row sm:justify-between" aria-label="More teachers">
		{#if prev}
			<a href="/faculty/{prev.slug}" class="flex min-h-12 items-center gap-2 rounded-lg border border-ink/10 bg-white px-5 py-3 text-sm font-bold transition hover:border-maroon-800/40 hover:text-maroon-800">
				<Icon name="arrow-left" cls="h-4 w-4" /> {prev.name}
			</a>
		{:else}<span></span>{/if}
		{#if next}
			<a href="/faculty/{next.slug}" class="flex min-h-12 items-center gap-2 rounded-lg border border-ink/10 bg-white px-5 py-3 text-sm font-bold transition hover:border-maroon-800/40 hover:text-maroon-800">
				{next.name} <Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		{/if}
	</nav>
	<p class="mt-8 text-center text-xs text-ink/40">Demo website — this faculty profile is mock content for client presentation.</p>
</div>
