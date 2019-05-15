# 1. 일급 객체의 조건

1. 런타임에 리터럴로 생성할 수 있다.
2. 변수나 자료구조에 할당할 수 있다.
3. 함수의 매개변수로 전달할 수 있다.
4. 함수의 반환값으로 사용할 수 있다.

# 2. 프로토타입 기반 상속의 이점

* 코드의 중복을 제거할 수 있다.
* 유지보수의 효율성을 높인다.
* 코드의 재사용을 가능하게 한다.

# 3. constructor, prototype, \__proto__

## prototype

생성자 함수가 생성할 instance에게 상속할 prototype 객체를 생성자 함수의 prototype 프로퍼티로 가리킨다.



ex) Object 생성자 함수의 prototype 프로퍼티로 가리키고 있는 prototype 객체

## constructor

prototype 객체가 constructor 프로퍼티로 생성자 함수를 가리킨다.



ex) Object.prototype과 바인딩 된 prototype 객체의 constructor 프로퍼티가 Object 생성자 함수를 참조

[[Constructor]] : 함수 중에 constructor인 함수



## \__proto__

생성자 함수가 생성한 instance는 상속받은 \__proto__ 접근자 프로퍼티를 통해서 자신의 prototype 에 접근할 수 있다. 자신의 prototype에 접근해 프로퍼티를 추가할 수 있으나 변경, 삭제는 허용되지 않는다.



# 4. 프로토타입 체인이란?

자바스크립트 엔진이 프로퍼티를 찾을 때, 우선 해당 객체의 프로토타입에서 검색하고, 없으면 프로토타입 체인을 따라서 부모 프로토타입으로 올라가서 순차적으로 검색한다. 프로토타입 체인은 프로토타입 간 상속을 구현한 자료구조이다.

스코프체인은 상속 개념이 아니지만 프로토타입 체인은 상속을 구현한 것. 프로토타입 체인의 최상위 프로토타입은 Object.prototype이다.

