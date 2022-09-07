const express=require('express');
const app=express();
const http=require('http').createServer(app);

app.use(express.static(__dirname+ "/public"));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});

const io=require("socket.io")(http);

io.on("connection",(socket)=>{
    console.log("Connected");
    socket.on('message',function(msg1){
        console.log(msg1);
        socket.broadcast.emit('message',msg1);
    });


});

http.listen(3000,function(req,res){
    console.log("Server is Running on Port 3000");

});
