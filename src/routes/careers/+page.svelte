<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<svelte:head>
	<meta name="description" content="Careers at Sunshine International School, New Delhi — join a faculty that believes every child can shine. See open teaching and staff roles." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/careers" />
	<meta property="og:title" content="Careers | Sunshine International School" />
	<meta property="og:description" content="Careers at Sunshine International School, New Delhi — join a faculty that believes every child can shine. See open teaching and staff roles." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/careers" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Careers | Sunshine International School" />
	<meta name="twitter:description" content="Careers at Sunshine International School, New Delhi — join a faculty that believes every child can shine. See open teaching and staff roles." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero title="Careers" subtitle="Join a faculty that believes every child can shine. (Demo roles.)" crumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-4 md:grid-cols-3">
	{#each [{ t: 'Primary English Teacher', d: 'Full-time · B.Ed + 3 yrs experience' }, { t: 'Physics Teacher (XI–XII)', d: 'Full-time · M.Sc + B.Ed' }, { t: 'Football Coach', d: 'Part-time · AIFF licence preferred' }] as j}
		<Reveal cls="min-w-0"><div class="h-full rounded-lg border border-ink/10 p-6"><h2 class="font-display text-xl font-bold">{j.t}</h2><p class="mt-2 text-sm text-ink/65">{j.d}</p><a href="/contact" class="mt-4 inline-flex min-h-11 items-center rounded-sm bg-maroon-800 px-5 text-sm font-extrabold text-white">APPLY VIA CONTACT</a></div></Reveal>
	{/each}
	</div>
	<p class="mt-6 text-sm text-ink/60">Write to careers@sunshineschool.edu.in with your CV (demo address).</p>
</section>
