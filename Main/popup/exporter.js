export function exportCookies(snapshot) {
    if (!snapshot) {
        alert('fetch cookies first!');
        return;
    }
}
const json = JSON.stringify(snapshot, null, 2);
const blob = new Blob([json], { type: 'application/json' });

const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = `cookies_${snapshot.domain}_${Date.now()}.json`;
a.click();
URL.revokeObjectURL(url);