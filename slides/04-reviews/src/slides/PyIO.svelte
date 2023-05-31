<script lang="ts">
  import PythonCode from "../lib/PythonCode.svelte";
  import Code from "../lib/Code.svelte";
</script>

<section>
  <section data-auto-animate>
    <h3>
      <code>print</code> 함수 실행 예시
    </h3>

    <div class="text-3xl">
      <code>print('출력할 문자')</code>
      <br />
      &darr;
      <br />
      <code>'출력할 문자' 출력</code>
    </div>
  </section>

  <section data-auto-animate>
    <h3>
      <code>print</code> 함수 실행 원리
    </h3>

    <div class="text-3xl">
      <code>print("Hello World!")</code>
      <br />
      &darr;
      <br />
      <code>"Hello World!" 출력</code>
    </div>
  </section>

  <section data-auto-animate>
    <h3>
      <code>print</code> 함수 실행 원리 (확장)
    </h3>

    <div class="text-2xl">
      <code class="text-[1.125rem]"
        >print('출력할 문자1', '출력할 문자2', ..., sep='구분자', end='모든 문자
        출력 후 출력되는 문자')</code
      >
      <br />
      &darr;
      <br />
      <code> '출력할 문자'를 '구분자'로 묶어 출력 (.join 메소드 참조) </code>
      <br />
      &darr;
      <br />
      <code> end 값 출력 </code>
    </div>
  </section>

  <section>
    <h3>
      <code>print</code> 함수 실행 예시
    </h3>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        print("Hello World!")
        `}
      </PythonCode>

      <Code>
        {`
        Hello World!
        `}
      </Code>

      <PythonCode>
        {`
        print(1, 2, 3, 4, 5, sep=',')
        `}
      </PythonCode>

      <Code>
        {`
        1,2,3,4,5
        `}
      </Code>

      <PythonCode>
        {`
        print('c', 'g', 'v', sep='|')
        `}
      </PythonCode>

      <Code>
        {`
        c|g|v
        `}
      </Code>

      <PythonCode>
        {`
        print('a', 'b', 'c', sep='/', end='||')
        `}
      </PythonCode>

      <Code>
        {`
        a/b/c||
        `}
      </Code>
    </div>
  </section>
</section>

<section>
  <section data-auto-animate>
    <h3>
      <code>input</code> 함수 실행 원리
    </h3>

    <div class="text-3xl">
      <code>input('출력할 문자')</code>
      <br />
      &darr;
      <br />
      <code>'출력할 문자' 출력</code>
      <br />
      &darr;
      <br />
      <code>사용자 입력 받아서 문자열 한 줄로 반환</code>
    </div>
  </section>

  <section>
    <h3>
      <code>input</code> 함수 실행 예시
    </h3>

    <div class="grid grid-cols-2 text-[2rem]">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        input()
        `}
      </PythonCode>

      <Code>아무 출력 없이 사용자 입력 받아서 반환</Code>

      <PythonCode>
        {`
        input("COM1: ")
        `}
      </PythonCode>

      <Code>"COM1: " 출력 후 사용자 입력 받아서 반환</Code>

      <PythonCode>
        {`
          number: int = int(input("정수 입력: "))
          print(number)
        `}
      </PythonCode>

      <Code>
        {`
          "정수 입력: " 출력 후 사용자 입력 반환,
          그리고 출력.
        `}
      </Code>
    </div>
  </section>
</section>
