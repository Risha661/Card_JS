import {
  validateCVV,
  validateCardHolder,
  validateCardNumber,
} from "./validate.js";

import { el, mount, setChildren } from "redom";

describe("Validation Tests", () => {
  test("validateCardHolder should return true for valid holders", () => {
    expect(validateCardHolder("John Doe")).toBe(true);
    expect(validateCardHolder("Knyazeva Irina")).toBe(true);
  });

  test("validateCardHolder should return false for invalid holders", () => {
    expect(validateCardHolder("Alice")).toBe(false);
    expect(validateCardHolder("Лампова Мария")).toBe(false);
    expect(validateCardHolder("Mari661")).toBe(false);
    expect(validateCardHolder("")).toBe(false);
    expect(validateCardHolder(".,/")).toBe(false);
  });

  test("validateCardNumber should return true for valid numbers", () => {
    expect(validateCardNumber("1234567812345678")).toBe(true);
    expect(validateCardNumber("1234567890123")).toBe(true);
    expect(validateCardNumber("1234567890123456")).toBe(true);
  });

  test("validateCardNumber should return false for invalid numbers", () => {
    expect(validateCardNumber("1234-5678-1234-5678")).toBe(false);
    expect(validateCardNumber("1234567")).toBe(false);
    expect(validateCardNumber("123456781234567890")).toBe(false);
    expect(validateCardNumber("abcd1234")).toBe(false);
    expect(validateCardNumber("")).toBe(false);
  });

  test("validateCVV should return true for valid CVV", () => {
    expect(validateCVV("123")).toBe(true);
    expect(validateCVV("1234")).toBe(true);
  });

  test("validateCVV should return false for invalid CVV", () => {
    expect(validateCVV("12")).toBe(false);
    expect(validateCVV("1")).toBe(false);
    expect(validateCVV("12345")).toBe(false);
    expect(validateCVV("abc")).toBe(false);
    expect(validateCVV("")).toBe(false);
    expect(validateCVV("--")).toBe(false);
    expect(validateCVV("--00000")).toBe(false);
  });
});
