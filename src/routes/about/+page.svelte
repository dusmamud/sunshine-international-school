<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { imgSrcset } from '#lib/images';
	import { teacherSlug } from '#lib/data/more';
</script>

<svelte:head>
	<meta name="description" content="About Sunshine International School, New Delhi — twenty years of nurturing minds and shaping futures through academics, values and holistic growth." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/about" />
	<meta property="og:title" content="About Us | Sunshine International School" />
	<meta property="og:description" content="About Sunshine International School, New Delhi — twenty years of nurturing minds and shaping futures through academics, values and holistic growth." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/about" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/main-gate.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Us | Sunshine International School" />
	<meta name="twitter:description" content="About Sunshine International School, New Delhi — twenty years of nurturing minds and shaping futures through academics, values and holistic growth." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/main-gate.webp" />
</svelte:head>

<PageHero title="About Us" subtitle="Twenty years of nurturing minds and shaping futures in the heart of New Delhi." crumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal><div class="grid gap-10 lg:grid-cols-2">
		<img src="/images/main-gate.webp" alt="Sunshine International School campus" width="2288" height="1104" srcset={imgSrcset('/images/main-gate.webp')} sizes="(max-width: 640px) 100vw, 600px" class="h-80 w-full rounded-lg object-cover shadow-lg" />
		<div class="min-w-0"><p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">OUR STORY</p>
		<h2 class="mt-3 font-display text-3xl font-bold">Founded in 2004, growing with every child</h2>
		<p class="mt-4 leading-relaxed text-ink/70">Sunshine International School began in New Delhi with 120 students and a simple dream — quality education for every child. Today, 2,500+ students from Nursery to Class XII learn on our 10-acre campus with 150+ dedicated faculty. (Demo content.)</p>
		<p class="mt-3 leading-relaxed text-ink/70">Our mission: academic excellence, character building and all-round development — so every child leaves ready for a changing world.</p></div>
	</div></Reveal>
	<Reveal><div id="principal" class="mt-14 rounded-lg bg-cream p-6 sm:p-8">
		<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">PRINCIPAL'S MESSAGE</p>
		<blockquote class="mt-3 font-display text-xl leading-relaxed text-ink sm:text-2xl">"Every child carries sunshine within. Our job is to give it room to grow — with rigour, kindness and joy."</blockquote>
		<p class="mt-4 text-sm font-bold">Dr. Meera Kapoor <span class="font-normal text-ink/60">— Principal, Sunshine International School (demo)</span></p>
	</div></Reveal>
	<Reveal><div id="faculty" class="mt-14">
		<h2 class="font-display text-2xl font-bold sm:text-3xl">Our Faculty</h2>
		<p class="mt-2 max-w-2xl text-ink/70">150+ experienced educators, mentors and coaches — average experience 12 years. (Demo figures.)</p>
		<div class="mt-6 grid gap-4 sm:grid-cols-3">
			{#each [{ n: 'Dr. Meera Kapoor', r: 'Principal · M.Ed, Ph.D Education' }, { n: 'Mr. Arjun Malhotra', r: 'Head of Science · M.Sc Physics' }, { n: 'Ms. Kavita Sharma', r: 'Head of Primary · B.Ed, M.A English' }] as f}
				<a href="/faculty/{teacherSlug(f.n)}" class="block rounded-lg border border-ink/10 p-5 transition hover:border-maroon-800/40 hover:shadow-md"><span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-800 font-display text-lg font-bold text-gold-400">{f.n.split(' ').map(x=>x[0]).slice(-2).join('')}</span><p class="mt-3 font-bold">{f.n}</p><p class="text-sm text-ink/60">{f.r}</p><span class="mt-2 inline-block text-xs font-extrabold tracking-wider text-maroon-800">VIEW PROFILE →</span></a>
			{/each}
		</div>
		<a href="/faculty" class="mt-6 inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">VIEW FULL FACULTY DIRECTORY</a>
	</div></Reveal>
</section>
