chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadReport') {
    chrome.downloads.download({
      url: message.url,
      filename: message.filename,
      saveAs: false
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.cookies.getAll({ url: tab.url }, (cookies) => {
      const count = cookies ? cookies.length : 0;
      const text = count > 0 ? String(count) : '';
      const colour = count === 0 ? '#888888' : count <= 5 ? '#4caf82' : count <= 15 ? '#e6a817' : '#e05252';
      chrome.action.setBadgeText({ text: text, tabId: tabId });
      chrome.action.setBadgeBackgroundColor({ color: colour, tabId: tabId });
    });
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (!tab?.url) return;
    chrome.cookies.getAll({ url: tab.url }, (cookies) => {
      const count = cookies ? cookies.length : 0;
      const text = count > 0 ? String(count) : '';
      const colour = count === 0 ? '#888888' : count <= 5 ? '#4caf82' : count <= 15 ? '#e6a817' : '#e05252';
      chrome.action.setBadgeText({ text: text, tabId: activeInfo.tabId });
      chrome.action.setBadgeBackgroundColor({ color: colour, tabId: activeInfo.tabId });
    });
  });
});
