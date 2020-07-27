// initiates when the Chrome opens
console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "hello",
        tab: tab
    }
    // Send message to content-js
    chrome.tabs.sendMessage(tab.id, msg)
}
