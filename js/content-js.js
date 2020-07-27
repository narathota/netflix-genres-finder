// Alter the content on the web-page
// Does not run until the page is loaded

// alert('Grrr.')


// get message from background-js
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.tab.url.includes("wikipedia")) {
        let paragraphs = document.getElementsByTagName('p')
        for (let elem of paragraphs) {
            elem.style['background-color'] = "#ef4836"
        }
    }
}
