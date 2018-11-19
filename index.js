var clientSocket = require("socket.io-client")
function Bot(adress){
  this.socket = clientSocket(adress)
  this.message = function(message,event){
    this.socket.emit(event,message)
  }
  this.respond = function(event,messageUserResponded,response,c){
    var socket = this.socket
    this.socket.on(event,function(msg){
      if(msg == messageUserResponded){
        socket.emit(event,response)
        c()
      }
    })
  }
}
