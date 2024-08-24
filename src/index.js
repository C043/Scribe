require("dotenv").config();
const { env } = require("node:process");
const { Client, IntentsBitField, ActivityType } = require("discord.js");
const DISCORD_TOKEN = env.DISCORD_TOKEN;
const toUnicodeVariant = require("./toUnicodeVariant");
const { zalgoRandomGeneration } = require("zalgo-generator");

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
  console.log(zalgoRandomGeneration("I'm ready", 2));
  console.log(`${c.user.username} is ready when you are!`);
  client.user.setActivity("to /convert", {
    type: ActivityType.Listening,
  });
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "convert") {
    if (interaction.options.get("variant").value === "zalgo") {
      await interaction.deferReply();
      await wait(4_000);
      await interaction.editReply(zalgoRandomGeneration(interaction.options.get("message").value, 2));
    } else {
      interaction.reply(
        toUnicodeVariant(
          interaction.options.get("message").value,
          interaction.options.get("variant").value,
          interaction.options.get("combinings")?.value
        )
      );
    }
  }
});

client.login(DISCORD_TOKEN);
