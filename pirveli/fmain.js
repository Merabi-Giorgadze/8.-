function powerRecursive(base, exponent, callback) {
  // თუ ხარისხი არის უარყოფითი
  if (exponent < 0) return "Exponent must be a non-negative integer.";
  
  // თუ ხარისხი არის უარყოფითი
  if (exponent === 0) return callback(1);

  // განმეორებითი შემთხვევა
  const intermediateResult = powerRecursive(base, exponent - 1, callback);
  return callback(base * intermediateResult);
}

// მაგალითი ფუნქციის გაწვდვა callback ფუნქციით
const base = 5;
const exponent = 3;

const result = powerRecursive(base, exponent, (value) => value);
console.log(result); // 125
