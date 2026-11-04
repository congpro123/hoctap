# Interface sources

The study interface now uses **Volt Free Bootstrap 5 Dashboard**, selected by
the site owner. The compiled CSS is stored locally at `dist/vendor/volt/volt.css`.
The original MIT license is included at `dist/vendor/volt/LICENSE.md`. The
application-specific Volt adapter is `dist/volt-theme.css`.

- Dashboard reference: https://demo.themesberg.com/volt/pages/dashboard/dashboard.html
- Volt source: https://github.com/themesberg/volt-bootstrap-5-dashboard
- Compiled CSS source: https://github.com/themesberg/volt-laravel-dashboard/blob/master/public/css/volt.css
- License: https://github.com/themesberg/volt-bootstrap-5-dashboard/blob/master/LICENSE.md
- Outline icons: https://github.com/tabler/tabler-icons (MIT license in `dist/vendor/tabler/icons/`)

The earlier Tabler adapter remains below Volt's CSS as a layout compatibility
layer. Volt's theme adapter applies the final palette and component styling to
the existing exam, scoring, history, handbook and admin views. Exam contents
and answer data were not changed.
