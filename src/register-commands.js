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
            name: "zalgo",
            value: "zalgo",
          },
          {
            name: "gothic",
            value: "gothic",
          },
          {
            name: "gothic-bold",
            value: "gothic bold",
          },
          {
            name: "monospace",
            value: "monospace",
          },
          {
            name: "bold",
            value: "bold",
          },
          {
            name: "italic",
            value: "italic",
          },
          {
            name: "bold-italic",
            value: "bold italic",
          },
          {
            name: "script",
            value: "script",
          },
          {
            name: "bold-script",
            value: "bold script",
          },
          {
            name: "doublestruck",
            value: "doublestruck",
          },
          {
            name: "sans",
            value: "sans",
          },
          {
            name: "bold-sans",
            value: "bold sans",
          },
          {
            name: "italic-sans",
            value: "italic sans",
          },
          {
            name: "bold-italic-sans",
            value: "bold italic sans",
          },
          {
            name: "circled",
            value: "circled",
          },
          {
            name: "circled-negative",
            value: "circled negative",
          },
          {
            name: "squared",
            value: "squared",
          },
          {
            name: "squared-negative",
            value: "squared negative",
          },
          {
            name: "paranthesis",
            value: "paranthesis",
          },
          {
            name: "fullwidth",
            value: "fullwidth",
          },
          {
            name: "flags",
            value: "flags",
          },
          {
            name: "numbers-dot",
            value: "numbers dot",
          },
          {
            name: "numbers-comma",
            value: "numbers comma",
          },
          {
            name: "number-double-circled",
            value: "number double circled",
          },
          {
            name: "roman",
            value: "roman",
          },
        ],
        required: true,
      },
      {
        name: "combinings",
        description: "Additional text decorations.",
        type: ApplicationCommandOptionType.String,
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
