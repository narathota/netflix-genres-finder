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
        {
            "name": "Action & Adventure",
            "key": 1365
        },
        {
            "name": "Action Comedies",
            "key": 43040
        },
        {
            "name": "Action Sci-Fi & Fantasy",
            "key": 1568
        },
        {
            "name": "Action Thrillers",
            "key": 43048
        },
        {
            "name": "Adult Animation",
            "key": 11881
        },
        {
            "name": "Adventures",
            "key": 7442
        },
        {
            "name": "African Movies",
            "key": 3761
        },
        {
            "name": "Alien Sci-Fi",
            "key": 3327
        },
        {
            "name": "Animal Tales",
            "key": 5507
        },
        {
            "name": "Anime",
            "key": 7424
        },
        {
            "name": "Anime Action",
            "key": 2653
        },
        {
            "name": "Anime Comedies",
            "key": 9302
        },
        {
            "name": "Anime Dramas",
            "key": 452
        },
        {
            "name": "Anime Fantasy",
            "key": 11146
        },
        {
            "name": "Anime Features",
            "key": 3063
        },
        {
            "name": "Anime Horror",
            "key": 10695
        },
        {
            "name": "Anime Sci-Fi",
            "key": 2729
        },
        {
            "name": "Anime Series",
            "key": 6721
        },
        {
            "name": "Art House Movies",
            "key": 29764
        },
        {
            "name": "Asian Action Movies",
            "key": 77232
        },
        {
            "name": "Australian Movies",
            "key": 5230
        },
        {
            "name": "B-Horror Movies",
            "key": 8195
        },
        {
            "name": "Baseball Movies",
            "key": 12339
        },
        {
            "name": "Basketball Movies",
            "key": 12762
        },
        {
            "name": "Belgian Movies",
            "key": 262
        },
        {
            "name": "Biographical Documentaries",
            "key": 3652
        },
        {
            "name": "Biographical Dramas",
            "key": 3179
        },
        {
            "name": "Boxing Movies",
            "key": 12443
        },
        {
            "name": "British Movies",
            "key": 10757
        },
        {
            "name": "British TV Shows",
            "key": 52117
        },
        {
            "name": "Campy Movies",
            "key": 1252
        },
        {
            "name": "Children & Family Movies",
            "key": 783
        },
        {
            "name": "Chinese Movies",
            "key": 3960
        },
        {
            "name": "Classic Action & Adventure",
            "key": 46576
        },
        {
            "name": "Classic Comedies",
            "key": 31694
        },
        {
            "name": "Classic Dramas",
            "key": 29809
        },
        {
            "name": "Classic Foreign Movies",
            "key": 32473
        },
        {
            "name": "Classic Movies",
            "key": 31574
        },
        {
            "name": "Classic Musicals",
            "key": 32392
        },
        {
            "name": "Classic Romantic Movies",
            "key": 31273
        },
        {
            "name": "Classic Sci-Fi & Fantasy",
            "key": 47147
        },
        {
            "name": "Classic Thrillers",
            "key": 46588
        },
        {
            "name": "Classic TV Shows",
            "key": 46553
        },
        {
            "name": "Classic War Movies",
            "key": 48744
        },
        {
            "name": "Classic Westerns",
            "key": 47465
        },
        {
            "name": "Comedies",
            "key": 6548
        },
        {
            "name": "Comic Book and Superhero Movies",
            "key": 10118
        },
        {
            "name": "Country & Western/Folk",
            "key": 1105
        },
        {
            "name": "Courtroom Dramas",
            "key": 528582748
        },
        {
            "name": "Creature Features",
            "key": 6895
        },
        {
            "name": "Crime Action & Adventure",
            "key": 9584
        },
        {
            "name": "Crime Documentaries",
            "key": 9875
        },
        {
            "name": "Crime Dramas",
            "key": 6889
        },
        {
            "name": "Crime Thrillers",
            "key": 10499
        },
        {
            "name": "Crime TV Shows",
            "key": 26146
        },
        {
            "name": "Cult Comedies",
            "key": 9434
        },
        {
            "name": "Cult Horror Movies",
            "key": 10944
        },
        {
            "name": "Cult Movies",
            "key": 7627
        },
        {
            "name": "Cult Sci-Fi & Fantasy",
            "key": 4734
        },
        {
            "name": "Cult TV Shows",
            "key": 74652
        },
        {
            "name": "Dark Comedies",
            "key": 869
        },
        {
            "name": "Deep Sea Horror Movies",
            "key": 45028
        },
        {
            "name": "Disney",
            "key": 67673
        },
        {
            "name": "Disney Musicals",
            "key": 59433
        },
        {
            "name": "Documentaries",
            "key": 6839
        },
        {
            "name": "Dramas",
            "key": 5763
        },
        {
            "name": "Dramas based on Books",
            "key": 4961
        },
        {
            "name": "Dramas based on real life",
            "key": 3653
        },
        {
            "name": "Dutch Movies",
            "key": 10606
        },
        {
            "name": "Eastern European Movies",
            "key": 5254
        },
        {
            "name": "Education for Kids",
            "key": 10659
        },
        {
            "name": "Epics",
            "key": 52858
        },
        {
            "name": "Experimental Movies",
            "key": 11079
        },
        {
            "name": "Faith & Spirituality",
            "key": 26835
        },
        {
            "name": "Faith & Spirituality Movies",
            "key": 52804
        },
        {
            "name": "Family Features",
            "key": 51056
        },
        {
            "name": "Fantasy Movies",
            "key": 9744
        },
        {
            "name": "Film Noir",
            "key": 7687
        },
        {
            "name": "Food & Travel TV",
            "key": 72436
        },
        {
            "name": "Football Movies",
            "key": 12803
        },
        {
            "name": "Foreign Action & Adventure",
            "key": 11828
        },
        {
            "name": "Foreign Comedies",
            "key": 4426
        },
        {
            "name": "Foreign Documentaries",
            "key": 5161
        },
        {
            "name": "Foreign Dramas",
            "key": 2150
        },
        {
            "name": "Foreign Gay & Lesbian Movies",
            "key": 8243
        },
        {
            "name": "Foreign Horror Movies",
            "key": 8654
        },
        {
            "name": "Foreign Movies",
            "key": 7462
        },
        {
            "name": "Foreign Sci-Fi & Fantasy",
            "key": 6485
        },
        {
            "name": "Foreign Thrillers",
            "key": 10306
        },
        {
            "name": "French Movies",
            "key": 58807
        },
        {
            "name": "Gangster Movies",
            "key": 31851
        },
        {
            "name": "Gay & Lesbian Dramas",
            "key": 500
        },
        {
            "name": "German Movies",
            "key": 58886
        },
        {
            "name": "Greek Movies",
            "key": 61115
        },
        {
            "name": "Historical Documentaries",
            "key": 5349
        },
        {
            "name": "Horror Comedy",
            "key": 89585
        },
        {
            "name": "Horror Movies",
            "key": 8711
        },
        {
            "name": "Independent Action & Adventure",
            "key": 11804
        },
        {
            "name": "Independent Comedies",
            "key": 4195
        },
        {
            "name": "Independent Dramas",
            "key": 384
        },
        {
            "name": "Independent Movies",
            "key": 7077
        },
        {
            "name": "Independent Thrillers",
            "key": 3269
        },
        {
            "name": "Indian Movies",
            "key": 10463
        },
        {
            "name": "Irish Movies",
            "key": 58750
        },
        {
            "name": "Italian Movies",
            "key": 8221
        },
        {
            "name": "Japanese Movies",
            "key": 10398
        },
        {
            "name": "Jazz & Easy Listening",
            "key": 10271
        },
        {
            "name": "Kids Faith & Spirituality",
            "key": 751423
        },
        {
            "name": "Kids Music",
            "key": 52843
        },
        {
            "name": "Kids' TV",
            "key": 27346
        },
        {
            "name": "Korean Movies",
            "key": 5685
        },
        {
            "name": "Korean TV Shows",
            "key": 67879
        },
        {
            "name": "Late Night Comedies",
            "key": 1402
        },
        {
            "name": "Latin American Movies",
            "key": 1613
        },
        {
            "name": "Latin Music",
            "key": 10741
        },
        {
            "name": "Martial Arts Movies",
            "key": 8985
        },
        {
            "name": "Martial Arts, Boxing & Wrestling",
            "key": 6695
        },
        {
            "name": "Middle Eastern Movies",
            "key": 5875
        },
        {
            "name": "Military Action & Adventure",
            "key": 2125
        },
        {
            "name": "Military Documentaries",
            "key": 4006
        },
        {
            "name": "Military Dramas",
            "key": 11
        },
        {
            "name": "Military TV Shows",
            "key": 25804
        },
        {
            "name": "Miniseries",
            "key": 4814
        },
        {
            "name": "Mockumentaries",
            "key": 26
        },
        {
            "name": "Monster Movies",
            "key": 947
        },
        {
            "name": "Movies based on children's books",
            "key": 10056
        },
        {
            "name": "Movies for ages 0 to 2",
            "key": 6796
        },
        {
            "name": "Movies for ages 2 to 4",
            "key": 6218
        },
        {
            "name": "Movies for ages 5 to 7",
            "key": 5455
        },
        {
            "name": "Movies for ages 8 to 10",
            "key": 561
        },
        {
            "name": "Movies for ages 11 to 12",
            "key": 6962
        },
        {
            "name": "Music & Concert Documentaries",
            "key": 90361
        },
        {
            "name": "Music",
            "key": 1701
        },
        {
            "name": "Musicals",
            "key": 13335
        },
        {
            "name": "Mysteries",
            "key": 9994
        },
        {
            "name": "New Zealand Movies",
            "key": 63782
        },
        {
            "name": "Period Pieces",
            "key": 12123
        },
        {
            "name": "Political Comedies",
            "key": 2700
        },
        {
            "name": "Political Documentaries",
            "key": 7018
        },
        {
            "name": "Political Dramas",
            "key": 6616
        },
        {
            "name": "Political Thrillers",
            "key": 10504
        },
        {
            "name": "Psychological Thrillers",
            "key": 5505
        },
        {
            "name": "Quirky Romance",
            "key": 36103
        },
        {
            "name": "Reality TV",
            "key": 9833
        },
        {
            "name": "Religious Documentaries",
            "key": 10005
        },
        {
            "name": "Rock & Pop Concerts",
            "key": 3278
        },
        {
            "name": "Romantic Comedies",
            "key": 5475
        },
        {
            "name": "Romantic Dramas",
            "key": 1255
        },
        {
            "name": "Romantic Favorites",
            "key": 502675
        },
        {
            "name": "Romantic Foreign Movies",
            "key": 7153
        },
        {
            "name": "Romantic Independent Movies",
            "key": 9916
        },
        {
            "name": "Romantic Movies",
            "key": 8883
        },
        {
            "name": "Russian",
            "key": 11567
        },
        {
            "name": "Satanic Stories",
            "key": 6998
        },
        {
            "name": "Satires",
            "key": 4922
        },
        {
            "name": "Scandinavian Movies",
            "key": 9292
        },
        {
            "name": "Sci-Fi & Fantasy",
            "key": 1492
        },
        {
            "name": "Sci-Fi Adventure",
            "key": 6926
        },
        {
            "name": "Sci-Fi Dramas",
            "key": 3916
        },
        {
            "name": "Sci-Fi Horror Movies",
            "key": 1694
        },
        {
            "name": "Sci-Fi Thrillers",
            "key": 11014
        },
        {
            "name": "Science & Nature Documentaries",
            "key": 2595
        },
        {
            "name": "Science & Nature TV",
            "key": 52780
        },
        {
            "name": "Screwball Comedies",
            "key": 9702
        },
        {
            "name": "Showbiz Dramas",
            "key": 5012
        },
        {
            "name": "Showbiz Musicals",
            "key": 13573
        },
        {
            "name": "Silent Movies",
            "key": 53310
        },
        {
            "name": "Slapstick Comedies",
            "key": 10256
        },
        {
            "name": "Slasher and Serial Killer Movies",
            "key": 8646
        },
        {
            "name": "Soccer Movies",
            "key": 12549
        },
        {
            "name": "Social & Cultural Documentaries",
            "key": 3675
        },
        {
            "name": "Social Issue Dramas",
            "key": 3947
        },
        {
            "name": "Southeast Asian Movies",
            "key": 9196
        },
        {
            "name": "Spanish Movies",
            "key": 58741
        },
        {
            "name": "Spiritual Documentaries",
            "key": 2760
        },
        {
            "name": "Sports & Fitness",
            "key": 9327
        },
        {
            "name": "Sports Comedies",
            "key": 5286
        },
        {
            "name": "Sports Documentaries",
            "key": 180
        },
        {
            "name": "Sports Dramas",
            "key": 7243
        },
        {
            "name": "Sports Movies",
            "key": 4370
        },
        {
            "name": "Spy Action & Adventure",
            "key": 10702
        },
        {
            "name": "Spy Thrillers",
            "key": 9147
        },
        {
            "name": "Stage Musicals",
            "key": 55774
        },
        {
            "name": "Stand-up Comedy",
            "key": 11559
        },
        {
            "name": "Steamy Romantic Movies",
            "key": 35800
        },
        {
            "name": "Steamy Thrillers",
            "key": 972
        },
        {
            "name": "Supernatural Horror Movies",
            "key": 42023
        },
        {
            "name": "Supernatural Thrillers",
            "key": 11140
        },
        {
            "name": "Tearjerkers",
            "key": 6384
        },
        {
            "name": "Teen Comedies",
            "key": 3519
        },
        {
            "name": "Teen Dramas",
            "key": 9299
        },
        {
            "name": "Teen Screams",
            "key": 52147
        },
        {
            "name": "Teen TV Shows",
            "key": 60951
        },
        {
            "name": "Thrillers",
            "key": 8933
        },
        {
            "name": "Travel & Adventure Documentaries",
            "key": 1159
        },
        {
            "name": "TV Action & Adventure",
            "key": 10673
        },
        {
            "name": "TV Cartoons",
            "key": 11177
        },
        {
            "name": "TV Comedies",
            "key": 10375
        },
        {
            "name": "TV Documentaries",
            "key": 10105
        },
        {
            "name": "TV Dramas",
            "key": 11714
        },
        {
            "name": "TV Horror",
            "key": 83059
        },
        {
            "name": "TV Mysteries",
            "key": 4366
        },
        {
            "name": "TV Sci-Fi & Fantasy",
            "key": 1372
        },
        {
            "name": "TV Shows",
            "key": 83
        },
        {
            "name": "Urban & Dance Concerts",
            "key": 9472
        },
        {
            "name": "Vampire Horror Movies",
            "key": 75804
        },
        {
            "name": "Werewolf Horror Movies",
            "key": 75930
        },
        {
            "name": "Westerns",
            "key": 7700
        },
        {
            "name": "World Music Concerts",
            "key": 2856
        },
        {
            "name": "Zombie Horror Movies",
            "key": 75405
        }
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
