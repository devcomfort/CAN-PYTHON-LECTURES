<script lang="ts">
  import Code from "..//lib/Code.svelte";
  import PythonCode from "../lib/PythonCode.svelte";
</script>

<section>
  <section data-auto-animate>
    <h3>
      <code>.join</code> 메소드 사용 예시
    </h3>

    <div class="text-3xl">
      <code>','.join(['1', '2', '3'])</code>
      <br />
      &darr;
      <br />
      <code>'1, 2, 3'</code>
    </div>
  </section>

  <section data-auto-animate>
    <h3>
      <code>.join</code> 메소드 원리
    </h3>

    <p class="text-3xl font-bold">문자열을 합치는 메소드</p>

    <div class="p-3" />

    <div class="text-3xl">
      <code>'구분자'.join('문자열 리스트')</code>
      <br />
      &darr;
      <br />
      <code>'구분자'를 기준으로 각 요소가 붙은 문자열 결과값</code>
    </div>
  </section>

  <section>
    <h3>
      <code>.join</code> 메소드 예시
    </h3>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        ', '.join(['1', '2', '3'])
        `}
      </PythonCode>

      <Code>
        {`
          1, 2, 3
        `}
      </Code>

      <PythonCode>
        {`
          '!'.join(['A', 'B', 'C', 'D', 'E'])
        `}
      </PythonCode>

      <Code>
        {`
          A!B!C!D!E
        `}
      </Code>

      <PythonCode>
        {`
          '|'.join(['c', 'g', 'v'])
        `}
      </PythonCode>

      <Code>
        {`
        c|g|v
        `}
      </Code>
    </div>
  </section>
</section>

<section>
  <section data-auto-animate>
    <h3>
      <code> .split </code> 메소드 사용 예시
    </h3>

    <div class="text-3xl">
      <code> '1 2 3'.split(' ') </code>
      <br />
      &darr;
      <br />
      <code>['1', '2', '3']</code>
    </div>
  </section>

  <section data-auto-animate>
    <h3>
      <code>.split</code> 메소드 원리
    </h3>

    <div class="text-3xl">
      <code> '원본 문자열'.split('문자열을 찢기 위한 문자열') </code>
      <br />
      &darr;
      <br />
      <code>'리스트 형태로 찢어진/나눠진 문자열'</code>
    </div>
  </section>

  <section>
    <h3>
      <code>.split</code> 메소드 예시
    </h3>

    <div class="grid grid-cols-2">
      <p class="text-2xl font-bold">예시 코드</p>
      <p class="text-2xl font-bold">예시 코드 결과</p>

      <PythonCode>
        {`
        "1 2 3".split(' ')
        `}
      </PythonCode>

      <Code>
        {`
        ['1', '2', '3']
        `}
      </Code>

      <PythonCode>
        {`
        "1,2,3".split(',')
        `}
      </PythonCode>

      <Code>
        {`
        ['1', '2', '3']
        `}
      </Code>

      <PythonCode>
        {`
        "c|g|v".split('|')
        `}
      </PythonCode>

      <Code>
        {`
        ['c', 'g', 'v']
        `}
      </Code>
    </div>
  </section>
</section>
