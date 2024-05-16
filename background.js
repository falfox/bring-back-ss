// Listen for an event from specific tab

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'injectScript') {
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            files: ['bypass.js'],
            world: 'MAIN',
        });
    }
    return true;
});