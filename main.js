// FETCHING (doesn't work due to CORS policy)

// const url =
//   "http://crossorigin.me/https://www.freetogame.com/api/games";

// fetch(url).then((response) => {
// console. log("response :>> ", response);
// return response. json ();
// });



// EVENTS CONTROLLER
function addEvents(allGames) {

    // genre dropdown
    const selectGenre = document.getElementById("genre-select")
    selectGenre.addEventListener("change", function () {
        filterGenre(allGames)
    })
    // platform dropdown
    const selectPlatform = document.getElementById("platform-select")
    selectPlatform.addEventListener("change", function () {
        filterPlatform(allGames)
    })
    // search box
    const runButton = document.getElementById("run-button");
    runButton.addEventListener('click', function () {
        const searchInput = document.getElementById("type-title");
        const searchQuery = searchInput.value;
        searchBar(searchQuery, allGames);
    })
    // reset button
    document.getElementById("reset-button").addEventListener("click", resetCards);
    
    // show descriptions toggle
    document.getElementById("toggle").addEventListener("click", (e)=>showDescriptions());
}
createCards(allGames)
addEvents(allGames)

// CARD CREATION
function createCards(allGames) {
    let cardContainer = document.getElementById("card-deck");
    cardContainer.innerHTML = ""
for (let i = 0; i < allGames.length; i++) {

    // card component
   
    cardContainer.setAttribute("class", "flex-direction: row d-flex justify-content-around p-2");

    const card = document.createElement("div");
    card.setAttribute("class", "card text-dark bg-light mb-3 cl-1 border border-3 border-dark rounded-2");
    card.setAttribute("style", "width: 18rem");

    const cardImage = document.createElement("img");
    cardImage.setAttribute("class", "card-img-top text-dark bg-light mb-3 cl-1 border-bottom border-dark");
    cardImage.setAttribute("src", allGames[i].thumbnail);
    cardImage.setAttribute("alt", "game image");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.innerText = allGames[i].title;
    title.setAttribute("class", "card-title");

    const genre = document.createElement("p")
    genre.innerText = "Genre: " + allGames[i].genre;
    genre.classList.add("card-text");

    const developer = document.createElement("p")
    developer.innerText = "Developer: " + allGames[i].developer;
    developer.classList.add("card-title-2")


    const newDate = new Date(allGames[i].release_date).toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    
    const releaseDate = document.createElement("p");
    releaseDate.innerText = "Release Date: " + allGames[i].release_date;
    releaseDate.classList.add("card-title-3");
    releaseDate.innerText = "Release: " + newDate;

    const platform = document.createElement("p");
    platform.innerText = "Platform to Play: ";
    platform.classList.add("card-title-4");

    const description = document.createElement("p")
    description.id = "short-descriptions";
    description.classList.add("card-title-5");
    description.innerText = allGames[i].short_description;

    if (allGames[i].platform === "PC (Windows)") {
    let imgWindows = document.createElement("img");
        imgWindows.src = "images/windows.png";
        platform.appendChild(imgWindows);
    }

    if (allGames[i].platform === "Web Browser") {
    let imgBrowser = document.createElement("img");
        imgBrowser.src = "images/browser.png";
        platform.appendChild(imgBrowser);
        }
    
    if (allGames[i].platform === "PC (Windows), Web Browser") {
    let imgWindows = document.createElement("img");
        imgWindows.src = "images/windows.png";
        let imgBrowser = document.createElement("img");
        imgBrowser.src = "images/browser.png";
        platform.appendChild(imgWindows);
        platform.appendChild(imgBrowser);
    }

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    cardFooter.setAttribute("class", "border-top border-dark")

    const link = document.createElement("a");
    link.setAttribute("class", "btn btn-dark rounded-0");
    link.setAttribute("href", allGames[i].freetogame_profile_url);
    link.setAttribute("target", "_blank");
    link.innerText = "More Information"; 

// appending card components
    card.appendChild(cardImage);
    cardBody.appendChild(title);
    cardBody.appendChild(genre);
    cardBody.appendChild(developer);
    cardBody.appendChild(releaseDate);
    cardBody.appendChild(platform);
    cardBody.appendChild(description);
    cardFooter.appendChild(link);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardContainer.appendChild(card);
}
}

// RESET FILTERS AND SHOW ALL CARDS

function resetCards() {
    const selectGenre1 = document.getElementById("genre-select")
    selectGenre1.selectedIndex = 0;
    const selectPlatform1 = document.getElementById("platform-select")
    selectPlatform1.selectedIndex = 0;
    const searchInput1 = document.getElementById("type-title")
    searchInput1.value = ""
    const noGamesFound = document.getElementById("no-games-found")
    noGamesFound.innerText = ""
    createCards(allGames);
    showDescriptions();
}
// FILTERING - GENRE
function filterGenre(allGames) {
    
    const genreSelect = document.getElementById("genre-select").value
    const toggleButton = document.getElementById("toggle");
    // console.log('genreSelect :>> ', genreSelect);
    let filteredGamesbyGenre = []
    if (genreSelect.toLowerCase() === "all") {
       filteredGamesbyGenre = allGames
    } else {
        if (genreSelect.toLowerCase() !== "all") {
            toggleButton.innerText = "Show Descriptions";
             for (let i = 0; i < allGames.length; i++){
                 if (allGames[i].genre.toLowerCase() === genreSelect.toLowerCase()) {
                     filteredGamesbyGenre.push(allGames[i])
                }
            }
        }
    }
    createCards(filteredGamesbyGenre)

    // FILTERING WITH MODERN JS

    // const filteredGames = allGames.filter(function (game) {
        
    //     return game.genre.toLowerCase() === selectedOption.toLowerCase();
    // })
    // console.log('filteredGames :>> ', filteredGames);
}
 
// FILTERING - PLATFORM

function filterPlatform(allGames) {
    
    const platformSelect = document.getElementById("platform-select").value;
    const toggleButton = document.getElementById("toggle");
    // console.log('platformSelect :>> ', platformSelect);
        let filteredGamesbyPlatform = []
    if (platformSelect.toLowerCase() === "all") {
       filteredGamesbyPlatform = allGames
    } else {
        if (platformSelect.toLowerCase() !== "all") {
            toggleButton.innerText = "Show Descriptions";
             for (let i = 0; i < allGames.length; i++){
                 if (allGames[i].platform.toLowerCase() === platformSelect.toLowerCase()) {
                     filteredGamesbyPlatform.push(allGames[i])
                }
            }
        }
    }

    createCards(filteredGamesbyPlatform)

}

// SEARCH BOX FUNCTION

function searchBar (searchQuery, allGames) {
    const searchedGame = []
    const toggleButton = document.getElementById("toggle");
    for (let i = 0; i < allGames.length; i++) {
        if (searchQuery.toLowerCase() === allGames[i].title.toLowerCase()) {
                     toggleButton.innerText = "Show Descriptions";
                     searchedGame.push(allGames[i]);
                     const noGamesFound = document.getElementById("no-games-found");
                     noGamesFound.style.display = "none";
                 } else {
                     const noGamesFound = document.getElementById("no-games-found");
                     noGamesFound.innerText = "No games found! Try another search.";
                 }
    } 
    createCards(searchedGame)
}

// SHOW DESCRIPTIONS

function showDescriptions() {
  
    let descriptions = document.getElementsByClassName("card-title-5");
    const toggleButton = document.getElementById("toggle");
    
    for (let i = 0; i < descriptions.length; i++) {
        if (descriptions[i].style.display !== "inline") {
        descriptions[i].style.display = "inline";
        toggleButton.innerText = "Hide Descriptions";
    } else {
        descriptions[i].style.display = "none";
        toggleButton.innerText = "Show Descriptions";
        }
    }
}
