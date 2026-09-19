# MKJK College Premium Website — Final Build

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

## Routes

Public home: `/`

Admin login: `/admin/mkjklogin`

Demo admin credentials:
- Email: `admin@mkjkcollege.org`
- Password: `MKJK@2026`

## Structure

- Every public page has its own JSX file and dedicated CSS file.
- Every admin page has its own JSX file and dedicated CSS file.
- No `global.css` or `data.js` is used.
- Shared component styling is limited to Header, Footer, PageHero and BackToTop component styles.
- Course, eligibility and fee pages are separated into UG / PG / Other routes.
- Home news scrolls vertically and pauses on hover.
- Footer Latest Highlight also scrolls vertically and pauses on hover.
- Montserrat is the only website font.

## Content notes

Course intake values and the faculty/non-teaching directory are based on official MKJK material available from the college website. Faculty names/qualifications in the teaching directory are from the official prospectus listing and should be refreshed from the current college directory when a current staff list is available.

Fee values are shown as `₹ —` where a current fee amount was not supplied; this avoids inventing fee figures.

Official source:
https://www.mkjkcollege.org/


## Final content/design update
- Full-width premium orange navigation with working search overlay.
- Admin CSS fixed across dashboard/login and all management buttons/forms.
- Added Organizational Structure, Committee/Cells/Club, Best Practices, Scholarship, Infrastructure, Labs, Library, Hostel, Sports, Cultural, Research, Rules, Important Instructions, Major Achievements and SC/BC content from supplied material.
- Added supplied institutional reference images and local facility illustrations.
- Committee data is sourced from the uploaded All Committees document.
