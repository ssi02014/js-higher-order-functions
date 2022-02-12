Array.prototype.mapFunc = function (callback, thisArg = undefined) {
  if (this === null || typeof callback !== "function") {
    throw new TypeError();
  }

  const callArray = Array.from(this);
  const result = Array(callArray.length);
  let bindThis = null;

  if (arguments.length > 1) {
    bindThis = thisArg;
  }

  for (let i = 0; i < callArray.length; i++) {
    const value = callback.call(bindThis, callArray[i], i, callArray);
    result[i] = value;
  }

  return result;
};
