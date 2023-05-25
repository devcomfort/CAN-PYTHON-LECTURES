<script>
  import PythonCode from "../../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2>if-elif-else 조건문</h2>

    <p class="text-3xl">
      if 조건문은 참과 거짓을 통해 프로그램의 흐름을 제어하는 문법입니다. <br />
      예를 들어 a의 값이 숫자가 2의 배수인가, 3의 배수인가, 5의 배수인가, 아무 것도
      아닌가의 조건에 따라서
    </p>
  </section>

  <section>
    <p class="text-3xl">예시</p>
    <p class="text-2xl">
      a의 값이 2의 배수인가, 3의 배수인가, 5의 배수인가, 아무 것도 아닌가 <br />
      조건에 따라서 값 출력하기
    </p>

    <PythonCode>
      {`
      a: int = 177
      if a % 2 == 0:
          print(f"a는 2의 배수 ({a})")
      elif a % 3 == 0:
          print(f"a는 3의 배수 ({a})")
      elif a % 5 == 0:
          print(f"a는 5의 배수 ({a})")
      else:
          print(f"a는 2, 3, 5 중 어느 것의 배수도 아닙니다")
      `}
    </PythonCode>
  </section>
</section>
