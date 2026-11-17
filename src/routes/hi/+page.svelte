<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Reveal from '#lib/components/Reveal.svelte';
	import CountUp from '#lib/components/CountUp.svelte';

	let parentName = $state('');
	let phone = $state('');
	let grade = $state('');
	let errors = $state<Record<string, string>>({});
	let done = $state(false);

	function submit(e: Event) {
		e.preventDefault();
		errors = {};
		if (parentName.trim().length < 2) errors.name = 'कृपया अभिभावक का नाम लिखें।';
		if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ''))) errors.phone = 'कृपया सही 10 अंकों का मोबाइल नंबर लिखें।';
		if (!grade) errors.grade = 'कृपया कक्षा चुनें।';
		if (Object.keys(errors).length) return;
		done = true;
	}
</script>

<svelte:head>
	<title>सनशाइन इंटरनेशनल स्कूल, नई दिल्ली | मन को पोषित करें। भविष्य को आकार दें।</title>
	<meta name="description" content="सनशाइन इंटरनेशनल स्कूल, नई दिल्ली — नर्सरी से कक्षा XII तक। प्रवेश 2024-25 के लिए खुले हैं।" />
	<link rel="canonical" href="https://sunshine-international-school.pages.dev/hi" />
</svelte:head>

<section class="relative overflow-hidden bg-cream">
	<img src="/images/school-building.webp" alt="" aria-hidden="true" class="hero-kenburns pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" />
	<div class="relative mx-auto grid max-w-7xl gap-8 px-4 pt-12 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8">
		<div class="fade-up min-w-0">
			<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">जहाँ युवा मन खिलते हैं</p>
			<h1 class="mt-3 font-display text-5xl leading-[1.1] font-bold text-ink sm:text-6xl">सीखें। बढ़ें।<br /><span class="text-maroon-800">सफल हों।</span></h1>
			<p class="mt-5 max-w-md leading-relaxed text-ink/70">सनशाइन इंटरनेशनल स्कूल — ज्ञान, मूल्य और कौशल के साथ बच्चों को बदलती दुनिया में सफल होने के लिए तैयार करता है।</p>
			<div class="mt-7 flex flex-wrap gap-3">
				<a href="/admissions" class="inline-flex min-h-12 items-center rounded-sm bg-maroon-800 px-6 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">प्रवेश 2024-25 खुले हैं</a>
				<a href="/open-day" class="inline-flex min-h-12 items-center rounded-sm border-2 border-maroon-800 px-6 text-sm font-extrabold tracking-wide text-maroon-800 transition hover:bg-maroon-50">परिसर देखें</a>
			</div>
			<div class="mt-10 grid grid-cols-3 gap-4 text-center">
				<div><p class="font-display text-3xl font-bold text-maroon-800"><CountUp value={20} suffix="+" /></p><p class="mt-1 text-xs font-semibold text-ink/65">वर्षों का अनुभव</p></div>
				<div><p class="font-display text-3xl font-bold text-maroon-800"><CountUp value={150} suffix="+" /></p><p class="mt-1 text-xs font-semibold text-ink/65">समर्पित शिक्षक</p></div>
				<div><p class="font-display text-3xl font-bold text-maroon-800"><CountUp value={2500} suffix="+" /></p><p class="mt-1 text-xs font-semibold text-ink/65">खुश छात्र</p></div>
			</div>
		</div>
		<div class="min-w-0">
			<img src="/images/hero-students.webp" alt="सनशाइन इंटरनेशनल स्कूल के दो छात्र" class="h-[24rem] w-full rounded-lg object-cover object-top shadow-xl" />
			<div class="mt-4 overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-maroon-800/10">
				<div class="bg-maroon-800 px-5 py-4 text-white">
					<h2 class="text-lg font-extrabold tracking-wide">अभी पूछताछ करें</h2>
					<p class="text-xs text-white/75">हम जल्द ही आपसे संपर्क करेंगे!</p>
				</div>
				{#if done}
					<div class="px-5 py-6 text-center">
						<Icon name="check" cls="mx-auto h-10 w-10 text-maroon-800" />
						<p class="mt-3 font-bold text-maroon-800">धन्यवाद, {parentName.trim()}!</p>
						<p class="mt-1 text-sm text-ink/65">{grade} के लिए आपकी पूछताछ मिल गई है (डेमो)। हमारी टीम जल्द कॉल करेगी।</p>
					</div>
				{:else}
					<form class="space-y-3 px-5 py-5" onsubmit={submit} novalidate>
						<div>
							<input bind:value={parentName} placeholder="अभिभावक का नाम" aria-label="अभिभावक का नाम" class="w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.name}<p class="mt-1 text-xs text-red-700">{errors.name}</p>{/if}
						</div>
						<div>
							<input type="tel" bind:value={phone} placeholder="मोबाइल नंबर" aria-label="मोबाइल नंबर" class="w-full rounded-sm border border-ink/20 px-3 py-2.5 text-sm focus:border-maroon-700 focus:outline-none" />
							{#if errors.phone}<p class="mt-1 text-xs text-red-700">{errors.phone}</p>{/if}
						</div>
						<div>
							<select bind:value={grade} aria-label="कक्षा चुनें" class="w-full rounded-sm border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink/80 focus:border-maroon-700 focus:outline-none">
								<option value="" disabled>कक्षा चुनें</option>
								<option>नर्सरी</option><option>केजी</option><option>कक्षा I – V</option><option>कक्षा VI – VIII</option><option>कक्षा IX – X</option><option>कक्षा XI – XII</option>
							</select>
							{#if errors.grade}<p class="mt-1 text-xs text-red-700">{errors.grade}</p>{/if}
						</div>
						<button type="submit" class="min-h-12 w-full rounded-sm bg-maroon-800 text-sm font-extrabold tracking-wide text-white transition hover:bg-maroon-700">पूछताछ भेजें</button>
						<p class="text-center text-[0.68rem] text-ink/45">डेमो फॉर्म — कोई जानकारी कहीं नहीं भेजी जाती।</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<section class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
	<Reveal>
		<div class="text-center">
			<p class="text-xs font-extrabold tracking-[0.3em] text-maroon-800">हमारे बारे में</p>
			<h2 class="mt-3 font-display text-3xl font-bold sm:text-4xl">हर बच्चे के लिए एक स्थान जहाँ वह चमक सके</h2>
			<p class="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/70">शैक्षणिक उत्कृष्टता, चरित्र निर्माण और सर्वांगीण विकास — यही सनशाइन की पहचान है। नर्सरी से कक्षा XII तक, सीबीएसई पाठ्यक्रम, 10 एकड़ का परिसर और 150+ समर्पित शिक्षक।</p>
		</div>
	</Reveal>
	<Reveal>
		<div class="mt-10 grid gap-4 sm:grid-cols-3">
			{#each [{ t: 'प्रवेश प्रक्रिया', d: 'पूछताछ → परिसर भ्रमण → बातचीत / मूल्यांकन → नामांकन।', h: '/admissions' }, { t: 'शुल्क संरचना', d: '₹48,000 – ₹96,000 प्रति वर्ष, तीन किस्तों में। छात्रवृत्तियाँ भी उपलब्ध हैं।', h: '/fees' }, { t: 'परिवहन', d: 'दिल्ली, नोएडा और गाज़ियाबाद में 6 रूट, GPS-सक्षम बसें।', h: '/transport' }] as c}
				<a href={c.h} class="card-lift block rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
					<h3 class="font-display text-xl font-bold">{c.t}</h3>
					<p class="mt-2 text-sm leading-relaxed text-ink/65">{c.d}</p>
					<span class="mt-3 inline-block text-xs font-extrabold tracking-wider text-maroon-800">और जानें →</span>
				</a>
			{/each}
		</div>
	</Reveal>
	<p class="mt-10 text-center text-sm text-ink/60">अंग्रेज़ी संस्करण के लिए <a href="/" class="font-bold text-maroon-800 underline">मुख्य पृष्ठ</a> देखें · संपर्क: +91 98765 43210 · info@sunshineschool.edu.in</p>
	<p class="mt-2 text-center text-xs text-ink/40">डेमो वेबसाइट — सभी नाम, शुल्क, तिथियाँ और फ़ोटो उदाहरण के लिए हैं।</p>
</section>
