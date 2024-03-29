// npm install @faker-js/faker --save-dev
// node faker.js

const {faker} = require("@faker-js/faker");

function randomData(){
return {
  userId: faker.string.uuid(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: faker.date.past()
};
}

console.log(faker.helpers.multiple(randomData, {count:10}))

// in MongoDB for VS Code Playground:
use('db1');
db.getCollection('users').insertMany(faker.helpers.multiple(randomData, {count:10}))
