const my_module = require('./mathlib');
console.log(new my_module().add(5, 6));
console.log(new my_module().square(5));
console.log(new my_module().random(5, 20));
console.log(Math.random() * (25 - 10) + 10);