<script>
  // @ts-check
  import PythonCode from "../lib/PythonCode.svelte";
  import { TextInput } from "@svelteuidev/core";
  import cryptojs from "crypto-js";

  /** @type {string} */
  let plainText = "Hello World!";

  /** @type {string}*/
  let cipherText = "";

  $: {
    cipherText = cryptojs.MD5(plainText).toString();
  }
</script>

<section>
  <section>
    <h2>복합 자료형</h2>
    <h3>(Composite Type)</h3>
    <small>
      데이터를 연속적으로, 여러 개 저장하거나, 키와 값 형태로 묶어 저장하는 등 <br
      />
      <strong>특수한 형태로 저장하기 위한</strong> 자료형
    </small>
  </section>

  <section>
    <ul>
      <li>
        복합 자료형
        <ul>
          <li>list, tuple (sequential, 연속적인)</li>
          <li>set</li>
          <li>dict</li>
        </ul>
      </li>
    </ul>
  </section>

  <section>
    <h3>list vs. tuple</h3>

    <div class="inline-grid grid-cols-2 text-2xl">
      <strong>list</strong>
      <strong>tuple</strong>

      <div>
        <ul>
          <li><code>[</code>, <code>]</code> 안에 값을 입력하여 선언</li>
          <li>값 변경 가능 (추가, 삭제, 덮어쓰기 등)</li>
          <li>(set과 달리) 복합 자료형도 저장 가능</li>
        </ul>
        <PythonCode>
          {`
            # 형식
            리스트이름: list = [...값]

            # 예시 1: 1, 2, 3 값을 저장하는 리스트 A
            A: list = [1, 2, 3]
            # 예시 2: [1, 2, 3], "A+" 값을 저장하는 리스트 B
            B: list = [[1, 2, 3], "A+"]
          `}
        </PythonCode>
      </div>

      <div>
        <ul>
          <li><code>(</code>, <code>)</code> 안에 값을 입력하여 선언</li>
          <li class="text-xl">값 변경 불가 (선언 이후에는 어떤 작업도 불가)</li>
          <li>(set과 달리) 복합 자료형도 저장 가능</li>
        </ul>
        <PythonCode>
          {`
            # 형식
            튜플이름: tuple = (...값)

            # 예시 1: 3, 2, 1 값을 저장하는 튜플 A
            A: tuple = (3, 2, 1)
            # 예시 2: [1, 2, 3], "A+" 값을 저장하는 튜플 B
            B: tuple = ([1, 2, 3], "A+")
            # 고급 예시 1: 구조 분해 할당
            # 뜻: "원래 있던 구조를 분해하여 어딘가에 저장"
            # (100, 20)을 a, b에 분할 저장하는 예시
            a, b = (100, 20)
            print(a, b)
          `}
        </PythonCode>
      </div>
    </div>
  </section>

  <section>
    <h2>집합 자료형 SET</h2>
    <small>중복을 허용하지 않는 자료형, HASH를 통해 구현됨</small>
  </section>

  <section>
    <h3>HASH</h3>
    <small
      >어떠한 값을 어떠한 함수로 암호화하여 저장하는 기법 <br />
      검증, 암호화를 통한 보안 강화에 사용됨
    </small>

    <div class="text-2xl">
      <p>일반 텍스트</p>
      <TextInput bind:value={plainText} />
      <p>암호문: {cipherText}</p>
    </div>
  </section>

  <section>
    <h3>HASH의 사용</h3>

    <div class="text-3xl">
      <p class="fragment fade-up">서버에 저장된 사용자 ID: {cipherText}</p>
      <p class="fragment fade-up">사용자 입력: {plainText}</p>
      <p class="fragment fade-up">
        사용자 입력 암호화 <br />
        {plainText} &rarr; {cipherText}
      </p>
      <p class="fragment fade-up">
        서버에 저장된 ID : 사용자 입력 = <br />
        {cipherText} : {cipherText}
      </p>
    </div>
  </section>

  <section>
    <h2>Hash를 통해 중복 제거 하는 법</h2>

    <PythonCode>
      {`
        # 예시: 1, 2, 3을 저장하는 집합 '집합'
        집합: set = {1, 2, 3}
      `}
    </PythonCode>

    <ul>
      <li>"1" &rarr; {cryptojs.MD5("1").toString()}</li>
      <li>"2" &rarr; {cryptojs.MD5("2").toString()}</li>
      <li>"3" &rarr; {cryptojs.MD5("3").toString()}</li>
    </ul>

    <p class="text-4xl fragment fade-up">
      <strong>집합의 동작 방식</strong> <br />
      집합에 새로운 입력으로 1, 2, 3 들어오면 해싱해서 비교 <br />
      &rarr; 겹치면 무시 <br />
      &rarr; 안 겹치면 입력 추가
    </p>
  </section>

  <section>
    <h2>사전 자료형 - dict</h2>

    <small> 키 - 값 페어 &rarr; 단어 - 의미 짝 </small>
  </section>

  <section>
    <h3>예시: 딕셔너리 선언과 사용</h3>

    <div class="inline-grid grid-cols-2">
      <PythonCode>
        {`
          # 선언하기
          사전: dict = {
            "AI": "인공 지능",
            "책": "종이를 여러 장 겹쳐 꿰맨 물건. 간책(簡策). 서권(書券)",
            "Myth": "a traditional story, especially one concerning the early history of a people or explaining some natural or social phenomenon, and typically involving supernatural beings or events."
          }

          # 단어 의미 가져오기
          print(사전["AI"])  # "인공 지능"
          print(사전["책"])  # "종이를 여러 장 겹쳐 꿰맨 물건. 간책(簡策). 서권(書券)"
          print(사전["Myth"])  # ""a traditional story, especially one concerning ..."
        `}
      </PythonCode>
      <table class="text-3xl">
        <thead>
          <th>단어</th>
          <th>의미</th>
        </thead>
        <tbody>
          <tr>
            <td>AI</td>
            <td>인공 지능</td>
          </tr>
          <tr>
            <td>책</td>
            <td>종이를 여러 장 겹쳐 꿰맨 물건. 간책(簡策). 서권(書券)</td>
          </tr>
          <tr>
            <td>myth</td>
            <td
              >a traditional story, especially one concerning the early history
              of a people or explaining some natural or social phenomenon, and
              typically involving supernatural beings or events.</td
            >
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section>
    <h3>예시: 실제 물체 &rarr; 딕셔너리</h3>

    <div class="inline-grid grid-cols-2">
      <img
        src="https://i.imgur.com/qdhi0Oh_d.webp?maxwidth=760&fidelity=grand"
        alt="평범한 사과1"
      />

      <table>
        <tr>
          <td>사과 가격</td>
          <td>2,800원</td>
        </tr>
        <tr>
          <td>사과 당도</td>
          <td>10 brix &dot;</td>
        </tr>
        <tr>
          <td>사과 무게</td>
          <td>200g / 개</td>
        </tr>
        <tr>
          <td>사과 크기</td>
          <td>6.99 cm <sup>2</sup></td>
        </tr>
      </table>
    </div>
  </section>

  <section>
    <h3>딕셔너리로 만들어보기</h3>

    <PythonCode>
      {`
        apple: dict = {
          "사과 가격": 2800,
          "사과 당도": 10,
          "사과 무게": 0.2,  # 0.2kg == 200g
          "사과 크기": 6.99,  # 6.99 cm^2
        }
      `}
    </PythonCode>
  </section>
</section>
