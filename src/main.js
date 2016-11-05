chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'rm.js',
    allFrames: false
  });
});
