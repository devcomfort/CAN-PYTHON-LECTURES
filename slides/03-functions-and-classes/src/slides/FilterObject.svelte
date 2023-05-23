<section>
  <section data-auto-animate>
    <h2><code>filter</code> 객체</h2>

    <small>
      <code>filter</code> 객체는 리스트의 특정 값을 추출하기 위해 사용되는
      객체입니다. <br />
      특정 값을 제거하거나, 특정 값만 남기기 위해 사용됩니다.
    </small>

    <pre>
      <code
        data-trim
        data-noescape=""
        data-line-numbers
        class="language-python">
        # 기본 문법
        filter(필터 함수, 리스트)
      </code>
    </pre>
  </section>

  <section data-auto-animate>
    <h2><code>filter</code> 객체</h2>

    <strong>예시</strong>

    <pre>
      <code
        data-trim
        data-noescape=""
        data-line-numbers="1-2|4-9|"
        class="language-python">
        {`
        # 기본 문법
        filter(필터 함수, 리스트)

        # 짝수 요소만 남기기
        filter(lambda v: v % 2 == 0, [1, 4, 3, 2, 1, 3])  # <filter object at 0x00000230662EE3E0>
        # 홀수 요소만 남기기
        filter(lambda v: not(v % 2 == 0), [1, 9, 3, 7, 2])  # <filter object at 0x00000230662EE290>
        filter(lambda v: True, [1, 2, 3, 4, 5])  # <filter object at 0x00000230662EE530>
        filter(lambda v: False, [1, 2, 3, 4, 5])  # <filter object at 0x00000230662EE080>
        `}
      </code>
    </pre>
  </section>

  <section data-auto-animate>
    <h2><code>filter</code> 객체</h2>

    <strong>예시 (타입 추가)</strong>

    <pre>
      <code
        data-trim
        data-noescape=""
        data-line-numbers="1-2|4-9|"
        class="language-python">
        {`
        # 기본 문법
        filter(필터 함수, 리스트)

        # 짝수 요소만 남기기
        list(filter(lambda v: v % 2 == 0, [1, 4, 3, 2, 1, 3]))  # [4, 2]
        # 홀수 요소만 남기기
        list(filter(lambda v: not(v % 2 == 0), [1, 9, 3, 7, 2]))  # [1, 9, 3, 7]
        list(filter(lambda v: True, [1, 2, 3, 4, 5]))  # [1, 2, 3, 4, 5]
        list(filter(lambda v: False, [1, 2, 3, 4, 5]))  # []
        `}
      </code>
    </pre>
  </section>
</section>
