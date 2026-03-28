chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadReport') {
    chrome.downloads.download({
      url: message.url,
      filename: message.filename,
      saveAs: false
    });
  }
});
