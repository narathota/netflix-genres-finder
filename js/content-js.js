// Alter the content on the web-page
// Does not run until the page is loaded


// get message from background-js
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message);

    var myNewUrl = "https://www.netflix.com/browse/genre/" + message.key;
    location.replace(myNewUrl)
}
