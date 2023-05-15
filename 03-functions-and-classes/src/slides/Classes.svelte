<section data-auto-animate>
  <h2>클래스</h2>

  <ol>
    <li>클래스 vs. 인스턴스</li>
  </ol>
</section>

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

  <section data-auto-animate>
    <h2>클래스 vs. 인스턴스</h2>

    <small>
      이러한 문제를 해결하기 위해 <strong
        >정형화된 구조를 선언하기 위한 문법</strong
      > <br />
      <strong>클래스</strong>를 사용합니다.
    </small>

    <small><strong>선언 예시</strong></small>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
        class Apple:
          당도: int
          무게: int
          부피: int
          가격: int

          def __init__(self, 당도: int, 무게: int, 부피: int, 가격: int):
            self.당도 = 당도
            self.무게 = 무게
            self.부피 = 부피
            self.가격 = 가격
        `}
      </code>
    </pre>
  </section>

  <section data-auto-animate>
    <h2>클래스 vs. 인스턴스</h2>

    <small><strong>사용 예시</strong></small>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
        apples: List[Apple] = [
          Apple(10, 10, 10, 2000),
          Apple(15, 10, 10, 2700),
          Apple(12, 15, 17, 3100),
        ]

        apples[0].가격  # 2000
        apples[1].무게 = 10
        `}
      </code>
    </pre>
  </section>
</section>
