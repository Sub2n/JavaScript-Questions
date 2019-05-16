// 문제 1
// 양수를 입력받아 이 수를 반지름으로 하는 원의 넓이를 반환하는 함수를 작성하세요.
// 원의 넓이는 반지름 * 반지름 * π(PI)
function circleArea(radius) {
  return (radius ** 2) * Math.PI;
}
console.log(circleArea(10)); // 314.1592653589793

// 문제 2
// 두 정수 min, max 를 입력받아, min 이상 max 미만인 임의의 정수를 반환하는 함수를 작성하세요.
function minToMax(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
console.log(minToMax(2, 8)); // 2 ~ 7 중 랜덤의 수

// 문제 3
// 정수를 입력받아, 5 단위로 올림한 수를 반환하는 함수를 작성하세요.

// 예:
function ceilBy5(num) {
  return num % 5 ? num + (5 - (num % 5)) : num;
}
console.log(ceilBy5(30)); // -> 30
console.log(ceilBy5(32)); // -> 35
console.log(ceilBy5(37)); // -> 40

// 문제 4
// 임의의 HTML 색상 코드를 반환하는 함수를 작성하세요.
function htmlHexCode() {
  function randomHex() {
    return Math.floor(Math.random() * 16);
  }
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += randomHex().toString(16);
  }
  return hexCode.toUpperCase();
}
console.log(htmlHexCode()); // #92F01A
console.log(htmlHexCode()); // #00FF12

// 문제 5
// rgb색상코드를 랜덤으로 반환하는 함수를 작성하세요.
function randomRgbCode() {
  let rgbCode = 'rgb(';
  for (let i = 0; i < 3; i++) {
    rgbCode += Math.floor(Math.random() * 128);
    if (i < 2) rgbCode += ', ';
  }
  rgbCode += ')';
  return rgbCode;
}
console.log(randomRgbCode()); // rgb(123, 44, 254);
console.log(randomRgbCode()); // rgb(12, 3, 223);

// 문제 6
// 소수인 숫자와, 자릿수를 받아서 소수를 자리수만큼만 자른 뒤 반환하는 함수를 작성하세요.
function fixFloat(float, long) {
  return float.toFixed(long);
}
console.log(fixFloat(10.12345, 2)); // 10.12
console.log(fixFloat(15.5678, 1)); // 15.6

// 문제 7
// Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.
function camelToSnake(camel) {
  let snake = camel;
  for (let i = 0; i < snake.length; i++) {
    if (snake[i] === snake[i].toUpperCase()) {
      snake = snake.replace(snake[i], (`_${snake[i].toLowerCase()}`));
    }
  }
  return snake;
}

console.log(camelToSnake('helloWorld')); // 'hello_world'
console.log(camelToSnake('helloWorldWideWeb')); // 'hello_world_wide_web'


// 문제 8
// Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.
function snakeToCamel(snake) {
  let camel = snake;
  for (let i = 0; i < camel.length; i++) {
    if (camel[i] === '_') {
      camel = camel.replace(camel.substring(i, i + 2), camel[i + 1].toUpperCase());
    }
  }
  return camel;
}
console.log(snakeToCamel('hello_world_javascript')); // 'helloWorldJavascript'
console.log(snakeToCamel('hi_my_name_is_subin')); // 'hiMyNameIsSubin'

// 문제 9
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.
// 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

// 제한 조건

// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 출처: 프로그래머스 [2016년]
function etDay(month, date) {
  const newDate = new Date();
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  newDate.setFullYear(2016);
  newDate.setMonth(month - 1);
  newDate.setDate(date);

  return days[newDate.getDay()];
}
console.log(etDay(5, 24)); // 'TUE'

// 문제 10
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수를
// String.prototype.repeat, String.prototype.replace, String.prototype.substring등의 String 관련 메소드를 활용

// 제한 조건

// s는 길이 4 이상, 20이하인 문자열입니다.
// 출처: 프로그래머스 [핸드폰 번호 가리기]
function hidePhoneNumber(number) {
  let encodedNumber = number;
  for (let i = 0; i < encodedNumber.length - 4; i++) {
    encodedNumber = encodedNumber.replace(encodedNumber[i], '*');
  }
  return encodedNumber;
}
console.log(hidePhoneNumber('01033334444')); // '*******4444'
console.log(hidePhoneNumber('027778888')); // '*****8888'
