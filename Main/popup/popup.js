import { fetchCookies } from './cookies.js';
import { saveCookies } from './storage.js';
import { exportCookies } from './export.js';

let lastSnapshot = null;

$('refreshBtn').addEventListener('click', async () => {
    lastSnapshot = await fetchCookies();
});

$('saveBtn').addEventListener('click', () => {
    saveCookies(lastSnapshot);
});

$('exportBtn').addEventListener('click', () => {
    exportCookies(lastSnapshot);
});