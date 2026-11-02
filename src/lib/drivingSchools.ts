import { getCollection } from 'astro:content';
import slugify from './slugify';

// Driving schools sorted by zip (then name), grouped by region (regions in order of their lowest zip)
export async function getDrivingSchoolsByRegion() {
  const schools = (await getCollection('drivingSchools'))
    .map((entry) => entry.data)
    .sort((a, b) => a.zip.localeCompare(b.zip, undefined, { numeric: true }) || a.name.localeCompare(b.name, 'de'));

  const regions = new Map<string, typeof schools>();
  for (const school of schools) {
    regions.set(school.region, [...(regions.get(school.region) ?? []), school]);
  }

  return [...regions].map(([name, schools]) => ({ name, slug: slugify(name), schools }));
}
