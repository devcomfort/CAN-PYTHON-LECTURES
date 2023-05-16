<script lang="ts">
  import PythonCode from "../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h3>데코레이터를 통한 특수한 메소드, 속성</h3>

    <ol class="text-4xl">
      <li>
        getter와 setter
        <ul>
          <li><code>@property</code> getter 데코레이터</li>
          <li><code>@any.setter</code> setter 데코레이터</li>
        </ul>
      </li>
      <li>
        클래스 틀 만들기 - 추상 메소드
        <ul><code>@abstractmethod</code> 추상 메소드</ul>
      </li>
      <li>
        정적 메소드
        <ul>
          <li><code>@classmethod</code> 클래스 메소드</li>
          <li><code>@staticmethod</code> 정적 메소드</li>
        </ul>
      </li>
    </ol>
  </section>
</section>

<section>
  <section>
    <h2>데코레이터란?</h2>

    <small>
      파이썬에서 <strong>데코레이터</strong>: <br />
      함수나 클래스 또는 변수의 위에 붙어 값을 변형하는 특수한 함수.
    </small>
  </section>
  <section>
    <h3>데코레이터 사용 예시</h3>

    <PythonCode>
      {`
        @decorator
        def f():
          # 처리 내용
      `}
    </PythonCode>

    <PythonCode line={"|1-6|8|12|"}>
      {`
      # 반환값을 제곱해주는 데코레이터
      def square_decorator(func):
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            return result ** 2
        return wrapper

      @square_decorator # 적용
      def f():
        return 3
      
      print(f())  # 9 | 테스트
      `}
    </PythonCode>
  </section>
</section>

<section>
  <section>
    <h2>getter와 setter</h2>

    <small>
      getter: get, 데이터 가져오는 역할 <br />
      setter: set, 데이터 저장하기 전 처리하는 역할
    </small>
  </section>

  <section data-auto-animate>
    <h3 class="text-5xl">무게와 당도로 가격 산출하는 클래스 만들기</h3>

    <small>원본</small>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|9-10"
        class="language-python">
        {`
          class Apple:
            당도: float
            무게: float
            
            def __init__(self, 당도: float, 무게: float):
              self.당도 = 당도
              self.무게 = 무게

            def price(self):
              return (당도 + 무게) * 100
        `}
      </code>
    </pre>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|2"
        class="language-python">
        {`
          MyApple = Apple(15, 10)
          print(MyApple.price())
        `}
      </code>
    </pre>
  </section>

  <section data-auto-animate="">
    <h3 class="text-5xl">무게와 당도로 가격 산출하는 클래스 만들기</h3>

    <small><code>@property</code> 코드</small>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|9-11"
        class="language-python">
        {`
        class Apple:
          당도: float
          무게: float

          def __init__(self, 당도: float, 무게: float):
            self.당도 = 당도
            self.무게 = 무게

          @property
          def price(self):
            return (self.당도 + self.무게) * 100
        `}
      </code>
    </pre>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|2"
        class="language-python">
        {`
          MyApple = Apple(15, 10)
          print(MyApple.price)
        `}
      </code>
    </pre>
  </section>

  <section>
    <h3>정리: getter 개념</h3>

    <small>
      getter는 함수를 <strong>값 처럼</strong> 불러올 수 있도록 하는 문법.
    </small>

    <div class="inline-grid grid-cols-2">
      <pre>
      <code
          data-trim
          data-noescape
          data-line-numbers
          data-ln-start-from="8"
          class="language-python">
        {`
          ...
          def price(self):
            return (self.당도 + self.무게) * 100
        `}
      </code>
    </pre>

      <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
          MyApple = Apple(15, 10)
          print(MyApple.price())
        `}
      </code>
    </pre>

      <pre>
      <code
          data-trim
          data-noescape
          data-line-numbers
          data-ln-start-from="8"
          class="language-python">
        {`
          ...
          @property
          def price(self):
            return (self.당도 + self.무게) * 100
        `}
      </code>
    </pre>

      <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
          MyApple = Apple(15, 10)
          print(MyApple.price)
        `}
      </code>
    </pre>
    </div>
  </section>

  <section>
    <h2><code>setter</code> 사용해보기</h2>

    <small>
      <code>setter</code>는 <code>getter</code>와 같지만
      <strong>데이터를 가져오는 과정</strong>이 아닌
      <strong>데이터를 저장하는 과정</strong>을 값처럼 사용할 수 있도록 하는
      문법
    </small>
  </section>

  <section>
    <h2>예시 코드</h2>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        {`
        class Apple:
          당도: float
          무게: float

          # 가격 데이터를 저장하기 위한 변수 생성
          _price: float = 0  # 가격 기본값 = 0

          def __init__(self, 당도: float, 무게: float):
            self.당도 = 당도
            self.무게 = 무게

          @property
          def price(self):
            if type(self._price) == int or type(self._price) == float:
              return self._price

            return (self.당도 + self.무게) * 100

          @price.setter
          def price(self, value):
            # 입력된 값이 정수나 실수가 아니라면
            if not (type(value) == int or type(value) == float):
              return  # 저장 안 함

            self._price = value  # 값 갱신
        `}
      </code>
    </pre>
  </section>

  <section>
    <h2>
      <code>setter</code> 주요 포인트
    </h2>

    <p class="text-2xl">
      <code>@property</code>를 통해 <code>getter</code>를 만들었다면,
      <code>getter</code>로 만든 함수의 이름이 <code>getter</code>로 사용됩니다.
      <br />
      <code>setter</code>를 선언할 때는
      <strong><code>getter</code>로 사용된 함수의 이름</strong>을 사용해서
      <br />
      <code>@&lt;사용한 함수 이름&gt;.setter</code>라고 써야합니다.
    </p>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|4-6|8"
        class="language-python">
        {`
        class Apple:
          # ...

          @property
          def price(self):
            # 입력된 값이 정수나 실수가 아니라면
            if not (type(value) == int or type(value) == float):
              return  # 저장 안 함

            return (self.당도 + self.무게) * 100

          @price.setter  # <- 이렇게
          def price(self, value):
            # 입력된 값이 정수나 실수가 아니라면
            if not (type(value) == int or type(value) == float):
              return  # 저장 안 함

            self._price = value  # 값 갱신
        `}
      </code>
    </pre>
  </section>
</section>

<section>
  <section>
    <h2>클래스 틀 만들기 - 추상 클래스</h2>

    <!-- TODO: 추상 클래스 내용 넣기 -->
  </section>
</section>
