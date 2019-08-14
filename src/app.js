const TelegramBot = require('node-telegram-bot-api');

const express = require('express');

const app = express();

const fs = require("fs");


require('dotenv').config();

const { token } = process.env;

console.log(token);

const bot = new TelegramBot(token, { polling: true });


let id = [];
let time = '';

app.get('/', function (req, res) {
  res.send('server Work')
})

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Добрый день, ${msg.chat.first_name}. Добро пожаловать!`, {
  });

  console.log(time);
  console.log(typeof (time));
  fs.appendFileSync("test.txt", ` ${msg.chat.id}`)
})


bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});



bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Received your message${time}`);
});



setInterval(function () {
  id = fs.readFileSync("test.txt", "utf8").split(' ');
  // 
  const now = new Date();
  time = `${now.getHours()}:${now.getMinutes()}`;
  // console.log(time);  
  // console.log(time === '0:6');
  if (time === '1:19') {
    console.log(id);

    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'пора спать')
    }

  }


}, 40000);

setInterval(function () {
  https.get("https://myfirst-telegrambot.herokuapp.com/");
}, 300000); // every 5 minutes (300000)


app.listen(process.env.PORT || 3000)