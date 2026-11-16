<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
import { school } from '#lib/data/site';
	let name=$state(''); let email=$state(''); let msg=$state(''); let done=$state(false); let err=$state('');
	function submit(e:Event){e.preventDefault(); if(name.trim().length<2){err='Please enter your name.';return;} if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())){err='Please enter a valid email address.';return;} if(msg.trim().length<5){err='Please write a short message.';return;} err=''; done=true;}
</script>
<PageHero title="Contact Us" subtitle="We would love to hear from you — admissions, tours or anything else." crumb={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]} />
<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 lg:grid-cols-2">
		<div class="min-w-0">
			<h2 class="font-display text-2xl font-bold">Visit the Campus</h2>
			<ul class="mt-4 space-y-3 text-ink/75"><li><strong>Address:</strong> {school.address}</li><li><strong>Phone:</strong> <a class="font-bold text-maroon-800" href={school.phoneHref}>{school.phoneDisplay}</a></li><li><strong>Email:</strong> <a class="font-bold text-maroon-800" href="mailto:{school.email}">{school.email}</a></li><li><strong>Hours:</strong> {school.hours}</li></ul>
			<div class="mt-6 overflow-hidden rounded-lg border border-ink/10">
				<iframe title="Sunshine International School on Google Maps — New Delhi" src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&output=embed" class="h-72 w-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				<p class="bg-cream px-4 py-3 text-sm text-ink/65">Map not loading? <a class="font-bold text-maroon-800 underline" href="https://www.google.com/maps/search/?api=1&query=Connaught+Place,+New+Delhi">Open in Google Maps →</a></p>
			</div>
		</div>
		<div class="min-w-0">
			<h2 class="font-display text-2xl font-bold">Send a Message</h2>
			{#if done}<p class="mt-4 rounded-md bg-cream p-5 font-bold text-maroon-800">Thank you, {name.trim()}! Your message was received (demo — no data sent).</p>
			{:else}<form class="mt-4 space-y-3" onsubmit={submit} novalidate>
			<input bind:value={name} placeholder="Your Name" class="w-full rounded-sm border border-ink/20 px-3 py-3 text-sm" />
			<input bind:value={email} type="email" placeholder="Email Address" class="w-full rounded-sm border border-ink/20 px-3 py-3 text-sm" />
			<textarea bind:value={msg} rows="5" placeholder="Your Message" class="w-full rounded-sm border border-ink/20 px-3 py-3 text-sm"></textarea>
			{#if err}<p class="text-sm text-red-700">{err}</p>{/if}
			<button class="min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold text-white">SEND MESSAGE</button></form>{/if}
		</div>
	</div>
</section>
