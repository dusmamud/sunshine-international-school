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
				{ label: 'Transport & Bus Routes', href: '/transport' },
				{ label: 'Downloads & Forms', href: '/downloads' },
				{ label: 'Notice Board', href: '/notice-board' },
				{ label: 'FAQ', href: '/faq' },
				{ label: 'Testimonials', href: '/testimonials' }
			]
		},
		{
			title: 'Academics & School',
			links: [
				{ label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
				{ label: 'Board Results', href: '/board-results' },
				{ label: 'Academic Calendar', href: '/academic-calendar' },
				{ label: 'Faculty Directory', href: '/faculty' },
				{ label: 'News & Events', href: '/news-events' },
				{ label: 'Alumni', href: '/alumni' },
				{ label: 'Careers', href: '/careers' }
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
