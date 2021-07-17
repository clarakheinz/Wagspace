// need to create function to insert a random picture for profle
//get html elemet
let profileContainer = document.getElementById("name-pic");
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
    newFriend.innerHTML = `<img src="${friends[i].photo}" alt="${friends[i].name}'s profile pic"><figcaption class="friend-name">${friends[i].name}</figcaption>`;
    friendContainer.appendChild(newFriend);
    if (i === 2) {
        friendContainer.innerHTML +=(`<div class="break"></div>`);
    }
}

// similar loop for featured pictures as profile-pic

let featuredPics = [
    {photo: "./img/featured-pics/featured-1.jpeg", alt: "Thor laying on a rug"},
    {photo: './img/featured-pics/featured-2.JPG', alt: "Thor laying on his back like a person, sprawled out"},
    {photo: './img/featured-pics/featured-3.jpeg', alt: "Thor looking sad while Loki sniffs at his whipped cream dessert"},
    {photo: './img/featured-pics/featured-4.jpeg', alt: "Young Thor trying to sleep in too small a dog bed"},
    {photo: './img/featured-pics/featured-5.jpeg', alt: "Baby Thor sleeping hard, conked out"},
    {photo: './img/featured-pics/featured-6.jpg', alt: "Thor celerbating his first birthday with a cake, toys, and blue birthday hat"}, 
    {photo: './img/featured-pics/featured-7.jpg', alt: "Young Thor with his corgi friend Spyro, lounging in the living room"},
    {photo: './img/featured-pics/featured-8.jpg', alt: "Young Thor holding a toy in his mouth and balancing treats on his nose like a good boy"},
    {photo: './img/featured-pics/featured-9.jpeg', alt: "Thor laying on the floor with his dachshund friends, Tucker and Georgia"},
    {photo: './img/featured-pics/featured-10.jpg', alt: "Big Thor trying to play tug with a small beagle puppy, Scout"},
    {photo: './img/featured-pics/featured-11.jpg', alt: "Young Thor looking out the window with Mjolnir at his paws"},
    {photo: './img/featured-pics/featured-12.jpeg', alt: "Thor lounging with his dachshund girlfriend, Georgia"}
];

let featuredContainer = document.getElementById("pictures-container");
function fillPictures() {
    for (let i=0; i < featuredPics.length; i++) {
        let pic = document.createElement("img");
        pic.src = `${featuredPics[i].photo}`;
        pic.alt = `${featuredPics[i].alt}`;
        featuredContainer.appendChild(pic);
    }
}
fillPictures();


//need javascript button functions

//add friend
let friend = false;
let modal = document.querySelector(".modalContainer");
function addFriend() {
    modal.style.display = "block";
    if (!friend) {
        document.getElementById("add-friend-msg").style.display = "block";
        friend = true;
    } else {
        document.getElementById("already-friend").style.display = "block";
    }
}

function invite() {
    modal.style.display = "block";
    document.getElementById("invite-msg").style.display = "block";
}

let closeBtn = document.querySelector(".close-btn");
closeBtn.onclick = function(){
    modal.style.display = "none"
    document.getElementById("add-friend-msg").style.display = "none";
    document.getElementById("already-friend").style.display = "none";
    document.getElementById("invite-msg").style.display = "none";
}