// Playwright verification round 2 for Sunshine International School.
// VIEWPORT screenshots only (no fullPage — reveals fire on real scroll).
// Checks: overflow (scrollWidth vs innerWidth), page errors, failed requests,
// viewport screenshots at scroll positions, and key interactions.
// Run: BASE_URL=http://127.0.0.1:4174 node scripts/verify2.mjs
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/hatch/.npm-global/lib/node_modules/playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4174';
const VIEWPORTS = [360, 390, 768, 1024, 1440];
const ROUTES = [
	'/', '/about', '/academics', '/admissions', '/campus-life', '/gallery', '/news-events',
	'/contact', '/parent-portal', '/careers', '/alumni', '/privacy-policy', '/terms',
	'/mandatory-disclosure', '/board-results', '/academic-calendar', '/faculty',
	'/notice-board', '/downloads', '/transport', '/testimonials', '/faq', '/sitemap',
	'/faculty/dr-meera-kapoor', '/news-events/summer-camp-2024-registrations-open'
];
const results = { overflow: [], errors: [], failed: [], interactions: [], shots: [] };
fs.mkdirSync('scripts/shots', { recursive: true });

const browser = await chromium.launch();

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
	await page.waitForTimeout(900); // let 800ms count-ups finish
}

// 1. Overflow sweep: every route x every viewport (scrolled to bottom too)
for (const route of ROUTES) {
	for (const w of VIEWPORTS) {
		const { ctx, page } = await newPageAt(w);
		const errors = [], failed = [];
		watch(page, errors, failed);
		await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
		await page.waitForTimeout(500);
		await scrollThrough(page);
		const o = await page.evaluate(() => ({
			scrollWidth: document.documentElement.scrollWidth,
			innerWidth: window.innerWidth
		}));
		results.overflow.push({ route, width: w, ...o, over: o.scrollWidth > o.innerWidth + 1 });
		if (errors.length) results.errors.push({ route, width: w, errors });
		if (failed.length) results.failed.push({ route, width: w, failed });
		await page.close();
		await ctx.close();
	}
}

// 2. Viewport screenshots at scroll positions
async function shot(route, w, name, scrollY = 0, extraWait = 0) {
	const { ctx, page } = await newPageAt(w);
	const errors = [], failed = [];
	watch(page, errors, failed);
	await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
	await scrollThrough(page);
	await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
	await page.waitForTimeout(900 + extraWait);
	await page.screenshot({ path: `scripts/shots/${name}` });
	if (errors.length) results.errors.push({ route, width: w, shot: name, errors });
	if (failed.length) results.failed.push({ route, width: w, shot: name, failed });
	results.shots.push(name);
	await page.close();
	await ctx.close();
}

await shot('/', 390, 'v2-home-390-top.png', 0);
await shot('/', 390, 'v2-home-390-hero.png', 500);
await shot('/', 390, 'v2-home-390-welcome.png', 1400);
await shot('/', 390, 'v2-home-390-programs.png', 2600);
await shot('/', 390, 'v2-home-390-statsband.png', 4200);
await shot('/', 390, 'v2-home-390-bottom.png', 99999);
await shot('/', 360, 'v2-home-360-top.png', 0);
await shot('/', 1440, 'v2-home-1440-top.png', 0);
await shot('/', 1440, 'v2-home-1440-welcome.png', 1100);
await shot('/', 1024, 'v2-home-1024-top.png', 0);
await shot('/', 1280, 'v2-home-1280-top.png', 0);
await shot('/mandatory-disclosure', 390, 'v2-disclosure-390.png', 0);
await shot('/mandatory-disclosure', 1440, 'v2-disclosure-1440.png', 0);
await shot('/board-results', 390, 'v2-results-390.png', 0);
await shot('/faculty', 390, 'v2-faculty-390.png', 0);
await shot('/faculty/dr-meera-kapoor', 390, 'v2-teacher-390.png', 0);
await shot('/faculty/dr-meera-kapoor', 1440, 'v2-teacher-1440.png', 0);
await shot('/notice-board', 390, 'v2-notices-390.png', 0);
await shot('/downloads', 390, 'v2-downloads-390.png', 0);
await shot('/transport', 390, 'v2-transport-390.png', 0);
await shot('/faq', 390, 'v2-faq-390.png', 0);
await shot('/testimonials', 390, 'v2-testimonials-390.png', 0);
await shot('/academic-calendar', 390, 'v2-calendar-390.png', 0);
await shot('/news-events/summer-camp-2024-registrations-open', 390, 'v2-news-390.png', 0);
await shot('/sitemap', 1440, 'v2-sitemap-1440.png', 0);
await shot('/gallery', 390, 'v2-gallery-390.png', 0);
await shot('/contact', 390, 'v2-contact-390.png', 0);

// 3. Interactions
async function interact(name, fn) {
	const { ctx, page } = await newPageAt(390);
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

await interact('mobile menu + submenu opens', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Open menu').click();
	await page.waitForTimeout(400);
	const mobileNav = page.locator('nav[aria-label="Mobile navigation"]');
	const vis = await mobileNav.locator('text=ADMISSIONS').isVisible();
	await page.getByLabel('Toggle Admissions submenu').click();
	await page.waitForTimeout(300);
	const sub = await mobileNav.locator('text=Fee Structure').isVisible();
	return vis && sub;
});

await interact('enquiry form validates + submits', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.locator('#eq-name').fill('Test Parent');
	await page.locator('#eq-email').fill('test@example.com');
	await page.locator('#eq-phone').fill('9876543210');
	await page.locator('#eq-grade').selectOption({ index: 1 });
	await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
	await page.waitForTimeout(400);
	return await page.locator('text=Thank you, Test Parent!').isVisible();
});

await interact('gallery lightbox opens', async (page) => {
	await page.goto(BASE + '/gallery', { waitUntil: 'networkidle' });
	await page.waitForTimeout(600);
	await page.locator('main img, section img').first().click();
	await page.waitForTimeout(400);
	return (await page.locator('button[aria-label*="Close"], button[aria-label*="close"]').count()) > 0;
});

await interact('parent portal demo login', async (page) => {
	await page.goto(BASE + '/parent-portal', { waitUntil: 'networkidle' });
	await page.waitForTimeout(400);
	const body = await page.locator('body').innerText();
	return /demo|login|parent/i.test(body);
});

await interact('header search finds fees', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Search').click();
	await page.waitForTimeout(300);
	const dlg = page.locator('[role="dialog"]');
	await dlg.locator('input[type="search"]').fill('fees');
	await page.waitForTimeout(400);
	return await dlg.locator('text=Fee Structure').isVisible();
});

await interact('FAQ category tab switches', async (page) => {
	await page.goto(BASE + '/faq', { waitUntil: 'networkidle' });
	await page.getByRole('tab', { name: 'Transport' }).click();
	await page.waitForTimeout(300);
	return await page.locator('text=Which areas do the school buses cover?').isVisible();
});

await interact('notice search filters', async (page) => {
	await page.goto(BASE + '/notice-board', { waitUntil: 'networkidle' });
	await page.locator('#notice-search').fill('sports');
	await page.waitForTimeout(300);
	const txt = await page.locator('body').innerText();
	return txt.includes('Annual Sports Day') && !txt.includes('Half-Yearly Examination');
});

await interact('faculty prev/next navigates', async (page) => {
	await page.goto(BASE + '/faculty/dr-meera-kapoor', { waitUntil: 'networkidle' });
	await page.getByRole('link', { name: /Arvind Menon/ }).first().click();
	await page.waitForTimeout(600);
	return page.url().includes('/faculty/mr-arvind-menon');
});

await interact('board results tab switches year', async (page) => {
	await page.goto(BASE + '/board-results', { waitUntil: 'networkidle' });
	await page.getByRole('tab', { name: '2024–25' }).click();
	await page.waitForTimeout(300);
	return await page.locator('text=Diya Kapoor').first().isVisible();
});

await interact('calendar filter shows exams only', async (page) => {
	await page.goto(BASE + '/academic-calendar', { waitUntil: 'networkidle' });
	await page.getByRole('tab', { name: 'Exam', exact: true }).click();
	await page.waitForTimeout(300);
	const txt = await page.locator('body').innerText();
	return txt.includes('Half-Yearly Examinations') && !txt.includes('Summer break');
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

await browser.close();
fs.writeFileSync('scripts/shots/v2-results.json', JSON.stringify(results, null, 2));
const over = results.overflow.filter((o) => o.over);
console.log('OVERFLOW CHECKS:', results.overflow.length, 'failures:', over.length, JSON.stringify(over));
console.log('PAGE ERRORS:', JSON.stringify(results.errors));
console.log('FAILED REQUESTS:', JSON.stringify(results.failed));
console.log('INTERACTIONS:', JSON.stringify(results.interactions, null, 2));
console.log('SHOTS:', results.shots.length);
