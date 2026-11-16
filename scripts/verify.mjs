// Playwright verification for Sunshine International School (local preview).
// Checks horizontal overflow, console errors, failed requests, screenshots,
// and key interactions. Run: BASE_URL=http://127.0.0.1:4174 node scripts/verify.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('/home/hatch/.npm-global/lib/node_modules/playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:4173';
const VIEWPORTS = [360, 390, 768, 1024, 1440];
const ROUTES = ['/', '/about', '/academics', '/admissions', '/campus-life', '/gallery', '/news-events', '/contact', '/parent-portal', '/careers', '/alumni', '/privacy-policy', '/terms'];
const results = { overflow: [], errors: [], failedRequests: [], interactions: [], screenshots: [] };

const browser = await chromium.launch();
const context = await browser.newContext({ ignoreHTTPSErrors: true });
async function newPageAt(width, height) { const ctx = await browser.newContext({ ignoreHTTPSErrors: true, viewport: { width, height } }); return { ctx, page: await ctx.newPage() }; }


async function checkRoute(route, width) {
	const { ctx, page } = await newPageAt(width, 900);
	const errors = [];
	const failed = [];
	page.on('pageerror', (e) => errors.push(String(e)));
	page.on('console', (m) => {
		if (m.type() === 'error') errors.push(m.text());
	});
	page.on('requestfailed', (r) => failed.push(`${r.url()} :: ${r.failure()?.errorText}`));
	page.on('response', (r) => {
		if (r.status() >= 400) failed.push(`${r.url()} :: HTTP ${r.status()}`);
	});
	await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
	await page.waitForTimeout(800);
	const overflow = await page.evaluate(() => {
		const de = document.documentElement;
		return { scrollWidth: de.scrollWidth, innerWidth: window.innerWidth, over: de.scrollWidth > window.innerWidth + 1 };
	});
	results.overflow.push({ route, width, ...overflow });
	if (errors.length) results.errors.push({ route, width, errors });
	if (failed.length) results.failedRequests.push({ route, width, failed });
	await page.close();
	await ctx.close();
}

// 1. Overflow sweep
for (const route of ROUTES) {
	for (const w of VIEWPORTS) {
		await checkRoute(route, w);
	}
}

// 2. Screenshots (home 390 + 1440, admissions 390)
const shots = [
	['/', 390, 'home-390.png'],
	['/', 1440, 'home-1440.png'],
	['/admissions', 390, 'admissions-390.png'],
	['/about', 1440, 'about-1440.png'],
	['/gallery', 1440, 'gallery-1440.png']
];
for (const [route, w, name] of shots) {
	const { ctx, page } = await newPageAt(w, 900);
	await page.goto(BASE + route, { waitUntil: 'networkidle' });
	await page.waitForTimeout(1200);
	// scroll through to trigger reveals
	await page.evaluate(async () => {
		await new Promise((res) => {
			let y = 0;
			const t = setInterval(() => {
				y += 700;
				window.scrollTo({ top: y, behavior: 'instant' });
				if (y >= document.body.scrollHeight) {
					clearInterval(t);
					window.scrollTo({ top: 0, behavior: 'instant' });
					res();
				}
			}, 120);
		});
	});
	await page.waitForTimeout(600);
	await page.screenshot({ path: `scripts/shots/${name}`, fullPage: true });
	results.screenshots.push(name);
	await page.close();
	await ctx.close();
}

// 3. Interactions
async function interact(name, fn) {
	const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
	try {
		const ok = await fn(page);
		results.interactions.push({ name, ok: !!ok });
	} catch (e) {
		results.interactions.push({ name, ok: false, error: String(e).slice(0, 300) });
	}
	await page.close();
}

await interact('mobile menu opens + Academics submenu', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Open menu').click();
	await page.waitForTimeout(300);
	await page.getByLabel('Toggle Academics submenu').click();
	await page.waitForTimeout(300);
	return await page.locator('nav[aria-label="Mobile navigation"]').getByText('Pre-Primary (Nursery – KG)').isVisible();
});

await interact('hero enquiry form: empty-submit errors, valid submit success', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
	await page.waitForTimeout(300);
	const errShown = await page.getByText('Please enter the parent').isVisible();
	await page.locator('#eq-name').fill('Test Parent');
	await page.locator('#eq-email').fill('test@example.com');
	await page.locator('#eq-phone').fill('9876543210');
	await page.locator('#eq-grade').selectOption({ label: 'Class VI – VIII' });
	await page.getByRole('button', { name: 'SUBMIT ENQUIRY' }).click();
	await page.waitForTimeout(400);
	const ok = await page.getByText(/Thank you, Test Parent/).isVisible();
	return errShown && ok;
});

await interact('gallery filter + lightbox', async (page) => {
	await page.goto(BASE + '/gallery', { waitUntil: 'networkidle' });
	await page.getByRole('button', { name: 'Sports', exact: true }).click();
	await page.waitForTimeout(300);
	await page.locator('button:has(img[alt="Students playing football"])').first().click();
	await page.waitForTimeout(400);
	const lb = await page.getByRole('dialog', { name: 'Photo viewer' }).isVisible();
	await page.getByLabel('Close').click();
	await page.waitForTimeout(300);
	return lb;
});

await interact('parent portal demo login -> dashboard', async (page) => {
	await page.goto(BASE + '/parent-portal', { waitUntil: 'networkidle' });
	await page.locator('#pp-user').fill('Priya Sharma');
	await page.locator('#pp-pass').fill('demo1234');
	await page.getByRole('button', { name: 'LOG IN' }).click();
	await page.waitForTimeout(400);
	return await page.getByText('Welcome, Priya Sharma!').isVisible();
});

await interact('header search finds fees', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.getByLabel('Search').click();
	await page.waitForTimeout(300);
	await page.locator('input[type="search"]').fill('fees');
	await page.waitForTimeout(300);
	return await page.locator('div[role="dialog"]').getByText('Fee Structure').isVisible();
});

await interact('newsletter validation + success', async (page) => {
	await page.goto(BASE + '/', { waitUntil: 'networkidle' });
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.waitForTimeout(500);
	await page.locator('#newsletter-email').fill('bad-email');
	await page.getByLabel('Subscribe').click();
	await page.waitForTimeout(300);
	const errShown = await page.getByText('Please enter a valid email address.').isVisible();
	await page.locator('#newsletter-email').fill('parent@example.com');
	await page.getByLabel('Subscribe').click();
	await page.waitForTimeout(300);
	const ok = await page.getByText('Thank you! You are subscribed').isVisible();
	return errShown && ok;
});

await browser.close();

// Filter out the known VM-blocked Google Fonts request from failures
const knownBlocked = (u) => u.includes('fonts.googleapis.com') || u.includes('fonts.gstatic.com');
results.failedRequests = results.failedRequests
	.map((r) => ({ ...r, failed: r.failed.filter((f) => !knownBlocked(f)) }))
	.filter((r) => r.failed.length > 0);

const badOverflow = results.overflow.filter((o) => o.over);
console.log(JSON.stringify({ ...results, badOverflow }, null, 2));
console.log(
	`\nSUMMARY: overflow issues ${badOverflow.length}/${results.overflow.length} · page errors ${results.errors.length} · failed requests (excl. Google Fonts) ${results.failedRequests.length} · interactions ${results.interactions.filter((i) => i.ok).length}/${results.interactions.length} passed`
);
