export function saveCookies(snapshot) {
    if (!snapshot) {
        alert('fetch cookies first!');
        return;
}
const key =`cookies:${snapshot.domain}:${Date.now()}`;
const obj = { [key] : snapshot};

chrome.storage.local.set(obj, () => {
    if (chrome.runtime.lastError) { 
        alert('Error: ' + chrome.runtime.lastError.message);
    } else {
        alert('Cookies saved!');
    }
});
}  