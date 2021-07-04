interface Person {
  name: string;
  age: number;
  address?: string; // 可选属性
  [propName: string]: any; // 任意属性
  readonly id: number; // 只读属性
}

let toms: Person = {
  name: "Tom",
  age: 25,
  address: "角度看撒",
  gender: "male",
  id: 1234,
};

console.log(toms);
