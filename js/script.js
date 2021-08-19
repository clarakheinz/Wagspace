// grab profile pic container
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
//run getProfilePic function
getProfilePic();

//loop to fill friends into respective elements by ID

//JS array of objects
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
};

// similar loop for featured pictures as profile-pic
// JS array of objects
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

//similar function to populate featured pictures
let featuredContainer = document.getElementById("pictures-container");
function fillPictures() {
    for (let i=0; i < featuredPics.length; i++) {
        let picHolder = document.createElement("div");
        picHolder.classList.add("picture-holder");
        picHolder.innerHTML = `<img src=${featuredPics[i].photo} alt=${featuredPics[i].alt}><span class="like-btn"><i class="far fa-heart fa-2x"></i></span>`
        featuredContainer.appendChild(picHolder);
    }
}
fillPictures();

// Like button functionality
let btns = document.querySelectorAll(".like-btn");
console.log(btns);
btns.forEach(function(span) {
  span.addEventListener("click", function() {
    like(span)
  });
});

function like(b) {
  console.log(b);
  let icon = b.querySelector("i");
  console.log(icon);
  if (icon.classList.contains("far")){
    icon.classList.add("fas");
    icon.classList.remove("far");
  } else {
    icon.classList.add("far");
    icon.classList.remove("fas");
  }
};

//button functions to show hide messages as appropriate

//add friend function
// set friend to false for the already friend message functionality
let friend = false;
let modal = document.querySelector(".modalContainer");
function addFriend() {
    modal.style.display = "block";
    if (!friend) {
        document.getElementById("add-friend-msg").style.display = "block";
        document.getElementById("add-friend-title").style.display = "block";
        friend = true;
    } else {
        document.getElementById("add-friend-title").style.display = "block";
        document.getElementById("already-friend").style.display = "block";
    }
}

//invite function
function invite() {
    modal.style.display = "block";
    document.getElementById("invite-title").style.display = "block";
    document.getElementById("invite-msg").style.display = "block";
}

//show message HTML form function
function message() {
    modal.style.display = "block";
    document.getElementById("msg").classList.add("active");
}

//close button function to set everything that could be shown to hide
let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeModal);
function closeModal(){
    modal.style.display = "none";
    document.getElementById("add-friend-title").style.display = "none";
    document.getElementById("add-friend-msg").style.display = "none";
    document.getElementById("already-friend").style.display = "none";
    document.getElementById("invite-title").style.display = "none";
    document.getElementById("invite-msg").style.display = "none";
    document.getElementById("msg").classList.remove("active");
}


//function to validate HTML form fields
function validate() {
    // check name, email, message
    let fname = document.getElementById("name").value;
    let femail = document.getElementById("email").value;
    let fmessage = document.getElementById("message").value;
    console.log(fname);
    // regex to validate email
    var reg = /[A-Za-z0-9.!#&{}|()-_]+@[A-Za-z0-9]+.[A-Za-z0-9]+$/;

    if (!femail.match(reg)||femail==null) {
        alert("Please input a valid email!");
        return false;
    } else if (fname === "" || fname==null) {
        alert("Don't forget to input your name!");
        return false;
    } else if (fmessage === "" || fmessage==null) {
        alert("You can't leave your message blank!");
        return false;
    } else {
        return true;
    }
}

