document.getElementById("selectBtn1").onclick = () => {
    setGenreKey(1365)
};
document.getElementById("selectBtn2").onclick = () => {
    setGenreKey(43040)
};
document.getElementById("selectBtn3").onclick = () => {
    setGenreKey(1568)
};

function setGenreKey(id) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!

        // var myNewUrl = url.substring(0, 36) + "/" + id;
        var myNewUrl = "https://www.netflix.com/browse/genre/" + id;

        chrome.tabs.update(tabs.id, {url: myNewUrl});
        // document.getElementById("selectBtn").innerHTML = myNewUrl;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const infoDisplay = document.getElementById('myInput');

    window.addEventListener('DOMContentLoaded', function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {}, function (result) {
                infoDisplay.innerHTML = result
            });
        });
    });

});

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");

    console.log(input);
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var context_id = -1;

chrome.input.ime.onFocus.addListener(function (context) {
    context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
    function (engineID, keyData) {
        if (keyData.type == "keydown" && keyData.key.match(/^[a-z]$/)) {
            chrome.input.ime.commitText({
                "contextID": context_id,
                "text": keyData.key.toUpperCase()
            });
            return true;
        } else {
            return false;
        }
    });
