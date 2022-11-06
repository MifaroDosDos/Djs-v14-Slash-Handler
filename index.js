const Discord = require("discord.js"); // Definimos Discord.js.
const config = require("./config.json"); // Añadimos el config, esto nos servirá para obtener el token.
const { readdirSync } = require("node:fs"); // Definimos readdirSync para las carpetas.

const client = new Discord.Client({
  intents: new Discord.IntentsBitField(3276799)
}); // Añadimos los Intents.

const tokenBot = config.TOKEN; // Definimos el Token de nuestro bot

client.slashCommands = new Discord.Collection(); // Creamos la colección para los SlashCommands.

// Slash Commands Handler ->
for (const subFolder of readdirSync(`${__dirname}/slashCommands/`)) {
  for (const fileName of readdirSync(`${__dirname}/slashCommands/${subFolder}/`)) {
    let file = require(`${__dirname}/slashCommands/${subFolder}/${fileName}`);

    client.slashCommands.set(file.name, file);
  }
}

// Eventos Handler ->
for (const fileName of readdirSync(`${__dirname}/eventos/`)) {
  let file = require(`${__dirname}/eventos/${fileName}`);
  let eventEmiter = file.emiter;

  client[eventEmiter](file.name, file.run.bind(null, client));
}

/*
Dato importante:
- Debemos crear nuestras carpetas con el mismo nombre que agregué por defecto (slashCommands, eventos).
- Si no te gustan los nombres que están por defecto puedes cambiarlo, teniendo en cuenta que tanto como la carpeta y la definición del handler deben ser el mismo, ¡si no ocurrirá error!
*/

client.login(tokenBot); // Logeamos el token del bot.
