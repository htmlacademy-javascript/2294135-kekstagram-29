function checksString(string, length) {
  return string.length <= length;
}
console.log(checksString('00005', 5));

function checksPalindrom(string) {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  console.log(normalString);

  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reverseString += normalString.at(i);
  }
  console.log(reverseString);
  return normalString === reverseString;
}
console.log(checksPalindrom('Лёша на полке клопа нашёл'));
console.log(checksPalindrom('топот'));
console.log(checksPalindrom('ДовОд'));

function extractsNumber(string) {
  string = string.toString();
  let symbols = '';
  for (let i = 0; i <= string.length - 1; i++) {
    const number = parseInt(string.at(i), 10);
    if (!Number.isNaN(number)) {
      symbols += number;
    }
  }
  return parseInt(symbols, 10);
}

console.log('');
console.log(extractsNumber('2023 год'));
console.log(extractsNumber('ECMAScript 2022'));
console.log(extractsNumber('1 кефир, 0.5 батона'));
console.log(extractsNumber('агент 007'));
console.log(extractsNumber('а я томат'));
console.log(extractsNumber(2023));
console.log(extractsNumber(-1));
console.log(extractsNumber(1.5));
