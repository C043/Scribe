const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();
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

client.login(DISCORD_TOKEN);
