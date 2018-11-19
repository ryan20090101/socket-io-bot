# socket-io-bot

`socket-io-bot` is a robot that lets you build automated chatting programs with a few lines of code.

Lets say you have chat.js with the following code:

    var port = process.env.PORT || 3000
    var app = require("express")()
    var http = require('http').Server(app)
    var io = require('socket.io')(http)
    app.get('/',(req,res) => {
        res.sendFile(__dirname + "/index.html")
    })
    io.on('connection',(socket) => {
      socket.on("chat message", (msg) => {
        io.emit("chat message",msg)
      })
    })
    http.listen(port, () => {
      console.log("listening on *:" + port)
    })
Heres the index.html:

    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <meta charset="UTF-8">
        <style>
          #messages p{background-color:red;color:white}
        </style>
      </head>
      <body>
        <span id="messages"></span><br>
        <form action="">
          <input id="m" autocomplete="off">
          <button>Send</button>
        </form>
        <button id="clear">Clear your chatboard</button>
        <script src="/socket.io/socket.io.js"></script>
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <script>
          $(() => {
            var socket = io()
            $('form').submit(() => {
              socket.emit('chat message', $('#m').val())
              $("#m").val('')
              return false;
            })
            socket.on('chat message', (msg) => {
              document.querySelector("#messages").innerHTML += "<p>" + msg + "</p>"
            })
            $("#clear").click(() => {
              document.querySelector("#messages").innerHTML = ""
            })
          })
        </script>
      </body>
    </html>

In order to chat use this:

    var Bot = require("socket-io-bot")
    var bot = new Bot("http://yourchattingwebsite.com")
    bot.message("I am a robot","chat message")
