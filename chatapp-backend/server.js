const path =require("path")
const express=require("express")


const http =require("http")
const socketio=require("socket.io")
const Register=require("./utils/register")
const viewChat=require("./utils/chatSchema")
const channel=require("./utils/channelnames")
const request = require('request');
const regis=require("./utils/userlogin")
require("./utils/connect")

const formatMessage = require("./utils/messages")
const {userJoin,getCurrentUser,userLeave,getRoomUsers}=require('./utils/user')
const { redirect } = require("express/lib/response")
const app=express()
const server =http.createServer(app);
const io =socketio(server);
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// the regisetration and login things
  app.post("/index",async (req,res)=>{
    try {
        const newUser=new regis({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        
        const life=await regis.findOne({email:req.body.email})
        const name=await regis.findOne({name:req.body.name})
        if(life!=null){
            res.send("email is already registered")
        }else{
            const user=await newUser.save()
            res.redirect("login.html")
        }
    } catch (error) {
        res.status(400)
    }
    })
    app.post("/login",async (req,res)=>{
        try {
            const name= req.body.name
            const password= req.body.password
            const thing= await regis.findOne({name:name})
            if(thing.password===password){
                
                res.redirect(`//localhost:3000/home.html?name=${name}&email=${thing.email}`)
            }
           
            else{
                res.send("password doesn't match")
         }
        } catch (error) {
          
        } 
       }) 

    //    chat begins here
io.on("connection", socket=>{
    socket.on("chatMessage",(chats)=>{
       try {
           const user= getCurrentUser(socket.id)
           const newmess=new viewChat(
               {
                   username:user.username,
                   text:formatMessage(user.username,chats).text,
                    time:formatMessage(user.username,chats).time,
                    channel:user.room
               }
           )
           newmess.save()
           console.log(newmess)
        io.to(user.room).emit("message",formatMessage(user.username,chats))
       } catch (error) {
           
       }
        
  
    })
  
    socket.on("joinroom",({username,room})=>{
        const user=userJoin(socket.id,username,room);
        
        try {
            const newChannel=new channel({
                channel:user.room
            })
            
            newChannel.save()
            console.log(newChannel)
        } catch (error) {
            
        }
        socket.join(user.room)
        channel.find().then((groups)=>{
            io.to(user.room).emit("takeRooms",groups)
        })
        viewChat.find({channel:user.room}).then((docs)=>{
            io.to(user.room).emit("chatHistory",docs)
          })
         
        
    socket.emit("message",formatMessage("Admin","You have joined this chat"))

    socket.broadcast.to(user.room).emit("message",formatMessage("Admin",`${user.username} joined`))
    io.to(user.room).emit("roomUsers",{
     room:user.room,
     users:getRoomUsers(user.room)
    })
})
    socket.on("disconnect",()=>{
        const user=userLeave(socket.id)
        if(user){

            io.to(user.room).emit("message",formatMessage("Admin",`${user.username} has left the chat`))
            io.to(user.room).emit("roomUsers",{
                room:user.room,
                users:getRoomUsers(user.room)
            })
        }
    })    
})
app.get("/index",(req,res)=>{
    res.send("index")
})
// the movie api
app.get("/allMovies",async (req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://animes3.p.rapidapi.com/',
        headers: {
          'x-rapidapi-host': 'animes3.p.rapidapi.com',
          'x-rapidapi-key': 'b5f1922e52mshd2201407623362fp1fbe77jsn003bfc2bd1f6',
          useQueryString: true
        }
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
        res.send(body)
      });
    })

    // the friends and the request things

app.get("/friendReq",async (req,res)=>{
    const allFriends= await regis.find()
    res.json(allFriends)
})
app.post("/friends",async (req,res)=>{
    const username=req.body.username
    const people=req.body.people
    const userExist=regis.findOne({name:people})
    if(userExist!=null){
        const client=await regis.updateMany({name:username},{$push:{friends:people}})
        const reciever= await regis.updateMany({name:people},{$push:{friends:username}})
        res.send("you are now friends")
    }
    else{
        res.send("such a user doesn't exist")
    }
    
    console.log(regis.find())
})
// like dislike implementation
app.post("/movies",async (req,res)=>{
   const animeName=req.body.animeName
   const currUser=req.body.currUser
   const currMail=req.body.currMail
   const likeDislike=req.body.likeDislike
   if(likeDislike=="like"){

       const client=await regis.updateMany({email:currMail},{$push:{likes:animeName}})
    }  
    else{
       const clients=await regis.updateMany({email:currMail},{$pull:{likes:animeName}})
    }
})
app.post("/chatroom",async (req,res)=>{
    try {
        const newRegisters=new Register({
            names:req.body.username,            
            channelName: req.body.room        
        })
               
            const now=await newRegisters.save();
            res.redirect(`//localhost:3000/chat.html?username=${req.body.username}&room=${req.body.room}`)
            console.log(now)
        
        
    } catch (error) {
        console.log(error)
    }
})

const PORT=3000 || process.env.PORT
app.use(express.static(path.join(__dirname,'public')))
server.listen(PORT,()=>console.log(`server on ${PORT}`))