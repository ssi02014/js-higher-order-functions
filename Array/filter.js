Array.prototype.filterFunc = function (callback, thisArg = undefined) {
  if (this === null || typeof callback !== "function") {
    throw new TypeError();
  }

  const callArray = Array.from(this);
  const result = Array();
  let bindThis = null;
  let current = 0;

  if (arguments.length > 1) {
    bindThis = thisArg;
  }

  for (let i = 0; i < callArray.length; i++) {
    const value = callback.call(bindThis, callArray[i], i, callArray);
    if (value) {
      result[current++] = callArray[i];
    }
  }

  return result;
};
