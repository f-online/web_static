# F-Online Landing Page

Static website for <https://www.f-online.app>, built with [Astro](https://astro.build) and Tailwind CSS and deployed on Netlify.
All content lives in this repository. There is no CMS: to change the website, edit the files below and open a pull request.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev       # dev server on http://localhost:4321/at/
npm run build     # downloads video thumbnails, then builds into dist/
npm run preview   # serve the built dist/ locally
```

### Question pages

The pages under `/at/fragenkatalog/` are generated at build time from the F-Online app export.
Set `FONLINE_API_KEY` (in your shell or in a `.env` file) to build them; without it these pages are skipped (local development and CI work without the key).
The Netlify build must have `FONLINE_API_KEY` set.

The explanation-video thumbnails are downloaded by `downloadThumbnails.sh` from a Google Sheet into `src/assets/thumbnails/` (not committed) and resized during the build.

## Editing content

| What                         | Where                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| Start page (`/at/`)          | `src/pages/at/index.astro` (login box title/subtitle incl. "Stand" date of the questions)           |
| Static pages                 | `src/pages/at/*.astro` (`about-us`, `agb`, `impressum`, `kontakt`, `faq`, `reviews`)                |
| Fragenupdates                | `src/pages/at/fragenupdate-DD-MM-YYYY.md`, one Markdown file per update                             |
| FAQ                          | `src/data/faq.ts` (shown in this order; the start page shows the first 5)                           |
| Reviews                      | `src/content/reviews.yaml` (newest first; the start page shows the newest 6)                        |
| Driving schools (Fahrschulen) | `src/content/driving-schools.yaml`, logos in `src/assets/driving-schools/`                         |
| Team                         | `src/components/Team.astro`, photos in `src/assets/team/`                                           |
| Features ("Warum F-Online?") | `src/components/Features.astro`, icons in `src/assets/features/`                                    |
| Navigation / footer links    | `src/components/Nav.astro`, `src/components/Footer.astro`                                           |
| Redirects                    | `public/_redirects` (Netlify)                                                                       |
| Static files                 | `public/` (served as-is, e.g. `ads.txt`, `media/*.pdf`)                                             |

### Add a Fragenupdate

Copy an existing `src/pages/at/fragenupdate-*.md` file. The file name becomes the URL (`/at/fragenupdate-01-01-2025/`). Adjust the front matter (`title`, `subtitle`, `seoTitle`, `description`, optional `faqLimit`) and write the text in Markdown.

### Add a driving school

Add an entry to `src/content/driving-schools.yaml`. Put a new logo into `src/assets/driving-schools/` and reference it relative to the YAML file. A new `region` value automatically creates a new page `/at/fahrschulen/<region>/`. The build fails with a clear message if a required field is missing or the logo does not exist.

### Add a review

Add an entry to `src/content/reviews.yaml` (`platform` is `ios` or `android`, `stars` 1–5, `date` as `YYYY-MM-DD`).

### Images

Put images into `src/assets/` and render them with Astro's `<Image>` / `<Picture>` components. They are resized and converted to WebP/AVIF at build time. Files in `public/` are not optimized.
