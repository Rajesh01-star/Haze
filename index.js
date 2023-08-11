"use strict";
// poki api variable declaration ---------------------
let rank1, rank2;
let height1, height2;
let weight1, weight2;
let exp1, exp2;
let power1, power2;
let compare;
let result;
// ------------------------------------------

let code = 0;
require("dotenv").config();
import emoticon from "./emoticon";
import { get } from "axios";
import hex from "randomcolor";
import { Client, MessageAttachment, MessageEmbed, GuildMember } from "discord.js";
const client = new Client();
const PREFIX = "$";
import roastMe from "roastme";
import welcome from "./welcome";
import img0 from "./images0";
import img1 from "./images1";
import img2 from "./images2";

client.on("ready", () => {
  console.log(`${client.user.username} has logged in...`);

  client.user.setActivity("$about", { type: "LISTENING" });
  welcome(client);
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  console.log(`[${message.author.tag}] :${message.content}`);
  if (!message.content.startsWith(PREFIX)) {
    return;
  }
  const args = message.content.slice(PREFIX.length).trim().slice(" ");
  const command = args.toLowerCase();

  // Complementary commands  -----------------------------------------
  if (command === "hello") {
    message.reply(`hey,how may I help you`);
  }

  if (command === "ego") {
    var n = Math.random();
    n = n * 8;
    n = Math.floor(n);
    message.react(emoticon[n]);
  }

  if (command === "fruits") {
    message
      .react("🍎")
      .then(() => message.react("🍊"))
      .then(() => message.react("🍇"))
      .catch((error) =>
        console.error("One of the emojis failed to react:", error)
      );
  }
  // birthday messages
  if (command === "birthday-send") {
    const embed = new MessageEmbed()
      .setColor("#6721ff")
      .setTitle("Happy Birthday")
      .setAuthor("Anji")
      .setThumbnail(
        `https://media.giphy.com/media/pWO49XP9L7TxbgQVib/giphy.gif`
      )
      .setDescription("Happy birthday bhai.. enjoy your day buddy");

    client.users.cache.get("758698550791634994").send(embed);
  }

  // ============================  love calculator...------------------------
  if (command.startsWith("cal")) {
    var per = Math.random() * 100;
    per = Math.floor(per);

    var base = command.split("-");
    var name1 = base[1];
    var name2 = base[2];

    console.log(per);
    if (per > 90) {
      var p = Math.random();
      p = p * 4;
      p = Math.floor(p);
      var color = "#fc1231";
      var title = "Ahmm.. .Ahmmm.... 🌚";
      var Description = `This is just a calculator , but who knows!!!!  ${name1}....${name2}`;
      var thumbnail = `${img2[p]}`;
    } else if (per > 70) {
      var n = Math.random();
      n = n * 6;
      n = Math.floor(n);
      var color = "#44b9fc";
      var title = "Ahhaa gotcha.......... ";
      var Description = `Someone is getting chills rn.....!!  Isn't it. ${name1}....${name2}`;
      var thumbnail = `${img1[n]}`;
    } else if (per > 50) {
      var m = Math.random();
      m = m * 6;
      m = Math.floor(m);
      var color = "#706eff";
      var title = "Mann mei ladu phutaa   !!!!";
      var Description = `TBH it is the safest range to be in. ..👀👀👀👀 `;
      var thumbnail = `${img1[m]}`;
    } else if (per > 40) {
      var z = Math.random();
      z = z * 6;
      z = Math.floor(z);
      var color = "#706eff";
      var title = "La la la la   !!!!";
      var Description = `May be next time dude.🐨  .but not that bad ..😇🙂🙂🙂 `;
      var thumbnail = `${img1[z]}`;
    } else if (per > 20) {
      var o = Math.random();
      o = o * 2;
      o = Math.floor(o);
      var color = "#fc7244";
      var title = "Am sorry .....";
      var Description = `......${name1}, ${name2} ahh... don't worry guess am still not over the Vodka I had yesterday .. try again🥴😅😁`;
      var thumbnail = `${img0[o]}`;
    } else if (per > 10) {
      var q = Math.random();
      q = q * 3;
      q = Math.floor(q);
      var color = "#fc7244";
      var title = "Wanna retry";
      var Description = `.......${name1}, ${name2} hey you two have some real issues solve that first 😬😬😬`;
      var thumbnail = `${img0[q]}`;
    } else if (per >= 0) {
      var x = Math.random();
      x = x * 3;
      x = Math.floor(x);
      var color = "#fc7244";
      var title =
        "Give me a chocolate and I'll see your score for the second time 👾👾";
      var Description = `.......${name1}, ${name2} ahhh good news buddy 🥳🥳.. if you didn't want to pair with the other one... on the other side 🤐🤐..bad luck dude`;
      var thumbnail = `${img0[x]}`;
    }

    const value = new MessageEmbed()
      .setColor(color)
      .setTitle(title)
      .addFields({ name: `${per}%`, value: `${Description}` })
      .setThumbnail(thumbnail);

    message.channel.send(value);
  }

  // delete messages--------------------------------------------

  if (command.startsWith("delete")) {
    var del = command.split("-");
    var num = del[1];
    console.log(num);
    if (num > 100)
      message.channel.send(
        `Sorry ${message.author} I can only delete messages less than 100 at a time.`
      );
    else if (num < 1)
      message.channel.send(
        ` ${message.author} I can't delete messages if you don't give me a specific number.`
      );
    else {
      message.channel.bulkDelete(Number(num) + 1);
    }
  }

  // embed highlighting----------------------------------------------------
  if (command.startsWith("embed")) {
    var load = command.split("-");
    var main = load[1];
    var author = message.author.username;

    const embed = new MessageEmbed()
      .setColor("#6721ff")
      .setTitle(main)
      .setAuthor(`${author}  said`)
      .setThumbnail(
        `https://media.giphy.com/media/VJiQRddV3K46dL4u2o/giphy.gif`
      );

    message.channel.bulkDelete(message.channel.bulkDelete(1));
    message.channel.send(embed);
  }

  //joke api call--------------------------------------------------
  // single-line & double lined jokes

  if (
    command === "joke-1d" ||
    "joke-1p" ||
    "joke-1m" ||
    "joke-1pun" ||
    "joke-2d" ||
    "joke-2p" ||
    "joke-2m" ||
    "joke-2pun" ||
    "joke-2s"
  ) {
    if (command === "joke-1d") {
      var main = "Dark";
      var type = "single";
    } else if (command === "joke-1p") {
      var main = "Programming";
      var type = "single";
    } else if (command === "joke-1m") {
      var main = "Miscellaneous";
      var type = "single";
    } else if (command === "joke-1pun") {
      var main = "Pun";
      var type = "single";
    } else if (command === "joke-2p") {
      var main = "Programming";
      var type = "twopart";
    } else if (command === "joke-2d") {
      var main = "Dark";
      var type = "twopart";
    } else if (command === "joke-2m") {
      var main = "Miscellaneous";
      var type = "twopart";
    } else if (command === "joke-2pun") {
      var main = "Pun";
      var type = "twopart";
    } else if (command === "joke-2s") {
      var main = "Spooky";
      var type = "twopart";
    }
    var url = "https://v2.jokeapi.dev/joke/" + main + "?type=" + type;

    let getJoke = async () => {
      let response = await get(url);
      let joke = response.data;
      return joke;
    };
    let jokeValue = await getJoke();
    console.log(jokeValue.setup);
    if (type === "single") {
      message.reply(`Here goes your joke \n ${jokeValue.joke}`);
    }
    if (type === "twopart") {
      message.reply(
        `Here goes your joke \n ${jokeValue.setup}\n\n ${jokeValue.delivery}`
      );
    }
  }

  // giphy api-----------------------------------------------------

  // giphy sticker api--------------------------------------------

  if (command.startsWith("sti")) {
    var n = Math.random();
    n = n * 20;
    n = Math.floor(n);
    console.log(n);
    var name = command.split("-");
    var main = name[1];
    console.log(main);

    var url =
      "https://api.giphy.com/v1/stickers/search?api_key=5Ae2RVHHe2HL1rWAZgEEU7YzWDrpYaUn&q=" +
      main +
      "&limit=20&offset=0&rating=g&lang=en";

    let getSti = async () => {
      let response = await get(url);
      let sti = response.data;
      return sti;
    };
    let stiValue = await getSti();
    var sticker = stiValue.data[n].embed_url;

    message.channel.send(sticker);
  }

  if (command.startsWith("gif")) {
    // function-------
    var n = Math.random();
    n = n * 20;
    n = Math.floor(n);
    console.log(n);
    // --------------------------
    var load = message.content.split("-");
    var gf = load[1];

    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=5Ae2RVHHe2HL1rWAZgEEU7YzWDrpYaUn&q=" +
      gf +
      "&limit=" +
      20 +
      "&offset=0&rating=g&lang=en#";

    let getGif = async () => {
      let response = await get(url);
      let gif = response.data;
      return gif;
    };
    let gifValue = await getGif();
    var main = gifValue.data[n].url;
    console.log(main);

    message.channel.send(main);
  }

  // quotes api---------------------------------------------

  if (command === "quote") {
    var url = "https://zenquotes.io/api/random";

    let getQuote = async () => {
      let response = await get(url);
      let quote = response.data;
      return quote;
    };
    let quoteValue = await getQuote();
    var Description = quoteValue[0].q;
    var name = quoteValue[0].a;

    const embed = new MessageEmbed()
      .setColor("#61caff")
      .setTitle(name)
      .setAuthor("Haze brought you a quote")
      .setThumbnail("https://i.ibb.co/DYvN0fg/Png-Item-5162700.png")
      .setDescription(Description);
    message.channel.send(embed);
  }

  // embed about page  -------------------------------------------------------------------------

  if (command === "about") {
    const embed = new MessageEmbed()
      .setColor("#d65733")
      .setTitle("Your friendly neighborhood ....")
      .setURL("https://discord.js.org/#/")
      .setAuthor(
        "Atharv",
        "https://media.giphy.com/media/3og0IKMyyF26qr6MDe/giphy.gif",
        "https://rajesh01-star.github.io/my-siteXD/"
      )
      .setDescription(
        "This is a multi thread bot that can do things.. and those 'things' are specified by Atharv ."
      )
      .setThumbnail("https://media.giphy.com/media/MYRaEX5zfXXaM/giphy.gif")
      .addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Joke commands",
          value:
            "joke-1d , joke-1p , joke-1m , joke-1pun , joke-2s , joke-2d , joke-2m , joke-2p , joke-2pun",
        },
        {
          name: "Gifs or Sticker",
          value: "gif-'keyword'  or sti-'keyword'",
          inline: true,
        },
        { name: "bot", value: "about", inline: true },
        {
          name: "Adds",
          value: "hello  , ego  , fruits ",
          inline: true,
        },
        { name: "Embed", value: "embed-'data'", inline: true },
        {
          name: "Quotes",
          value: "quote",
          inline: true,
        },
        {
          name: "Pokemon",
          value: "pokemon",
          inline: true,
        },
        {
          name: "Calculator",
          value: "cal-name-name",
          inline: true,
        }
      )
      .setImage("https://media.giphy.com/media/3dcZ7OCrJ87gw5xauE/giphy.gif")
      .setTimestamp()
      .setFooter(
        "Hope you'll like it",
        "https://media.giphy.com/media/xUPGcH4QXp19gShtgk/giphy.gif"
      );

    message.channel.send(embed);
  }

  // pre-additions --------------
  if (command.startsWith("height")) {
    compare = command;
    console.log(`compare ${compare}`);
  }
  if (command.startsWith("rank")) {
    compare = command;
    console.log(`compare ${compare}`);
  }
  if (command.startsWith("weight")) {
    compare = command;
    console.log(`compare ${compare}`);
  }
  if (command.startsWith("exp")) {
    compare = command;
    console.log(`compare ${compare}`);
  }
  if (command.startsWith("power")) {
    compare = command;
    console.log(`compare ${compare}`);
  }
  // =====================================================

  if (command === "pokemon") {
    const goal = new MessageEmbed()
      .setColor("#d65733")
      .setTitle("Here are the steps.. ")
      .setAuthor("Pokemon", "https://i.ibb.co/Z2zRgmj/Clipart-Key-542072.png")
      .setThumbnail(
        "https://media.giphy.com/media/Jq81o9UbQeLcm408jW/giphy.gif"
      )
      .setDescription(
        "1) Use 'dex' command to get your pokemon \n\n 2) Choose the quality you want to play 'rank , height , weight , exp' \n\n 3) Player Two will use the 'dex' command \n\n 4) Detective Pikachu will announce the winner  "
      )
      .setImage("https://i.ibb.co/WV0SyDs/Daco-4535496.png")
      .setFooter(
        "Hope you'll like the game",
        "https://i.ibb.co/TK7RQLG/pngkey-com-mewtwo-png-668072.png"
      );

    message.channel.send(goal);
  }

  // the code under this will go inside the "pokemon"
  if (command === "dex") {
    code = code + 1;
    console.log(`code ${code}`);
    var p = Math.random();
    p = p * 890;
    p = Math.floor(p);
    var color = hex();
    var url = `https://pokeapi.co/api/v2/pokemon/${p}`;

    let getPok = async () => {
      let response = await get(url);
      let pok = response.data;
      return pok;
    };
    let pokeValue = await getPok();

    // variable declarations //////////////////////////////////////////
    var title = pokeValue.forms[0].name;
    var fieldZero = pokeValue.id;
    var fieldOne = pokeValue.height;
    var fieldTwo = pokeValue.weight;
    var fieldThree = pokeValue.base_experience;
    var fieldFour = pokeValue.stats[0].base_stat;
    // ========================================================================
    const embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`Name : ${title}`)
      .setAuthor("Pokemon", "https://i.ibb.co/Z2zRgmj/Clipart-Key-542072.png")
      .setThumbnail(
        "https://media.giphy.com/media/LM1dM95kwccNJWkovq/giphy.gif"
      )
      .addFields(
        { name: "Rank", value: fieldZero, inline: true },
        { name: "Height", value: fieldOne, inline: true },
        { name: "Weight", value: `${fieldTwo}kg`, inline: true },
        { name: "Base Experience", value: fieldThree, inline: true },
        { name: "Power", value: `${fieldFour}00`, inline: true }
      )
      .setImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fieldZero}.png`
      )
      .setFooter(
        "All hail the Satoshi Tajiri",
        "https://i.ibb.co/TK7RQLG/pngkey-com-mewtwo-png-668072.png"
      );
    message.channel.send(embed);

    if (code % 2 == 1) {
      rank1 = fieldZero;
      height1 = fieldOne;
      weight1 = fieldTwo;
      exp1 = fieldThree;
      power1 = fieldFour;
    } else {
      rank2 = fieldZero;
      height2 = fieldOne;
      weight2 = fieldTwo;
      exp2 = fieldThree;
      power2 = fieldFour;
      if (compare == "rank") {
        if (rank1 > rank2) result = "Player Two Own";
        else result = "Player One Own";
      }
      if (compare == "height") {
        if (height1 > height2) result = "Player One Own";
        else result = "Player Two Own";
      }
      if (compare == "weight") {
        if (weight1 > weight2) result = "Player One Own";
        else result = "Player Two Own";
      }
      if (compare == "exp") {
        if (exp1 > exp2) result = "Player One Own";
        else result = "Player Two Own";
      }
      if (compare == "power") {
        if (power1 > power2) result = "Player One Own";
        else result = "Player Two Own";
      }
      const embed = new MessageEmbed()
        .setColor("#cd0000")
        .setTitle(result)
        .setAuthor("Pikachu", "https://i.ibb.co/Z2zRgmj/Clipart-Key-542072.png")
        .setDescription("Detective Pikachu rests the case")
        .setThumbnail(
          "https://media.giphy.com/media/jVT8qOVBb7iyS7g1w9/giphy.gif"
        )
        .setFooter(
          "congrats",
          "https://i.ibb.co/TK7RQLG/pngkey-com-mewtwo-png-668072.png"
        );

      if (compare) message.channel.send(embed);
      compare = "";
    }

    // ..........................................
  }

  // end of the line
});
// console.log(`rank1 ${rank1}`);
client.login(process.env.DISCORD_BOT_TOKEN);
