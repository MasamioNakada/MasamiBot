
exports.message = async  function (message){
  
  if (message.body === 'Hola' || message.body === 'Start' && message.isGroupMsg === false) {
    gclient
      .sendText(message.from, '👋 Hola soy MasamiBot🤖 en qué te puedo ayudar? \nEscriba el comando _*Help*_ para ver la lista entera de comandos 😉')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });
  }else if (message.body === 'Help' && message.isGroupMsg === false){
    gclient
    .sendText(message.from,`Data - Acceda a nuestra base de datos, donde tenemos exámenes y mucho más.\n
Contact - ¿Tiene alguna consulta académica?. Contáctese para que el centro federado pueda ayudarlo.\n
About - Para saber más de este bot.\n
Community - Tienes alguna idea para mejorar nuestro bot, todo es posible con programacion.`)   
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });

  }else if(message.body === 'About' && message.isGroupMsg === false) {
    gclient
    .sendText(message.from, `MasamiBot🤖es un proyecto de automatización desarrollado en JavaScrip con el framework de Node.js.
Usamos el paquete wa-automate para generar un API interno como tambien esfuerzo y dedicacion para terminar el bot.\n\n_*Masami Nakada*_`)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

  }else if(message.body === 'Contact' && message.isGroupMsg === false){
    gclient
    .sendText(message.from,`*Persona 1* : https://api.whatsapp.com/send?phone=51935629320%20&text=Hola%20!%20tengo%20una%20consulta%20academica
*Persona 2* :https://api.whatsapp.com/send?phone=51980695583%20&text=Hola%20!%20tengo%20una%20consulta%20academica
*Persona 3* :https://api.whatsapp.com/send?phone=--numero--%20&text=Hola%20!%20tengo%20una%20consulta%20academica `)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });    

  }else if(message.body === 'Comunity'&& message.isGroupMsg === false){
    gclient.sendText(message.from,`Genial🍭. Qué te funcionalidad te gustaría ver en MasamiBot🤖🥳\n
    Escribemos al https://api.whatsapp.com/send?phone=51952841852%20&text=Hola`)
    
    
  }else if(message.body ==='Data' && message.isGroupMsg === false){
    gclient.sendText(message.from,'Escriba su escuela\n▪️*Física*\n▫️*Matemática*' )
  
    
  }else if (message.body === 'Física'|| message.body === 'Fisica' && message.isGroupMsg === false){
    gclient.sendText(message.from,'Elija el ciclo (escriba la palabra que está en negrita):\n🔹Primer ciclo = *1f*\n🔹Segundo ciclo = *2f*\n🔹Tercero ciclo = *3f*\n🔹Cuarto ciclo = *4f*')

  }else if (message.body === '1f'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Química = *Fquimica* \n🔸Complemento Matemático = *Fcomplemento*\n🔸Cálculo 1 = *Fcalculo1*')

  }else if (message.body === 'Fquimica' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *8* Documentos....⏳') 
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018a-quimica-i-pc1.pdf','','Práctica Calificada 1 2018b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020a-quimica-i-pc2.pdf','','Práctica Calificada 2 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020a-quimica-i-pc3.pdf','','Práctica Calificada 3 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-quimica-i-pc4.pdf','','Práctica Calificada 4 2019a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-quimica-i-pc4.pdf','','Práctica Calificada 4 2019b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020a-quimica-i-pc4.pdf','','Práctica Calificada 4 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020-a-quimica-i-examen-parcial.pdf','','Examen Parcial 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020-a-quimica-i-examen-final.pdf','','Examen Final 2020a')
    gclient.console.log(result)
  
  }else if (message.body === 'Fcomplemento' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando Documentos....⏳') 
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020a-examen-parcial-complemento.pdf','Examen Parcial 2020a','Examen Parcial 2020a')
    
  }else if (message.body === 'Fcalculo1' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *8* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3-2020a-calculo-i.pdf','','Práctica Calificada 3 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-2-2020a-calculo-i.pdf','','Práctica Calificada 2 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-1-2020a-calculo-i.pdf','','Práctica Calificada 1 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3-2017b-calculo-i.pdf','','Práctica Calificada 3 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-2-2017b-calculo-i.pdf','','Práctica Calificada 2 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-1-2017b-calculo-i.pdf','','Práctica Calificada 1 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final-2017b-calculo-i.pdf','','Examen Final 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.wordpress.com/2021/08/04/examen-parcial-2017b/','','Examen Parcial 2017b')

  }else if (message.body === '2f' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Fisica = *Ffisica1*\n🔸Programación = *Fprogramacion*\n🔸Calculo2 = *Fcalculo2*')

  }else if (message.body === 'Ffisca1' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *8* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/sesf120a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/seff120a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/4ta-pc-fisica-fcnm-unac.pdf','','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/3ra-pc-fisica-i-fcnm-unac.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2ra-pc-fisica-i-fcnm-unac.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/eff119b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/1ra-pc-fisica-i-fcnm-unac.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/epf119b.pdf','','')

  }else if (message.body === 'Fprogramacion' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-parcial-lpc.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final-lpc.pdf','','')

  }else if (message.body === 'Fcalculo2' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *8* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020a-calculo-ii-examen-parcial.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3-2018b-calculo-ii.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3-2018a-calculo-ii.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-2-2018b-calculo-ii.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-2-2018a-calculo-ii.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-1-2018b-calculo-ii.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-1-2018a-calculo-ii.pdf','','')

  }else if (message.body === '3f' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Fisica3 =*Ffisica3*\n🔸Analisis Vectorial y Tensorial = *Ftensorial*\n🔸Ecuaciones Diferenciales = *Fedo*')

  }else if (message.body === 'Ffisica3' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *5* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.wordpress.com/2021/08/20/fisica-ii-examen-final-2020a/','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020-a-fisica-ii-iv-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc3-f2-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc2-f2-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc1-f2-2020a-1.pdf','','')

  }else if (message.body === 'Ftensorial' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *10* Documentos.... (son un montón xd)')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ef-tensorial-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-2.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-1.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020s-ea.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019s-ea.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-pc2.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-es.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-ep.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-ef.pdf','','')

    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-pc3.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-pc2.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019a-pc1.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018n-ep.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018n-ef.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018b-es.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018b-ep.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018b-ef.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018b-pc3.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018a-es.pdf','','')
    

    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018a-ep.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018a-ef.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018a-pc3.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2018a-pc2.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2017b-ep.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2017b-ef.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2017b-pc1.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2017a-es.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2017a-ef.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2017a-pc2.pdf','','')

  }else if (message.body === 'Fedo' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ef-iedo-2020b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ep-iedo-2020b.pdf','','')

  }else if (message.body === '4f'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Metodos Matemáticos = *Fmm1*\n🔸Métodos Numéricos = *Fnumericos*')

  }else if (message.body === 'Fmm1' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *6* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-examen-sustitutorio.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-examen-parcial.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-4ta-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-3ra-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-2da-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-1ra-practica-calificada.pdf','','')

  }else if (message.body === 'Fnumericos' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/finalmn.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/parcialmn.pdf','','')

  }else if (message.body === 'Matematicas' ||message.body === 'Matemática' && message.isGroupMsg === false){
    gclient.sendText(message.from,'Elija el ciclo (escriba la palabra que está en negrita):\n🔹Tercero ciclo = *3f*\n🔹Cuarto ciclo = *4f*\n🔹Quinto ciclo = *5f*\n🔹Octavo ciclo = *8f*')
    
  }else if (message.body === '3m'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Física 2 = *Mfisica2*')
    
  }else if (message.body === 'Mfisica2'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *3* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/exam-final-mat-f-ii-fcnm.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/exam-parc-f-ii-2020a-matem.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2ra-pc-fisica-i-fcnm-unac-1.pdf','','')

  }else if (message.body === '4m'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Estructuras Algebraicas 1 = *Mestructuras1*')

  }else if (message.body === 'Mestructuras1'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *3* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-pc2-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-pc1-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-es-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-ep-2020a.pdf','','')
  }else if (message.body === '5m'){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Ecuaciones Diferenciables Ordinarias = *Medo*')

  }else if (message.body === 'Medo'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-sustitutorio-ied.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final.docxied.pdf','','')

  }else if (message.body === '8m'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Ecuaciones Diferenciables Parciales = *Medp*')

  }else if (message.body === 'Medp'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *1* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc2.pdf','','')

  }else if (message.body === '/Sticker'){
    await gclient.sendText(message.from,'Envíanos una imagen con la descripcion *Sticker* y lo convertimos en sticker')

  }else if (message.isMedia & (message.caption == 'Sticker')) {
    if (message.type == 'video') {
      await gclient.sendText(message.from, 'creating Animated Sticker')
      sendSticker.sendAnimatedSticker(message)
    } else {
      await gclient.sendText(message.from, 'creating Sticker')
      sendSticker.sendSticker(message)
    }
  }else if (message.isMedia & (message.caption == 'tSticker')) {
    //not working on ARM but x86 and x64 should work just uncomment if you have one of the supported types
    if (message.type == 'video') {
      await gclient.sendText(message.from, 'transparent Animated Sticker not Supported')
      // sendSticker.sendAnimatedTSticker(message)
    } else {
      await gclient.sendText(message.from, 'creating transparent Sticker')
      sendSticker.sendTSticker(message)
    }
  }
}