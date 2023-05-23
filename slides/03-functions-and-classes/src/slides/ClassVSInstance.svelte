<section data-auto-animate>
  <section data-auto-animate>
    <h2>클래스 vs. 인스턴스</h2>

    <small>
      <strong>클래스는</strong> 어떠한 객체, 인스턴스를 프로그램 내에서 표현하기
      위한 형태를 말합니다.
    </small>
    <small>
      예를 들어 <strong>사과</strong>의 클래스는 다음과 같이 정의할 수 있습니다.
    </small>

    <br />

    <ul class="fragment fade-up">
      <li>
        사과
        <ul>
          <li class="fragment fade-up">당도</li>
          <li class="fragment fade-up">무게</li>
          <li class="fragment fade-up">부피</li>
          <li class="fragment fade-up">가격?</li>
        </ul>
      </li>
    </ul>
  </section>

  <section data-auto-animate>
    <h2>클래스 vs. 인스턴스</h2>

    <small>
      위의 사과를 지금까지 배운 <code>dict</code>로 표현하면 아래와 같이 표현할
      수 있습니다.
    </small>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
        apple: dict = {
          "당도": 10,
          "무게": 10,
          "부피": 10,
          "가격": 2300
        }
        `}
      </code>
    </pre>

    <small>
      <span class="fragment fade-up">문제점</span> <br />
      <ul>
        <li class="fragment fade-up">
          <code>dict</code> 특성상 항상 키 값을 따움표로 감싸야 해서, 코드 양 늘어남
        </li>
        <li class="fragment fade-up">오타 발생하면 프로그램 깨짐</li>
      </ul>
    </small>
  </section>

  <section data-auto-animate="">
    <h2>클래스 vs. 인스턴스</h2>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|4"
        class="language-python">
        {`
        apples: list = [
          { ...,  "무게": 10, ...},
          { ...,  "무게": 13, ...},
          { ...,  "무개": 17, ...},  # 이런 오타가 발생하기 쉬움
          { ...,  "무게": 9, ...},
        ]
        `}
      </code>
    </pre>
  </section>
</section>
