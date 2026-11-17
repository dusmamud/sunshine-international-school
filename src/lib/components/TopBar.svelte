<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { school } from '#lib/data/site';
</script>

<div class="bg-maroon-800 text-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
		<div class="flex min-w-0 items-center gap-4">
			<span class="hidden items-center gap-1.5 whitespace-nowrap lg:flex">
				<Icon name="pin" cls="h-3.5 w-3.5 text-gold-400" />
				123 Education Street, New Delhi, India
			</span>
			<a href={school.phoneHref} class="flex items-center gap-1.5 font-semibold whitespace-nowrap">
				<Icon name="phone" cls="h-3.5 w-3.5 text-gold-400" />
				{school.phoneDisplay}
			</a>
			<a href="mailto:{school.email}" class="hidden items-center gap-1.5 whitespace-nowrap xl:flex">
				<Icon name="mail" cls="h-3.5 w-3.5 text-gold-400" />
				{school.email}
			</a>
		</div>
		<div class="flex shrink-0 items-center gap-3 sm:gap-4">
			<a href="/mandatory-disclosure" class="hidden font-bold text-gold-300 hover:text-gold-400 lg:inline">Mandatory Disclosure</a>
			<a href="/hi" class="hover:text-gold-300">हिन्दी</a>
			<a href="/parent-portal" class="hover:text-gold-300">Parent Portal</a>
			<a href="/careers" class="hidden hover:text-gold-300 sm:inline">Careers</a>
			<a href="/alumni" class="hidden hover:text-gold-300 sm:inline">Alumni</a>
			<span class="hidden items-center gap-2 border-l border-white/25 pl-3 sm:flex">
				{#each [{ n: 'facebook', label: 'Facebook' }, { n: 'instagram', label: 'Instagram' }, { n: 'youtube', label: 'YouTube' }] as s}
					<a href="/" aria-label={s.label} class="text-white/80 transition hover:text-gold-300"><Icon name={s.n} cls="h-3.5 w-3.5" /></a>
				{/each}
			</span>
		</div>
	</div>
</div>
