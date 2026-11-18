<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import { allTeachers } from '#lib/data/more';
	import { newsItems } from '#lib/data/more';

	const groups: { title: string; links: { label: string; href: string }[] }[] = [
		{
			title: 'Main Pages',
			links: [
				{ label: 'Home', href: '/' },
				{ label: 'About Us', href: '/about' },
				{ label: 'Academics', href: '/academics' },
				{ label: 'Admissions', href: '/admissions' },
				{ label: 'Campus Life', href: '/campus-life' },
				{ label: 'Gallery', href: '/gallery' },
				{ label: 'Contact Us', href: '/contact' }
			]
		},
		{
			title: 'Admissions & Parents',
			links: [
				{ label: 'Parent Portal', href: '/parent-portal' },
				{ label: 'Fee Structure', href: '/fees' },
				{ label: 'Pay Fees Online', href: '/fee-payment' },
				{ label: 'Scholarships', href: '/scholarships' },
				{ label: 'Open Day', href: '/open-day' },
				{ label: 'Prospectus', href: '/prospectus' },
				{ label: 'Admissions — Pre-Primary', href: '/admissions/pre-primary' },
				{ label: 'Admissions — Primary School', href: '/admissions/primary' },
				{ label: 'Admissions — Middle School', href: '/admissions/middle' },
				{ label: 'Admissions — High School', href: '/admissions/high' },
				{ label: 'Admissions — Senior Secondary', href: '/admissions/senior-secondary' },
				{ label: 'Transport & Bus Routes', href: '/transport' },
				{ label: 'Downloads & Forms', href: '/downloads' },
				{ label: 'Notice Board', href: '/notice-board' },
				{ label: 'Circulars', href: '/circulars' },
				{ label: 'FAQ', href: '/faq' },
				{ label: 'Testimonials', href: '/testimonials' }
			]
		},
		{
			title: 'Academics & School',
			links: [
				{ label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
				{ label: 'Board Results', href: '/board-results' },
				{ label: 'Examinations', href: '/examination' },
				{ label: 'Timetables', href: '/timetable' },
				{ label: 'E-Learning', href: '/e-learning' },
				{ label: 'Library', href: '/library' },
				{ label: 'Academic Calendar', href: '/academic-calendar' },
				{ label: 'Faculty Directory', href: '/faculty' },
				{ label: 'Facilities', href: '/facilities' },
				{ label: 'Virtual Tour', href: '/virtual-tour' },
				{ label: 'Campus Safety', href: '/safety' },
				{ label: 'News & Events', href: '/news-events' },
				{ label: 'Alumni', href: '/alumni' },
				{ label: 'Careers', href: '/careers' },
				{ label: 'Search the Site', href: '/search' },
				{ label: 'हिन्दी संस्करण', href: '/hi' },
				{ label: 'Accessibility', href: '/accessibility' },
				{ label: 'Cookie Policy', href: '/cookie-policy' }
			]
		},
		{
			title: 'News & Events',
			links: newsItems.map((n) => ({ label: n.title, href: `/news-events/${n.slug}` }))
		},
		{
			title: 'Faculty Profiles',
			links: allTeachers.map((t) => ({ label: `${t.name} — ${t.role}`, href: `/faculty/${t.slug}` }))
		},
		{
			title: 'Legal',
			links: [
				{ label: 'Privacy Policy', href: '/privacy-policy' },
				{ label: 'Terms & Conditions', href: '/terms' },
				{ label: 'Sitemap (this page)', href: '/sitemap' }
			]
		}
	];
</script>

<svelte:head>
	<meta name="description" content="Sitemap of the Sunshine International School website — every page, from admissions and academics to campus life, news, fees and contact." />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/sitemap" />
	<meta property="og:title" content="Sitemap | Sunshine International School" />
	<meta property="og:description" content="Sitemap of the Sunshine International School website — every page, from admissions and academics to campus life, news, fees and contact." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sunshine-international-school.pages.dev/sitemap" />
	<meta property="og:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sitemap | Sunshine International School" />
	<meta name="twitter:description" content="Sitemap of the Sunshine International School website — every page, from admissions and academics to campus life, news, fees and contact." />
	<meta name="twitter:image" content="https://sunshine-international-school.pages.dev/images/hero-students.webp" />
</svelte:head>

<PageHero
	title="Sitemap"
	subtitle="Every page on the Sunshine International School website."
	crumb={[{ label: 'Home', href: '/' }, { label: 'Sitemap' }]}
/>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
		{#each groups as g}
			<Reveal cls="min-w-0">
				<h2 class="text-xs font-extrabold tracking-[0.25em] text-maroon-800">{g.title.toUpperCase()}</h2>
				<ul class="mt-4 space-y-2.5 text-sm">
					{#each g.links as l}
						<li><a href={l.href} class="text-ink/75 transition hover:text-maroon-800 hover:underline">{l.label}</a></li>
					{/each}
				</ul>
			</Reveal>
		{/each}
	</div>
</section>
