const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences
  ]
});

client.once("ready", () => {
  console.log(`บอทออนไลน์แล้ว: ${client.user.tag}`);
});

client.on("presenceUpdate", (oldPresence, newPresence) => {
  if (!newPresence.guild) return;

  const member = newPresence.member;
  if (!member) return;

  console.log(
    `${member.user.username} สถานะ: ${newPresence.status}`
  );
});

client.login(process.env.DISCORD_TOKEN);
