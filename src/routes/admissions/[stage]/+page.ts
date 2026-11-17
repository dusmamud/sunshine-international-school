import type { PageLoad } from './$types';
import { admissionStages } from '#lib/data/more';

export function entries() {
	return admissionStages.map((s) => ({ stage: s.slug }));
}

export const load: PageLoad = ({ params }) => {
	const stage = admissionStages.find((s) => s.slug === params.stage);
	if (!stage) return { stage: null as never };
	return { stage };
};
