<script lang="ts">
  import Code from "../../lib/Code.svelte";
  import PythonCode from "../../lib/PythonCode.svelte";
</script>

<section>
  <section data-auto-animate>
    <h2>
      <code>filter</code> 구현 예시
    </h2>

    <code>[1, 2, 3, 4, 5]</code>
    <br />
    &darr;
    <br />
    <strong class="text-3xl">
      짝수일 때 True, 아니면 False가 나오는 '필터 함수'
    </strong>
    <br />
    &darr;
    <br />
    <code>[2, 4]</code>

    <br />

    <blockquote class="text-2xl">
      💡 함수의 결과가 <code>True</code>로 나오는 것만 남김!
    </blockquote>
  </section>
  <section data-auto-animate>
    <h2>
      <code>filter</code> 원리
    </h2>

    <code> [1, 2, 3, 4, 5] </code>
    <br />
    &darr;
    <br />
    <code> '필터 함수' </code>
    <br />
    &darr;
    <br />
    <code>[2, 4]</code>
    <blockquote class="text-2xl">
      💡 함수의 결과가 <code>True</code>로 나오는 것만 남김!
    </blockquote>
  </section>
  <section data-auto-animate>
    <h2>
      <code>filter</code> 원리
    </h2>

    <code> '거르기 이전, 원본 리스트' </code>
    <br />
    &darr;
    <br />
    <code> '필터 함수' </code>
    <br />
    &darr;
    <br />
    <code>'거르기 작업이 완료된 리스트'</code>

    <blockquote class="text-2xl">
      💡 함수의 결과가 <code>True</code>로 나오는 것만 남김!
    </blockquote>
  </section>
  <section>
    <h2>
      <code>filter</code> 사용법
    </h2>

    <div class="grid grid-cols-1 text-[1.125rem]">
      <div>
        <code> filter('필터 함수', '(거르기 이전의) 원본 리스트') </code>
        &nbsp; &rarr; &nbsp;
        <code> 거르기 작업이 완료된 값을 가진 filter 객체 </code>
      </div>
      <div>
        <code> list(filter('필터 함수', '(거르기 이전의) 원본 리스트')) </code>
        &nbsp; &rarr; &nbsp;
        <code> 거르기 작업을 완료한 값을 가진 리스트 </code>
      </div>
    </div>
  </section>
  <section>
    <h2>
      <code>filter</code> 사용 예시
    </h2>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        filter(lambda v: v % 2 == 0, [1, 2, 3, 4, 5])
        `}
      </PythonCode>
      <Code>
        {`
        <map object at 0x000001483313EE60>
        `}
      </Code>

      <PythonCode>
        {`
          list(filter(lambda v: v % 2 == 0, [1, 2, 3, 4, 5]))
        `}
      </PythonCode>
      <Code>
        {`
        [2, 4]
        `}
      </Code>

      <PythonCode>
        {`
          list(filter(lambda v: v % 2 == 1, [1, 2, 3, 4, 5]))
        `}
      </PythonCode>
      <Code>
        {`
        [1, 3, 5]
        `}
      </Code>
    </div>
  </section>
</section>
