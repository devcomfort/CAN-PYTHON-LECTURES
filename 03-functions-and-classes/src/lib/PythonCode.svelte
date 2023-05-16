<script lang="ts">
  export let line = "";
</script>

<pre>
  <code
    data-trim
    data-noescape
    data-line-numbers={line}
    class="language-python">
    <slot />
  </code>
</pre>
