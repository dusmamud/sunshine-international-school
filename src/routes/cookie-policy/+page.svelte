<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<svelte:head>
	<meta name="description" content="Cookie Policy of Sunshine International School, New Delhi — what cookies this website uses, why they are used and how you can control them." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/cookie-policy" />
	<meta property="og:title" content="Cookie Policy | Sunshine International School" />
	<meta property="og:description" content="Cookie Policy of Sunshine International School, New Delhi — what cookies this website uses, why they are used and how you can control them." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/cookie-policy" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Cookie Policy | Sunshine International School" />
	<meta name="twitter:description" content="Cookie Policy of Sunshine International School, New Delhi — what cookies this website uses, why they are used and how you can control them." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Cookie Policy"
	subtitle="What cookies this website uses, why, and how you can control them."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]}
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="space-y-8 text-sm leading-relaxed text-ink/75">
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">What are cookies?</h2>
				<p class="mt-3">Cookies are small text files stored on your device when you visit a website. They help the site remember your choices and work correctly. This site uses only a small number of cookies — and no advertising cookies at all.</p>
			</div>
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">Cookies we use</h2>
				<ul class="mt-3 list-disc space-y-2 pl-5">
					<li><strong class="text-ink">Strictly necessary:</strong> session and security cookies that keep the site working (for example, remembering a form you started). These cannot be switched off.</li>
					<li><strong class="text-ink">Preferences:</strong> cookies that remember choices such as your reduced-motion setting.</li>
					<li><strong class="text-ink">Analytics (optional):</strong> anonymised, aggregated visit counts that help us improve the site. No personal data is collected.</li>
				</ul>
			</div>
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">Third-party content</h2>
				<p class="mt-3">The embedded Google Map on the Contact page and links to external learning resources (DIKSHA, Khan Academy, NCERT) may set their own cookies when you use them. Their policies apply there.</p>
			</div>
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">How to control cookies</h2>
				<p class="mt-3">You can block or delete cookies in your browser settings at any time — look under “Privacy” or “Site settings”. Blocking strictly necessary cookies may stop some forms from working.</p>
			</div>
			<p class="text-xs text-ink/50">Last updated: November 2026 (demo policy for client presentation).</p>
		</div>
	</Reveal>
</section>
