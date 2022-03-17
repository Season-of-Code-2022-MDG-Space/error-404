
async function getmovie(){
    const getmovies=await fetch('/allMovies')
    const data= await getmovies.json();
    console.log(data)
    const content=document.querySelector(".content")
    for(let i=0;i<data.length;i++){
        const card=document.createElement("div")
        const img=document.createElement("img")
        const movieName=document.createElement("div")
        img.classList.add("image")
        img.setAttribute("src",data[i].img)
        
        movieName.classList.add("name")
        movieName.innerHTML=data[i].title
        card.classList.add("card1")
        card.appendChild(img)
        card.appendChild(movieName)
        content.appendChild(card)
    }
}
getmovie()