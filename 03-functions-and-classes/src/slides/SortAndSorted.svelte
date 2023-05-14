<section>
  <section>
    <h2>정렬 함수 : sort와 sorted</h2>
  </section>

  <section>
    <h2>sort</h2>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|1|3|4-5|6"
        class="language-python">
        리스트: list = [3, 1, 4, 5, 9, 2]  # 랜덤한 수열
        
        print(리스트)  # [3, 1, 4, 5, 9, 2] | 원본과 같음
        sort(리스트)  # 3.11 이전
        리스트.sort()  # 3.11 부터
        print(리스트)  # [1, 2, 3, 4, 5, 9] | 정렬됨
      </code>
    </pre>
  </section>

  <section>
    <h2>sorted</h2>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|1|3|4|5"
        class="language-python">
        리스트: list = [3, 1, 4, 5, 9, 2]  # 랜덤한 수열
        
        print(리스트)  # [3, 1, 4, 5, 9, 2] | 원본과 같음
        리스트 = sorted(리스트)  # 정렬값 저장
        print(리스트)  # [1, 2, 3, 4, 5, 9] | 정렬됨
      </code>
    </pre>
  </section>

  <section>
    <h2>sort vs. sorted</h2>

    <small>
      <code>sort</code>와 <code>sorted</code>의 차이는
      <strong>리스트 자체를 수정하는가, 수정하지 않는가</strong>에 있습니다.
    </small>

    <pre>
      <code
        data-trim
        data-noescape
        data-line-numbers="|4-5|6|8|9"
        class="language-python">
        _sort: list = [3, 1, 4, 5, 9, 2]  # 랜덤한 수열
        _sorted: list = [3, 1, 4, 5, 9, 2]  # 랜덤한 수열
        
        sort(_sort)  # 3.11 이전 sort
        _sort.sort()  # 3.11 이후 sort
        sorted(_sorted)  # sorted 

        print(_sort)  # [1, 2, 3, 4, 5, 9] | 정렬됨 (데이터가 직접적으로 수정됨)
        print(_sorted)  # [3, 1, 4, 5, 9, 2] | 정렬되지 않음 (데이터가 직접적으로 수정되지 않음)
      </code>
    </pre>
  </section>
</section>
