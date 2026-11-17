<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
let name=$state(''); let phone=$state(''); let grade=$state(''); let done=$state(false); let err=$state('');
	function submit(e:Event){e.preventDefault(); if(name.trim().length<2){err='Please enter the parent name.';return;} if(!/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g,''))){err='Enter a valid 10-digit mobile number.';return;} if(!grade){err='Please choose a grade.';return;} err=''; done=true;}
</script>
<PageHero title="Admissions" subtitle="Admissions open for 2026-27 — Nursery to Class XII. (Demo fees and dates.)" crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal><div id="process"><h2 class="font-display text-2xl font-bold sm:text-3xl">Admission Process</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-4">
	{#each [{ n: '1', t: 'Enquire', d: 'Submit the enquiry form or call +91 98765 43210.' }, { n: '2', t: 'Visit', d: 'Book a campus tour and meet our counsellors.' }, { n: '3', t: 'Interact', d: 'Age-appropriate interaction / assessment.' }, { n: '4', t: 'Enrol', d: 'Offer letter, documents and fee payment.' }] as s}
		<div class="rounded-lg border border-ink/10 p-5"><span class="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-800 font-display text-lg font-bold text-gold-400">{s.n}</span><p class="mt-3 font-bold">{s.t}</p><p class="mt-1 text-sm text-ink/65">{s.d}</p></div>
	{/each}</div></div></Reveal>
	<Reveal><div class="mt-14"><h2 class="font-display text-2xl font-bold sm:text-3xl">Choose Your Stage</h2>
	<p class="mt-2 text-sm text-ink/60">Age criteria, seats, documents and the exact process for each stage.</p>
	<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
	{#each [{ t: 'Pre-Primary', c: 'Nursery – KG', h: '/admissions/pre-primary' }, { t: 'Primary', c: 'Classes I – V', h: '/admissions/primary' }, { t: 'Middle School', c: 'Classes VI – VIII', h: '/admissions/middle' }, { t: 'High School', c: 'Classes IX – X', h: '/admissions/high' }, { t: 'Senior Secondary', c: 'Classes XI – XII', h: '/admissions/senior-secondary' }] as s}
		<a href={s.h} class="card-lift block rounded-lg border border-ink/10 bg-white p-5 shadow-sm"><p class="font-display text-lg font-bold">{s.t}</p><p class="mt-1 text-sm text-ink/60">{s.c}</p><span class="mt-3 inline-block text-xs font-extrabold tracking-wider text-maroon-800">VIEW DETAILS →</span></a>
	{/each}</div>
	<div class="mt-4 flex flex-wrap gap-3">
		<a href="/fees" class="inline-flex min-h-11 items-center rounded-sm border border-maroon-800/25 px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-50">Full Fee Structure</a>
		<a href="/scholarships" class="inline-flex min-h-11 items-center rounded-sm border border-maroon-800/25 px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-50">Scholarships</a>
		<a href="/open-day" class="inline-flex min-h-11 items-center rounded-sm border border-maroon-800/25 px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-50">Book an Open Day</a>
		<a href="/prospectus" class="inline-flex min-h-11 items-center rounded-sm border border-maroon-800/25 px-4 text-sm font-bold text-maroon-800 transition hover:bg-maroon-50">Download Prospectus</a>
	</div></div></Reveal>
	<Reveal><div id="fees" class="mt-14 scroll-mt-28"><h2 class="font-display text-2xl font-bold sm:text-3xl">Fee Structure (₹ per annum, demo)</h2>
	<div class="mt-6 overflow-x-auto rounded-lg border border-ink/10"><table class="w-full min-w-[520px] text-left text-sm">
	<thead class="bg-maroon-800 text-white"><tr><th class="px-4 py-3">Grade</th><th class="px-4 py-3">Tuition</th><th class="px-4 py-3">Admission (one-time)</th></tr></thead>
	<tbody>{#each [['Nursery – KG','₹48,000','₹15,000'],['Class I – V','₹62,000','₹15,000'],['Class VI – VIII','₹72,000','₹15,000'],['Class IX – X','₹84,000','₹20,000'],['Class XI – XII','₹96,000','₹20,000']] as r}<tr class="border-t border-ink/10"><td class="px-4 py-3 font-semibold">{r[0]}</td><td class="px-4 py-3">{r[1]}</td><td class="px-4 py-3">{r[2]}</td></tr>{/each}</tbody></table></div>
	<p class="mt-2 text-xs text-ink/50">Demo fees for presentation only. Transport and meals extra.</p></div></Reveal>
	<Reveal><div id="dates" class="mt-14 scroll-mt-28"><h2 class="font-display text-2xl font-bold sm:text-3xl">Important Dates (2026-27, demo)</h2>
	<ul class="mt-4 space-y-2 text-sm text-ink/75"><li>• Applications open — 1 May 2026</li><li>• Interaction rounds — 20 May – 10 June 2026</li><li>• First list — 20 June 2026</li><li>• Session begins — 1 July 2026</li></ul></div></Reveal>
	<Reveal><div id="enquire" class="mt-14 scroll-mt-28 rounded-lg bg-cream p-6 sm:p-8">
	<h2 class="font-display text-2xl font-bold">Enquire Now</h2>
	{#if done}<p class="mt-3 rounded-md bg-white p-4 font-bold text-maroon-800">Thank you, {name.trim()}! Your enquiry for {grade} was received (demo).</p>
	{:else}<form class="mt-4 grid gap-3 sm:grid-cols-3" onsubmit={submit} novalidate>
	<input bind:value={name} placeholder="Parent's Name" class="rounded-sm border border-ink/20 px-3 py-3 text-sm" />
	<input bind:value={phone} type="tel" placeholder="Phone Number" class="rounded-sm border border-ink/20 px-3 py-3 text-sm" />
	<select bind:value={grade} class="rounded-sm border border-ink/20 bg-white px-3 py-3 text-sm"><option value="" disabled>Grade Applying For</option><option>Nursery</option><option>KG</option><option>Class I – V</option><option>Class VI – VIII</option><option>Class IX – X</option><option>Class XI – XII</option></select>
	<button class="min-h-12 rounded-sm bg-maroon-800 text-sm font-extrabold text-white sm:col-span-3">SUBMIT ENQUIRY</button></form>
	{#if err}<p class="mt-2 text-sm text-red-700">{err}</p>{/if}{/if}
	<p class="mt-3 text-sm text-ink/60">Questions? Call <a class="font-bold text-maroon-800" href="tel:+919876543210">+91 98765 43210</a> or write to info@sunshineschool.edu.in.</p></div></Reveal>
	<Reveal><div id="visit" class="mt-14 scroll-mt-28"><h2 id="faq" class="font-display text-2xl font-bold">Visit &amp; FAQ</h2>
	<p class="mt-3 text-ink/70">Campus tours run Mon–Sat, 10 AM – 1 PM. Book by calling the office or via the enquiry form above.</p>
	<p class="mt-3 text-ink/70"><strong>Q: Is transport available?</strong> Yes — GPS-enabled buses across New Delhi (demo). <strong>Q: Scholarships?</strong> Merit scholarships for Classes VI–XII (demo).</p></div></Reveal>
</section>
