var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)

const user=document.querySelector(".username")
const join=document.querySelector(".join")

join.addEventListener("click",()=>{
    user.value=names
})