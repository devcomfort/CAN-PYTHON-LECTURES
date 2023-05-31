<script>
  import PythonCode from "../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2>함수</h2>
    <h3>(Functions)</h3>
  </section>

  <section data-auto-animate>
    <h3>함수 선언 원리</h3>

    <div class="text-3xl">
      <span>'변환할 함수'</span>
      <br />
      &darr;
      <br />
      <code>
        함수 이름, 함수에 전달할 값, 계산 로직, 반환값 등 <br />
        '함수 구조' 선언
      </code>
    </div>
  </section>

  <section data-auto-animate>
    <h3>함수 선언 예시</h3>

    <div class="text-3xl">
      <span>$f(x) = x^2$</span>
      <br />
      &darr;
      <br />
      <PythonCode>
        {`
        def f(x: int) -> int:
          return x ** 2
      `}
      </PythonCode>
    </div>
  </section>

  <section>
    <h3>함수 선언 순서</h3>

    <div class="grid grid-cols-2">
      <ol class="text-3xl">
        <li class="fragment fade-up">함수 이름 지정</li>
        <li class="fragment fade-up">함수에 전달할 값 지정</li>
        <li class="fragment fade-up">함수의 계산 로직 정의</li>
        <li class="fragment fade-up">함수 반환값 지정</li>
      </ol>
      <PythonCode>
        {`
        def f(x: int) -> int:  # 1, 2
          _return: int = x ** 2  # 3
          return _return  # 4
        `}
      </PythonCode>
    </div>
  </section>
</section>
