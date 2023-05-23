<script>
  import ClassDeclarationAndUse from "./ClassDeclarationAndUse.svelte";
  import ClassDecorator from "./ClassDecorator.svelte";
  import ClassInheritence from "./ClassInheritence.svelte";
  import ClassVsInstance from "./ClassVSInstance.svelte";
</script>

<section data-auto-animate>
  <h2>클래스</h2>

  <ol>
    <li>클래스 vs. 인스턴스</li>
    <li>클래스 선언과 사용</li>
    <li>클래스 상속; 오버라이딩, super()</li>
    <li>데코레이터를 통한 특수한 메소드, 속성</li>
  </ol>
</section>

<ClassVsInstance />
<ClassDeclarationAndUse />
<ClassInheritence />
<ClassDecorator />
