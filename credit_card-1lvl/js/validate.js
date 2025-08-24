export function validateHolder(value) {
  if (!value) return false;
  return /^[A-Za-z]+ [A-Za-z]+$/.test(value.trim());
}

export function validateNumber(value) {
  if (!value) return false;
  const cleaned = value.replace(/\s+/g, "");
  return /^\d{16}$/.test(cleaned);
}

export function validateExpiry(value) {
  if (!value) return false;
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value);
}

export function validateCVV(value) {
  if (!value) return false;
  return /^\d{3}$/.test(value);
}

console.log(validateHolder("Knyazeva Risha"));
console.log(validateNumber("1234 5678 1234 5678"));
console.log(validateExpiry("08/25"));
console.log(validateCVV("123"));

console.log(validateHolder(""));
console.log(validateHolder("Risha"));
console.log(validateHolder("Риша"));
console.log(validateHolder("123"));

console.log(validateNumber("111111111111111111111111111111111"));
console.log(validateNumber("1234"));
console.log(validateNumber(""));

console.log(validateExpiry("13/25"));
console.log(validateExpiry(""));

console.log(validateCVV("12a"));
console.log(validateCVV("1"));
console.log(validateCVV("12"));
console.log(validateCVV("ab"));
console.log(validateCVV("фи"));