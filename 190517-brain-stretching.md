## this는 다음 상황에서 어떻게 바인딩 되는가?
1. 일반 함수 호출

   함수 내부의 this에 전역 객체가 바인딩 된다.

   - 브라우저에서 전역객체는  window
   - Node.js 환경에서 전역객체는 global 객체

2. 내부 함수(중첩 함수) 호출

   ``` javascript
   function foo() {
       console.log(this);
       function bar() {
           console.log(this);
       }
       bar(); // 중첩 함수 호출
   }
   foo();
   ```

   일반함수로 호출했으므로  중첩함수 내부의 this에 window가 바인딩 된다.

3. method 호출

   method로 호출한 함수 내부의 this에는 자신을 호출한 객체가 바인딩 된다.

4. 생성자 함수 호출

   this 에 생성자 함수가 생성할 인스턴스가 바인딩 된다.

5. 콜백 함수 호출

   ```javascript
   function foo(f) {
       f();
   } 
   
   const bar = function () {
       console.log(this);	// window 
   }
   
   foo(bar);
   ```

   인수로 넘겨받은 콜백 함수를 일반 함수로 호출했으므로 콜백 함수 내부의 this에 window가 바인딩 된다.

6. Function.prototype.apply / call / bind에 의한 간접 호출

   - apply(thisArg[, arguments[...]])

     ```javascript
     function foo() {
         console.log(this);
     }
     const thisObj = { x: 1 };
     const args = [1, 2, 3];
     foo.apply(thisObj, args);
     ```

     apply 메소드는 argument로 전달한 thisArg 객체를 자신을 호출한 함수의 this로 전달하면서 호출한다. 이 때  arguments를 배열로 전달한다.

   - call(thisArg[, arg1, arg2, arg3, ...])

     ```javascript
     function foo() {
         console.log(this);
     }
     const thisObj = { x: 1 };
     foo.apply(thisObj, 1, 2, 3);
     ```

     call 메소드도  argument 로 전달한 thisArg 객체를 자신을 호출한 함수의 this로 전달하면서 호출한다. 이 때 arguments를 배열이 아니라 풀어서 나열해 전달한다.

   - bind(thisArg[, arg1, arg2, arg3, ...])

     ``` javascript
     function foo(callback) {
         
         callback.bind(this)();
         // callback.apply(this);
         // callback.call(this);
     } 
     
     const bar = function () {
         console.log(this);	// window 
     }
     
     foo(bar);
     
     const thisArg = { x: 1 };
     foo.bind(thisArg)
     ```

     bind 메소드는 argument로 전달받은 thisArg 객체를 자신을 호출한 함수의 this로 바인딩한다. 호출은 하지 않는다.

