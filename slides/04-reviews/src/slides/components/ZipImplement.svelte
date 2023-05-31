<script lang="ts">
  import PythonCode from "../..//lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2>
      <code>zip</code> 사용법
    </h2>
    <div class="grid grid-cols-2">
      <code>['A', 'B', 'C']</code>
      <code>[3, 5, 1]</code>
      <span>&searr;</span>
      <span>&swarr;</span>
      <code class="col-span-2"> [('A', 3), ('B', 5), ('C', 1)] </code>
    </div>
    <br />
    <p class="text-3xl">
      서로 다른 "길이가 같은" 2가지 리스트를 병합해주는 구현체
    </p>
  </section>
  <section>
    <h3>
      <code>zip</code> 사용 예시
    </h3>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        리스트A: list = ['A', 'B', 'C']
        리스트B: list = [3, 5, 1]
        list(zip(리스트A, 리스트B))
        `}
      </PythonCode>

      <PythonCode>
        {`
        [('A', 3), ('B', 5), ('C', 1)]
        `}
      </PythonCode>
    </div>
  </section>
</section>
