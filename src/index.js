require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");
const { env } = require("node:process");
const DISCORD_TOKEN = env.DISCORD_TOKEN;

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
  } else if (msg.content === "hello") {
    msg.reply("hello");
  }
});

client.login(DISCORD_TOKEN);
