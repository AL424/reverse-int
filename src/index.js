module.exports = function reverse (n) {
  let i = 0;
  let resultStr = '';

  let nStr = String(n);

  if (nStr[0] === '-') nStr = nStr.slice(1);

  while (i < nStr.length) {
    resultStr = `${nStr[i]}${resultStr}`;
    i += 1;
  }

  let resultNum = Number(resultStr);

  return resultNum;
}