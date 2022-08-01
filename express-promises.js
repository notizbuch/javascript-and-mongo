const express = require('express')
const app = express()
const port = 3333

async function gethello01(){
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("hello01"), 1000);
  });
  return promise;
}

async function getworld01(){
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("world01"), 1000);
  });
  return promise;
}

async function getsentence01(){
  let part1 = await gethello01();
  let part2 = await getworld01();
  
  return part1 + part2;
}

app.get('/getsentence01', (req, res) => {
  getsentence01()
  .then( (a) => {res.send(a)} )
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// curl http://hostname:3333/getsentence01
// hello01world01
