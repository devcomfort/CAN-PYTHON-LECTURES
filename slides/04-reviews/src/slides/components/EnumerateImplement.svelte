<script lang="ts">
  import PythonCode from "../../lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h3>
      <code>enumerate</code> 구현체
    </h3>

    <code>[1, 2, 3, 4]</code> <br />
    &darr;
    <PythonCode>
      {`
        [
            (0, 1),
            (1, 2),
            (2, 3),
            (0, 4)
        ]
        `}
    </PythonCode>

    <p class="fragment fade-up">
      <code>["H"]</code> &rarr; <code>(0, "H")</code> <br />
      리스트 값을 <code>(순서, 값)</code> 형태로 개조
    </p>
  </section>

  <section>
    <h3><code>enumerate</code> 사용법 & 사용 예시</h3>
    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        # 문법
        리스트: list = [1, 2, 3]
        list(enumerate(리스트))
        `}
      </PythonCode>

      <PythonCode>
        {`
        [(0, 1), (1, 2), (2, 3)]
        `}
      </PythonCode>
    </div>
  </section>
</section>
