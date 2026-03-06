import { $ } from './dom.js';

export async function getActiveTabDomain() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab ? new URL(tab.url).hostname : null;
}

export async function fetchCookies() {
    const domain = await getActiveTabDomain();
    if (!domain) return null;
    return new Promise((resolve) => {
        chrome.runtime.sendMessage({ type: 'getCookiesForDomain', domain }, (response) => {
            console.log('Cookies response:', response);
            resolve({ domain, cookies: response.cookies });
        });
    });
}