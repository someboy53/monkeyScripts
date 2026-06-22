// ==UserScript==
// @name         JavBus Enhancer
// @namespace    https://github.com/someboy53/monkeyScripts
// @version      1.0
// @description  Add Next/Last navigation on detail pages and open movie links in new tabs.
// @author       someboy53
// @match        *://www.javbus.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // --- Next/Last buttons on detail pages (e.g. /APKH-196) ---
    function addNavButtons() {
        const path = window.location.pathname;
        const match = path.match(/^\/([A-Za-z0-9]+)-(\d+)$/);
        if (!match) return;

        const prefix = match[1];
        const numStr = match[2];
        const num = parseInt(numStr, 10);
        const pad = numStr.length;
        const nextNum = String(num + 1).padStart(pad, '0');
        const lastNum = String(num - 1).padStart(pad, '0');

        const container = document.querySelector('.container');
        if (!container) return;

        const bar = document.createElement('div');
        bar.style.cssText = 'display:flex;gap:10px;margin-bottom:15px;';

        const makeBtn = (label, numStr) => {
            const btn = document.createElement('a');
            btn.href = `/${prefix}-${numStr}`;
            btn.textContent = label;
            btn.style.cssText = 'display:inline-block;padding:6px 16px;background:#337ab7;color:#fff;border-radius:4px;text-decoration:none;font-size:14px;';
            return btn;
        };

        bar.appendChild(makeBtn('← Last', lastNum));
        bar.appendChild(makeBtn('Next →', nextNum));

        container.insertBefore(bar, container.firstChild);
    }

    // --- Open .movie-box links in new tabs ---
    function openMovieLinksInNewTab() {
        const boxes = document.querySelectorAll('.movie-box');
        boxes.forEach(box => {
            box.target = '_blank';
            box.rel = 'noopener noreferrer';
        });
    }

    function init() {
        addNavButtons();
        openMovieLinksInNewTab();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
