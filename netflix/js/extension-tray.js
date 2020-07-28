function setup() {
    createGenresList();
    let userInput = select('#myInput');

    userInput.input(changeText);

    function changeText() {

        // getting the typed value from the input in the popup
        console.log(userInput.value());

        // filtering process
        let input, filter, ul, li, a, i, txtValue;
        input = userInput.value();
        filter = input.toUpperCase();
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
}

function createGenresList() {
    console.log("create list initiate");

    let genreArr = [
        {key: 1365, name: "Action & Adventure"},
        {key: 43040, name: "Action  Comedies"},
        {key: 1568, name: "Action Sci-Fi & Fantasy"}
    ]

    function makeUL(array) {
        console.log(array);
        // Create the list element:
        var list = document.createElement('ul');
        list.setAttribute('id', 'myUL')

        for (let i = 0; i < array.length; i++) {
            // Create the list item:
            let item = document.createElement('li');
            let itemA = document.createElement('a');

            item.setAttribute('id', 'list' + array[i].key);
            itemA.setAttribute('id', 'listA' + array[i].key);
            itemA.setAttribute('name', array[i].name);
            itemA.addEventListener('click', () => {
                onItemClick(genreArr[i]);
            })

            // Set its contents:
            itemA.appendChild(document.createTextNode(array[i].name));

            // Add it to the list:
            item.appendChild(itemA);
            list.appendChild(item);
        }

        // Finally, return the constructed list:
        return list;
    }

// Add the contents of options[0] to #foo:
    document.getElementById('foo').appendChild(makeUL(genreArr));
}

function setButtonClick() {
    console.log();
// set button click function
    document.addEventListener('DOMContentLoaded', function () {
        var elem = document.getElementById("list1568");
        // onClick's logic below:
        elem.addEventListener('click', function () {
            let data = {
                id: parseInt(elem.getAttribute('name')),
                name: elem.value
            }
            onItemClick(data);
        });
    });
}

function onItemClick(data) {
    console.log(data);
    passDataToContentLayer(data)
}

function passDataToContentLayer(data) {
    // passing the value to content-js
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        // send a message to the content script
        let genresData = {
            key: data.key,
            name: data.name
        }
        chrome.tabs.sendMessage(tabs[0].id, genresData)
    }
}
