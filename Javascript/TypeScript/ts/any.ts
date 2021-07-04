// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

let myFavoriteNumber2: any = 'seven';
myFavoriteNumber2 = 7;

// 在任意值上访问任何属性都是允许的：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

let anyThing2: any = 'Tom';
anyThing2.setName('Jerry');
anyThing2.setName('Jerry').sayHello();
anyThing2.myName.setFirstName('Cat');

let something;
something = 'seven';
something = 7;

something.setName('Tom');

const x = 1 as any;
