var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)
var displayname=document.querySelector(".dataset")
var displaymovies=document.querySelector(".movies")
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



async function getmovie(){
    const friends=await fetch("/friendReq")
    const data=await friends.json()
    console.log(data)
    for(let i=0;i<data.length;i++){
        if(data[i].email==email)
        {
            
            for(let j=0;j<data[i].likes.length;j++)
            {
            var div=document.createElement("div")
            div.classList.add("data1");
            div.innerHTML=data[i].likes[j]
            displaymovies.appendChild(div)
            }
            console.log(data)
        }
    }

}
getmovie()
getFriends()