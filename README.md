# socket-io-bot

`socket-io-bot` is a robot that lets you build automated chatting programs with a few lines of code.

In order to chat use this:

    var Bot = require("socket-io-bot")
    var bot = new Bot("http://yourchattingwebsite.com")
    bot.message("I am a robot","your chatting event")
