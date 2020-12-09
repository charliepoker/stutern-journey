// Write a program to find the number of even digits in a given integer, andfunction evenDigits(number) {
  let ctr = 0;
  while (num) {
    ctr += num % 2 === 0;
    num = Math.floor(num / 10);
  }
  return ctr || 'none';
}

console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));
console.log(even_digits(3333));