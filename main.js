// FETCHING

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
function createCards() {
for (let i = 0; i < allGames.length; i++) {

    // card components

    let cardContainer = document.getElementById("card-deck");
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

// //GENRE DROPDOWN
// function createDropdown() {
//     const genres = []
//     for (let index = 0; index < allGames.length; index++) {
//     const allArray = allGames[index];
//     // console.log('allGames[i] :>> ', allGames[index]);
    
//     genres.push(allGames[index].genre)
//     // console.log('generes :>> ', generes);
//     allArrayValues = Object.values(allArray);
//     // console.log('allArrayValues :>> ', allArrayValues);
//     };
//     // console.log('genres :>> ', genres);
//     const genresUnique = new Set(genres);
//     // console.log('genresUnique :>> ', genresUnique);
//     for (let index = 0; index < genresUnique.length; index++){
//         if (eachUniqueGenre == allGames.genre) {
//             cardContainer.appendChild(card)
//         } else {

//                     var buttonDropdown = document.getElementById("dropdownMenuButton");
//             buttonDropdown.addEventListener("click", function (createDropdown) {
//             });

//             }
//          }
         
// }


//RESET FILTERS AND SHOW ALL CARDS

document.getElementById("reset-button").addEventListener("click", createCards);

    // console.log('createDropdown :>> ', createDropdown);




// createCards()

//search title


// function searchTitle() {
//     let input = document.getElementById("type-title").value
//     input = input.toLowerCase();
//     let x = data[i].title;
//     let cardContainer = document.getElementById("card-deck");
//     let card = document.getElementsByClassName("card");
    
      
//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//             cardContainer.removeChild(card);
            
//         }
//         else {
//             x[i].style.display = "list-item";
            
            
//         }
//         console.log(cardContainer)
//     }
// }