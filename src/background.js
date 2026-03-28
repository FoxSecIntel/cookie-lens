function updateBadgeForTab(tabId, url, count) {
  if (!url || url.startsWith('chrome://') || url.startsWith('chrome-extension://')) {
    chrome.action.setBadgeText({ text: '', tabId: tabId });
    return;
  }
  const text = count > 0 ? String(count) : '';
  const colour = count === 0 ? '#888888'
    : count <= 5 ? '#4caf82'
    : count <= 15 ? '#e6a817'
    : '#e05252';
  chrome.action.setBadgeText({ text: text, tabId: tabId });
  chrome.action.setBadgeBackgroundColor({ color: colour, tabId: tabId });
}

chrome.alarms.create('badgeRefresh', { periodInMinutes: 0.5 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'badgeRefresh') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        chrome.cookies.getAll({ url: tabs[0].url }, (cookies) => {
          updateBadgeForTab(tabs[0].id, tabs[0].url, cookies?.length || 0);
        });
      }
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.url) {
      chrome.cookies.getAll({ url: tabs[0].url }, (cookies) => {
        updateBadgeForTab(tabs[0].id, tabs[0].url, cookies?.length || 0);
      });
    }
  });
});

chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.url) {
      chrome.cookies.getAll({ url: tabs[0].url }, (cookies) => {
        updateBadgeForTab(tabs[0].id, tabs[0].url, cookies?.length || 0);
      });
    }
  });
});

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
      updateBadgeForTab(tabId, tab.url, cookies?.length || 0);
    });
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (!tab?.url) return;
    chrome.cookies.getAll({ url: tab.url }, (cookies) => {
      updateBadgeForTab(activeInfo.tabId, tab.url, cookies?.length || 0);
    });
  });
});

chrome.cookies.onChanged.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]?.url) {
      chrome.cookies.getAll({ url: tabs[0].url }, (cookies) => {
        updateBadgeForTab(tabs[0].id, tabs[0].url, cookies?.length || 0);
      });
    }
  });
});
