var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
var myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
// 在任意值上访问任何属性都是允许的：
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
var anyThing2 = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');
var something;
something = 'seven';
something = 7;
something.setName('Tom');
