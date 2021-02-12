// -------- # 1
// const {logger, User} = require('./helper');
//
// logger(222);
//
// const maksym = new User('Maksym');
// maksym.sayHell();


// -------- # 2
// require('./helper');
//
// global.age = 25;
// global.test = 'Hello World';
//
// console.log(age);
// console.log(test);
// console.log(data);
//
// test22('Dima');


// -------- # 3
const ee = require('./helper');

ee.emit('test', 22, true, 'Maksym');
ee.emit('test');
ee.emit('test', 33, false, 'Tamara');

ee.emit('oneTimeEvent');
ee.emit('oneTimeEvent');
