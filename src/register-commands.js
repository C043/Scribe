require("dotenv").config();
const { env } = require("node:process");
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "convert",
    description: "Converts message to unicode variant of your choice.",
    options: [
      {
        name: "message",
        description: "The message to convert.",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
      {
        name: "variant",
        description: "The unicode variant you want to use.",
        type: ApplicationCommandOptionType.String,
        choices: [
          {
            name: "gothic",
            value: "gothic",
          },
          {
            name: "gothic-bold",
            value: "gothic bold",
          },
        ],
        required: true,
      },
    ],
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
