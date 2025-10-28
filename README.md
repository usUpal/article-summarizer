# Article Summarizer

A Chrome browser extension that generates concise summaries of web articles with a single click. Perfect for quickly understanding the key points of any article without reading the entire content.

## Features

- **One-Click Summarization**: Generate article summaries instantly by clicking the extension icon
- **Clean Interface**: Modern, user-friendly popup interface with highlighted article titles
- **AI-Powered**: Uses advanced summarization API to extract key information
- **Fast & Efficient**: Quick response times for immediate results
- **Works Across Sites**: Summarize articles from any website

## Installation

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/usUpal/article-summarizer.git
   cd article-summarizer
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" by toggling the switch in the top right corner

4. Click "Load unpacked" button

5. Select the directory containing the extension files

6. The Article Summarizer extension should now appear in your extensions list

## Usage

1. Navigate to any article or webpage you want to summarize

2. Click the Article Summarizer extension icon in your browser toolbar

3. Wait a moment while the summary is being generated

4. Read the concise summary in the popup window

5. The article title will be displayed with a highlighted background for easy visibility

## Technical Details

### API Integration

The extension uses a hosted API for article summarization:
- **API Endpoint**: `https://article-summarizer-api-1pty.vercel.app/api/summarize`
- **Method**: POST
- **Payload**: `{ url: "article-url" }`

### Permissions

The extension requires the following permissions:
- `tabs`: To access the current tab's URL
- `activeTab`: To interact with the currently active tab
- Host permissions for the API endpoint

### Browser Compatibility

- Chrome (Manifest V3)
- Other Chromium-based browsers (Edge, Brave, etc.)

## Project Structure

```
article-summarizer/
├── manifest.json       # Extension configuration and metadata
├── popup.html          # Popup interface HTML
├── popup.js            # Popup logic and API communication
├── content.js          # Content script (currently unused)
├── icons/              # Extension icons in various sizes
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md           # This file
```

## Development

### Prerequisites

- Chrome browser (or Chromium-based browser)
- Basic knowledge of JavaScript and Chrome Extension APIs

### Local Development

1. Make your changes to the extension files

2. Go to `chrome://extensions/` in Chrome

3. Find the Article Summarizer extension

4. Click the refresh icon to reload the extension with your changes

5. Test the extension on various articles

### Debugging

- Open the popup and right-click → "Inspect" to open DevTools for the popup
- Check the console for any error messages
- Use `chrome://extensions/` to view extension errors

## How It Works

1. When you click the extension icon, `popup.html` is displayed
2. `popup.js` automatically executes and retrieves the current tab's URL
3. The URL is sent to the summarization API endpoint
4. The API processes the article and returns a summary
5. The summary is displayed in the popup with the article title

## Error Handling

The extension handles various error scenarios:
- Network failures
- Invalid URLs
- API errors
- Missing summary data

Error messages are displayed in a user-friendly format within the popup.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for use and modification.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

Made with ❤️ for efficient reading
