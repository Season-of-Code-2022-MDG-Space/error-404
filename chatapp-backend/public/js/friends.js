

var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)
const u=document.querySelector(".username")
const submit=document.querySelector(".submit")

submit.addEventListener("click",()=>{
    u.value=names
})
const btn=document.querySelector(".btn")
async function friends(){
    const friends=await fetch("/friendReq")
    const data=await friends.json()
    
    for(let i=0;i<data.length;i++){
       
        
        if(data[i].email==email){
        console.log(data[i].friends)
    }
    else{
        console.log("thin")
    }
}
}
    btn.addEventListener("click",()=>{
        friends()
    })

async function getFriends(){
    const friends=await fetch("/friendReq")
    const data=await friends.json()
    console.log(data[0])
    for(let i=0;i<data.length;i++){
        let div=document.createElement("div")
        div.innerHTML=data[i].name
        document.body.appendChild(div)
    }
}
getFriends()