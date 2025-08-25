import { validateHolder, validateExpiry, validateNumber, validateCVV } from "./validate";

describe('Проверка валидности ФИО (validateHolder)', () => {
  test('Корректные значения', () => {
    expect(validateHolder("Knyazeva Risha")).toBe("Knyazeva Risha");
    expect(validateHolder("knyazeva Ri")).toBe("knyazeva Ri");
  });

  test('Некорректные значения', () => {
    expect(validateHolder("")).toBe("Данные невалидны");
    expect(validateHolder("Ru")).toBe("Данные невалидны");
    expect(validateHolder("Ru123")).toBe("Данные невалидны");
    expect(validateHolder("Риша")).toBe("Данные невалидны");
    expect(validateHolder("123")).toBe("Данные невалидны");
  });
});


describe('Проверка валидности номера карты (validateNumber)', () => {
  test('Корректные значения', () => {
    expect(validateNumber("1234 5678 1234 5678")).toBe("1234 5678 1234 5678");
    expect(validateNumber("1234567812345678")).toBe("1234567812345678");
  });

  test('Некорректные значения', () => {
    expect(validateNumber("")).toBe("Данные невалидны");
    expect(validateNumber("1234")).toBe("Данные невалидны");
    expect(validateNumber("111111111111111111111111")).toBe("Данные невалидны");
    expect(validateNumber("abcd efgh ijkl mnop")).toBe("Данные невалидны");
  });
});


describe('Проверка валидности срока действия (validateExpiry)', () => {
  test('Корректные значения', () => {
    expect(validateExpiry("08/25")).toBe("08/25");
    expect(validateExpiry("12/30")).toBe("12/30");
  });

  test('Некорректные значения', () => {
    expect(validateExpiry("")).toBe("Данные невалидны");
    expect(validateExpiry("13/25")).toBe("Данные невалидны");
    expect(validateExpiry("00/25")).toBe("Данные невалидны");
    expect(validateExpiry("8/25")).toBe("Данные невалидны");
    expect(validateExpiry("08-25")).toBe("Данные невалидны");
  });
});


describe('Проверка валидности CVV (validateCVV)', () => {
  test('Корректные значения', () => {
    expect(validateCVV("123")).toBe("123");
    expect(validateCVV("999")).toBe("999");
  });

  test('Некорректные значения', () => {
    expect(validateCVV("")).toBe("Данные невалидны");
    expect(validateCVV("12")).toBe("Данные невалидны");
    expect(validateCVV("1234")).toBe("Данные невалидны");
    expect(validateCVV("12a")).toBe("Данные невалидны");
    expect(validateCVV("ab")).toBe("Данные невалидны");
    expect(validateCVV("фи")).toBe("Данные невалидны");
  });
});