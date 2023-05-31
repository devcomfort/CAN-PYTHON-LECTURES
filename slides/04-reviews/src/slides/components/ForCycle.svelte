<script>
  import PythonCode from "../../lib/PythonCode.svelte";
  import RangeImplement from "./RangeImplement.svelte";
  import EnumerateImplement from "./EnumerateImplement.svelte";
  import ZipImplement from "./ZipImplement.svelte";
  import MapImplement from "./MapImplement.svelte";
  import FilterImplement from "./FilterImplement.svelte";
</script>

<section>
  <section>
    <h2>for 순회문</h2>

    <p class="text-3xl">
      사용하기 쉽게 조작되거나, 아니면 그 자체로 리스트 형태인 값을 <br />
      처음부터 끝까지 순회하는 순회문
    </p>

    <p class="text-2xl">형식</p>
    <PythonCode>
      {`
      for 순회자 in 리스트:
        # 처리 코드
      `}
    </PythonCode>
  </section>

  <section>
    <h2>예시: 순정, 정석</h2>

    <p class="text-3xl font-bold">예시 코드</p>

    <PythonCode>
      {`
      for number in [1, 2, 3, 4, 5]:  
        print(number)
      `}
    </PythonCode>

    <p class="text-3xl font-bold">예시 결과</p>

    <pre>
        <code
        data-trim
        data-noescape
        data-line-numbers
        class="language-plaintext">
        {`
        1
        2
        3
        4
        5  
        `}
        </code>
    </pre>
  </section>

  <section>
    <h2>배열 가공자</h2>

    <ul>
      <li>range</li>
      <li>enumerate</li>
      <li>zip</li>
      <li>map</li>
      <li>filter</li>
    </ul>
  </section>
</section>

<RangeImplement />
<EnumerateImplement />
<ZipImplement />
<MapImplement />
<FilterImplement />
