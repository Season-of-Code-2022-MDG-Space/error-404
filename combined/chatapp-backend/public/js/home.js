var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)

const allFri=document.querySelector(".friendsall")
allFri.setAttribute("href",`//localhost:3000/friends.html?name=${names}&email=${email}`)