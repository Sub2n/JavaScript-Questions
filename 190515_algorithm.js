// if문 사용
function evenOrOdd(num) {
  if (num % 2) {
    return 'Odd';
  }
  return 'Even';
}

// 3항 연산자 사용
function evenOrOdd2(num) {
  return num % 2 ? 'Odd' : 'Even';
}


console.log(evenOrOdd(42));
console.log(evenOrOdd(55));
console.log(evenOrOdd2(288));
console.log(evenOrOdd2(25));

// #2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.

// (hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]

function getCount8() {
  let concatString = '';
  let count = 0;

  for (let i = 1; i < 10001; i++) {
    concatString += i;
  }

  for (let j = 0; j < concatString.length; j++) {
    if (concatString[j] === '8') {
      count += 1;
    }
  }
  return count;
}

console.log(getCount8()); // 4000

function alphaString46(s) {
  if (s === undefined || s.length < 4 || s.length > 6) return false;
  for (let i = 0; i < s.length; i++) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(s[i])) return false;
  }
  return true;
}

console.log(alphaString46('1234'));
console.log(alphaString46('9014'));
console.log(alphaString46('723'));
console.log(alphaString46('a234'));
console.log(alphaString46(''));
console.log(alphaString46());
