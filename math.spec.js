const { soma } = require("./math");

it("should sum two numbers equal 15", () => {
  const result = soma(5, 3);
  expect(result).toBe(8);
  expect(result).not.toBe(10);
});

it('should sum two numbers equal 20', () => {
  const result = soma(6, 14);
  expect(result).toBe(20);
  expect(result).not.toBe(28);
});
