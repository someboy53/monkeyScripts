// ==UserScript==
// @name         Page Refresh & Auto-Click
// @namespace    https://github.com/someboy53/monkeyScripts
// @version      1.1
// @description  Click target nav links every 5 minutes.
// @author       someboy53
// @match        *://studio.kk.seeyon.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

    const SELECTORS = {
        mainNav: '#side-menu > li:nth-child(1) > a:nth-child(1)',
        subNav:  '#side-menu > li:nth-child(3) > a:nth-child(1)',
    };

    function triggerClick(target) {
        if (!target) return;
        target.click();
    }

    function findAndClick() {
        for (const sel of Object.values(SELECTORS)) {
            const target = document.querySelector(sel);
            if (target) {
                triggerClick(target);
            }
        }
    }

    // Click once on page load, after DOM settles.
    window.addEventListener('DOMContentLoaded', findAndClick);

    // Click every 5 minutes without reloading.
    setInterval(findAndClick, REFRESH_INTERVAL_MS);
})();
