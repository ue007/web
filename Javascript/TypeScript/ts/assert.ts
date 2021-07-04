interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function swim(animal: Cat | Fish) {
  (animal as Fish).swim();
}

const tom: Cat = {
  name: "Tom",
  run() {
    console.log("run");
  },
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`

class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError1(error: Error) {
  if (error instanceof ApiError) {
    return true;
  }
  return false;
}

interface ApiError2 extends Error {
  code: number;
}
interface HttpError2 extends Error {
  statusCode: number;
}

function isApiError2(error: Error) {
  if (error instanceof ApiError) {
    return true;
  }
  return false;
}
