import { $ } from '.dom.js';

export async function getActiveTabDomain() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab ? new URL(tab.url).hostname : null;
}