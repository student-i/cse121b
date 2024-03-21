/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Anna Mott",
    photo: "images\\IMG_2355.JPG",
    favoriteFoods: ["Pizza","Burgers","Smoothies"],
    hobbies: ["Reading","Writing","Painting"],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    name: "Rexburg, Idaho",
    length: "1 year",
})
myProfile.placesLived.push({
    name: "Vidor, Texas",
    length: "11 years",
})
myProfile.placesLived.push({
    name: "Clarksville, Tennessee",
    length: "2 years",
})
myProfile.placesLived.push({
    name: "Midland, Michigan",
    length: "3 years",
})
myProfile.placesLived.push({
    name: "Tooele, Utah",
    length: "2 years",
})
myProfile.placesLived.push({
    name: "Rexburg, Idaho",
    length: "2 years",
})
myProfile.placesLived.push({
    name: "St. George, Utah",
    length: "1 year",
})
myProfile.placesLived.push({
    name: "York, Pennsylvania",
    length: "2 years",
})

/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.name;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})
