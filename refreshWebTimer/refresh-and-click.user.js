// ==UserScript==
// @name         Page Refresh & Auto-Click
// @namespace    https://github.com/someboy53/monkeyScripts
// @version      1.0
// @description  Refresh the page every 5 minutes and auto-click the active nav link.
// @author       someboy53
// @match        http://studio.kk.seeyon.com/index*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const REFRESH_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

    function triggerClick(target) {
        if (!target) return;
        target.click();
    }

    function findAndClick() {
        const target = document.querySelector('li.active > a:nth-child(1)');
        if (target) {
            triggerClick(target);
        }
    }

    // Attempt to click once on page load, after DOM settles.
    window.addEventListener('DOMContentLoaded', findAndClick);

    // Set up the 5-minute refresh cycle.
    setInterval(function () {
        location.reload();
    }, REFRESH_INTERVAL_MS);
})();
