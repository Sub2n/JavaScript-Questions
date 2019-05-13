// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
var x = 15;

if (x > 10 && x < 20) {
  console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
{
  let even = '';
  for (let i = 0; i < 10; i += 2) {
    even += i;
  }
  console.log(even);
}

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 9; i > 0; i -= 2) {
  console.log(i);
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
{
  let i = 0;
  while (i < 10) {
    console.log(i);
    i += 2;
  }
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
{
  let i = 9;
  while (i > 0) {
    console.log(i);
    i -= 2;
  }
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
{
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  console.log(sum);
}

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
{
  let sum = 0;
  for (let i = 1; i < 20; i++) {
    if (i % 2 && i % 3) {
      sum += i;
    }
  }
  console.log(sum);
}

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
{
  let sum = 0;
  for (let i = 1; i < 20; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (let i = 1; i < 6; i++) {
  console.log(`[ ${i}, ${6 - i} ]`);
}

// 11. 삼각형 출력하기 - pattern 1
{
  let star = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i + 1; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}


// 12. 삼각형 출력하기 - pattern 2
{
  let star = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      star += ' ';
    }
    for (let k = i; k < 5; k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// 13. 삼각형 출력하기 - pattern 3
{
  let star = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// 14. 삼각형 출력하기 - pattern 4
{
  let star = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 5 - i; j++) {
      star += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// 15. 정삼각형 출력하기
{
  let star = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4 - i; j++) {
      star += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// 16. 역정삼각형 출력하기
{
  let star = '';
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      star += ' ';
    }
    for (let k = 0; k < 2 * (4 - i) + 1; k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}
