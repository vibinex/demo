try {
	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.type === "OPEN_SIDE_PANEL") {
			chrome.sidePanel.open({ windowId: sender.tab?.windowId })
		}
	})
} catch (e) {
	console.error("Extension context invalidated", e)
}