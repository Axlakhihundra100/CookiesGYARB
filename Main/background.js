chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'getCookiesForDomain') {
        console.log('Received getCookiesForDomain for:', msg.domain); 
        const domain = msg.domain;
        chrome.cookies.getAll({ domain: domain }, (cookies) => {
            sendResponse({ cookies });
        });
        return true;
    }   
});