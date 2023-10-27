<h1>🔢 WON CALCULATOR</h1>
한국 원화(KRW) 계산기 웹사이트 개발 프로젝트<br>
<em>➜ 항해 플러스 제1회 코육대 세뱃돈 계산기 종목 출전작</em>

<h2>목차</h2>
<ol style="margin-top: 0; margin-bottom: 0;">
   <li><a href="#프로젝트-소개">프로젝트 소개</a></li>
   <ul>
      <li><a href="#배경-및-차별점">배경 및 차별점</a></li>
      <li><a href="#기술-스택">기술 스택</a></li>
      <li><a href="#개발-기간">개발 기간</a></li>
      <li><a href="#폴더-구조">폴더 구조</a></li>
   </ul>
   <li><a href="#화면-구성">화면 구성</a></li>
   <li><a href="#주요-기능">주요 기능</a></li>
   <li><a href="#보완사항">보완사항</a></li>
   <li><a href="#회고글">회고글: 항해 플러스 코육대</a></li>
   <li><a href="#바로가기">바로가기</a></li>
</ol>

<h2 id="프로젝트-소개">🗂️ 프로젝트 소개</h2>
<h3 id="배경-및-차별점">➕ 배경 및 차별점</h2>
<ul> 
   <li>한국 원화(KRW) 계산을 간편하게 수행할 수 있는 특수한 목적을 가진 계산기로 한국 내 거주자와 외국인 모두가 여행, 비즈니스, 또는 금융 거래와 같은 다양한 용도로 활용할 수 있습니다.</li>
   <li>일반적인 계산기와는 달리 한국 원화(KRW)를 정확하게 계산하는 데 중점을 두며, 원화 기호와 숫자 포맷팅이 특징입니다.</li>
</ul>
<h3 id="기술-스택">➖ 기술 스택</h2>
<ul>
   <li><b>Environment</b><br>
   <p>
      <img src="https://img.shields.io/badge/IntelliJ IDEA-000000?style=for-the-badge&logo=IntelliJ IDEA&logoColor=white"/>
      <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
   </p>
   </li>
   <li><b>Config</b><br>
   <p>
      <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
   </p>
   </li>
   <li><b>Development</b><br>
   <p>
      <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
      <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
      <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
      <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
   </p>
   </li>
</ul>
<h3 id="개발-기간">✖️ 개발 기간</h2>
2023.09.29-10.03 (총 4일)<br>
<img src="https://github.com/beccajoe/won-calculator/assets/123378408/7c83e016-f006-4152-bce7-8b5f3bb01f80" alt="Won Calculator Timeline">
<h3 id="폴더-구조">➗ 폴더 구조</h2>
<pre>
📦src
 ┣ 📂components
 ┃ ┣ 📂Calculator
 ┃ ┃ ┣ 📜Calculator.css
 ┃ ┃ ┣ 📜Calculator.js
 ┃ ┃ ┗ 📜Calculator.test.js
 ┃ ┣ 📂FAQ
 ┃ ┃ ┣ 📜FAQ.css
 ┃ ┃ ┣ 📜FAQ.en.js
 ┃ ┃ ┣ 📜FAQ.js
 ┃ ┃ ┗ 📜FAQ.ko.js
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.css
 ┃ ┃ ┣ 📜Footer.en.js
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┗ 📜Footer.ko.js
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.css
 ┃ ┃ ┣ 📜Header.en.js
 ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┗ 📜Header.ko.js
 ┃ ┗ 📂Main
 ┃ ┃ ┣ 📜Main.en.js
 ┃ ┃ ┣ 📜Main.js
 ┃ ┃ ┗ 📜Main.ko.js
 ┣ 📂context
 ┃ ┗ 📜LanguageContext.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
</pre>

<h2 id="화면-구성">🧮 화면 구성</h2>
<table>
   <tr>
      <th width="50%">Main Page (Eng.)</th>
      <th width="50%">메인 페이지 (국문)</th>
   </tr>
   <tr>
      <th><img src="https://github.com/beccajoe/won-calculator/assets/123378408/8658a735-2012-4a48-88cc-254958bef8da" alt="Main Page" width="720" height="auto"></th>
      <th><img src="https://github.com/beccajoe/won-calculator/assets/123378408/30ec6835-69f3-4e21-b89a-626bd79ba545" alt="메인 페이지" width="720" height="auto"></th>
   </tr>
   <tr>
      <th width="50%">Frequently Asked Questions (FAQ)</th>
      <th width="50%">자주 묻는 질문 (FAQ)</th>
   </tr>
   <tr>
      <th><img src="https://github.com/beccajoe/won-calculator/assets/123378408/aadd3fba-4e36-4cd6-8b00-3c8eb1e4e85e" alt="Frequently Asked Questions (FAQ)" width="720" height="auto"></th>
      <th><img src="https://github.com/beccajoe/won-calculator/assets/123378408/e527a8cc-2115-452b-aa19-a62908f0d885" alt="자주 묻는 질문 (FAQ)" width="720" height="auto"></th>
   </tr>
</table>

<h2 id="주요-기능">▶️ 주요 기능</h2>
<table>
   <tr>
      <th width="50%">디스플레이 관리</th>
      <th width="50%">사용자 입력 기록</th>
   </tr>
   <tr>
      <td>
         <ul>
            <li>toLocaleString() 함수를 이용하여 숫자에 3자리마다 쉼표를 추가하며, 한국 원화(₩) 기호를 오른쪽에 고정하여 디스플레이합니다.</li>
            <li>숫자를 입력하면 해당 숫자가 표시되며, 연산자를 선택하면 현재까지 계산된 값이 표시됩니다.</li>
         </ul>
      </td>
      <td>
         <ul>
            <li>현재 계산에서 사용자가 입력한 문자를 기록하고, AC 버튼으로 초기화하거나 C 버튼으로 마지막 문자를 제거한 경우를 제외합니다.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td><img src="https://github.com/beccajoe/won-calculator/assets/123378408/7e8d98de-24b8-4bbf-86f9-4edc305646cc" alt="디스플레이 관리 기능" width="100%" height="auto"></td>
      <td><img src="https://github.com/beccajoe/won-calculator/assets/123378408/b84347a8-8f72-478d-b2cf-53587c4d3be9" alt="사용자 입력 기록 기능" width="100%" height="auto"></td>
   </tr>
   <tr>
      <th width="50%">다수의 연산</th>
      <th width="50%">언어 선택</th>
   </tr>
   <tr>
      <td>
         <ul>
            <li>연속적인 계산에서 연산자를 입력하면 이전 연산자를 사용하여 앞뒤 숫자를 사전에 계산합니다.</li>
            <li>연속해서 연산자를 선택한 경우, 가장 마지막에 선택한 연산자를 적용합니다.</li>
         </ul>
      </td>
      <td>
         <ul>
            <li>드롭다운 메뉴 내의 옵션을 통해 헤더, 풋터 및 FAQ 링크가 변경됩니다.</li>
         </ul>
      </td>
   </tr>
   <tr>
      <td><img src="https://github.com/beccajoe/won-calculator/assets/123378408/d4a97060-54a2-48d2-a741-d3ac0fa88002" alt="다수의 연산 기능" width="100%" height="auto"></td>
      <td><img src="https://github.com/beccajoe/won-calculator/assets/123378408/916e8140-02bf-482f-9014-b49b92eb7d0c" alt="언어 선택 기능" width="100%" height="auto"></td>
   </tr>
</table>

<h2 id="보완사항">📋 보완사항</h2>
 <ul>
      <li><b>사용자 친화적인 오류 메시지</b><br>
         오류 메시지를 개선하여 무엇이 잘못되었는지에 대한 명확한 설명과 문제를 해결하는 데 도움을 주는 가이드가 필요합니다.<br></li>
      <li><b>원활한 실행을 위한 리액트 앱 테스트 코드</b><br>
         흠잡을 데 없는 테스트 커버리지를 통해 앱이 원활하게 실행되며 중요한 문제점이 없는지 확인해야 할 수 있어야 있습니다.<br></li>
   </ul>

<h2 id="회고글">✍️ 회고글: 항해 플러스 코육대</h2>
<ul>
    <li><b>기능 구현 설명</b><br>
      <ul>
        <li>기본 산술 연산: 덧셈, 뺄셈, 곱셈 및 나눗셈과 같은 기본 산술 연산을 수행할 수 있습니다.</li>
        <li>입력 처리: 사용자가 숫자, 연산자 및 "C" (지우기) 및 "AC" (모두 지우기)와 같은 특수 버튼을 입력할 수 있습니다.</li>
        <li>디스플레이 관리: 디스플레이는 현재 입력, 계산 기록 및 연산 결과를 표시합니다.</li>
        <li>계산 기록: 계산 기록을 추적하며 숫자와 연산자를 읽기 쉬운 형식으로 표시합니다.</li>
        <li>등호 (=) 연산: 등호 버튼이 눌렸을 때 연산 순서를 고려하여 결과를 계산하고 표시합니다.</li>
        <li>입력 길이 제한: 디스플레이에 표시되는 숫자의 자릿수를 10자로 제한합니다.</li>
        <li>연산자 관리: 계산에서 올바른 연산을 보장하기 위해 연산자와 숫자의 순서를 관리합니다.</li>
        <li>여러 연산: 이 계산기는 "1 + 2 - 3"과 같은 연속적인 다수의 연산을 지원합니다.</li>
      </ul>
    </li>
    <li><b>참여 소감</b><br>
      [항해 플러스] 제1회 코육대 참가는 여러 가지 면에서 정말로 기억에 남을 만한 경험이었습니다.
      가장 짧은 시간 안에 제작한 웹사이트이면서 처음으로 배포도 해보고 대회 참여도 해봤습니다.
      이번 프로젝트는 저에게 의미가 클뿐더러 성장할 수 있었던 좋은 기회였던 것 같습니다.
    </li>
    <li><a href="https://hanghaeplus-coyukdae.oopy.io/">코육대 이벤트 페이지 링크</a></li>
</ul>

<h2 id="바로가기">🔗 바로가기</h2>
<a href="https://yeon0123.github.io/won-calculator/">배포 링크</a>
