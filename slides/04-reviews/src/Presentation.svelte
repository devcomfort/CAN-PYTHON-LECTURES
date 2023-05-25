<script lang="ts">
  import CompositeType from "./slides/CompositeType.svelte";
  import FlowControl from "./slides/FlowControl.svelte";
  import Functions from "./slides/Functions.svelte";
  import Intro from "./slides/Intro.svelte";
  import PrimitiveTypes from "./slides/PrimitiveTypes.svelte";
  import TemplateString from "./slides/TemplateString.svelte";
  import VariableDeclaration from "./slides/VariableDeclaration.svelte";
</script>

<!-- 제목, 지금까지의 진도 나열 -->
<Intro />
<!-- 원시 자료형 -->
<PrimitiveTypes />
<!-- 복합 자료형 -->
<CompositeType />
<!-- 변수 선언법 -->
<VariableDeclaration />
<!-- 템플릿 문자열 -->
<TemplateString />
<!-- 흐름 제어 -->
<FlowControl />

<!-- NOTE: FlowControl 내에 range는 선언됨 -->
<!-- TODO: enumerate, zip, filter, map 제외됨 -->
<!-- TODO: join, split 제외됨 -->
<!-- TODO: 입출력 - input, print 파트 제외됨 -->

<!-- 함수 파트 -->
<Functions />
