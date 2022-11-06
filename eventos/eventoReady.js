const Discord = require("discord.js"); // Definimos Discord.js.

module.exports = {
  name: "ready", // Nombre del evento.
  emiter: "on",
  run: async (client) => {

    var slashCommands = client.slashCommands.map(x => x)
    await client.application.commands.set(slashCommands);

    console.log("✅ - El bot encendió"); // Mensaje cuando el bot encienda.
  }
}