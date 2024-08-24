require("dotenv").config();
const { env } = require("node:process");
const { Client, IntentsBitField } = require("discord.js");
const DISCORD_TOKEN = env.DISCORD_TOKEN;
const toUnicodeVariant = require("./toUnicodeVariant");

// Keep alive
let express = require("express");
const app = express();
const port = env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("I'm alive");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// Creazione del bot e assegnazione dei permessi
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// Event listener
client.on("ready", c => {
  console.log(`${c.user.username} is ready when you are!`);
});

client.on("interactionCreate", interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "convert") {
    interaction.reply(
      toUnicodeVariant(
        interaction.options.get("message").value,
        interaction.options.get("variant").value,
        interaction.options.get("combinings")?.value
      )
    );
  }
});

client.login(DISCORD_TOKEN);
