<section>
  <section>
    <h2>클래스 상속</h2>

    <p class="text-[1.5rem]">
      클래스 상속: 기존의 클래스에서 내용을 변형하거나 추가하여, 새로운 클래스를
      만드는 문법
    </p>

    <p class="text-[1.5rem]">
      기존의 클래스 내용을 계승/상속 받아 내용을 변형하거나 추가하는 문법이기
      때문에 <br /> '클래스 상속'이라고 부릅니다.
    </p>
  </section>

  <section>
    <h2>클래스 상속 예시</h2>

    <small>기본적인 클래스 상속 + 새로운 메소드 선언</small>

    <pre>
      <code
        data-trim=""
        data-noescape=""
        data-line-numbers="1-7|9-24"
        class="language-python">
      {`
        class Object:  # 부모 클래스
          volume: float  # 부피
          weight: float  # 질량

          def __init__(self, volume: float, weight: float):
            self.volume = volume
            self.weight = weight

        class Apple(Object):  # 자식 클래스
          price: int
          degree_brix: float  # 당도

          def __init__(self, volume: float, weight: float, price: int, degree_brix: float):
            super(volume, weight)  # 부모 클래스
            self.price = price
            self.degree_brix = degree_brix

          # 새로운 메소드 선언
          def discount_price(self, discount_rate: float):
            # 할인 비율이 비정상적이면 할인 비율 입력 무시하고, 원본 값 반환
            if not (0 <= discount_rate and discount_rate <= 1):
              return self.price
            
            return round(self.price * (1 - discount_rate))  # 할인 비율 적용된 값 반환
      `}
      </code>
    </pre>
  </section>

  <section>
    <h2>클래스 상속 예시</h2>

    <small> 메소드 오버라이딩 (덮어쓰기) 예시 </small>

    <pre>
      <code
        data-trim=""
        data-noescape=""
        data-line-numbers=""
        class="language-python">
      {`
      class Product:
        product_id: int  # 제품 ID
        price: int  # 제품 가격
        discount_rate: float  # 제품 할인률

        def __init__(self, product_id: int, price: int, discount_rate: float):
          self.product_id = product_id
          self.price = price
          self.discount_rate = discount_rate
        
        def discount_price(self):
          # 유효하지 않은 할인 비율 정보가 입력되면, 단순 가격 정보 반환
          if not (0 <= discount_rate and discount_rate <= 1):
            return self.price

          # 유효한 할인 비율 정보를 가지고 있다면 할인 가격 반환
          return self.price * (1 - discount_rate)
      `}
      </code>
    </pre>
  </section>

  <section>
    <h2>클래스 상속 예시</h2>

    <small> 메소드 오버라이딩 (덮어쓰기) 예시 </small>

    <pre>
      <code
        data-trim=""
        data-noescape=""
        data-line-numbers=""
        class="language-python">
      {`
      # 재활용 가능한 제품 클래스 (제품 클래스 상속)
      class RecycleProduct(Product):
        recycle_tag: str  # 재활용 태그 정보 추가
      
        def __init__(self, product_id: int, price: int, discount_rate: float, recycle_tag: str):
          super(product_id, price, discount_rate)
          self.recycle_tag = recycle_tag
        
        # 재활용 태그 맞는지 저장
        def is_matched(self, recycle_tag: str) -> bool:
          return self.recycle_tag == recycle_tag
      `}
      </code>
    </pre>
  </section>
</section>
