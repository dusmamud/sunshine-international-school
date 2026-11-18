// Responsive-image data for Sunshine International School.
//
// Every photo in static/images, with its TRUE pixel dimensions (measured
// with PIL — never guessed) and the srcset of the right-sized variants
// the browser should pick from.
//
// STATUS 2026-11-18: the variant files now exist (shipped in the audit-fix
// commit — generated in memory and pushed via the GitHub API because the
// VM EPERM storm blocked disk writes). `imgSrcset(...)` is wired into all
// 19 <img> tags. Re-run scripts/gen-image-variants.py once the storm clears
// to regenerate them on disk, verify with `wc -c`, and confirm the sizes
// match the srcset strings below. width/height are wired everywhere too —
// those give the browser the aspect ratio up front (no layout shift).

export interface ImageVariant {
	srcset: string;
	width: number;
	height: number;
}

const IMAGES: Record<string, ImageVariant> = {
	'/images/hero-students.webp': {
		srcset:
			'/images/hero-students-400.webp 400w, /images/hero-students-800.webp 800w, /images/hero-students-1200.webp 1200w, /images/hero-students.webp 1920w',
		width: 1920,
		height: 1280
	},
	'/images/main-gate.webp': {
		srcset:
			'/images/main-gate-400.webp 400w, /images/main-gate-800.webp 800w, /images/main-gate-1200.webp 1200w, /images/main-gate-1600.webp 1600w, /images/main-gate.webp 2288w',
		width: 2288,
		height: 1104
	},
	'/images/clubs.jpg': {
		srcset: '/images/clubs-800.jpg 800w, /images/clubs.jpg 1920w',
		width: 1920,
		height: 1280
	},
	'/images/community-service.jpg': {
		srcset: '/images/community-service-800.jpg 800w, /images/community-service.jpg 1920w',
		width: 1920,
		height: 1280
	},
	'/images/performing-arts.jpg': {
		srcset: '/images/performing-arts-800.jpg 800w, /images/performing-arts.jpg 1920w',
		width: 1920,
		height: 1280
	},
	'/images/primary-classroom.webp': {
		srcset:
			'/images/primary-classroom-400.webp 400w, /images/primary-classroom-800.webp 800w, /images/primary-classroom.webp 1920w',
		width: 1920,
		height: 1280
	},
	'/images/senior-secondary.jpg': {
		srcset: '/images/senior-secondary-800.jpg 800w, /images/senior-secondary.jpg 1920w',
		width: 1920,
		height: 1280
	},
	'/images/sports-students.webp': {
		srcset:
			'/images/sports-students-400.webp 400w, /images/sports-students-800.webp 800w, /images/sports-students.webp 1920w',
		width: 1920,
		height: 1280
	},
	'/images/campus-life.jpg': {
		srcset: '/images/campus-life-400.jpg 400w, /images/campus-life.jpg 900w',
		width: 900,
		height: 675
	},
	'/images/high-school.jpg': {
		srcset: '/images/high-school-400.jpg 400w, /images/high-school.jpg 900w',
		width: 900,
		height: 600
	},
	'/images/library.jpg': {
		srcset:
			'/images/library-400.jpg 400w, /images/library-600.jpg 600w, /images/library-800.jpg 800w, /images/library.jpg 900w',
		width: 900,
		height: 600
	},
	'/images/life-skills.jpg': {
		srcset: '/images/life-skills-400.jpg 400w, /images/life-skills.jpg 900w',
		width: 900,
		height: 506
	},
	'/images/middle-school.jpg': {
		srcset: '/images/middle-school-400.jpg 400w, /images/middle-school.jpg 900w',
		width: 900,
		height: 560
	},
	'/images/pre-primary.jpg': {
		srcset: '/images/pre-primary-400.jpg 400w, /images/pre-primary.jpg 900w',
		width: 900,
		height: 600
	},
	'/images/science-lab.jpg': {
		srcset:
			'/images/science-lab-400.jpg 400w, /images/science-lab-800.jpg 800w, /images/science-lab.jpg 900w',
		width: 900,
		height: 600
	},
	'/images/visual-arts.jpg': {
		srcset: '/images/visual-arts-400.jpg 400w, /images/visual-arts.jpg 900w',
		width: 900,
		height: 600
	}
};

/** True pixel width of a /images/* file, or undefined if unknown. */
export function imgWidth(src: string): number | undefined {
	return IMAGES[src]?.width;
}

/** True pixel height of a /images/* file, or undefined if unknown. */
export function imgHeight(src: string): number | undefined {
	return IMAGES[src]?.height;
}

/**
 * srcset string for a /images/* file.
 * DO NOT use in tags until the variant files exist in static/images
 * (see header comment). Returns undefined for unknown sources.
 */
export function imgSrcset(src: string): string | undefined {
	return IMAGES[src]?.srcset;
}
