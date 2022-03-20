
var url_string = window.location;
var url = new URL(url_string);
var names = url.searchParams.get("name");
var email = url.searchParams.get("email");
console.log(names,email)

async function getmovie(){
    const getmovies=await fetch('/allMovies')
    const data= await getmovies.json();
    // console.log(data)
    const content=document.querySelector(".content")
    for(let i=0;i<data.length;i++){
        const card=document.createElement("div")
        const img=document.createElement("img")
        const movieName=document.createElement("div")
        // this is a form that would tell like or dislike.. normal html just using js
        const form=document.createElement("form")
        form.setAttribute("method","post")
        form.setAttribute("action","/movies")
        const inpu=document.createElement("input")
        const inpuAnimeName=document.createElement("input")
        const inpuSub=document.createElement("input")
        const inpuEmail=document.createElement("input")
        inpu.setAttribute("type","text")
        inpu.setAttribute("name","currUser")
        inpuEmail.setAttribute("type","text")
        inpuEmail.setAttribute("name","currMail")
        inpuAnimeName.setAttribute("type","text")
        inpuAnimeName.setAttribute("name","animeName")
        inpuSub.setAttribute("type","submit")
        inpuSub.setAttribute("value","Like")
        form.appendChild(inpu)
        form.appendChild(inpuAnimeName)
        form.appendChild(inpuEmail)
        form.appendChild(inpuSub)

        //hiding elements
        inpu.classList.add("hide-element");
        inpuEmail.classList.add("hide-element");
        inpuAnimeName.classList.add("hide-element");

        inpuSub.addEventListener("click",(e)=>{
            inpu.value=names
            inpuAnimeName.value=data[i].title
            inpuEmail.value=email
            
        })

        //  end of form
        img.classList.add("image")
        img.setAttribute("src",data[i].img)
        form.classList.add("form")
        inpuSub.classList.add("like");
        movieName.classList.add("name")
        movieName.innerHTML=data[i].title
        card.classList.add("card1")
        card.appendChild(img)
        card.appendChild(movieName)
        content.appendChild(card)
        card.appendChild(form)
    }
}
getmovie()

// var url_string = window.location;
// var url = new URL(url_string);
// var names = url.searchParams.get("name");
// var email = url.searchParams.get("email");
// console.log(names,email)

// async function getmovie(){
//     const getmovies=await fetch('/allMovies')
//     const data= await getmovies.json();
//     console.log(data)
//     const content=document.querySelector(".content")
//     for(let i=0;i<data.length;i++){ 
//         const card=document.createElement("div")
//         const img=document.createElement("img")
//         const movieName=document.createElement("div")
//         // this is a form that would tell like or dislike.. normal html just using js
//         const form=document.createElement("form")
//         form.setAttribute("method","post")
//         form.setAttribute("action","/movies")
//         form.setAttribute("target","frame")
//         const inpu=document.createElement("input")
//         const likeDislike=document.createElement("input")
//         const inpuAnimeName=document.createElement("input")
//         const inpuSub=document.createElement("input")
//         const inpuEmail=document.createElement("input")
//         likeDislike.setAttribute("type","text")
//         inpu.setAttribute("type","text")
//         likeDislike.setAttribute("name","likeDislike")
//         inpu.setAttribute("name","currUser")
//         inpuEmail.setAttribute("type","text")
//         inpuEmail.setAttribute("name","currMail")
//         inpuAnimeName.setAttribute("type","text")
//         inpuAnimeName.setAttribute("name","animeName")
//         inpuSub.setAttribute("type","submit")
//         form.appendChild(inpu)
//         form.appendChild(likeDislike)
//         form.appendChild(inpuAnimeName)
//         form.appendChild(inpuEmail)
//         form.appendChild(inpuSub)
//         inpuSub.addEventListener("click",(e)=>{
//             inpu.value=names
//             inpuAnimeName.value=data[i].title
//             inpuEmail.value=email
//             if(likeDislike.value=="like"){
//                 likeDislike.value="dislike"
//             }
//             else{
//                 likeDislike.value="like"
//             }

            
//         })
//         //  end of form
//         img.classList.add("image")
//         img.setAttribute("src",data[i].img)
        
//         movieName.classList.add("name")
//         movieName.innerHTML=data[i].title
//         card.classList.add("card1")
//         card.appendChild(img)
//         card.appendChild(movieName)
//         content.appendChild(card)
//         content.appendChild(form)

//     }
// }
// getmovie()
// const allFri=document.querySelector(".friendsall")
// allFri.setAttribute("href",`//localhost:3000/friends.html?name=${names}&email=${email}`)
// const home=document.querySelector(".home")
// home.setAttribute("href",`//localhost:3000/home.html?name=${names}&email=${email}`)
// const chats=document.querySelector(".chats")
// chats.setAttribute("href",`//localhost:3000/chatroom.html?name=${names}&email=${email}`)