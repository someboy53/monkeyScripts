# JavBus Enhancer

A Tampermonkey userscript that enhances [javbus.com](https://www.javbus.com/) with navigation buttons on detail pages and new-tab movie links.

## Features

- **Next/Last buttons** on detail pages (e.g. `/APKH-196` → navigate to `/APKH-197` or `/APKH-195`). Buttons are inserted at the top of `.container`.
- **Movie links open in new tabs** — all `.movie-box` anchor tags get `target="_blank"`.

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
2. Open the Tampermonkey dashboard and create a new script.
3. Copy the contents of `javbus-enhancer.user.js` into the editor.
4. Save and ensure the script is enabled.

## Files

| File | Description |
|---|---|
| `javbus-enhancer.user.js` | The userscript |
| `README.md` | This file |
