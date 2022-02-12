Array.prototype.mapFunc = function (callback, thisArg = undefined) {
  if (this === null) {
    throw new TypeError("this가 null이에요!");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback이 함수가 아닙니다!");
  }

  const callArray = Array(...this);
  const len = callArray.length;
  const result = Array(len);
  let bindThis = null;

  if (arguments.length > 1) {
    bindThis = thisArg;
  }

  for (let i = 0; i < len; i++) {
    const mappedValue = callback.call(bindThis, callArray[i], i, callArray);
    result[i] = mappedValue;
  }

  return result;
};

// 출력 예제
console.log([2, 4, 6].mapFunc((el) => el ** 2)); // [ 4, 16, 36 ]
console.log(
  ["hello", "hi", "bye"].mapFunc((el) => {
    const prefix = "minjae-";
    return prefix + el;
  })
); // [ 'minjae-hello', 'minjae-hi', 'minjae-bye' ]
// console.log([2, 4, 6].mapFunc("hi")); // TypeError: callback이 함수가 아닙니다!

class Example {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.mapFunc(function (el) {
      return this.prefix + el;
    }, this);
  }
}

const example = new Example("minjae-");
console.log(example.add(["hi", "hello"])); // [ 'minjae-hi', 'minjae-hello' ]
