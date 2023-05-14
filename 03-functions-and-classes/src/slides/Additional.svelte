<section>
  <section>
    <h2>TMI #1: 올림, 반올림, 버림</h2>
  </section>
  <section>
    <h2>올림</h2>

    <small>
      <code>ceii</code>은 사전적 의미로 '천장', 수학적 의미로 '올림'이라는
      뜻입니다.
    </small>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|3|5|6|7"
        class="language-python">
        from math import ceil  # ceil 가져오기
        
        ceil(숫자)  # 사용 문법 (자릿수 제한 불가)

        ceil(3.141592)  # 4  # 항상 정수 단위로 올림
        ceil(3.141592 * 100) / 100  # 3.15 (곱하기를 통한 트릭)
        ceil(3.141592 * 1e2) / 1e2  # 3.15 (지수 표기법 사용, 조금 더 간단히)
      </code>
    </pre>
  </section>
  <section>
    <h2>반올림</h2>

    <small>
      <code>round</code>은 사전적 의미로 '원'을 의미하며, 가장 가까운 숫자를
      구하는 함수입니다.
    </small>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|1-2|4-5|6-7|8-9"
        class="language-python">
        # 반올림 값은 기본값 0. 필수 요소 아님!
        round(숫자, "반올림")  # round는 built-in, 안 불러와도 기본적으로 있음
        
        # 자릿수 정보 안 적어주면, 정수 단위로 반올림
        round(3.141592)  # 3 
        # 자릿수 정보 적어주면, 그 자리까지 반올림
        round(3.141592, 2)  # 3.14 
        # 저장된 소수점 자릿수 이상의 정보 기입하면, 변화 없음
        round(3.141592, 30)  # 3.141592
      </code>
    </pre>
  </section>
  <section>
    <h2>버림</h2>

    <small>
      <code>floor</code>은 사전적 의미로 '바닥', 수학적 의미로 '버림'이라는
      뜻입니다.
    </small>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|3|5|6|7"
        class="language-python">
        from math import floor  # floor 가져오기

        floor(숫자)  # 사용 문법 (자릿수 제한 불가)

        floor(3.141592)  # 4  # 항상 정수 단위로 올림
        floor(3.141592 * 100) / 100  # 3.15 (곱하기를 통한 트릭)
        floor(3.141592 * 1e2) / 1e2  # 3.15 (지수 표기법 사용, 조금 더 간단히)
      </code>
    </pre>
  </section>
</section>
