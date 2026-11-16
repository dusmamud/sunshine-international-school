<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { busRoutes } from '#lib/data/more';
</script>

<PageHero
	title="Transport"
	subtitle="18 GPS-enabled buses across Delhi, Noida and Ghaziabad. Every bus has a trained driver and a lady attendant. All routes and fees are demo data for client presentation."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Admissions', href: '/admissions' }, { label: 'Transport' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="overflow-x-auto rounded-lg border border-ink/10 bg-white shadow-sm">
			<table class="w-full min-w-[640px] text-left text-sm">
				<thead>
					<tr class="bg-maroon-800 text-white">
						<th class="px-5 py-3">Route</th>
						<th class="px-5 py-3">Areas Covered</th>
						<th class="px-5 py-3">First Pickup</th>
						<th class="px-5 py-3">Monthly Fee</th>
					</tr>
				</thead>
				<tbody>
					{#each busRoutes as r}
						<tr class="border-b border-ink/5 last:border-0">
							<td class="px-5 py-3 font-bold whitespace-nowrap text-maroon-800">{r.route}</td>
							<td class="px-5 py-3">{r.areas}</td>
							<td class="px-5 py-3 whitespace-nowrap">{r.pickup}</td>
							<td class="px-5 py-3 font-bold whitespace-nowrap">{r.fee}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Reveal>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each [{ icon: 'shield', t: 'Safe by design', x: 'GPS tracking on every bus, speed governors, CCTV and a lady attendant on each route.' }, { icon: 'clock', t: 'On time, every day', x: 'Fixed pickup windows and live bus timings shared with parents on the parent portal.' }, { icon: 'file', t: 'Change a route', x: 'Submit the Transport Request Form from the Downloads page before the 10th of the month.' }] as c}
			<Reveal cls="min-w-0">
				<div class="h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<Icon name={c.icon} cls="h-7 w-7 text-maroon-800" />
					<h2 class="mt-3 font-display text-xl font-bold">{c.t}</h2>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{c.x}</p>
				</div>
			</Reveal>
		{/each}
	</div>

	<Reveal>
		<div class="mt-10 flex flex-col items-start gap-4 rounded-lg bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h2 class="font-display text-2xl font-bold">Need a bus seat for your child?</h2>
				<p class="mt-1 text-sm text-ink/65">Download the transport form or enquire at the school office.</p>
			</div>
			<div class="flex flex-wrap gap-3">
				<a href="/downloads/transport-form.pdf" download class="inline-flex min-h-12 items-center rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">DOWNLOAD FORM</a>
				<a href="/admissions#enquire" class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">ENQUIRE NOW</a>
			</div>
		</div>
		<p class="mt-8 text-center text-xs text-ink/40">Demo website — all routes and fees are mock content for client presentation.</p>
	</Reveal>
</section>
