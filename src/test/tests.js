import ValidationService from '../service/validationService.js'

test('checks if the data is a string', () => {
  expect(ValidationService.ifString("Maria")).toBe(true);
})

test('checks if the data is a string', () => {
  expect(ValidationService.ifString(1245)).toBe(undefined);
})

test('checks if the data is a string', () => {
  expect(ValidationService.ifString(true)).toBe(undefined);
})

test('checks if the data is a string', () => {
  expect(ValidationService.ifString('true')).toBe(true);
})

test('checks if the data is a string', () => {
  expect(ValidationService.ifString('12458')).toBe(true);
})

test('checks if the data is a number', () => {
  expect(ValidationService.ifNumber(1245)).toBe(true);
})

test('checks if the data is a number', () => {
  expect(ValidationService.ifNumber("1245")).toBe(undefined);
})

test('checks if the data is a number', () => {
  expect(ValidationService.ifNumber(true)).toBe(undefined);
})

test('checks if the data is a non-empty string', () => {
  expect(ValidationService.ifStringNotEmpty('')).toBe(undefined);
})

test('checks if the data is a non-empty string', () => {
  expect(ValidationService.ifStringNotEmpty('Maria')).toBe(true);
})