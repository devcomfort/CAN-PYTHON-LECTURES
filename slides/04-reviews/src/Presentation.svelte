<script lang="ts">
  import CompositeType from "./slides/CompositeType.svelte";
  import FlowControl from "./slides/FlowControl.svelte";
  import Functions from "./slides/Functions.svelte";
  import Intro from "./slides/Intro.svelte";
  import ListAttachAndDetachUtil from "./slides/ListAttachAndDetachUtil.svelte";
  import PrimitiveTypes from "./slides/PrimitiveTypes.svelte";
  import PyIo from "./slides/PyIO.svelte";
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
<!-- join, filter  -->
<ListAttachAndDetachUtil />

<!-- 입출력 함수 - input, print -->
<PyIo />

<!-- 함수  -->
<Functions />
