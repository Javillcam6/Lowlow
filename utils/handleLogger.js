const {IncomingWebhook} = require("@slack/webhook")

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK)

const loggerStream = {
    write: message => {
        webHook.send({
            text: message
        })
        console.log('Capturando el LOG', message)
      // do anything - emit to websocket? send message somewhere? log to cloud?
    },
  };


  module.exports = loggerStream


  //NOS PERMITE MANDAR LOS ERRORES GENERADOS A UN CANAL DE SLACK CON AYUDA DE MORGAN BODDY