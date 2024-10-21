function compareStrokeLength (string, maxLength) {
  return string.length <= maxLength;
}

  let string = 'HTML Academy';
  let maxLength = 20;
  console.log(compareStrokeLength(string, maxLength));

function isPalindrome (string) {
  let checkedString = string.toLowerCase();

  return checkedString === checkedString.split('').reverse().join('');
}

  let string = 'Hello'
  console.log(isPalindrome(string));
