/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Anna Mott";
let currentYear = 2024;
let profilePicture = "images\\IMG_2355.JPG";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Burgers","Smoothies"];
foodElement.innerHTML = favoriteFoods.join(", ");

foodElement.innerHTML = favoriteFoods.join(", ");

let favoriteFood = "Alfredo";
favoriteFoods.push(favoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`

