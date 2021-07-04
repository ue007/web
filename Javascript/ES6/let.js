
/**
 * 作用域
 */
{
  let a = 10; // 只在let命令所在的代码块内有效。
  var b = 1;
  console.log(a);
}
// console.log(a); // undefined
console.log(b);

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i); // undefined

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10


var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6

/**
 * 不存在变量提升
 */
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;
// let 的情况
// console.log(bar); // 报错ReferenceError
let bar = 2;

/**
 * 暂时性死区
 */
 var tmp = 123;
 if (true) {
   tmp = 'abc'; // ReferenceError
   let tmp;
 }