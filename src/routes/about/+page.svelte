<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<PageHero title="About Us" subtitle="Twenty years of nurturing minds and shaping futures in the heart of New Delhi." crumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal><div class="grid gap-10 lg:grid-cols-2">
		<img src="/images/school-building.webp" alt="Sunshine International School campus" class="h-80 w-full rounded-lg object-cover shadow-lg" />
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
				<div class="rounded-lg border border-ink/10 p-5"><span class="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-800 font-display text-lg font-bold text-gold-400">{f.n.split(' ').map(x=>x[0]).slice(-2).join('')}</span><p class="mt-3 font-bold">{f.n}</p><p class="text-sm text-ink/60">{f.r}</p></div>
			{/each}
		</div>
	</div></Reveal>
</section>
