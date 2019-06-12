## SPA (Single Page Application)

단일 페이지 애플리케이션. 페이지가 하나라는 말은 하나의 html 파일을 가진다는 뜻이다. 화면 전환시 새로운 html 파일을 서버에 요청하고 전체를 다시 렌더링하는 것이 아니라, 필요한 데이터만 가지고 화면을 부분적으로 렌더링 한다.

다음과 같은 장, 단점을 가진다.

#### [장점]

화면 전환이 부드러워 Native application과 비슷한 사용자 경험(UX)을 제공할 수 있다.

#### [단점]

1. 초기에 한 번 모든 정적 리소스를 다운받기 때문에 초기 구동 속도가 느리다. 그러나 한 번 다운받은 이후에는 속도가 빠르다.

2. SEO (Search Engine Optimization) 이슈. Angular나 React 등의 프레임워크를 사용하면 Server Rendering을 지원한다.

   

## Routing

Network에서 Routing은 Source에서 Destination으로 데이터를 전송할 때 Router에서 Router로 이동하며 경로를 결정하는 기능이다. Application에서의 Routing은 사용자가 task를 수행하기 위해서 어떤 View에서 다른 view로 view를 전환하는 내비게이션을 관리하는 기능을 말한다.

일반적으로 Web에서 Routing이란 사용자가 요청한 URL 또는 이벤트를 해석하고 새로운 페이지로 전환하기 위한 데이터를 취득하기 위해서 서버로 데이터를 요청하고, view를 전환하는 일련의 행위를 말한다.



## Routing 방식의 발전 과정
1. **전통적인 link 방식**

   가장 간단하고 직관적인 view 전환 방식이다. \<a> tag의 기본 기능을 사용한다.

   \<a> tag 의 href attribute의 값인 Resource 경로가 URL의 path에 추가되어 주소창에 갱신되고 해당 Resource를 서버에 요청한다.

   이 때 서버는 응답으로 html 리소스를 클라이언트에 전달한다. 브라우저는 서버로부터 응답받은 html로 화면을 다시 렌더링하는데, 이런 방식을 **Server Rendering**이라고 한다. 이 때 새로고침이 발생하며 화면이 깜빡이게 된다.

2. **AJAX 방식**

   \<a> tag의 기본 기능을 막고, link 클릭시 server로 필요한 데이터만 요청해서 화면을 부분적으로 렌더링한다.

   부드러운 화면 전환이 장점이지만 URL을 변경시키지 않으므로 주소창의 주소가 변경되지 않는다. 따라서 브라우저의 뒤로가기, 앞으로가기 등의 history가 동작하지 않는다. SEO 이슈가 발생한다.

3. **Hash 방식**

   AJAX 방식 중 history 관리를 할 수 없다는 단점을 보완한 방식이 Hash 방식이다.

    Hash  방식은 URI의 fragment identifier(#fragment)의 고유 기능인 anchor를 사용한다. fragment identifier는 hash mark 또는 hash라고 부른다.

   Hash 방식은 **주소창의 URL이 동일한 상태에서 hash만 변경되면 브라우저가 서버에 요청을 하지 않음을 이용한 것**이다. hash는 요청이 아니라 fragment identifier 고유 기능인 anchor로 웹페이지 내부에서 이동을 위한 것이다.

   hash는 페이지마다 고유의 논리적 URL을 갖게하므로 history 관리가 가능하다. 그러나 hash 방식의 단점은 URI에 불필요한 #가 들어간다는 것이다. #!를 사용하기도 하는데 이를 HashBang이라고 부른다.

   구글을 제외한 검색 엔진은 자바스크립트를 실행시키지 않으므로 SEO 이슈에서도 자유롭지 못하다.

4. **PJAX 방식**

   Hash 방식의 SEO 이슈를 보완한 방법이 HTML5의 History API인 pushState와 popState 이벤트를 이용한 PJAX 방식이다. IE 10 이상에서 동작한다.

   \<a> tag의 href attribute에 path를 사용한 것으로, 내비게이션 클릭시 path가 추가된 URI가 서버로 요청되는데 PJAX 방식은 \<a>의 기본 동작을 막아 서버로 요청을 하지 않는다. 대신 href attribute의 path를 이용해서 AJAX 요청을 한다.

   AJAX 요청은 주소창의 URL을 변경시키지 않으므로 pushState 메소드를 사용한다. **pushState 메소드는 주소창의 URL를 변경하고 URL을 history entry로 추가하지만 서버로 요청을 하지 않는다.**

   그러나 브라우저의 새로고침 버튼을 클릭하면 해당 path로 서버로 요청이 이루어지므로 결국 서버는 URL에 따라서 해당 리소스를 서버에 HTML로 응답해야한다.

   PJAX 방식은 Srerver Rendering과 AJAX 방식이 결합된 것이다. Server는 Cient의 request header 중 Accept가 'text/html'이면 HTML을, 'application/json'이면 필요한 Resource만 JSOPN으로 Response하도록 구현되어야한다. 브라우저 새로고침시 request header의 Accept는 'text/html'이 포함되어 Server는 HTML을 Response한다.