lib.js
```
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
```

main.js
```
const lib = require("./lib");

const result = lib.add(4, 4);
console.log(`The result is: ${result}`);
```
