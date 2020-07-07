const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '/public');

app.use(express.static(publicDirectoryPath));

let count = 0;
let message = "message";

//io.on('connection', (socket) => {
 // console.log('New Websocket Connection');
  
  //socket.on('sendMessage', (textMessage) => {
  //  io.emit('textMessage',textMessage)
  //})
  
  // sends an event from server to client
  //socket.emit('countUpdated', count)
  
  //listens for response from client
  //socket.on('increment',() => {
    //count++
    
    //this only sends to individual clients
    //socket.omit('countUpdated', count)
    
    // Emits to every connection (all clients)
    //io.emit('countUpdated',count)
  //})
//})

app.get('', (req, res) => {
  res.render('index',{
    title : "Chat App",
    name : "Nick"
  })
})

app.get('getInfo',(req,res) => {
  res.send({
    something: publicDirectoryPath
  })
})

server.listen(port, () => {
  console.log("Hello")
})
