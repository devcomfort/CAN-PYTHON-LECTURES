<section>
  <section data-auto-animate>
    <h2>클래스 선언과 사용</h2>

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
    <h2>클래스 선언과 사용</h2>

    <small><strong>사용 예시</strong></small>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
        apples: list = [
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

  <section data-auto-animate="">
    <h2>클래스 선언과 사용</h2>
    <pre>
    <code
        data-trim=""
        data-noescape=""
        data-line-numbers=""
        class="language-python">
      {`
      class 클래스이름:  # 클래스 이름과 함께 클래스 선언
        # ...속성 선언

        # 생성자 선언
        def __init__(self, ...생성자 인자):
          # 생성자 처리

        # ...메소드 선언
      `}
    </code>
  </pre>
  </section>

  <section data-auto-animate="">
    <h2>클래스 선언과 사용</h2>

    <strong>클래스 선언 예시</strong>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="1|2-6|8-14|16"
        class="language-python">
        {`
        class Apple:  # 클래스 이름과 함께 클래스 선언
          # 사용할 프로퍼티, 변수 목록 선언
          당도: int
          무게: int
          부피: int
          가격: int

          # 생성자 선언
          def __init__(self, 당도: int, 무게: int, 부피: int, 가격: int):
            # 생성자 실행 내용 선언
            self.당도 = 당도
            self.무게 = 무게
            self.부피 = 부피
            self.가격 = 가격

          # 사용할 메소드 선언
        `}
      </code>
    </pre>
  </section>

  <section>
    <h2>클래스 생성 실습</h2>

    <small>
      원하는 주제를 아래의 보기 또는 자신이 원하는 주제로 선택해서 만들어보세요.
    </small>
  </section>

  <section>
    <h2>클래스 생성 실습 예시 답안</h2>

    <small>
      클래스는 알고리즘에서 자주 사용되는 문법은 아닙니다. <br />
      다만 <strong>실제 개발에서 자주 사용</strong>되니 실제 프로젝트를 진행하며
      다양한 시도를 해보세요.
    </small>

    <pre>
      <code
        data-trim
        data-noescape=""
        data-line-numbers=""
        class="language-python">
      {`
        class Google:
          price: int  # 시가총액
          child_number: int  # 계열사 수
          children: list  # 계열사 정보

          def __init__(self, price, children):
            self.price = price
            self.children = children
            # children를 생성자에서 계산해서 저장
            self.children_number = len(children)
      `}
      </code>
    </pre>
  </section>
</section>
