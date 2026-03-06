import { fetchCookies } from './cookies.js';
import { saveCookies } from './storage.js';
import { exportCookies } from './exporter.js';
import { $ } from './dom.js';

document.addEventListener('DOMContentLoaded', () => {
    let lastSnapshot = null;

    $('refreshBtn').addEventListener('click', async () => {
        lastSnapshot = await fetchCookies();
        const cookiesDiv = document.getElementById('cookies');
        if (lastSnapshot && lastSnapshot.cookies && lastSnapshot.cookies.length > 0) {
            cookiesDiv.innerHTML = lastSnapshot.cookies.map(cookie =>
                `<div class="cookies"><b>${cookie.name}</b>: ${cookie.value}</div>`
            ).join('');
        } else {
            cookiesDiv.textContent = 'No cookies found.';
        }
    });

    $('saveBtn').addEventListener('click', () => {
        saveCookies(lastSnapshot);
    });

    $('exportBtn').addEventListener('click', () => {
        exportCookies(lastSnapshot);
    });
});