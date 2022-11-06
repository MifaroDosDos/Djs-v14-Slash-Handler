const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js'); // Definimos algunos tipos que usaremos para el comando.

module.exports = {
    name: "hola", // Nombre del Comando.
    description: "hola, descripción!", // Descripción del Comando
    type: ApplicationCommandType.ChatInput, // Tipo del Comando
    run: async (client, interaction) => { // Parametros

 interaction.reply({ content: "Hola, gracias por crearme." }) // Que haga la función de mandar un mensaje.

 }
}