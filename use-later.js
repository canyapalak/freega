


// //windows and browser icons
// let windows = document.createElement("img");
// windows.classList.add("windows-icon");
// windows.setAttribute("src", "images/windows.png");
// windows.setAttribute("alt", "PC(Windows)");

// let browser = document.createElement("img");
// browser.classList.add("browser-icon");
// browser.setAttribute = ("src", "images/browser.png");
// browser.setAttribute = ("alt", "Browser)");


// function createDropDown(allGames) {
//     // you would need to create a new Array with the genre and filter them
//     let dropDownGenre = allGames.filter((game) => {
//         return  game.genre !==  //some criteria to meet
//     })
// }


// CREATING GENRE AND PLATFORM ARRAYS FROM ALLGAMES OBJECT
// for (let i = 0; i < allGames.length; index++) {
    
//     const map1 = new Map(
//   allGames.map(object => {
//     return [object.genre];
//   }),
//     );
//     console.log('map1 :>> ', map1);

//         const map2 = new Map(
//   allGames.map(object => {
//     return [object.platform];
//   }),
//     );
//     console.log('map2 :>> ', map2);
// }





// function searchTitle() {
//     const searchInput = document.getElementById("type-title")
//     const noGames = document.getElementById("no-games-found")
//     console.log('searchInput :>> ', searchInput);
//     for (let i = 0; i < allGames.length; i++) {
//         const titles = [];
//         titles.push(allGames[i].title);
//         showSearchedGame = []
//         console.log('titles :>> ', titles);
//         for (let i = 0; i < titles.length; i++) {
//             if (searchInput === titles[i]) {
//                 showSearchedGame.push(titles[i]);
//                 showSearchedGame = allGames;
//             } else {
//                 noGames.innerText = "No games found!";
//             }
//         }
        
//     }
// createCards(allGames)
// }

// searchTitle(allGames)

// function searchEvent(allGames) {
//     const runButton = document.getElementById("run-button")
    
//     runButton.addEventListener(function (searchEvent) {
//         filterGenre(eventGenre, allGames)
//     })
// }

//  searchEvent(allGames, showSearchedGame)