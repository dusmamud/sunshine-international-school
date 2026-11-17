<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { disclosure } from '#lib/data/more';
</script>

<PageHero
	title="Mandatory Disclosure"
	subtitle="General information, certificates, fee structure, committees, staff and infrastructure — as required by CBSE (Appendix IX). All figures are demo data for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'Mandatory Disclosure' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<h2 class="font-display text-2xl font-bold sm:text-3xl">A. General Information</h2>
		<div class="mt-5 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="block w-full text-left text-sm sm:table">
				<tbody class="block sm:table-row-group">
					{#each disclosure.general as g}
						<tr class="block border-b border-ink/5 last:border-0 sm:table-row">
							<th scope="row" class="block px-5 pt-3 pb-0 font-bold text-maroon-800 sm:table-cell sm:w-2/5 sm:py-3"> {g.label}</th>
							<td class="block px-5 pt-1 pb-3 text-ink/80 sm:table-cell sm:py-3">{g.value}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Reveal>

	<Reveal>
		<h2 class="mt-14 font-display text-2xl font-bold sm:text-3xl">B. Certificates &amp; Documents</h2>
		<p class="mt-2 text-sm text-ink/60">Demo copies — real certificates must be uploaded before a real launch.</p>
		<div class="mt-5 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-maroon-800 text-white">
						<th class="px-5 py-3">Document</th>
						<th class="px-5 py-3">Reference No.</th>
						<th class="px-5 py-3">Validity</th>
						<th class="px-5 py-3">Status</th>
					</tr>
				</thead>
				<tbody>
					{#each disclosure.documents as d}
						<tr class="border-b border-ink/5 last:border-0">
							<td class="px-5 py-3 font-semibold">{d.name}</td>
							<td class="px-5 py-3 text-ink/70">{d.ref}</td>
							<td class="px-5 py-3 text-ink/70">{d.validity}</td>
							<td class="px-5 py-3"><span class="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-bold text-gold-600">{d.status}</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Reveal>

	<Reveal>
		<h2 class="mt-14 font-display text-2xl font-bold sm:text-3xl">C. Fee Structure (per annum, demo)</h2>
		<div class="mt-5 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="block w-full text-left text-sm sm:table">
				<tbody class="block sm:table-row-group">
					{#each disclosure.fees as f}
						<tr class="block border-b border-ink/5 last:border-0 sm:table-row">
							<th scope="row" class="block px-5 pt-3 pb-0 font-bold text-maroon-800 sm:table-cell sm:w-3/5 sm:py-3">{f.label}</th>
							<td class="block px-5 pt-1 pb-3 font-semibold text-ink/80 sm:table-cell sm:py-3">{f.value}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="mt-3 text-sm text-ink/60">Full details on the <a href="/fees" class="font-bold text-maroon-800 underline">Fees page</a>.</p>
	</Reveal>

	<div class="mt-14 grid gap-10 lg:grid-cols-2">
		<Reveal>
			<h2 class="font-display text-2xl font-bold sm:text-3xl">D. School Management Committee</h2>
			<ul class="mt-5 space-y-3">
				{#each disclosure.smc as m}
					<li class="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-5 py-3 shadow-sm">
						<span class="font-semibold">{m.name}</span>
						<span class="text-right text-sm text-ink/60">{m.role}</span>
					</li>
				{/each}
			</ul>
			<h2 class="mt-10 font-display text-2xl font-bold sm:text-3xl">Parent Teacher Association</h2>
			<ul class="mt-5 space-y-3">
				{#each disclosure.pta as m}
					<li class="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-5 py-3 shadow-sm">
						<span class="font-semibold">{m.name}</span>
						<span class="text-right text-sm text-ink/60">{m.role}</span>
					</li>
				{/each}
			</ul>
		</Reveal>
		<Reveal>
			<h2 class="font-display text-2xl font-bold sm:text-3xl">E. Staff &amp; Infrastructure</h2>
			<h3 class="mt-5 text-sm font-extrabold tracking-[0.2em] text-maroon-800">TEACHING STAFF (DEMO)</h3>
			<ul class="mt-3 space-y-2">
				{#each disclosure.staff as s}
					<li class="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-white px-5 py-2.5 text-sm shadow-sm">
						<span class="font-semibold">{s.label}</span>
						<span class="font-display text-lg font-bold text-maroon-800">{s.count}</span>
					</li>
				{/each}
			</ul>
			<h3 class="mt-8 text-sm font-extrabold tracking-[0.2em] text-maroon-800">INFRASTRUCTURE</h3>
			<div class="mt-3 overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
				<table class="block w-full text-left text-sm sm:table">
					<tbody class="block sm:table-row-group">
						{#each disclosure.infrastructure as i}
							<tr class="block border-b border-ink/5 last:border-0 sm:table-row">
								<th scope="row" class="block px-5 pt-3 pb-0 font-bold text-maroon-800 sm:table-cell sm:py-2.5">{i.label}</th>
								<td class="block px-5 pt-1 pb-3 text-ink/80 sm:table-cell sm:py-2.5">{i.value}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</Reveal>
	</div>

	<p class="mt-12 text-center text-xs text-ink/40">
		Demo website — all names, numbers and certificates are mock content for client presentation.
	</p>
</section>
