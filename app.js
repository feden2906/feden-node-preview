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
// const ee = require('./helper');
//
// ee.emit('test', 22, true, 'Maksym');
// ee.emit('test');
// ee.emit('test', 33, false, 'Tamara');
//
// ee.emit('oneTimeEvent');
// ee.emit('oneTimeEvent');


// -------- # 4
// const fs = require('fs');
//
// for (let i = 0; i < 10; i++) {
//   fs.writeFile('./text.txt', `HELLO ${i}\n`, {flag: 'a'}, (err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
// }
//
// fs.readFile('./text.txt', (err, data) => {
//   err
//       ? console.log(err)
//       : console.log(data.toString());
// })
//
// fs.mkdir('./video', (err => {
//   if (err) {
//     console.log(err)
//   }
// }))
//
// fs.readdir('./', (err, files) => {
//   err
//       ? console.log(err)
//       : console.log(files)
// })
//
// fs.stat('./app.js', (err, stats) => {
//   console.log(stats.isFile());
//   console.log(stats.isDirectory());
//   console.log(stats.size);
// })
//
// fs.unlink('./helper.js', (err) => { });
//
// fs.rmdir('./video', (err) => { });
