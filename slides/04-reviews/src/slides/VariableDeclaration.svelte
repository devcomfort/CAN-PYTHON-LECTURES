<script lang="ts">
  import PythonCode from "../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2>변수의 선언</h2>
  </section>
  <section>
    <h3>예시</h3>
    <PythonCode>
      {`
        # 형식
        [변수 이름]: [변수 자료형] = [값]

        # 예시 1: int형 값 10을 가진 변수 a
        a: int = 10
        # 예시 2: float형 값 3.141592를 가진 변수 pi
        pi: float = 3.141592
      `}
    </PythonCode>
  </section>
</section>
