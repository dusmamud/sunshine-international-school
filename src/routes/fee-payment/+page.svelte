<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { demoStudents } from '#lib/data/more';

	const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

	let admNo = $state('');
	let lookupError = $state('');
	let student = $state<(typeof demoStudents)[number] | null>(null);
	let method = $state('UPI');
	let paying = $state(false);
	let receipt = $state<string | null>(null);

	function lookup(e: Event) {
		e.preventDefault();
		const found = demoStudents.find((s) => s.adm.toLowerCase() === admNo.trim().toLowerCase());
		if (!found) {
			lookupError = 'Admission number not found in the demo records. Try SIS2026001, SIS2026014 or SIS2026027.';
			student = null;
			return;
		}
		lookupError = '';
		student = found;
	}

	function pay() {
		paying = true;
		setTimeout(() => {
			paying = false;
			receipt = 'SIS-PAY-' + String(Math.floor(100000 + Math.random() * 900000));
		}, 1200);
	}

	const total = $derived(student ? student.due + student.transport : 0);
</script>

<svelte:head>
	<meta name="description" content="Pay fees online (demo) at Sunshine International School, New Delhi — look up your ward, check the Term 2 summary and pay by UPI, card or netbanking." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/fee-payment" />
	<meta property="og:title" content="Pay Fees Online | Sunshine International School" />
	<meta property="og:description" content="Pay fees online (demo) at Sunshine International School, New Delhi — look up your ward, check the Term 2 summary and pay by UPI, card or netbanking." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/fee-payment" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Pay Fees Online | Sunshine International School" />
	<meta name="twitter:description" content="Pay fees online (demo) at Sunshine International School, New Delhi — look up your ward, check the Term 2 summary and pay by UPI, card or netbanking." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Pay Fees Online"
	subtitle="Demo fee payment — look up your ward, check the Term 2 summary and pay by UPI, card or netbanking. No real money moves here."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Fees', href: '/fees' }, { label: 'Pay Online' }]}
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
			{#if receipt && student}
				<div class="text-center">
					<span class="success-check mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-maroon-50 text-maroon-800"><Icon name="check" cls="h-8 w-8" /></span>
					<h2 class="mt-4 font-display text-2xl font-bold text-maroon-800">Payment Successful (Demo)</h2>
					<p class="mt-1 text-sm text-ink/65">Receipt <strong class="text-ink">{receipt}</strong> · {student.term}</p>
					<div class="mx-auto mt-6 max-w-sm overflow-hidden rounded-lg border border-ink/10 text-left text-sm">
						<div class="bg-maroon-800 px-4 py-3 text-white"><p class="font-extrabold tracking-wide">FEE RECEIPT — SUNSHINE INTERNATIONAL SCHOOL</p></div>
						<dl class="divide-y divide-ink/5">
							<div class="flex justify-between px-4 py-3"><dt class="text-ink/60">Student</dt><dd class="font-bold">{student.name} · {student.cls}</dd></div>
							<div class="flex justify-between px-4 py-3"><dt class="text-ink/60">Admission No.</dt><dd class="font-bold">{student.adm}</dd></div>
							<div class="flex justify-between px-4 py-3"><dt class="text-ink/60">Tuition ({student.term})</dt><dd class="font-bold">{inr(student.due)}</dd></div>
							<div class="flex justify-between px-4 py-3"><dt class="text-ink/60">Transport</dt><dd class="font-bold">{student.transport ? inr(student.transport) : '—'}</dd></div>
							<div class="flex justify-between bg-cream px-4 py-3"><dt class="font-extrabold">Total paid ({method})</dt><dd class="font-extrabold text-maroon-800">{inr(total)}</dd></div>
						</dl>
					</div>
					<div class="mt-6 flex flex-wrap justify-center gap-3">
						<button type="button" onclick={() => window.print()} class="inline-flex min-h-12 items-center gap-2 rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700"><Icon name="download" cls="h-4 w-4" /> PRINT RECEIPT</button>
						<button type="button" onclick={() => { receipt = null; student = null; admNo = ''; }} class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">PAY ANOTHER FEE</button>
					</div>
				</div>
			{:else if student}
				<h2 class="font-display text-2xl font-bold">Fee Summary — {student.term}</h2>
				<p class="mt-1 text-sm text-ink/60">{student.name} · {student.cls} · Admission No. {student.adm}</p>
				<dl class="mt-5 divide-y divide-ink/5 rounded-lg border border-ink/10 text-sm">
					<div class="flex justify-between px-4 py-3"><dt class="text-ink/60">Tuition fee</dt><dd class="font-bold">{inr(student.due)}</dd></div>
					<div class="flex justify-between px-4 py-3"><dt class="text-ink/60">Transport</dt><dd class="font-bold">{student.transport ? inr(student.transport) : 'Not opted'}</dd></div>
					<div class="flex justify-between bg-cream px-4 py-3"><dt class="font-extrabold">Total payable</dt><dd class="font-extrabold text-maroon-800">{inr(total)}</dd></div>
				</dl>
				<p class="mt-5 text-xs font-extrabold tracking-[0.25em] text-maroon-800">PAYMENT METHOD</p>
				<div class="mt-2 grid gap-2 sm:grid-cols-3" role="radiogroup" aria-label="Payment method">
					{#each ['UPI', 'Card', 'NetBanking'] as m}
						<button type="button" role="radio" aria-checked={method === m} onclick={() => (method = m)} class="min-h-12 rounded-sm border px-4 text-sm font-bold transition {method === m ? 'border-maroon-800 bg-maroon-800 text-white' : 'border-ink/20 text-ink/70 hover:border-maroon-800/50'}">{m}</button>
					{/each}
				</div>
				{#if method === 'UPI'}
					<div class="mt-4 flex items-center gap-4 rounded-lg bg-cream p-4">
						<span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-ink/10 font-display text-lg font-bold text-maroon-800">UPI</span>
						<p class="text-sm leading-relaxed text-ink/70">Demo UPI — pay to <strong class="text-ink">sunshine@okhdfc</strong> or scan the QR in the parent portal. In this demo, just press Pay.</p>
					</div>
				{/if}
				<button type="button" onclick={pay} disabled={paying} class="btn-shine mt-5 min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700 disabled:opacity-60">
					{paying ? 'PROCESSING…' : `PAY ${inr(total)} VIA ${method.toUpperCase()}`}
				</button>
				<button type="button" onclick={() => (student = null)} class="mt-3 min-h-11 w-full text-sm font-bold text-maroon-800">← Look up a different student</button>
			{:else}
				<h2 class="font-display text-2xl font-bold">Find your ward</h2>
				<p class="mt-1 text-sm text-ink/60">Enter the admission number from the fee challan or diary.</p>
				<form class="mt-5" onsubmit={lookup} novalidate>
					<label for="fp-adm" class="text-xs font-bold tracking-wider text-ink/60">ADMISSION NUMBER</label>
					<input id="fp-adm" bind:value={admNo} placeholder="e.g. SIS2026001" class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-3 text-sm uppercase focus:border-maroon-700 focus:outline-none" />
					{#if lookupError}<p class="mt-2 text-sm text-red-700">{lookupError}</p>{/if}
					<button type="submit" class="btn-shine mt-4 min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">FIND FEE DETAILS</button>
				</form>
				<p class="mt-4 rounded-lg bg-cream px-4 py-3 text-xs leading-relaxed text-ink/60">Demo accounts: <strong>SIS2026001</strong> (Aarav Verma, Class VI–B), <strong>SIS2026014</strong> (Diya Kapoor, Class IX–A), <strong>SIS2026027</strong> (Kabir Singh, Class XI–Science).</p>
			{/if}
		</div>
	</Reveal>
</section>
