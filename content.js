(async () => {
  try {
    console.log("Fetching summary for:", window.location.href);
    const response = await fetch("baseUrl/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ url: window.location.href }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API response:", data);
    chrome.runtime.sendMessage({ action: "showSummary", data });
  } catch (error) {
    console.error("Error fetching summary:", error);
  }
})();
