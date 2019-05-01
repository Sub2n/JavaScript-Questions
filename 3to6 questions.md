# Deifference between JavaScript and ECMA Script

## JavaScript
JavaScript는 core를 이루는 **ECMAScript** + Broswer가 별도 지원하는 **client Web API**를 포함한 개념이다.

## ECMAScript
JavaScript의 Standard Specification. Core syntax(Type, value, object and property, functions, built-in object, etc.)를 **규정**한다.

따라서 JavaScript는 표준 문법인 ECMAScript 외에 Web API를 포함하는 보다 넓은 개념이다.

# What is Web API?

ECMA에서 개발한 script 언어인 ECMAScript가 있다면 browser에서 실행할 수 있는 Web API들 또한 존재한다.

## Script
Script는 컴파일과 같은 전처리(pre-processing)가 필요 없는 프로그램 코드를 말한다. 웹 브라우저에서 Script라고 하면 보통 페이지가 다운로드 되거나 유저 이벤트 발생시 실행되는 JavaScript 프로그램 코드를 의미한다.

Scripting은 웹 페이지를 보다 동적으로 만들어준다. 예를들어 새로운 페이지를 로딩하지 않고도 페이지의 내용을 수정할 수 있거나(Dynamic HTML) 내용이 추가되고 페이지에서 내용을 전송할 수 있도록(AJAX) 할 수 있다. 

이런 상호작용은 웹 페이지가 OS에서 돌아가는 소프트웨어처럼 동작할 수 있게 해준다.

## Scripting Interface

W3C이 개발한 가장 기본적인 Scripting Interface는 DOM으로, DOM은 프로그램과 script가 문서의 구조, 컨텐츠, 스타일에 동적으로 접근하고 업데이트 할 수 있게끔 한다. DOM specification이 DHTML의 core를 형성한다.

User와 script가 DOM을 이용한 컨텐츠의 수정하는 것은 개발자들이 UI를 풍부하게 만들 수 있는 event를 발생시킨다.

- XMLHttpRequest는 새로운 문서 불러오지 않고 Web에서 추가적으로 content 불러올 수 있게 해줌 (AJAX의 핵심 컴포넌트)

- Geolocation API는 브라우저 기반 애플리케이션에서 유저 위치를 알 수 있게 해줌


# 3. 자바스크립트 개발 환경과 실행 방법

1. Web API가 정확하게 하는 역할이 무엇인가?

> 만약 자바스크립트가 브라우저를 통해 사용자 컴퓨터의 로컬 파일을 삭제하거나 수정하고 생성할 수 있다면 이는 사용자 컴퓨터가 악성 코드에 그대로 노출된 것과 마찬가지다. 따라서 보안 상 이유로 Web API에서는 File 시스템을 제공하지 않는다.
2. File 시스템을 이용하지는 않지만 인터넷 상에는 악성 사이트가 많다. 이런 사이트는 무엇을 통해 사용자에게 해를 가하는가?
3. Rendering Engine이 멈추지 않고 JavaScript Engine과 Asyncronous하게 동작하는 브라우저는 없는가?

>생성된 AST는 꽤나 복잡한 과정을 통해 바이트 코드 또는 최적화된 머신 코드로 변환되어 인터프리터에 의해 실행된다.
4. 꽤나 복잡한 과정이 무엇인가?

> 간단히 말해 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행 환경이 Node.js이다.
5. 브라우저 이외의 환경이란 OS를 말하는 것인지

# 4. Variable
1. 파싱타임에 변수의 선언이 끝나고 런타임에 실행구문이 실행될 때, 실행 컨텍스트에 순서대로 실행 결과가 반영되는가?
2. `var` 키워드를 사용하지 않은 변수 선언은 선언 단계와 초기와 단계가 동시에 진행되지 않는가?
3. `var` 키워드를 사용해 선언한 변수와 그렇지 않은 변수 사이에 어떤 차이가 있는가?

> 변수 선언은 다른 코드가 실행되기 이전, 즉 파싱 타임에 먼저 실행되지만 값의 할당은 코드가 순차적으로 실행되는 시점인 런타임에 실행된다.
4. 변수에 할당하며 선언한 함수의 경우 hoisting이 되지 않는다고 알고 있다. 이유는?
5. const로 선언한 변수는 변수명으로 지정된 memory space의 위치가 변하지 않는 것이라고 알고있다. 맞나?

# 5. Data Type
```javascript
var score = 50 + 50;
```
> 리터럴 표기법은 값을 생성하는 가장 기본적인 방법이고 이를 통해 생성된 리터럴은 값의 최소 단위이다. 리터럴은 그 자체로 값이 될 수 있지만 모든 값이 리터럴인 것은 아니다.
1. 그렇다면 표현식은 그 자체로 값인가?
2. 아니라면 모든 표현식은 값으로 평가되는가?
3. 모든 값이 리터럴이 아닌 것처럼 모든 값이 표현식은 아닌 것인지 궁금
4. 템플릿 리터럴 내의 개행(\n)도 있는 그대로 적용되는가?
5. 상수의 정확한 사용법과 특징이 궁금 (상수에 대한 모든 것)

# 6. Operator

> 할당 연산은 변수에 값을 할당하는 부수 효과만 있을 뿐 값으로 평가되지 않을 것처럼 보인다. 하지만 할당 연산은 하나의 값으로 평가되는 표현식이다. 할당 표현식은 할당된 값으로 평가된다. 

1. if, for, while은 keyword가 아니라 statement인가?
2. x = 100에서, 100은 literal notation으로 생성한 literal이고 x는 identifier expression이며 x=100 자체는 expression인 statement라서 평가된 값으로 할당되는 게 맞나?
> 동등 비교(==) 연산자는 좌항과 우항의 피연산자를 비교할 때 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값을 갖는지 비교한다. 따라서 동등 비교 연산자는 좌항과 우항의 피연산자가 타입은 다르더라도 암묵적 타입 변환 후에 같은 값을 수 있으면 true를 반환한다.
3. == 로 암묵적 타입 변환을 할 때 좌항의 타입으로 우항을 변환하는 건지, 우항의 타입으로 좌항을 변환하는 건지 궁금
4. 
```javascript
var x, y, z;

x = 1, y = 2, z = 3; // 3
```
x = 1, y = 2, z = 3에 다 할당이 안 되고 z = 3에만 할당이 되는 건가?
5. undefined를 string으로 형변환시 'undefined'가 되는건가?
