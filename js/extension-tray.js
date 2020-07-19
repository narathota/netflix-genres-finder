document.getElementById("selectBtn1").onclick = () => {
    myFunction(1365)
};
document.getElementById("selectBtn2").onclick = () => {
    myFunction(43040)
};
document.getElementById("selectBtn3").onclick = () => {
    myFunction(1568)
};

function myFunction(id) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!

        var myNewUrl = url.substring(0, 37) + "/" + id;

        chrome.tabs.update(tabs.id, {url: myNewUrl});
        // document.getElementById("selectBtn").innerHTML = myNewUrl;
    });
}
