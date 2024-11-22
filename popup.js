// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const titleEl = document.getElementById("title");
  const summaryEl = document.getElementById("summary");
    
  summaryEl.textContent = "Generating summary...";
  summaryEl.className = "loading";

  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      try {
        const currentUrl = tabs[0].url;

        const response = await fetch(
          "https://article-summarizer-api-1pty.vercel.app/api/summarize",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Origin: chrome.runtime.getURL(""),
            },
            body: JSON.stringify({ url: currentUrl }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.summary) {
          throw new Error("No summary received");
        }

        titleEl.textContent = data.title || "Summary";
        summaryEl.textContent = data.summary;
        summaryEl.className = "";
      } catch (error) {
        console.error("Error details:", error);
        summaryEl.textContent = `Unable to generate summary. ${error.message}`;
        summaryEl.className = "error";
      }
    }
  );
});
