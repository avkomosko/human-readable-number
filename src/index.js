module.exports = function toReadable (number) {
  let result;
  let ones = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'};
  let teens = {10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'};
  let tens = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};
  let str = number.toString();
  let belowHundredNumber = Number(str.slice(-2));
  
  if (str.length === 1) {
    result = ones[number];
  } else if (str.length === 2) {
    if (number >= 10 && number < 20) {
        result = teens[number];
    } else if (number >= 20 && number < 100 && str[1] === '0') {
        result = tens[number];
    } else if (number < 100) { 
        result = `${tens[Math.floor(number/10)*10]} ${ones[(number % 10)]}`;
    }  
  } else { 
    if (belowHundredNumber === 0) {
      result = `${ones[Math.floor(number/100)]} hundred`;
    } else {
      result = `${ones[Math.floor(number/100)]} hundred ${toReadable((belowHundredNumber))}`;
    }
  }
  return result;
}
    

