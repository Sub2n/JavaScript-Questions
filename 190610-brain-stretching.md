## Closure

자신을 포함하고 있는 외부 함수보다 중첩 함수가 더 오래 유지되는 경우, 외부 함수 밖에서 중첩 함수가 호출되더라도 외부 함수의 식별자에 접근할 수 있는 함수를 일반적으로 **클로저(Closure)**라고 부른다.

함수 객체는 생성될 때 자신의 내부 슬롯 `[[Environment]]` 에 현재 실행중인 실행 컨텍스트의 렉시컬 환경의 참조값을 저장한다. 그리고 함수가 호출되어 실행 컨텍스트가 생성될 때마다 자신의 OuterLexicalEnvironmentReference에 `[[Environment]]` 참조값을 할당해 상위 스코프를 참조한다. 이게 자바스크립트의 클로저가 동작하는 원리이다.