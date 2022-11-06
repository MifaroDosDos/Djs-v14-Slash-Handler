const Discord = require("discord.js"); // Definimos Discord.js.

module.exports = {
  name: "interactionCreate", // Nombre del Evento.
  emiter: "on",
  run: async (client, interaction) => {

    if(interaction.isChatInputCommand()) {

      const command = client.slashCommands.get(interaction.commandName);
      command.run(client, interaction);

    }
  }
}