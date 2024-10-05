export const add = (input: string): number => {
  // Split the input string by commas
  const numbers = input.split(',')
    .map(item => item.replace(/"/g, '').trim())
   
    .map(Number);
    const negativeNumbers = numbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
  // Sum the numbers
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
