//Gebruik een click event en "attach" het click event aan de button
//Wanneer er op de button geklikt wordt, geef een alert: "button clicked" (net zoals je in de video hebt gezien)

const clickButton = document.querySelector("#mybutton");

const clickAlert = function () {
    alert("Button clicked");
};

clickButton.addEventListener("click", clickAlert);

// Maak een nieuwe functie die de volgende functionaliteiten in zich heeft:
// Maak een klik event vast aan de nieuwe button
// Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 

//selecteren van de button met class changebackground
const backgroundRed = document.querySelector(".changebackground");

//element tag die je wilt aanpassen selecteren
const body = document.querySelector("body");

// //functie dat achtergrond verandert
// const changeColor = function () {
//     body.classList.add("red-background");
// };

// //call function
// backgroundRed.addEventListener("click", changeColor);

// In plaats van het toevoegen van een extra class "red-background" aan de classlist gaan we de class togglen.
// Gebruik Google om erachter te komen hoe je dit doet. Hint: toggle.

//functie dat achtergrond verandert - toggle
const toggleColor = function () {
    const toggle = document.querySelector(".blue-background");
    toggle.classList.toggle("red-background");
};

//call function
backgroundRed.addEventListener("click", toggleColor);
