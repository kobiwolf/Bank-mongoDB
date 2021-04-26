const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: 123 }, 'wow');
const answer = jwt.verify(token, 'ww');
console.log(token);
console.log(answer);
