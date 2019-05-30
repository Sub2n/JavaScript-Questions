## 비동기 통신은 어떻게 동작하는가?

서버로 요청하는 작업을 기다리지 않고(non-blocking) 바로 다음 작업을 실행한다. 서버로부터 요청이 오면 해당 작업은 Event Queue에 들어가  Call Stack이 비어서 Event Loop에 의해 Call Stack으로 이동하기를 기다린다.



## Ajax의 원리

**Ajax(Asynchronous JavaScript and XML)**는 자바스크립트를 이용해서 **비동기적(Asynchronous)**으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미

Ajax를 사용하면 페이지 전체를 다시 요청하는 것이 아니라, 갱신이 필요한 데이터만 요청해서 웹 페이지의 일부분만을 갱신하므로 빠른 퍼포먼스와 부드러운 화면 표시가 가능하다.

![Ajax](https://user-images.githubusercontent.com/48080762/58602061-5d2ee280-82c6-11e9-9a19-8f8f330e078a.png)

① : 사용자에 의한 요청 이벤트가 발생한다.

② : 요청 이벤트가 발생하면 이벤트 핸들러에 의해 자바스크립트가 호출된다.

③ : 자바스크립트는 XMLHttpRequest 객체를 사용하여 서버로 요청을 보낸다.

​    이때 웹 브라우저는 요청을 보내고 나서, 서버의 응답을 기다릴 필요 없이 다른 작업을 처리할 수 있다. (Asynchronous)

④ : 서버는 전달받은 XMLHttpRequest 객체를 가지고 Ajax 요청을 처리한다.

⑤와 ⑥ : 서버는 처리한 결과를 HTML, XML 또는 JSON 형태의 데이터로 웹 브라우저에 전달한다.

​    이때 전달되는 응답은 새로운 페이지를 전부 보내는 것이 아니라 **필요한 데이터만을 전달**한다.

⑦ : 서버로부터 전달받은 데이터를 가지고 웹 페이지의 일부분만을 갱신하는 자바스크립트를 호출한다.

⑧ : 결과적으로 **웹 페이지의 일부분만이 다시 로딩되어 표시**된다.

브라우저는 **XMLHttpRequest 객체**를 이용하여 Ajax 요청을 생성하고 전송한다.



## JSON이란 무엇인가?

[**JSON(JavaScript Object Notation)**](http://www.json.org/json-ko.html)은 클라이언트와 서버 간 데이터 교환을 위한 규칙. 즉 데이터 format을 말한다.

JSON은 일반 텍스트 format보다 효과적인 데이터 구조화가 가능하며 XML format보다 가볍고 사용하기 간편하다. 

자바스크립트의 객체 리터럴과 흡사하지만 JSON은 순수한 텍스트로 구성된 String이다. JSON.stringify로 객체를 JSON string으로 변환,  JSON.parse로 JSON string을 객체로 변환한다.



## REST API의 5가지 HTTP method

REST(Representational State Transfer)는 HTTP 설계의 이점을 활용하는 HTTP 프로토콜 디자인을 의도하는 방법론. 즉, 웹 페이지 접근에 관한 일종의 설계 방식이다. REST의 기본 원칙을 성실하게 지킨 서비스 디자인을 RESTful이라고 한다.

**1. URI는 정보의 자원을 표현해야 한다.**

**2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다.**

즉, URI로 Resource를 표현하고 HTTP Method로 Resource에 대한 Action을 표현한다.

| Method | Action         | Role                     |
| ------ | -------------- | ------------------------ |
| GET    | index/retrieve | 모든/특정 리소스를 조회  |
| POST   | create         | 리소스를 생성            |
| PUT    | update all     | **리소스의 전체를 갱신** |
| PATCH  | update         | **리소스의 일부를 갱신** |
| DELETE | delete         | 리소스를 삭제            |

