
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');



venom
  .create(
    
  )
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


async function start(client) {
  global.gclient = client
  global.sendingSticker = []
  global.sendingAnimatedSticker = []

  
  client.onMessage((message) => {
    client.sendSeen(message.from)
    
      var onMessagee = require('./Scripts/onMessage')
    onMessagee.message(message)
    
    
    


      
  })
}

delete require.cache[require.resolve('./Script/onMessage.js')]
















