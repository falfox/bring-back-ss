// Send message to backgorund script that this tab is ready to inject script

chrome.runtime.sendMessage({ message: 'injectScript' });
