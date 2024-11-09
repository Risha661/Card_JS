import "./script.js";
import { el, mount, setChildren } from "https://redom.js.org/redom.es.min.js";

export const validateCardHolder = (holder) => {
  let oneWordRegex = /^[a-zA-Z]+$/; // Регулярка на одно слово
  let twoWordsRegex = /^[a-zA-Z]+ [a-zA-Z]+$/; // Регулярка на два слова
  let cyrillicRegex = /[а-яА-ЯЁё]/; // Регулярка на кириллицу
  let digitRegex = /\d/; // Регулярка на наличие цифр

  if (
    twoWordsRegex.test(holder) &&
    !cyrillicRegex.test(holder) &&
    !digitRegex.test(holder)
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateCardNumber = (number) => {
  let digitRegex = /^\d+$/; // Регулярка на только цифры
  let lengthValid = /^\d{13,19}$/; // Регулярка на длину (обычно от 13 до 19)

  if (digitRegex.test(number) && lengthValid.test(number)) {
    console.log("Тест пройден");
    return true;
  } else {
    return false;
  }
};

export const validateCVV = (cvv) => {
  let digitRegex = /^\d+$/; // Регулярка на только цифры
  let lengthValid = /^\d{3,4}$/; // Регулярка на длину (обычно 3 или 4 цифры)

  if (digitRegex.test(cvv) && lengthValid.test(cvv)) {
    return true;
  } else {
    return false;
  }
};

// console.log("Тестирование validateCardHolder:");
// console.log(validateCardHolder("John Doe"));
// console.log(validateCardHolder("John"));
// console.log(validateCardHolder("Иван Иванов"));
// console.log(validateCardHolder("John123"));

// console.log("Тестирование validateCardNumber:");
// console.log(validateCardNumber("1234567890123"));
// console.log(validateCardNumber("1234567890123456"));
// console.log(validateCardNumber("1234567890123456789"));
// console.log(validateCardNumber("123456"));
// console.log(validateCardNumber("12345678901234567"));
// console.log(validateCardNumber("1234A678901234"));

// console.log("Тестирование validateCVV:");
// console.log(validateCVV('123'));
// console.log(validateCVV('3456'));
// console.log(validateCVV('22'));
// console.log(validateCVV('009988'));
// console.log(validateCVV('---'));
