<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import Logo from '#lib/components/Logo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { navLinks, searchIndex } from '#lib/data/site';

	let mobileOpen = $state(false);
	let openSub = $state<string | null>(null);
	let searchOpen = $state(false);
	let query = $state('');


	const stem = (s: string) =>
		s
			.toLowerCase()
			.split(/\s+/)
			.map((w) => w.replace(/s$/, ''))
			.join(' ');

	let results = $derived(
		query.trim()
			? searchIndex.filter((item) =>
					stem(item.label + ' ' + item.section).includes(stem(query.trim()))
				)
			: searchIndex.slice(0, 8)
	);

	function isActive(href: string) {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname === href || page.url.pathname.startsWith(href + '/');
	}

	function closeAll() {
		mobileOpen = false;
		searchOpen = false;
		query = '';
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') closeAll();
	}}
/>

<header class="sticky top-0 z-40 border-b border-maroon-900/10 bg-white/95 shadow-sm backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-1 px-3 py-3 sm:px-6 lg:px-8">
		<Logo />

		<nav class="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
			{#each navLinks as link}
				{#if link.children}
					<div class="group relative">
						<a
							href={link.href}
							class="flex items-center gap-0.5 rounded-md px-2 py-2 text-[0.78rem] font-bold whitespace-nowrap tracking-[0.04em] transition hover:text-maroon-700 {isActive(
								link.href
							)
								? 'text-maroon-800 underline decoration-maroon-700 decoration-2 underline-offset-8'
								: 'text-ink'}"
						>
							{link.label.toUpperCase()}
							<Icon
								name="chevron-down"
								cls="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
							/>
						</a>
						<div
							class="invisible absolute top-full left-0 w-64 translate-y-2 rounded-lg border border-maroon-900/10 bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
						>
							{#each link.children as child}
								<a
									href={child.href}
									class="block px-4 py-2.5 text-sm font-medium text-ink/80 transition hover:bg-maroon-50 hover:text-maroon-800"
								>
									{child.label}
								</a>
							{/each}
						</div>
					</div>
				{:else}
					<a
						href={link.href}
						class="rounded-md px-2 py-2 text-[0.78rem] font-bold whitespace-nowrap tracking-[0.04em] transition hover:text-maroon-700 {isActive(
							link.href
						)
							? 'text-maroon-800 underline decoration-maroon-700 decoration-2 underline-offset-8'
							: 'text-ink'}"
					>
						{link.label.toUpperCase()}
					</a>
				{/if}
			{/each}
		</nav>

		<div class="flex items-center gap-1">
			<button
				type="button"
				aria-label="Search"
				onclick={() => {
					searchOpen = true;
				}}
				class="flex h-11 w-11 items-center justify-center rounded-full text-maroon-900 transition hover:bg-maroon-50"
			>
				<Icon name="search" cls="h-5 w-5" />
			</button>
			<a
				href="/admissions"
				class="hidden rounded-sm bg-maroon-800 px-3 py-2.5 text-xs font-extrabold whitespace-nowrap tracking-wider text-white transition hover:bg-maroon-700 xl:inline-block"
			>
				ENQUIRE NOW
			</a>
			<button
				type="button"
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileOpen}
				onclick={() => {
					mobileOpen = !mobileOpen;
				}}
				class="flex h-11 w-11 items-center justify-center rounded-full text-maroon-900 transition hover:bg-maroon-50 lg:hidden"
			>
				<Icon name={mobileOpen ? 'x' : 'menu'} cls="h-6 w-6" />
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<nav
			transition:slide={{ duration: 300 }}
			class="max-h-[75vh] overflow-y-auto border-t border-maroon-900/10 bg-white px-4 pt-2 pb-6 lg:hidden"
			aria-label="Mobile navigation"
		>
			{#each navLinks as link}
				{#if link.children}
					<div class="border-b border-maroon-900/5">
						<div class="flex items-center justify-between">
							<a
								href={link.href}
								onclick={closeAll}
								class="py-3 text-sm font-bold tracking-wide text-ink"
							>
								{link.label.toUpperCase()}
							</a>
							<button
								type="button"
								aria-label="Toggle {link.label} submenu"
								aria-expanded={openSub === link.label}
								onclick={() => {
									openSub = openSub === link.label ? null : link.label;
								}}
								class="flex h-11 w-11 items-center justify-center text-maroon-900"
							>
								<Icon
									name="chevron-down"
									cls="h-5 w-5 transition-transform {openSub === link.label
										? 'rotate-180'
										: ''}"
								/>
							</button>
						</div>
						{#if openSub === link.label}
							<div class="pb-3 pl-3">
								{#each link.children as child}
									<a
										href={child.href}
										onclick={closeAll}
										class="block py-2 text-sm text-ink/75"
									>
										{child.label}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{:else}
					<a
						href={link.href}
						onclick={closeAll}
						class="block border-b border-maroon-900/5 py-3 text-sm font-bold tracking-wide text-ink"
					>
						{link.label.toUpperCase()}
					</a>
				{/if}
			{/each}
			<div class="mt-4 grid grid-cols-2 gap-3">
				<a
					href="/parent-portal"
					onclick={closeAll}
					class="rounded-sm border border-maroon-900/20 px-4 py-3 text-center text-sm font-bold text-maroon-900"
				>
					Parent Login
				</a>
				<a
					href="/admissions"
					onclick={closeAll}
					class="rounded-sm bg-maroon-800 px-4 py-3 text-center text-sm font-extrabold text-white"
				>
					Enquire Now
				</a>
			</div>
		</nav>
	{/if}
</header>

<!-- Search overlay -->
{#if searchOpen}
	<div class="fixed inset-0 z-50 bg-maroon-950/95 backdrop-blur-sm" role="dialog" aria-label="Search">
		<div class="mx-auto max-w-2xl px-4 pt-24 sm:pt-32">
			<div class="flex items-center justify-between">
				<p class="text-xs font-bold tracking-[0.25em] text-gold-400">SEARCH SUNSHINE</p>
				<button
					type="button"
					aria-label="Close search"
					onclick={closeAll}
					class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
				>
					<Icon name="x" cls="h-5 w-5" />
				</button>
			</div>
			<input
				type="search"
				placeholder="Try “admissions”, “fees”, “library”…"
				bind:value={query}
				class="mt-4 w-full rounded-lg border border-white/20 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/50 focus:border-gold-400 focus:outline-none"
			/>
			<ul class="mt-6 space-y-1">
				{#each results as item}
					<li>
						<a
							href={item.href}
							onclick={closeAll}
							class="flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-white transition hover:bg-white/10"
						>
							<span class="font-medium">{item.label}</span>
							<span class="shrink-0 text-xs font-bold tracking-wider text-gold-400 uppercase">
								{item.section}
							</span>
						</a>
					</li>
				{:else}
					<li class="px-4 py-6 text-center text-white/60">
						No results for “{query}” — try admissions, fees or library.
					</li>
				{/each}
			</ul>
			<a href="/search" onclick={closeAll} class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-gold-400 transition hover:text-gold-300">
				OPEN FULL SEARCH PAGE <Icon name="arrow-right" cls="h-4 w-4" />
			</a>
		</div>
	</div>
{/if}
