const fs = require('fs');
const mime = require('mime-types')



exports.message = async  function (message){

  if (message.body.toLowerCase().includes('masamibot') || message.body === 'start') {
    gclient
      .sendText(message.from, '👋 Hola soy Masamibot🤖 en qué te puedo ayudar?  \nEscriba el comando _*Help*_ para ver la lista entera de comandos 😉')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      })
  }else if (message.body.toLowerCase().includes('help')){
    gclient
    .sendText(message.from,`Data - Acceda a nuestra base de datos, donde tenemos exámenes y mucho más(este comando no gunciona en grupos).\n
Contact - ¿Tiene alguna consulta académica?. Contáctese para que el centro federado pueda ayudarlo (este comando no gunciona en grupos).\n
About - Para saber más de este bot.\n
Community - Tienes alguna idea para mejorar nuestro bot, todo es posible con programacion.`)   
    .then((result) => {
      console.log('Result: ', result);
      console.log(typeof(message.body)) //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
  }else if (message.body.toLowerCase().includes('bot idiota')){
    await gclient.sendText(message.from,'Que me haz dicho imbecil? , envíame otra vez el comando 😤')
  }else if(message.body.toLowerCase().includes('about') ) {
    gclient
    .sendText(message.from, `Plague Bot🤖es un proyecto de automatización desarrollado en JavaScrip con el framework de Node.js.
Usamos el paquete wa-automate para generar un API interno como tambien esfuerzo y dedicacion para terminar el bot.\n\n_*Masami Nakada*_`)
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

  }else if(message.body.toLowerCase().includes('contact') ){
    await gclient.sendContactVcard(message.from , '51935629320@c.us', 'Samuel Saenz')
    await gclient.sendContactVcard(message.from , '51980695583@c.us', 'Adrian Anton')
    await gclient.sendContactVcard(message.from , '51919130984@c.us', 'Yasser Gonzales')
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });    
    
  }else if(message.body.toLowerCase().includes('community') && message.isGroupMsg === false){
    gclient.sendText(message.from,`Genial🍭.\nQué te funcionalidad te gustaría ver en MasamiBot🤖🥳, `);
    gclient.sendContactVcard(message.from, '51952841852@c.us', 'MasamioNakada')
    
    
  }else if(message.body.toLowerCase().includes('data') && message.isGroupMsg === false){
    gclient.sendText(message.from,'Escriba su escuela\n▪️ *Física*\n▫️ *Matemática*' )
  
    
  }else if (message.body.toLowerCase() === 'fisica'||message.body.toLowerCase() === 'física' && message.isGroupMsg === false){
    gclient.sendText(message.from,'Elija el ciclo (escriba la palabra que está en negrita):\n🔹Primer ciclo = *1f*\n🔹Segundo ciclo = *2f*\n🔹Tercero ciclo = *3f*\n🔹Cuarto ciclo = *4f*\n🔹Quinto ciclo = *5f*')

  }else if (message.body === '1f'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Química = *Fquimica* \n🔸Complemento Matemático = *Fcomplemento*\n🔸Cálculo 1 = *Fcalculo1*')

  }else if (message.body.toLowerCase().includes('fquimica') && message.isGroupMsg === false){
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
  
  }else if (message.body.toLowerCase().includes('fcomplemento') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando Documentos....⏳') 
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020a-examen-parcial-complemento.pdf','Examen Parcial 2020a','Examen Parcial 2020a')
    
  }else if (message.body.toLowerCase().includes('fcalculo1') && message.isGroupMsg === false){
    await gclient
    .sendText(message.from,'Cargando *8* Documentos....⏳')        
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3-2020a-calculo-i.pdf','','Práctica Calificada 3 2020a')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-3-2017b-calculo-i.pdf','','Práctica Calificada 3 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-2-2017b-calculo-i.pdf','','Práctica Calificada 2 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/practica-calificada-1-2017b-calculo-i.pdf','','Práctica Calificada 1 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final-2017b-calculo-i.pdf','','Examen Final 2017b')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-parcial-2017b-calculo-i.pdf','','Examen Parcial 2017b')

  }else if (message.body === '2f' && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Fisica = *Ffisica1*\n🔸Programación = *Fprogramacion*\n🔸Calculo2 = *Fcalculo2*')

  }else if (message.body.toLowerCase().includes('ffisica1') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *8* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/sesf120a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/seff120a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/4ta-pc-fisica-fcnm-unac.pdf','','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/3ra-pc-fisica-i-fcnm-unac.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2ra-pc-fisica-i-fcnm-unac.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/eff119b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/1ra-pc-fisica-i-fcnm-unac.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/epf119b.pdf','','')

  }else if (message.body.toLowerCase().includes('fprogramacion') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-parcial-lpc.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final-lpc.pdf','','')

  }else if (message.body.toLowerCase().includes('fcalculo2') && message.isGroupMsg === false){
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
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Fisica3 = *Ffisica2*\n🔸Analisis Vectorial y Tensorial = *Ftensorial*\n🔸Ecuaciones Diferenciales = *Fedo*')

  }else if (message.body.toLowerCase().includes('ffisica2') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *5* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.wordpress.com/2021/08/20/fisica-ii-examen-final-2020a/','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2020-a-fisica-ii-iv-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc3-f2-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc2-f2-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc1-f2-2020a-1.pdf','','')

  }else if (message.body.toLowerCase().includes('ftensorial') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *31* Documentos.... (son un montón xd)')
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

  }else if (message.body.toLowerCase() === 'fedo'  && message.isGroupMsg === false){
    
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ef-iedo-2020b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ep-iedo-2020b.pdf','','')

  }else if (message.body === '4f'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Metodos Matemáticos = *Fmm1*\n🔸Métodos Numéricos = *Fnumericos*\n🔸Termodinámica = *Ftermodinamica*')

  }else if (message.body.toLowerCase().includes('fmm1') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *6* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-examen-sustitutorio.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-examen-parcial.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-4ta-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-3ra-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-2da-practica-calificada.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2019b-1ra-practica-calificada.pdf','','')

  }else if (message.body.toLowerCase().includes('fnumericos') && message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/finalmn.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/parcialmn.pdf','','')

  }else if (message.body.toLowerCase().includes('ftermodinamica') && message.isGroupMsg === false){
    
    await gclient.sendText(message.from,'Cargando *3* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-parcial-termodinamica-2021a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-sustitutorio-termodinamica-2020-b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final-termodinamica-2020-b.pdf','','')

  }else if (message.body === '5f'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Mecánica Clasica = *Fclasica*')

  }else if (message.body.toLowerCase().includes('ftermodinamica') && message.isGroupMsg === false){
    
    await gclient.sendText(message.from,'Cargando *6* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/mecanica-clasica-examen-sustitutorio-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ef-mc-2020b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ef-mc-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ef-mc-2019b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/ep-mc-2020a.pdf','','')

  }else if (message.body.toLowerCase() === 'matematica'||message.body.toLowerCase() === 'matemática' && message.isGroupMsg === false){
    gclient.sendText(message.from,'Elija el ciclo (escriba la palabra que está en negrita):\n🔹Tercero ciclo = *3m*\n🔹Cuarto ciclo = *4m*\n🔹Quinto ciclo = *5m*\n🔹Sexto ciclo = *6m*\n🔹Octavo ciclo = *8m*')
    
  }else if (message.body === '3m'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Física 2 = *Mfisica2*')
    
  }else if (message.body.toLowerCase() === 'mfisica2'&& message.isGroupMsg === false){
    
    await gclient.sendText(message.from,'Cargando *3* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/exam-final-mat-f-ii-fcnm.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/exam-parc-f-ii-2020a-matem.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/2ra-pc-fisica-i-fcnm-unac-1.pdf','','')

  }else if (message.body === '6m'&& message.isGroupMsg === false){ 
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Medida e Integracion = *Mmedida*')
   
  }else if (message.body.toLowerCase() === 'mmedida'&& message.isGroupMsg === false){
    
    await gclient.sendText(message.from,'Cargando *1* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/medida-de-integracion-pc1-2019b.pdf','','')

  }else if (message.body === '4m'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Estructuras Algebraicas 1 = *Mestructuras1*')


  }else if (message.body.toLowerCase() === 'mestructuras1'&& message.isGroupMsg === false){
    
    await gclient.sendText(message.from,'Cargando *3* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-pc2-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-pc1-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-es-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/estructuras-algebraicas-i-ep-2020a.pdf','','')
  }else if (message.body === '5m'){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Ecuaciones Diferenciables Ordinarias = *Medo*\n🔸Analisis Real 2 = *Mreal2*')

  }else if (message.body.toLowerCase() === 'medo'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *2* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-sustitutorio-ied.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/examen-final.docxied.pdf','','')

  }else if (message.body.toLowerCase() === 'mreal2'&& message.isGroupMsg === false){  
    
    await gclient.sendText(message.from,'Cargando *5* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/analisis-real-ii-ef-2021a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/analisis-real-ii-ep-2021a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/analisis-real-ii-pc1-2020a.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/analisis-real-ii-pc3-2019b.pdf','','')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/analisis-real-ii-pc1-2019b.pdf','','')

  }else if (message.body === '6m'){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Analisis Real 2 = *Mreal2*')
    await gclient.sendText(message.from,'Cargando *1  * Documentos....⏳')
    await gclient  
    .sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/analisis-real-ii-pc1-2019b.pdf')
    
  }else if (message.body === '8m'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Eliga el curso:\n🔸Ecuaciones Diferenciables Parciales = *Medp*')

  }else if (message.body.toLowerCase() === 'medp'&& message.isGroupMsg === false){
    await gclient.sendText(message.from,'Cargando *1* Documentos....⏳')
    await gclient.sendFile(message.from,'https://examenesfcnm.files.wordpress.com/2021/08/pc2.pdf','','')

  }else if (message.body.toLowerCase() === '/sticker'){
    await gclient.sendText(message.from,'Envíanos una imagen con la descripcion *Sticker* y lo convertimos en sticker')


  }else if (message.isMedia & (message.caption == 'Sticker'||message.caption == 'sticker')){
    await gclient.sendText(message.from,'Processing ...⏳😊')
    const buffer = await gclient.decryptFile(message);
    const fileName = `Sticker${message.from}.${mime.extension(message.mimetype)}`;
    await fs.writeFile(fileName, buffer, (err) => {
      if (err) return console.log(err);
      console.log('No se envió stickers');
    });

    await gclient
    .sendImageAsSticker(message.from,  '/' + message.from+'.jpg')
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });
    await gclient
    .sendImageAsSticker(message.from, `Sticker${message.from}.${mime.extension(message.mimetype)}` )
    .then((result) => {
      console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
      console.error('Error when sending: ', erro); //return object error
    });

  }else if (message.body.toLowerCase() === 'ping') {
    gclient.sendText(message.from, 'Pong')

  }else if (message.body == '🤔') {
    if (Math.round(Math.random()) == 1) {
      await gclient.sendText(message.from, 'Sos Gay')
    } else {
      await gclient.sendText(message.from, 'Sos Macho')
    }
  }else if (message.body.toLowerCase()==='tupu'){
    await gclient.sendText(message.from,'tamdre')
    
  }else if ( message.body.toLowerCase().startsWith('add')){
    const addNumber = message.body.substring(message.body.indexOf('@') + 1)
    await fs.appendFileSync('Add.txt', message.from + ' ' + addNumber + '@c.us\n')
    await gclient.sendMentioned(message.from, 'Add @' + addNumber + '!', [addNumber])
    await gclient.sendText(addNumber + '@c.us','Serás Añadido')
    await gclient.addParticipant(message.from, addNumber + '@c.us')
    
  }else if (message.body.toLowerCase().startsWith('ban') &&  message.author == 51952841852 + '@c.us'){
    const bannedNumber = message.body.substring(message.body.indexOf('@') + 1)
    await fs.appendFileSync('ban.txt', message.from + ' ' + bannedNumber + '@c.us\n')
    await gclient.sendMentioned(message.from, 'Banned @' + bannedNumber + '!', [bannedNumber])
    await gclient.removeParticipant(message.from, bannedNumber + '@c.us')
    
  }else if (message.body.toLowerCase() === "location"){
    await gclient.sendLocation(message.from, '-12.062160', '-77.117738', 'En tu corazón bebe')
  }
}
