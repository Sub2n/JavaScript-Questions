# 고차 함수(Higher Order Function)란 무엇이고 어떻게 활용되는가?

## 고차 함수

함수를 parameter로 전달받거나, 함수를 결과로 return하는 함수

## 고차함수의 활용

callback 함수를 parameter로 전달받는 함수나 Array.prototype의 메소드 등으로 활용된다.

ex) Array.prototype.filter, map, sort, reduce, some, every 등



# Rest Parameter & Spread Operator

- Rest Parameter

  - 함수 정의에서 Spread 연산자를 사용해서 표현함

  - 풀어져서 들어오는 arguments를 배열 형태로 전달 받는다.

  - parameter의 맨 끝에만 쓸 수 있다.

    ```javascript
    function foo(a, b, ...args) {
        Array.isArray(args); // true
        console.log(a); // 1
        console.log(b); // 2
        console.log(args); // [3, 4, 5]
    }
    foo(1, 2, 3, 4, 5);
    ```

    

- Spread Operator

  - `...`뒤에 오는 배열을 풀어준다.

  - 피연산자가 iterable이어야 한다.

    ```javascript
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    
    const arr3 = [...arr1, ...arr2]; // concat처럼..
    
    /* Spread 연산자를 사용한 인수
      배열 인수는 분리되어 순차적으로 매개변수에 할당 */
    function bar(x, y, z) {
      console.log(x); // 1
      console.log(y); // 2
      console.log(z); // 3
    }
    
    // ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(-> 1, 2, 3)
    // spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
    bar(...[1, 2, 3]);
    
    // ES6
    function foo(v, w, x, y, z) {
      console.log(v); // 1
      console.log(w); // 2
      console.log(x); // 3
      console.log(y); // 4
      console.log(z); // 5
    }
    
    // ...[2, 3]는 [2, 3]을 개별 요소로 분리한다(→ 2, 3)
    // spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다.
    foo(1, ...[2, 3], 4, ...[5]);
    ```

    