 ## 동기식 처리와 비동기식 처리

- 동기식 처리(Synchronous processing model)
  - Blocking model
  - 어떤 작업이 서버에 데이터 요청하는 I/O가 오래 걸려도 다른 작업들을 blocking하고 기다린다.
- 비동기식 처리(Asynchronous processing model)
  - Non-blocking model
  - 오래 걸리는 작업을 기다리지 않고 다음 작업을 수행한다.

## Event Driven Single Thread

이벤트로 구성된, 이벤트가 이끄는 프로그램. 하나의 스레드 이용

### Call Stack

호출된 함수는 Call Stack에 들어간다. 하나의 Call Stack을 사용한다는 것은 하나의 task가 끝나기 전에는 다른  task가 수행될 수 없음을 의미한다. 어떤 한 순간에 하나의 task만 수행할 수 있다.

### Event Queue (Task Queue)

비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, Timer 함수(setTimeout(), setInterval())의 콜백 함수가 보관되는 영역

**이벤트 루프(Event Loop)에 의해 특정 시점(Call Stack이 비어졌을 때)에 순차적으로 Call Stack으로 이동되어 실행**된다.

### Event Loop

Scheduler같은 개념으로 Call Stack에 실행중인 task가 있는지, Event Queue에 대기중인 task가 있는지 주기적으로 확인한다. Call Stack이 비어있을 때 Event Queue의 task를 Call Stack으로 옮기고 실행한다.

## Event Propagation / Event Delegation

### Event Propagation 이벤트 전파(흐름)

어떤 요소에 이벤트가 발생했을 때, 이벤트는 상위 요소에서 시작하여 이벤트 발생 요소까지 전파되었다가 다시 상위 요소로 연쇄적으로 올라간다. 이벤트 전파 방향에 따라서 캡처링(Capturing)과 버블링(Bubbling)으로 구분한다.

#### Capturing

자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 이벤트를 발생시킨 자식 요소까지 도달하는 것

#### Bubbling

자식 요소에서 발생한 이벤트가 부모 요소로 전파되는 것

#### Event Delegation 이벤트 위임

다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를 바인딩하는 방법

이벤트가 [이벤트 흐름](https://poiemaweb.com/js-event#7-event-flow-이벤트의-흐름)에 의해 이벤트를 발생시킨 요소의 부모 요소에도 영향**(버블링)**을 미치기 때문에 가능한 것

