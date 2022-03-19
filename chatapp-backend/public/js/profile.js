
var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)
var k=0;
var displayname=document.querySelector(".dataset")
var profname=document.querySelector(".name")
profname.innerText=names;

async function getFriends(){
    const friends=await fetch("/friendReq")
    const data=await friends.json()
    console.log(data);
    for(let i=0;i<data.length;i++){
        if(data[i].email==email)
        {
            
            for(let j=0;j<data[i].friends.length;j++)
            {
            var div=document.createElement("div")
            div.classList.add("data1");
            div.innerHTML=data[i].friends[j]
            displayname.appendChild(div)
            }
            console.log(data)
        }
    }
}
getFriends()