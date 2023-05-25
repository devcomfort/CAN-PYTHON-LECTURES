<script lang="ts">
  import PythonCode from "../..//lib/PythonCode.svelte";
</script>

<section>
  <section>
    <h2><code>range</code> 사용 형식</h2>
    <div class="grid grid-cols-2">
      <PythonCode>
        {`
            range(end: int)
        `}
      </PythonCode>

      <PythonCode>
        {`
            # start 기본값 0 부여
            # step 기본값 1 부여
            range(0, end)
        `}
      </PythonCode>

      <PythonCode>
        {`
            range(start: int, end: int)
        `}
      </PythonCode>

      <PythonCode>
        {`
            # step 기본값 1 부여
            range(start, end, 1)
        `}
      </PythonCode>

      <PythonCode>
        {`
            range(start: int, end: int, step: float)
        `}
      </PythonCode>

      <PythonCode>
        {`
            range(start, end, step)
        `}
      </PythonCode>
    </div>
  </section>

  <section>
    <h2>
      <code>range</code>의 사용 예시
    </h2>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        range(10)
        `}
      </PythonCode>

      <PythonCode>
        {`
        # start 기본값 0 부여
        # step 기본값 1 부여
        range(0, 10, 1)
        `}
      </PythonCode>

      <PythonCode>
        {`
        range(5, 10, 1)
        `}
      </PythonCode>

      <PythonCode>
        {`
        # step 기본값 1 부여
        range(5, 10, 1)
        `}
      </PythonCode>

      <PythonCode>
        {`
            range(3, 10, 2)
        `}
      </PythonCode>

      <PythonCode>
        {`
            range(3, 10, 2)
        `}
      </PythonCode>
    </div>
  </section>

  <section>
    <h3>
      <code>range</code>를 리스트로 보기 쉽게 만들기
    </h3>
    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        list(range(10))
        `}
      </PythonCode>

      <PythonCode>
        {`
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        `}
      </PythonCode>

      <PythonCode>
        {`
        list(range(5, 10, 1))
        `}
      </PythonCode>

      <PythonCode>
        {`
       [5, 6, 7, 8, 9]
        `}
      </PythonCode>

      <PythonCode>
        {`
        list(range(3, 10, 2))
        `}
      </PythonCode>

      <PythonCode>
        {`
            [3, 5, 7, 9]
        `}
      </PythonCode>
    </div>
  </section>
</section>
