// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');



venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


async function start(client) {
  global.gclient = client
  
  global.stimmen = []
  global.choices = []
  global.amdownloaden = []
  global.sendingSticker = []
  global.sendingAnimatedSticker = []
  global.queueSticker = []
  global.queueAnimatedSticker = []
  global.queuemp3 = []
  global.queuemp4 = []
  global.polllist = []
  global.allSticker = []
  
  client.onMessage((message) => {
    client.sendSeen(message.from)
    client.startTyping(message.from)
      var onMessagee = require('./Scripts/onMessage')
    onMessagee.message(message)
    
    
    


      
  })
}



























