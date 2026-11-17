<script lang="ts">
import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
let user=$state(''); let pass=$state(''); let logged=$state(false); let err=$state('');
	function login(e:Event){e.preventDefault(); if(user.trim() && pass.length>=4){logged=true;err='';} else err='Demo login: enter any name and a password of 4+ characters.';}
</script>
<PageHero title="Parent Portal" subtitle="Attendance, fees, homework and circulars — in one place. Demo login, no real data." crumb={[{ label: 'Home', href: '/' }, { label: 'Parent Portal' }]} />
<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	{#if !logged}
	<form class="rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8" onsubmit={login} novalidate>
		<h2 class="font-display text-2xl font-bold">Parent Login</h2>
		<p class="mt-1 text-sm text-ink/60">Demo only — any name + any 4+ character password works. Nothing is sent to a server.</p>
		<label class="mt-5 block text-sm font-bold" for="pp-user">Parent / Student Name</label>
		<input id="pp-user" bind:value={user} class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-3 text-sm" placeholder="e.g. Priya Sharma" />
		<label class="mt-4 block text-sm font-bold" for="pp-pass">Password</label>
		<input id="pp-pass" type="password" bind:value={pass} class="mt-1 w-full rounded-sm border border-ink/20 px-3 py-3 text-sm" placeholder="••••••••" />
		{#if err}<p class="mt-3 text-sm text-red-700">{err}</p>{/if}
		<button class="mt-6 min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold text-white">LOG IN</button>
		<p class="mt-3 text-center text-xs text-ink/50">Forgot password? Contact the school office at +91 98765 43210.</p>
	</form>
	{:else}
	<div class="rounded-lg border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
		<h2 class="font-display text-2xl font-bold">Welcome, {user.trim()}!</h2>
		<p class="mt-1 text-sm text-ink/60">Demo dashboard for Aarav Sharma, Class VI-B (mock data).</p>
		<div class="mt-6 grid gap-4 sm:grid-cols-3">
		{#each [['Attendance','96%'],['Fee Status','Paid till June 2026'],['Homework','2 pending']] as c}<div class="rounded-lg bg-cream p-4"><p class="text-xs font-bold tracking-wider text-maroon-800">{c[0].toUpperCase()}</p><p class="mt-1 font-bold">{c[1]}</p></div>{/each}
		</div>
		<h3 class="mt-6 font-bold">Latest Circulars</h3>
		<ul class="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70"><li>Summer Camp 2026 registrations open (20 May)</li><li>Parent-Teacher Meeting — Saturday, 25 May 2026</li><li>Admissions open for 2026-27 session</li></ul>
		<button type="button" onclick={()=>{logged=false;user='';pass='';}} class="mt-6 min-h-11 rounded-sm border border-maroon-800 px-5 text-sm font-bold text-maroon-800">LOG OUT</button>
	</div>
	{/if}
</section>
