<section>
  <h2>함수</h2>

  <ol>
    <li><code>def</code> 함수 선언</li>
    <li><code>lambda</code> 함수 선언</li>
    <li>기본값</li>
    <li>가변 인자 <code>args</code></li>
    <li>키워드 가변 인자 <code>kwargs</code></li>
  </ol>
</section>

<section>
  <section class="slide-in fade-out">
    <h2><code>def</code> 함수 선언</h2>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|1|2|3"
        class="language-python">
        def 함수이름(...인자) -> 반환형:
          # 각종 처리 코드
          return 반환값
      </code>
    </pre>
  </section>
  <section class="slide-out fade-in">
    <h2><code>def</code> 함수 선언</h2>

    <div data-markdown>
      {`
        $$ f(x)=x^2 $$
      `}
    </div>
    <pre class="fragment fade-up">
      <code
        data-trim
        data-noescape
        data-line-numbers="|1|2|3"
        class="language-python">
        def f(x: int) -> int:  # 함수 이름, 인자, 반환형 선언
          결과 = x * x  # 처리 코드
          return 결과  # 반환
      </code>
    </pre>
  </section>

  <section data-auto-animate>
    <h2><code>lambda</code> 함수 선언</h2>

    <p>주 용도:</p>
    <ul>
      <li>보통 '익명 함수'를 선언할 때 사용됩니다.</li>
      <li>def 보다 짧은 함수를 작성하는데 사용됩니다.</li>
    </ul>
  </section>

  <section data-auto-animate>
    <h2><code>lambda</code> 함수 선언</h2>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        # lambda 선언 문법
        lambda ...인자: 반환값
      </code>
    </pre>

    <pre class="fragment">
      <code data-trim data-noescape data-line-numbers class="language-python">
        # def 선언 문법
        def 함수이름(...인자) -> 반환형:
          # 각종 처리 코드
          return 반환값
      </code>
    </pre>

    <small class="fragment fade-up">함수 이름 없음</small> <br />
    <small class="fragment fade-up">'처리 코드'를 넣을 공간이 없음</small>
    <small class="fragment fade-up">
      = 코드를 줄이는데 좋지만, 너무 큰 것을 줄이고자 하면 복잡해질 수 있음</small
    >
  </section>

  <section data-auto-animate="">
    <h2>
      <code>lambda</code> 함수로
      <span data-markdown>`$ f(x) = x^2 $`</span> 함수 구현하기
    </h2>
  </section>
  <section data-auto-animate="">
    <h3>
      <code>lambda</code> 함수로
      <span data-markdown>`$ f(x) = x^2 $`</span> 함수 구현하기
    </h3>
    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        def f(x: int) -> int:  # 함수 이름, 인자, 반환형 선언
          결과 = x * x  # 처리 코드
          return 결과  # 반환
      </code>
    </pre>
    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers=""
        class="language-python">
        f = lambda x: x * x 
      </code>
    </pre>
  </section>
  <section data-auto-animate="">
    <h3>
      <code>lambda</code> 함수로
      <span data-markdown>`$ f(x) = x^2 $`</span> 함수 구현하기
    </h3>
    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        def f(x: int) -> int:  # 함수 이름, 인자, 반환형 선언
          return x * x  # 반환
      </code>
    </pre>
    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers=""
        class="language-python">
        f = lambda x: x * x 
      </code>
    </pre>
  </section>
</section>

<section>
  <h2>함수 기본값</h2>

  <small> 함수의 인자에는 기본값을 부여할 수 있습니다. </small>

  <pre>
    <code
      data-trim
      data-noescape
      data-line-numbers={"|1-2|4-5"}
      class="language-python">
      {`
        def f(x: int = 0):
          return x * x

        f()  # 0
        f(0)  # 0
        f(1)  # 1
        f(2)  # 4
      `}
    </code>
  </pre>
</section>

<section>
  <section data-auto-animate>
    <h2>함수 가변 인자</h2>

    <small>
      파이썬에는 <strong>인자</strong>와 <strong>키워드 인자</strong>가
      있습니다. <br />
      <strong>print</strong> 함수를 기준으로 보면, <code>...args</code> 부분이
      <strong>인자</strong>로, <br />
      <code>sep</code>, <code>end</code>와 같이 특정 키워드를 가지는 부분은
      <strong>키워드 인자</strong>로 구분됩니다.
    </small>

    <pre>
    <code data-trim data-noescape data-line-numbers class="language-python">
      print(...args, sep=' ', end='\n')
      # ...args 부분은 '인자'
      # sep, end와 같이 키워드를 가지는 인자는 '키워드 인자'
    </code>
  </pre>
  </section>

  <section data-auto-animate="">
    <h2>함수 가변 인자</h2>

    <small>
      <strong>인자</strong>는 영어로 'argument'라고 합니다. <br />
      때문에 인자와 키워드 인자는 각각 arguments와 keyword arguments <br />
      축약한 형태로 args, kwargs라는 형태로 사용됩니다.
    </small>
  </section>

  <section data-auto-animate>
    <h2>함수 가변 인자</h2>

    <strong>실습 코드</strong>

    <pre>
      <code
        data-trim=""
        data-noescape=""
        data-line-numbers=""
        class="language-python">
        def f(*args, **kwargs):
          print(args)
          print(kwargs)
        
        f(1, 2, 3, 4, hello="world", dongseo="university")
      </code>
    </pre>
  </section>

  <section data-auto-animate="">
    <h2>함수 가변 인자</h2>

    <strong>실습 코드 (타입 추가)</strong>

    <pre>
      <code
        data-trim=""
        data-noescape=""
        data-line-numbers=""
        class="language-python">
        def f(*args: list, **kwargs: dict):
          print(args)
          print(kwargs)
        
        f(1, 2, 3, 4, hello="world", dongseo="university")
      </code>
    </pre>
  </section>
</section>
