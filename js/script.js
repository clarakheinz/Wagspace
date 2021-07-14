// need to create function to insert a random picture for profle
//get html elemet
let profileContainer = document.getElementById('name-pic');
//function to generate the random profile picture to insert
function getProfilePic() {
    randomI = Math.floor(Math.random() * 4) + 1;
    let pic = document.createElement("img");
    pic.id="profile-pic";
    pic.src = `./img/profile-pic/thor-${randomI}.jpg`;
    pic.alt = "Thor's profile picture (yellow labrador dog)";
    profileContainer.appendChild(pic);
}

getProfilePic();

//loop to fill friends into respective elements by ID
let friends = [
    {name: "Georgia" , photo: "./img/friends/Georgia.jpeg"},
    {name: "Loki" , photo: "./img/friends/Loki.jpeg"},
    {name: "Tucker", photo: "./img/friends/Tucker.jpeg"},
    {name: "Minnie", photo: "./img/friends/Minnie.JPG"},
    {name: "Blue", photo: "./img/friends/Blue.jpeg"},
    {name:"Lily", photo: "./img/friends/Lily.jpeg"}
];

let friendContainer = document.getElementById("friends-container");

for (let i=0; i < friends.length; i++) {
    let newFriend = document.createElement("figure");
    newFriend.className = 'friend';
    newFriend.innerHTML = `<img src="${friends[i].photo}" alt="${friends[i].name} profile pic"><figcaption class="friend-name">${friends[i].name}</figcaption>`;
    friendContainer.appendChild(newFriend);
    if (i === 2) {
        friendContainer.innerHTML +=(`<div class="break"></div>`);
    }
}

//need javascript button functions