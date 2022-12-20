// SHOW-MORE EVENT
function showMoreEvent() {
    const myShowButton = document.getElementById("show-button");
    myShowButton.addEventListener("click", showButton);
}
showMoreEvent();

// SHOW MORE FUNCTION
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
