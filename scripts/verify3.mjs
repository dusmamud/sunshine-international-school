// Playwright verification round 3 for Sunshine International School.
// VIEWPORT screenshots only (no fullPage — reveals fire on real scroll).
// Run: BASE_URL=http://127.0.0.1:4175 node scripts/verify3.mjs
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/hatch/.npm-global/lib/node_modules/playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4175';
const VIEWPORTS = [360, 390, 768, 1024, 1440];
const ROUTES = [
	'/', '/about', '/academics', '/admissions', '/campus-life', '/gallery', '/news-events',
	'/contact', '/parent-portal', '/careers', '/alumni', '/privacy-policy', '/terms',
	'/mandatory-disclosure', '/board-results', '/academic-calendar', '/faculty',
	'/notice-board', '/downloads', '/transport', '/testimonials', '/faq', '/sitemap',
	'/faculty/dr-meera-kapoor', '/news-events/summer-camp-2024-registrations-open',
	'/fees', '/facilities', '/virtual-tour', '/examination', '/scholarships', '/circulars',
	'/safety', '/e-learning', '/library', '/open-day', '/prospectus', '/timetable',
	'/fee-payment', '/accessibility', '/cookie-policy', '/search', '/hi',
	'/admissions/pre-primary', '/admissions/primary', '/admissions/middle',
	'/admissions/high', '/admissions/senior-secondary'
];
const results = { overflow: [], errors: [], failed: [], interactions: [], shots: [] };
fs.mkdirSync('scripts/shots', { recursive: true });

const browser = await chromium.launch({
	args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
});

// Optional chunking: ROUTES_START / ROUTES_END (0-based indexes into ROUTES)
const R_START = parseInt(process.env.ROUTES_START || '0', 10);
const R_END = parseInt(process.env.ROUTES_END || String(ROUTES.length), 10);
const ROUTES_RUN = ROUTES.slice(R_START, R_END);

async function newPageAt(width, height = 900) {
	const ctx = await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width, height } });
	return { ctx, page: await ctx.newPage() };
}

function watch(page, errors, failed) {
	page.on('pageerror', (e) => errors.push(String(e)));
	page.on('console', (m) => {
		if (m.type() === 'error') errors.push(m.text());
	});
	page.on('requestfailed', (r) => failed.push(`${r.url()} :: ${r.failure()?.errorText}`));
	page.on('response', (r) => {
		if (r.status() >= 400) failed.push(`${r.url()} :: HTTP ${r.status()}`);
	});
}

async function scrollThrough(page) {
	await page.evaluate(async () => {
		await new Promise((res) => {
			let y = 0;
			const t = setInterval(() => {
				y += 600;
				window.scrollTo({ top: y, behavior: 'instant' });
				if (y >= document.body.scrollHeight) {
					clearInterval(t);
					res();
				}
			}, 100);
		});
	});
	await page.waitForTimeout(900);
}

// 1. Overflow sweep
for (const route of ROUTES_RUN) {
	for (const w of VIEWPORTS) {
		const { ctx, page } = await newPageAt(w);
		const errors = [], failed = [];
		watch(page, errors, failed);
		try {
			await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
			await page.waitForTimeout(500);
			await scrollThrough(page);
			const o = await page.evaluate(() => ({
				scrollWidth: document.documentElement.scrollWidth,
				innerWidth: window.innerWidth
			}));
			results.overflow.push({ route, width: w, ...o, over: o.scrollWidth > o.innerWidth + 1 });
		} catch (e) {
			results.overflow.push({ route, width: w, crashed: true, error: String(e).slice(0, 160) });
		}
		if (errors.length) results.errors.push({ route, width: w, errors });
		if (failed.length) results.failed.push({ route, width: w, failed });
		try { await page.close(); } catch {}
		try { await ctx.close(); } catch {}
	}
}

fs.writeFileSync('scripts/shots/v3-results-partial.json', JSON.stringify(results, null, 2));
const SKIP_SHOTS = process.env.SKIP_SHOTS === '1';
const SKIP_INTERACTIONS = process.env.SKIP_INTERACTIONS === '1';

// 2. Viewport screenshots at scroll positions
async function shot(route, w, name, scrollY = 0, extraWait = 0) {
	if (SKIP_SHOTS) return;
	const { ctx, page } = await newPageAt(w);
	const errors = [], failed = [];
	watch(page, errors, failed);
	try {
		await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
		await scrollThrough(page);
		await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
		await page.waitForTimeout(900 + extraWait);
		await page.screenshot({ path: `scripts/shots/${name}` });
		results.shots.push(name);
	} catch (e) {
		results.shots.push(name + ' FAILED: ' + String(e).slice(0, 120));
	}
	if (errors.length) results.errors.push({ route, width: w, shot: name, errors });
	if (failed.length) results.failed.push({ route, width: w, shot: name, failed });
	try { await page.close(); } catch {}
	try { await ctx.close(); } catch {}
}

await shot('/', 390, 'v3-home-390-top.png', 0);
await shot('/', 390, 'v3-home-390-hero.png', 650);
await shot('/', 390, 'v3-home-390-programs.png', 2900);
await shot('/', 390, 'v3-home-390-activities.png', 4300);
await shot('/', 390, 'v3-home-390-bottom.png', 99999);
await shot('/', 1440, 'v3-home-1440-top.png', 0);
await shot('/', 1440, 'v3-home-1440-programs.png', 1250);
await shot('/', 1440, 'v3-home-1440-activities.png', 2100);
await shot('/', 1440, 'v3-home-1440-bottom.png', 99999);
await shot('/', 1024, 'v3-home-1024-top.png', 0);
await shot('/fees', 390, 'v3-fees-390.png', 0);
await shot('/fees', 1440, 'v3-fees-1440.png', 0);
await shot('/fee-payment', 390, 'v3-feepay-390.png', 0);
await shot('/facilities', 1440, 'v3-facilities-1440.png', 0);
await shot('/virtual-tour', 390, 'v3-tour-390.png', 0);
await shot('/virtual-tour', 1440, 'v3-tour-1440.png', 0);
await shot('/examination', 390, 'v3-exam-390.png', 0);
await shot('/scholarships', 390, 'v3-scholarships-390.png', 0);
await shot('/circulars', 390, 'v3-circulars-390.png', 0);
await shot('/safety', 390, 'v3-safety-390.png', 0);
await shot('/e-learning', 390, 'v3-elearning-390.png', 0);
await shot('/library', 390, 'v3-library-390.png', 0);
await shot('/open-day', 390, 'v3-openday-390.png', 0);
await shot('/prospectus', 390, 'v3-prospectus-390.png', 0);
await shot('/timetable', 390, 'v3-timetable-390.png', 0);
await shot('/admissions/middle', 390, 'v3-stage-middle-390.png', 0);
await shot('/admissions/senior-secondary', 1440, 'v3-stage-senior-1440.png', 0);
await shot('/search', 390, 'v3-search-390.png', 0);
await shot('/hi', 390, 'v3-hi-390.png', 0);
await shot('/hi', 1440, 'v3-hi-1440.png', 0);
await shot('/accessibility', 390, 'v3-accessibility-390.png', 0);
await shot('/cookie-policy', 390, 'v3-cookie-390.png', 0);

fs.writeFileSync('scripts/shots/v3-results-partial.json', JSON.stringify(results, null, 2));

// 3. Interactions
async function interact(name, fn, width = 390) {
	if (SKIP_INTERACTIONS) return;
	const { ctx, page } = await newPageAt(width);
	const errors = [];
	page.on('pageerror', (e) => errors.push(String(e)));
	try {
		const ok = await fn(page);
		results.interactions.push({ name, pass: ok === true, errors });
	} catch (e) {
		results.interactions.push({ name, pass: false, error: String(e).slice(0, 200), errors });
	}
	await page.close();
	await ctx.close();
}

await interact('home enquiry form submits', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.locator('#eq-name').fill('Test Parent');
	await page.locator('#eq-email').fill('test@example.com');
	await page.locator('#eq-phone').fill('9876543210');
	await page.locator('#eq-grade').selectOption({ index: 1 });
	await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
	await page.waitForTimeout(400);
	return await page.locator('text=Thank you, Test Parent!').isVisible();
});

await interact('whatsapp button present (wa.me)', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	const href = await page.locator('a[aria-label="Chat with us on WhatsApp"]').getAttribute('href');
	return !!href && href.startsWith('https://wa.me/919876543210');
});

await interact('virtual tour next stop', async (page) => {
	await page.goto(BASE + '/virtual-tour', { waitUntil: 'networkidle' });
	await page.getByLabel('Next stop').click();
	await page.waitForTimeout(400);
	return await page.locator('text=STOP 2 OF 6').isVisible();
});

await interact('virtual tour booking form submits', async (page) => {
	await page.goto(BASE + '/virtual-tour', { waitUntil: 'networkidle' });
	await page.locator('#vt-name').fill('Tour Parent');
	await page.locator('#vt-phone').fill('9876543210');
	await page.locator('#vt-slot').selectOption({ index: 1 });
	await page.getByRole('button', { name: 'BOOK MY TOUR' }).click();
	await page.waitForTimeout(400);
	return await page.locator('text=Tour booked, Tour Parent!').isVisible();
});

await interact('examination tab switches band', async (page) => {
	await page.goto(BASE + '/examination', { waitUntil: 'networkidle' });
	await page.getByRole('tab', { name: 'Classes IX – X' }).click();
	await page.waitForTimeout(300);
	return await page.locator('text=Pre-Board Examinations').first().isVisible();
});

await interact('circulars search filters', async (page) => {
	await page.goto(BASE + '/circulars', { waitUntil: 'networkidle' });
	await page.locator('input[placeholder*="Search circulars"]').fill('fee');
	await page.waitForTimeout(300);
	const txt = await page.locator('body').innerText();
	return txt.includes('Term 1 Fee Due Date') && !txt.includes('Winter Uniform');
});

await interact('fee payment lookup + pay + receipt', async (page) => {
	await page.goto(BASE + '/fee-payment', { waitUntil: 'networkidle' });
	await page.locator('#fp-adm').fill('SIS2026001');
	await page.getByRole('button', { name: 'FIND FEE DETAILS' }).click();
	await page.waitForTimeout(400);
	const summary = await page.locator('text=Aarav Verma').isVisible();
	await page.getByRole('button', { name: /PAY .* VIA UPI/ }).click();
	await page.waitForTimeout(1800);
	const receipt = await page.locator('text=Payment Successful').isVisible();
	const ref = await page.locator('text=SIS-PAY-').isVisible();
	return summary && receipt && ref;
});

await interact('fee payment unknown admission errors', async (page) => {
	await page.goto(BASE + '/fee-payment', { waitUntil: 'networkidle' });
	await page.locator('#fp-adm').fill('NOPE123');
	await page.getByRole('button', { name: 'FIND FEE DETAILS' }).click();
	await page.waitForTimeout(400);
	return await page.locator('text=Admission number not found').isVisible();
});

await interact('open day signup submits', async (page) => {
	await page.goto(BASE + '/open-day', { waitUntil: 'networkidle' });
	await page.locator('#od-name').fill('Open Parent');
	await page.locator('#od-phone').fill('9876543210');
	await page.locator('#od-email').fill('open@example.com');
	await page.locator('#od-slot').selectOption({ index: 1 });
	await page.getByRole('button', { name: 'BOOK MY OPEN DAY SLOT' }).click();
	await page.waitForTimeout(400);
	return await page.locator('text=See you on Open Day, Open Parent!').isVisible();
});

await interact('search page finds library', async (page) => {
	await page.goto(BASE + '/search', { waitUntil: 'networkidle' });
	await page.locator('input[type="search"]').fill('library');
	await page.waitForTimeout(400);
	return await page.locator('a[href="/library"]').first().isVisible();
});

await interact('news subscription validates + submits', async (page) => {
	await page.goto(BASE + '/news-events', { waitUntil: 'networkidle' });
	await page.locator('#news-email').fill('bad-email');
	await page.getByRole('button', { name: 'SUBSCRIBE' }).click();
	await page.waitForTimeout(300);
	const err = await page.locator('text=Please enter a valid email address.').isVisible();
	await page.locator('#news-email').fill('news@example.com');
	await page.getByRole('button', { name: 'SUBSCRIBE' }).click();
	await page.waitForTimeout(300);
	const ok = await page.locator('text=You are subscribed to school news.').isVisible();
	return err && ok;
});

await interact('timetable tab switches stage', async (page) => {
	await page.goto(BASE + '/timetable', { waitUntil: 'networkidle' });
	await page.getByRole('tab', { name: 'Senior Secondary' }).click();
	await page.waitForTimeout(300);
	return await page.locator('text=Competitive Mentoring').first().isVisible();
});

await interact('admissions stage page + prev/next', async (page) => {
	await page.goto(BASE + '/admissions/middle', { waitUntil: 'networkidle' });
	const title = await page.locator('h1').innerText();
	await page.getByRole('link', { name: /High School/ }).first().click();
	await page.waitForTimeout(600);
	return title.includes('Middle School') && page.url().includes('/admissions/high');
});

await interact('mobile menu opens with new links', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Open menu').click();
	await page.waitForTimeout(500);
	await page.getByLabel('Toggle Admissions submenu').click();
	await page.waitForTimeout(300);
	const nav = page.locator('nav[aria-label="Mobile navigation"]');
	return await nav.locator('text=Fee Structure').isVisible();
});

await interact('count-up ends on exact target', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.evaluate(() => {
		const els = [...document.querySelectorAll('*')].filter((e) => e.textContent === 'Dedicated Faculty');
		els[0]?.scrollIntoView({ block: 'center' });
	});
	await page.waitForTimeout(1600);
	const txt = await page.locator('body').innerText();
	return txt.includes('150+') && txt.includes('2500+');
});

await interact('hindi page renders devanagari + form', async (page) => {
	await page.goto(BASE + '/hi', { waitUntil: 'networkidle' });
	const txt = await page.locator('body').innerText();
	return txt.includes('सीखें') && txt.includes('अभी पूछताछ करें');
});

await interact('gallery lightbox opens', async (page) => {
	await page.goto(BASE + '/gallery', { waitUntil: 'networkidle' });
	await page.waitForTimeout(600);
	await page.locator('main img, section img').first().click();
	await page.waitForTimeout(500);
	return (await page.locator('button[aria-label*="Close"]').count()) > 0;
});

await browser.close();
fs.writeFileSync('scripts/shots/v3-results.json', JSON.stringify(results, null, 2));
const over = results.overflow.filter((o) => o.over);
console.log('OVERFLOW CHECKS:', results.overflow.length, 'failures:', over.length, JSON.stringify(over));
console.log('PAGE ERRORS:', JSON.stringify(results.errors));
console.log('FAILED REQUESTS:', JSON.stringify(results.failed));
console.log('INTERACTIONS:', JSON.stringify(results.interactions, null, 2));
console.log('SHOTS:', results.shots.length);
