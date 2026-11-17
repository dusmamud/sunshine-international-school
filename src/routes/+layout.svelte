<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { scale } from 'svelte/transition';
	import TopBar from '#lib/components/TopBar.svelte';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// View Transitions API: native-feel page cross-fade (350ms, ease-out).
	// Falls back silently where the API is unavailable.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise<void>((resolve) => {
			document.startViewTransition?.(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let showTop = $state(false);

	$effect(() => {
		const onScroll = () => {
			// Hide near the very bottom so the button never covers the footer legal bar
			const nearBottom =
				window.scrollY + window.innerHeight >
				document.documentElement.scrollHeight - 160;
			showTop = window.scrollY > 600 && !nearBottom;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	// WhatsApp chat — prefilled enquiry (demo number = school phone)
	const waHref =
		'https://wa.me/919876543210?text=' +
		encodeURIComponent(
			'Hello Sunshine International School! I would like to enquire about admissions. My child is applying for Class '
		);
</script>

<TopBar />
<Header />

<main class="min-w-0">
	{@render children()}
</main>

<Footer />
<!-- Spacer so the fixed mobile call bar never covers footer content -->
<div class="h-16 lg:hidden" aria-hidden="true"></div>

<!-- Mobile call bar -->
<div
	class="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-maroon-800 lg:hidden"
>
	<a
		href="tel:+919876543210"
		class="flex min-h-16 items-center justify-center gap-2 text-sm font-bold tracking-wide text-white"
	>
		<Icon name="phone" cls="h-5 w-5 text-gold-400" />
		Call Now
	</a>
	<a
		href="/admissions"
		class="flex min-h-16 items-center justify-center gap-2 bg-gold-500 text-sm font-bold tracking-wide text-maroon-950"
	>
		Enquire Now
		<Icon name="arrow-right" cls="h-5 w-5" />
	</a>
</div>

<!-- WhatsApp floating button — sits above the mobile call bar, hides near the footer -->
<a
	href={waHref}
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Chat with us on WhatsApp"
	class="fixed right-4 bottom-[140px] z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-110 hover:bg-[#1eb856] lg:bottom-6 lg:right-6"
>
	<Icon name="whatsapp" cls="h-7 w-7" />
</a>

<!-- Back to top -->
{#if showTop}
	<button
		type="button"
		aria-label="Back to top"
		transition:scale={{ duration: 300, start: 0.5 }}
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		class="fixed right-4 bottom-[200px] z-50 flex h-11 w-11 items-center justify-center rounded-full bg-maroon-900 text-gold-400 shadow-lg transition hover:bg-maroon-800 lg:bottom-24"
	>
		<Icon name="arrow-up" cls="h-5 w-5" />
	</button>
{/if}
