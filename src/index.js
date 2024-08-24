require("dotenv").config();
const { env } = require("node:process");
const { Client, IntentsBitField } = require("discord.js");
const DISCORD_TOKEN = env.DISCORD_TOKEN;
const toUnicodeVariant = require("./toUnicodeVariant");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", c => {
  console.log(`${c.user.username} is ready when you are!`);
});

client.on("messageCreate", msg => {
  if (msg.author.bot) {
    return;
  } else {
    msg.reply(toUnicodeVariant(msg.content, "gothic bold"));
  }
});

client.login(DISCORD_TOKEN);
