<script>
  import PythonCode from "../../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2>while 반복 문법</h2>

    <p class="text-2xl">조건이 참이면 내용 반복하는 자동사냥 같은 문법</p>

    <p class="text-2xl">형식</p>

    <PythonCode>
      {`
        while 조건:
            실행 할 코드
      `}
    </PythonCode>
  </section>

  <section>
    <h2>유사한 문법 비교</h2>
    <h3>if vs. while</h3>

    <div class="grid grid-cols-2">
      <PythonCode>
        {`
        a: int = 1
        # 조건이 참이면 실행, 아님 말고
        if a <= 5:  # 1. 조건 확인
            # 2. 실행
            print(a)  # a 출력
            a = a + 1  # a에 1 더해서 저장
        `}
      </PythonCode>
      <PythonCode>
        {`
        a: int = 1
        # 조건이 거짓이면 종료,
        # 참이면 반복
        while a <= 5:  #  1. 조건 확인
            # 2. 조건이 거짓이 될 때까지 반복
            # = 조건이 참이면 반복
            print(a)  # a 출력
            a = a + 1  # a에 1 더해서 저장
        `}
      </PythonCode>

      <div>
        <p class="text-2xl">if 결과물</p>
        <pre>
            <code
            class="language-plaintext"
            data-noescape
            data-trim
            data-line-numbers="">
            1
            </code>
        </pre>
      </div>

      <div>
        <p class="text-2xl">while 결과물</p>
        <pre><code
            class="language-plaintext"
            data-noescape
            data-trim
            data-line-numbers>
            {`
            1
            2
            3
            4
            5
            `}
        </code></pre>
      </div>
    </div>
  </section>
</section>
