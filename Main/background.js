chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'getCookiesForDomain') {
        const domain = msg.domain;
        chrome.cookies.getAll({ domain: domain }, (cookies) => {
            sendResponse({ cookies });
        });
        return true;
    }
});