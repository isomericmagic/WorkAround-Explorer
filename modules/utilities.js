function formatNumber(number) {
  let numAsString = number.toString()
  let subString = '';
  let finalResult = '';
  if (numAsString.includes('.')) {
    let periodIndex = numAsString.indexOf('.');
    subString = numAsString.substring(periodIndex);
    if (subString.length === 2) {
      subString += "0";
    }
    numAsString = numAsString.slice(0, periodIndex);
  }
  let numArray = numAsString.split('');
  let finalArray = [];
  for (let i=(numArray.length-1); i >=0; i--) {
    finalArray.push(numArray[i]);
    if (i % 3 === 0 && i > 0 && numAsString.length % 3 === 0) {
      finalArray.push(',');  
    } else if (i % 3 === 2 && i > 0 && numAsString.length % 3 === 2) {
      finalArray.push(',');
    } else if (i % 3 === 1 && i > 0 && numAsString.length % 3 === 1) {
      finalArray.push(',');
    }
  }
  finalArray.reverse();
  finalResult = finalArray.join('');
  if (finalResult.length > 14) {
    console.log('Very large number entered. Result will be lowered to nearest whole dollar amount.');
  } else {
    finalResult += subString;
  }
  return finalResult;
}

export { formatNumber };