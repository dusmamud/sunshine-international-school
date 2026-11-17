<script lang="ts">
	// Animated count-up number via svelte/motion Tween — ends exactly on the target.
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let { value, suffix = '', duration = 800, cls = '' }: { value: number; suffix?: string; duration?: number; cls?: string } = $props();

	let el: HTMLSpanElement | undefined = $state();
	let shown = $state<Tween<number> | null>(null);
	let started = $state(false);

	$effect(() => {
		if (!el) return;
		const tween = new Tween(0, { duration, easing: cubicOut });
		shown = tween;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			tween.set(value, { duration: 0 });
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started) {
					started = true;
					tween.target = value;
				}
			},
			{ threshold: 0.4 }
		);
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<span bind:this={el} class={cls}>{shown ? Math.round(shown.current) : 0}{suffix}</span>
