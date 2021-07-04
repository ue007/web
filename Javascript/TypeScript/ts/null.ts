let u: undefined = undefined;
let n: null = null;

// 这样不会报错
let num: number = undefined;

// 这样也不会报错
let uu: undefined;
let num2: number = u;

let uuu: void;
let num3: number = u;
// Type 'void' is not assignable to type 'number'.