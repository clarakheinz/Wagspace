// need to create function to insert a random picture for profle
//get html elemet
let profileImg = document.getElementById('profile-pic');
// get a random number
randomI = Math.floor(Math.random() * 4) + 1;
//assign random source form profile-pic folder
profileImg.src = `./img/profile-pic/thor-${randomI}.jpg`;

//loop to fill friends and featured pics into respective elements by ID

//need javascript button functions