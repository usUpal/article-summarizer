chrome.action.onClicked.addListener((tab) => {
  console.log("Clicked on the extension icon");
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"],
  });
});
