<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
</script>

<svelte:head>
	<meta name="description" content="Accessibility Statement — Sunshine International School is committed to a website every parent and student can use, regardless of ability or device." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/accessibility" />
	<meta property="og:title" content="Accessibility Statement | Sunshine International School" />
	<meta property="og:description" content="Accessibility Statement — Sunshine International School is committed to a website every parent and student can use, regardless of ability or device." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/accessibility" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Accessibility Statement | Sunshine International School" />
	<meta name="twitter:description" content="Accessibility Statement — Sunshine International School is committed to a website every parent and student can use, regardless of ability or device." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Accessibility Statement"
	subtitle="Sunshine International School is committed to a website every parent and student can use — regardless of ability or device."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Accessibility' }]}
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="space-y-8 text-sm leading-relaxed text-ink/75">
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">Our commitment (WCAG 2.2 AA)</h2>
				<p class="mt-3">This website is designed to meet the Web Content Accessibility Guidelines (WCAG) 2.2, conformance level AA. That means text is readable at 200% zoom, every page works with a keyboard alone, colour is never the only way information is shown, and images carry meaningful text alternatives.</p>
			</div>
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">What we provide</h2>
				<ul class="mt-3 list-disc space-y-2 pl-5">
					<li>High-contrast maroon-on-white text with a minimum ratio of 4.5:1 for body text.</li>
					<li>Full keyboard navigation — visible focus states on every link, button and form field.</li>
					<li>Semantic headings, landmarks and labels on all forms, so screen readers can follow the page.</li>
					<li>Motion that respects your system setting: if you prefer reduced motion, animations are turned off.</li>
					<li>Touch targets of at least 44px on mobile, and text that scales with your browser settings.</li>
				</ul>
			</div>
			<div>
				<h2 class="font-display text-2xl font-bold text-ink">Known limitations</h2>
				<p class="mt-3">Some photographs in the gallery are decorative and carry short alternative text. The embedded Google Map on the Contact page is supplied by Google; a text link to open it in Google Maps is provided next to it. We are working to caption all future video content.</p>
			</div>
			<div class="rounded-lg bg-cream p-6">
				<h2 class="font-display text-2xl font-bold text-ink">Tell us about a barrier</h2>
				<p class="mt-2">If you find anything on this site hard to use, please write to <a href="mailto:info@sunshineschool.edu.in" class="font-bold text-maroon-800 underline">info@sunshineschool.edu.in</a> or call <a href="tel:+919876543210" class="font-bold text-maroon-800 underline">+91 98765 43210</a>. We aim to answer within two working days.</p>
			</div>
		</div>
	</Reveal>
</section>
