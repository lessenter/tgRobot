import { Bot, InlineKeyboard, Keyboard } from "grammy";
const bot = new Bot("your robot token");

// send message event
function sendMessageEvent(uid=0, message=''){
  bot.api.sendMessage(uid, message);
}

let startText = `messages`
bot.command("start", async (ctx) => {
  let openLink = "open link"
  const menubtn = new InlineKeyboard()
  .url("Play", openLink)
  await ctx.reply(startText, {
    parse_mode: "HTML",
    reply_markup: menubtn,
  });
});

// fast menu
bot.api.setMyCommands([
  { command: "play", description: "menu description" },
]);

// Listen event
bot.on("message", async (ctx) => {
  console.log(
    `${ctx.from.first_name} wrote ${
      "text" in ctx.message ? ctx.message.text : ""
    }`,
  );
  // send message
  await ctx.copyMessage(ctx.message.chat.id);
});

bot.start();
