# 변수 (Variable)
메모리 공간에 붙인 이름이면서 그 메모리 공간 자체를 뜻한다.

# 변수 선언 (Variable Declaration)
자바스크립트에서는 `var`, `let`, `const` 키워드를 이용해 변수를 선언하는데, 이 때 자바스크립트 엔진이 암묵적으로 `undefined`를 할당 해준다.

키워드 없이 그냥 a = 10; 선언하면 전역변수가 된다. 

변수 선언문은 parsing-time에 실행이 된다. 반면, 할당문은 run-time에 미리 실행된 선언문을 제외하고 순차적으로 실행이 된다.

```javascript
// var foo는 선언문이라서 hoisting 되지만, function(){}은 할당문이라서 hosting 안 됨
foo()
var foo = function(){}
```

# 정의
식별자의 정체를 알리는 것 (변수든 함수든)

```javascript

// 함수 선언, 정의 
function foo(a, b){
  return a+b;
}

//변수 선언
var a;

// 할당
a = 10;

// 변수를 정의 /변수 선언 + 할당
var a = 10;
```

# 할당
변수의 메모리 공간에 값을 넣는다.

# 식별자 (Identifier)
개발자가 사용하기 위해 변수, 함수, 클래스 등에 붙인 이름

실행 컨텍스트의 lexical 환경 안에 있는 환경 레코드에 식별자가 등록된다. 자바스크립트 엔진은 실행 컨텍스트를 통해 식별자와 스코프를 관리한다.

# 브라우저는 어떻게 동작하는가?

## HTML ver 1.1
0. client가 index.html 요청해서 서버가 index.html 보내줌

1. HTML parser가 index.html 파싱하다가 css 만나면 blocking. 서버에 css file을 요청.

2. 서버에서 css file 받아서 CSS parser가 파싱 완료 해서 CSSOM tree 만든다.

3. CSS parsing 끝나면 HTML parser가 다시 동작하다가 script를 만나면, 또 blocking 돼서 서버에 javascript file 요청

4. 서버에서 javascript file 받으면 control이 자바스크립트 엔진으로 넘어간다. JavaScript parser가 파싱 완료 해서 AST 생성. Interpreter가 AST에서 머신코드를 한 줄씩 생성하여 실행한다.

5. 그러나 우리는 HTML `<body>` 가장 밑부분에 `<script>`를 작성하므로, 자바스크립트 코드가 실행될 때 DOM tree와 CSSOM tree가 이미 생성되어있어 정상적으로 동작한다.

## HTML ver 2.0
index.html만 요청하면 서버가 html에 포함된 img, css, javascript file을 한번에 보내준다.

JavaScript를 실행할 때 DOM과 CSSOM을 건드려야하는데 `<script>`가 `<head>`에 선언돼있어서 `<body>`까지 parsing이 안 돼있는 경우 접근 못 함

즉, JavaScript는 HTML과 CSS parsing이 끝나야 실행할 수 있다. 그렇기 때문에 synchronous하게 해도 되는 것이다. `<script>`의 async, defer 잘 안 씀
