const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  const welcomeID = "840060289327038496";
  const infoID = "840064194572582912";

  client.on("guildMemberAdd", (member) => {
    const message = new MessageEmbed()
      .setColor("#4facf7")
      .setTitle("Welcome")
      .setAuthor("Lesser")
      .setThumbnail(
        "https://fontmeme.com/permalink/210507/2aabadc7d3d6d32b6e394514c821d2c0.png"
      )
      .setDescription(
        `Hey @${
          member.user.username
        } welcome to our server !!! Have fun.... And click here to get the info about the server ${member.guild.channels.cache
          .get(infoID)
          .toString()}`
      );

    const channel = member.guild.channels.cache.get(welcomeID);
    channel.send(message);
  });
};
