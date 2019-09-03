## 웹 다마고치 generators

연속되는 애니메이션을 위해서 settimeout의 delay를 쓰게 됨

결국 비동기이므로 처음에 Promise를 사용해서 then 으로 이루어진 callback 지옥을 만들어짐

then으로 이어졌을 뿐 대규모의 비동기 작업을 하다보면 Promise가 붕괴됨

사용자가 액셔나는 동안 애니메이션이 중지되어야 하는데 잘 되지 않음

펜딩 이벤트가 필요

그러나 Promise는 사용자 이벤트가 발생하더라도 애니메이션을 중간에 중단할 수 없음

generator는 중간에 pause가 가능

```javascript
function* generator {
    // pause
}
```

```javascript
function* count() {
    yeild 1;
    yeild;
    yeild 3;
}

var generator = count();

generator.next();
```

yeild가 pause

```javascript
function* forever(num) {
    while  (true) {
        num = yeild 2 + num;
    }
}

var generator = forever(2);

generator.next();
generator.next();
generator.next();

// Generator {};
// { value: 4, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
```

```javascript
function* outer() {
    yeild 1;
    yeild* inner();
    yeild 2;
}

function* inner() {
    yeild "a";
    yeild "b";
}
```

generator는 내부가 아니라 외부에서만 재개할 수 있다. 내부에서도 재개할 수 있으려면 외부의 협력자를 불러줘야함 => coroutine

```javascript
function coroutine(function* bouncce() {	
	yeild 1;
    yeild 2;

}) {
    // generator를 인자로 받아서 여차저차함
}
```

github/jcreighton 코드 ㅠㅠ



## Don't block the event loop!

Call Stack에서 함수를 차례로 실행하다가 시간이 오래 걸리는 함수를 만나면 뒤의 작업들이 딜레이가 생김

#### How to habdle concurrency in browser

Web APIs, Event loop가 Call Stack을 보조해서 비동기 프로그래밍이 가능해진다. 모든 일이 순차적으로 발생하는 것이 아니라 Call Stack에서 비동기 함수를 만나면 Web API에 드

#### Event loop

1. Task 있으면 먼저 들어온 것부터 처리  (MicroTask가 다 진행되면 그 다음에 Task 처리)
2. Task 없으면 Event queue의 event를 call stack에 밀어넣음 

#### Task vs MicroTask

Task는 브라우저 혹은 그 외 구동환경에서 순차적으로 실행되어야 하는 작업 스크립트 실행, 셋타임아웃, UI 이벤트 발생으로 인한 콜백

MicroTask는 바로 다음으로 실행되어야할 비동기 작업. 높은 우선순위 then, next 등

#### 불편한 UI/UX를 발생기키는 과정

태스크는 이벤트 루프에 의해 발생되기 때문에 결국 비동기도 기다린다

마이크로 태스크가 언제나 높은 우선순위를 가지므로 고비용 마이크로태스크가 실행/대기되고 있다면 일반 태스크는 블락되게 되므로 UX를 해칠 수 있다

#### 해결법

- 다른 스레드를 이용
  - Web Worker
  - 단일 스레드가 아니라 멀티 스레드를 이용합시다 
  - 한계 > Web Worker는 DOM 갱신 불가능
- 너무 무거운 Task는 적절하게 쪼개기
  - Scheduling
  - github.com/jaeseokk/chunk-scheduler
- 더 최적화 > DOM 갱신 최소화
  - Input이 끝나면 그 때 DOM 다시 그리기!

#### 정리

실행시간이 긴 Task나 MicroTask가 렌더링이나 사용자 경험을 블락한다면 적절히 최적화 해야한다.

Web worker같은 백그라운드 스레드에 일을 위임하거나, long-running-task를 작게 쪼개서 다른 중요한 UI 이벤트가 block되지 않게 해야한다.

Web 개발에도 운영체제 (스레드, 스케줄링) 지식이 필요하다는 것을 느낌 



## Mocha 오픈 소스 프로젝트에 참여하며 느낀 것들

Mocha는 JavaScript Test framework

Jset, Mocha, Jasmine 등 Testing

Mocha는 Community 기반 Open source : 대부분 자기 직업이 있고 따로 시간을 내서 메인테이너로 활동



## JavaScript Proposals

### Conditionals in JS

- if/else
- switch
- ternary expressions

#### - Pattern Matching

tc39 제안에 올라와있음

case statement, when clause, match guards, match all as last statement

expression 임 !!

### Function composition in JS

#### - Pipeline operator |>

```javascript
return getCookedRice
	|> () => (addFish)
	|> addToBento;
	|> await;
```



### JS Cold Start

script 태그 발견 시 자바스크립트 파싱, AST 생성하게 됨

#### - Binary AST

Cold start에 들어가는 시간을 줄일 수 있음

졸려ㅜ죽겠다



## Functional Programming : Redux and Canvas

React에서 상태관리를 위해서 사용하는 Redux (저장소같은 느낌)와 함게 함수형 프로그래밍이 거론

책 : 함수형 자바스크립트

combineReducer 뭔지 모르겠다

reducer ? 감소?

Ramda.js : 커링과 합성이 주특기인 함수형 라이브러리

pipe : 함수들을 순차적으로 합성 / compose는 실행순서가 반대라서 가독성 떨어질 것 같아서 안 씀

state를 하나로 합치고 많은 reducer를 사용하는 방법



> "Few data structures, many operations."



**currying** means creating a function that returns another functions that take in arguments.

-> argument를 저장

placeholder가 없는 함수 > placeholder는 언제 왜 쓰는지

Polymorphism을 함수형에서 구현 

Discriminated Union



## Design System

추상적인, 실물적인 element를 모두 포함

color palettes, design patterns, guidelines, code . . .

ideation -> design -> code -> production

TypeScript enables developer trust interface oriented development.



## Web Assembly _ Flaki

Mozila Tech Speaker

webassembly.org

mozila에 web assembly 전담팀이 생겨 개발 중

웹 어셈블리를 왜 사용해야 하는지? 웹 어셈블리의 목표가 뭔지

#### History provides context

웹 어셈블리는 다양한 프로그래밍 언어로 만들어진 프로그램들이 웹에서 안전하게 구동되도록 만들어주는 툴

안전한 실행이란 다양한 방식으로 실행이 되면서 어셈블리 런타임 내에서 안전성, 보안성 정책을 엄격하게 준수하며 수행한다는 것

2013년 asm.js 정말 빠르진 않지만 만족할만큼 브라우저에서 구동

2015년 웹어셈블리 출시

앞으로 전망이 좋은 것 같다..

웹 어셈블리는 C++, Go, Rust 등을 브라우저에서 동작할 수 있게 해준다. 자바스크립트는 노출되어있어서 보안상 취약점이 있다. 웹 어셈블리는 자바스크립트를 대체하는 것이 아니라 맞물려서 더 빠르고 안전한 애플리케이션을 만들 수 있다. 자바스크립트에서 웹 어셈블리를 호출하듯이 씀. 순수 자바스크립트만으로 힘들었던 연산을 빠르게 작업할 수 있다.



## How to process music with JS

#### Web Audio

단방향 그래프로, input > effects > output 을 내는데 그 사이에 여러 노드가 있음

music stream

웹에 디폴트로 stream input 약화시키는 처리가 되어있어서 코드 추가해줘야함..

기타 컴퓨터에 연결해서 소리조절할수있음..

자바스크립트로 sound wave shape (sin 함수 꼴)를 조정해서 다양한 effect 줄 수 있음

```javascript
const waveShaper = new WaveShaperNode(context);
waveShaper.curve = makeDistortionCurve(amount);

...
```

OverDrive, Distortion, Fuzz 

#### Impulse Response

사진이 빛에 비친 특정 색상을 나타내듯 특정 시점의 사운드를 포착하고 반영

js-rocks.web.app

















