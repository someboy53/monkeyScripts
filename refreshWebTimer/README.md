# Page Refresh & Auto-Click

A Tampermonkey userscript that refreshes the page every 5 minutes and automatically clicks the active navigation link on each load.

## How it works

- On **page load** (`DOMContentLoaded`), the script finds `li.active > a:nth-child(1)` and triggers `.click()`.
- Every **5 minutes**, `location.reload()` refreshes the page, repeating the load → click cycle.

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Open the Tampermonkey dashboard and create a new script.
3. Copy the contents of `refresh-and-click.user.js` into the editor.
4. Edit the `@match` line to target your specific page (e.g. `https://your-site.com/dashboard*`).
5. Save and ensure the script is enabled.

## Files

| File | Description |
|---|---|
| `refresh-and-click.user.js` | The userscript |
| `README.md` | This file |
