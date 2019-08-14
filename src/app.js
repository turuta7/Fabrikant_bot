const TelegramBot = require('node-telegram-bot-api');

const request = require('request');

const express = require('express');

const https = require("https");

const app = express();

const fs = require("fs");


require('dotenv').config();

const { token } = process.env;

console.log(token);

const bot = new TelegramBot(token, { polling: true });


const unique = [];
let time = '';


app.get('/', function (req, res) {
  res.send('server Work')
})

bot.onText(/\/start/, (msg) => {
  const id = unique.filter((v, i, a) => a.indexOf(v) === i);
  bot.sendMessage(msg.chat.id, `Добрый день, ${msg.chat.first_name}. Добро пожаловать!`, {
  });
  unique.push(msg.chat.id)
  console.log(id);


})





setInterval(function () {
  // id = fs.readFileSync(`${__dirname}test.txt`, "utf8").split(' ');

  const now = new Date();
  time = `${now.getHours()}:${now.getMinutes()}`;
  const id = unique.filter((v, i, a) => a.indexOf(v) === i);
  // if (time === '8:23') {
  //   for (let i = 0; i < id.length; i++) {
  //     bot.sendMessage(id[i], 'test')
  //   }
  // }
  if (time === '5:28') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Хорошего рабочего дня!!!')
    }
  }

  if (time === '7:28') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Скоро перерыв')
    }
  }

  if (time === '7:39') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Перерыв окончен')
    }
  }

  if (time === '9:25') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Обед через 5 мин.')
    }
  }

  if (time === '9:59') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Уже нужно работать!!!')
    }
  }

  if (time === '11:28') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Скоро перерыв')
    }
  }

  if (time === '11:39') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Перерыв окончен')
    }
  }

  if (time === '12:58') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Скоро перерыв')
    }
  }

  if (time === '13:10') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Перерыв окончен')
    }
  }

  if (time === '14:00') {
    for (let i = 0; i < id.length; i++) {
      bot.sendMessage(id[i], 'Пора домой!!! До завтра!')
    }
  }


}, 50000);

setInterval(function () {
  https.get("https://fabr-bot.herokuapp.com");
}, 300000); // every 5 minutes (300000)


app.listen(process.env.PORT || 3000)