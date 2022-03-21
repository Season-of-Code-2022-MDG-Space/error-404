var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)

const allFri=document.querySelector(".friendsall")
allFri.setAttribute("href",`//localhost:3000/friends.html?name=${names}&email=${email}`)
const chats=document.querySelector(".chats")
chats.setAttribute("href",`//localhost:3000/chatroom.html?name=${names}&email=${email}`)
const movie=document.querySelector(".movie")
movie.setAttribute("href",`//localhost:3000/movies.html?name=${names}&email=${email}`)
const profile=document.querySelector(".profilepage")
profile.setAttribute("href",`//localhost:3000/profile.html?name=${names}&email=${email}`)