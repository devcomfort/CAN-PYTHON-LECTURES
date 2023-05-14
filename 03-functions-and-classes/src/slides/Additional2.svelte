<section>
  <section>
    <h2>TMI #2: 문제 풀이</h2>

    <p>
      실수 n이 입력되었을 때, 소수점 두번째 자리까지 <br />
      반올림하여 출력하는 코드를 작성하시오.
    </p>
  </section>
  <section>
    <h2>정답</h2>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        num = float(input())
        print(round(num, 2))  # round 함수를 통한 해결
      </code>
    </pre>

    <pre>
      <code data-trim data-noescape data-line-numbers class="language-python">
        num = float(input())
        print("%.2f" % num)  # %-formatting을 통한 해결
      </code>
    </pre>
  </section>
  <section>
    <h3>"정석은 없다"</h3>

    <small>
      코드는 <strong>정해진 시간 안에만 동작한다면</strong> 방법은 상관 없는 분야.
    </small>
    <small>
      자신이 고려해야 하는 문제만 풀어낸다면 코드를 1억 줄을 짜든 말든 아무 문제
      없음
    </small>
    <small>
      같은 코드도 다양하게 짜보고, 시간이 없는게 아니라면 "꼭 이렇게 짜야할까?"
      라는 <br /> 의문을 가지는게 좋음
    </small>
  </section>
</section>
