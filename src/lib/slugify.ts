// URL slug for region names, e.g. "Niederösterreich" -> "niederoesterreich".
// Must stay in sync with existing URLs (/at/fahrschulen/<slug>/).
export default function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/ /g, '-')
    .replace(/[.,()]/g, '');
}
