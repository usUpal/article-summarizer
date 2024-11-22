chrome.runtime.onMessage.addListener((message) => {
    console.log('Message received:', message);
    if (message.action === 'showSummary') {
      document.getElementById('summary').innerText = message.data.summary;
    }
  });