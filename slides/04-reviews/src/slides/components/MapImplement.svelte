<script lang="ts">
  import Code from "../../lib/Code.svelte";
  import PythonCode from "../..//lib/PythonCode.svelte";
</script>

<section>
  <section data-auto-animate>
    <h2>
      <code>map</code> 구현 예시
    </h2>

    <code>[1, 2, 3, 4, 5]</code>
    <br />
    &darr;
    <br />
    <strong>str 변환 함수</strong>
    <br />
    &darr;
    <br />
    <code>['1', '2', '3', '4', '5']</code>
  </section>
  <section data-auto-animate>
    <h2>
      <code>map</code> 원리
    </h2>

    <code>[1, 2, 3, 4, 5]</code>
    <br />
    &darr;
    <br />
    <strong>'각 요소에 적용할 함수'</strong>
    <br />
    &darr;
    <br />
    <code>['1', '2', '3', '4', '5']</code>
  </section>

  <section data-auto-animate>
    <h2>
      <code>map</code> 원리
    </h2>

    <code>'원본 리스트'</code>
    <br />
    &darr;
    <br />
    <strong>'각 요소에 적용할 함수'</strong>
    <br />
    &darr;
    <br />
    <code>'변환된 리스트'</code>
  </section>

  <section data-auto-animate>
    <h2>
      <code>map</code> 사용법
    </h2>

    <div class="grid grid-cols-1 text-2xl">
      <div>
        <code>map('각 요소에 적용할 함수', '원본 리스트')</code>
        &nbsp; &rarr; &nbsp;
        <code>변경된 값을 가진 map 객체</code>
      </div>
      <div>
        <code>list(map('각 요소에 적용할 함수', '원본 리스트'))</code>
        &nbsp; &rarr; &nbsp;
        <code>변경된 값을 가진 리스트</code>
      </div>
    </div>
  </section>

  <section>
    <h2>
      <code>map</code> 사용 예시
    </h2>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        map(str, [1, 2, 3, 4, 5])
        `}
      </PythonCode>
      <Code>
        {`
        <map object at 0x000001483313EE60>
        `}
      </Code>

      <PythonCode>
        {`
          list(map(str, [1, 2, 3, 4, 5]))
        `}
      </PythonCode>
      <Code>
        {`
        ['1', '2', '3', '4', '5']
        `}
      </Code>
    </div>
  </section>
</section>
