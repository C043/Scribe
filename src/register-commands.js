require("dotenv").config();
const { env } = require("node:process");
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
];

const rest = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationGuildCommands(env.CLIENT_ID, env.GUILD_ID), { body: commands });

    console.log("Slash commands registered successfully!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
