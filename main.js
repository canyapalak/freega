// FETCHING (doesn't work due to CORS policy)

// const url =
//   "http://crossorigin.me/https://www.freetogame.com/api/games";

// fetch(url).then((response) => {
// console. log("response :>> ", response);
// return response. json ();
// });


//SHOW MORE-LESS BUTTON

function showButton() {
    let moreText = document.getElementById("more-text");
    let showMoreLessButton = document.getElementById("show-button");
    if (moreText.style.display !== "inline") {
        moreText.style.display = "inline";
        showMoreLessButton.innerHTML = "Show Less";
    } else {
        moreText.style.display = "none";
        showMoreLessButton.innerHTML = "Show More";
    }      
}

// CARD CREATION
function createCards(allGames) {
    let cardContainer = document.getElementById("card-deck");
    cardContainer.innerHTML = ""
for (let i = 0; i < allGames.length; i++) {

    // card components

   
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
    platform.innerText = "Platform: " + allGames[i].platform;
    platform.classList.add("card-title-4");

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
    cardFooter.setAttribute("class", "border-top border-dark")

    const link = document.createElement("a");
    link.setAttribute("class", "btn btn-dark rounded-0");
    link.setAttribute("href", allGames[i].freetogame_profile_url);
    link.setAttribute("target", "_blank");
    link.innerText = "More Information"; 

//appending card components
    card.appendChild(cardImage);
    cardBody.appendChild(title);
    cardBody.appendChild(genre);
    cardBody.appendChild(developer);
    cardBody.appendChild(releaseDate);
    cardBody.appendChild(platform);
    cardFooter.appendChild(link);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardContainer.appendChild(card);
}
}


//RESET FILTERS AND SHOW ALL CARDS (doesn't work!)

document.getElementById("reset-button").addEventListener("click", createCards);

// EVENTS - GENRE
function createGenreEvent(allGames) {
    const selectGenre = document.getElementById("genre-select")
    
    selectGenre.addEventListener("change", function (eventGenre) {
        filterGenre(eventGenre, allGames)
    })
}

 createGenreEvent(allGames)

//FILTERING - GENRE

function filterGenre(eventGenre, allGames) {
    
    const genreSelect = eventGenre.target.value
    console.log('genreSelect :>> ', genreSelect);
    let filteredGamesbyGenre = []
    if (genreSelect.toLowerCase() === "all") {
       filteredGamesbyGenre = allGames
    } else {
        if (genreSelect.toLowerCase() !== "all") {
             for (let i = 0; i < allGames.length; i++){
                 if (allGames[i].genre.toLowerCase() === genreSelect.toLowerCase()) {
                     filteredGamesbyGenre.push(allGames[i])
                }
            }
        }
    }


    createCards(filteredGamesbyGenre)

    //FILTERING WITH MODERN JS

    // const filteredGames = allGames.filter(function (game) {
        
    //     return game.genre.toLowerCase() === selectedOption.toLowerCase();
    // })
    // console.log('filteredGames :>> ', filteredGames);
}
 
//EVENTS - PLATFORM

function createPlatformEvent(allGames) {
    const selectPlatform = document.getElementById("platform-select")
    
    selectPlatform.addEventListener("change", function (eventPlatform) {
        filterPlatform(eventPlatform, allGames)
    })
}

createPlatformEvent(allGames)
 
//FILTERING - PLATFORM

function filterPlatform(eventPlatform, allGames) {
    
    const platformSelect = eventPlatform.target.value
    console.log('platformSelect :>> ', platformSelect);
        let filteredGamesbyPlatform = []
    if (platformSelect.toLowerCase() === "all") {
       filteredGamesbyPlatform = allGames
    } else {
        if (platformSelect.toLowerCase() !== "all") {
             for (let i = 0; i < allGames.length; i++){
                 if (allGames[i].platform.toLowerCase() === platformSelect.toLowerCase()) {
                     filteredGamesbyPlatform.push(allGames[i])
                }
            }
        }
    }


    createCards(filteredGamesbyPlatform)

}

//RUN CARD CREATION

createCards(allGames)


//SEARCH BOX FUNCTION

//     const titles = []
// for (let index = 0; index < allGames.length; index++) {
//     titles.push(allGames[index].title)
// }

// console.log('titles :>> ', titles);
        
// function searchGames() {
//     let input = document.getElementById('type-title').value
//     input=input.toLowerCase();
      
//     for (i = 0; i < titles.length; i++) { 
//         if (!card[i].innerHTML.toLowerCase().includes(input)) {
//             card[i].style.display="none";
//         }

//     }
// }

// searchGames ()