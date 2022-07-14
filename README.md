# F-Online Landing Page Main

As I personally tend to forget the following, here are some small development docs.

## Development

### Install

- Install dependencies via `npm install`
- Add SANITY credentials to `.env` file
  - `SANITY_TOKEN=<Your Token>`
  - Access can be granted through the sanity web ui:
    - <https://www.sanity.io/manage/personal/project/t9maew4z/api>

### Local dev server

Run `npm run develop`, that's it. Access the page on <http://localhost:8000/at/>

In case of some caching problems you can run `npm run clean`.
