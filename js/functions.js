function checksString(string, length) {
  return string.length <= length;
}
checksString(767676, 5);

function checksPalindrom(string) {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reverseString += normalString.at(i);
  }
  return normalString === reverseString;
}
checksPalindrom('Лёша на полке клопа нашёл');
checksPalindrom('топот');
checksPalindrom('ДовОд');

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

extractsNumber('2023 год');
extractsNumber('ECMAScript 2022');
extractsNumber('1 кефир, 0.5 батона');
extractsNumber('агент 007');
extractsNumber('а я томат');
extractsNumber(2023);
extractsNumber(-1);
extractsNumber(1.5);
