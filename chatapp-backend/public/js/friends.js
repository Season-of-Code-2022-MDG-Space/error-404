// var url_string = window.location;
// var url = new URL(url_string);
// var names = url.searchParams.get("name");
// var list=document.getElementById("input");
// var box=document.getElementsByClassName("myfriends")
// var email = url.searchParams.get("email");
// console.log(names,email)


// // const btn=document.querySelector(".btn")
// async function friends(){
//     const friends=await fetch("/friendReq")
//     const data=await friends.json()
    
//     for(let i=0;i<data.length;i++){
       
        
//         if(data[i].email==email){
//         console.log(data[i].friends)
//     }
//     else{
//         console.log("thin")
//     }
//   }
// } 

// async function getFriends(){
//     const friends=await fetch("/friendReq")
//     const data=await friends.json()
//     console.log(data)
//     for(let i=0;i<data.length;i++){
//         let div=document.createElement("div")
//         let option=document.createElement("option")
//         console.log(data[i].name)
        
//         div.classList.add("element")
//         anchor.innerHTML=data[i].name
//         div.appendChild(anchor)
//         option.innerHTML=data[i].name
//         list.appendChild(option)
       
//         document.body.appendChild(div)
//     }
// }
// // const friendDiv=document.querySelector(".friend")
// // friendDiv.style.display="none"
// // const sendBtn=document.querySelector(".sendBtn")
// // sendBtn.addEventListener("click",()=>{
// //     if(friendDiv.value=="addFriend"){
// //         friendDiv.value="none"
// //     }
// //     else{
// //         friendDiv.value="addFriend"
// //     }
// // })
// getFriends()

// async function myFunction()
// {   
  
//     document.querySelector('.username').value=names;
// }

// myFunction();
// const home=document.querySelector(".home")
// home.setAttribute("href",`//localhost:3000/home.html?name=${names}&email=${email}`)



var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var list=document.getElementById("input");
var box=document.getElementsByClassName("myfriends")
var email = url.searchParams.get("email");
console.log(names,email)


// const btn=document.querySelector(".btn")
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

async function getFriends(){
    const friends=await fetch("/friendReq")
    const data=await friends.json()
    console.log(data)
    for(let i=0;i<data.length;i++){
        let div=document.createElement("div")
        let option=document.createElement("option")
        console.log(data[i].name)
        const anchor=document.createElement("a")
        anchor.setAttribute("href",`//localhost:3000/profile.html?name=${data[i].name}&email=${data[i].email}`)
        div.classList.add("element")
        anchor.innerHTML=data[i].name
        
        div.appendChild(anchor)
        option.innerHTML=data[i].name
        list.appendChild(option)
       
        document.body.appendChild(div)
    }
}
getFriends()

async function myFunction()
{
    document.querySelector('.username').value=names;
}

myFunction();
const home=document.querySelector(".home")
home.setAttribute("href",`//localhost:3000/home.html?name=${names}&email=${email}`)
    


    