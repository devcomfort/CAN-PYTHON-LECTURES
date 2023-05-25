<script>
  import PythonCode from "../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2>템플릿 문자열</h2>
    <h3>(Template String)</h3>

    <ul>
      <li>f-string</li>
      <li>%-formatting</li>
    </ul>
  </section>

  <section>
    <h3>템플릿 문자열</h3>

    <div class="grid grid-cols-2 text-3xl">
      <div>
        <p>문자열 연산 코드</p>
        <PythonCode>
          {`
          a: int = 1
          b: int = 2
          print(str(a) + ", " + str(b))
          `}
        </PythonCode>
      </div>
      <div>
        <p>템플릿 문자열 코드</p>
        <PythonCode>
          {`
          a: int = 1
          b: int = 2
          # f-string 문법
          print(f"{a}, {b}")
          # %-formatting 문법
          print("%d, %d" % (a, b))
          `}
        </PythonCode>
      </div>

      <ul class="text-2xl">
        <li>모든 변수를 문자열화 시켜야 함</li>
        <li>중간에 기호나 문자를 덧붙이려면 문자도 따로 더해야 함</li>
      </ul>

      <ul class="text-2xl">
        <li>
          변수를 일일이 더할 필요 없이, <br />
          사용하고 싶은 변수를 기입하는 개념 <br />
          &rarr; 빈칸 채우기와 유사한 개념
        </li>
      </ul>
    </div>
  </section>
  <section>
    <h2>f-string</h2>

    <p class="text-3xl">
      'f' 뒤에 문자열을 붙이는 템플릿 문자열 문법이라서 'f-string'이라고 부름
    </p>

    <PythonCode>
      {`
      a: int = 1
      b: int = 2
      # f-string 문법
      print(f"{a}, {b}")
      `}
    </PythonCode>

    <p class="text-2xl">결과</p>
    <pre><code class="language-plaintext">1, 2</code></pre>

    <p class="text-2xl">
      이해하기 도움말: "<mark>a값</mark>, <mark>b값</mark>", &nbsp; 빈칸 채우기
    </p>
  </section>
  <section>
    <h2>%-formatting</h2>
    <p class="text-3xl">C, Java 등에 쓰이는 % 기반 포메팅 문법</p>
    <PythonCode>
      {`
      a: int = 1
      b: int = 2
      # %-formatting 문법
      print("%d, %d" % (a, b))
      `}
    </PythonCode>

    <p class="text-2xl">결과</p>
    <pre><code class="language-plaintext">1, 2</code></pre>
  </section>
</section>
