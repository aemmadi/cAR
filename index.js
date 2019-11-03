const superagent = require('superagent');

let joke = superagent.get("https://icanhazdadjoke.com/").set('Accept', 'application/json').then(res => {
  Promise.resolve(res.body.joke);
})
console.log(joke);