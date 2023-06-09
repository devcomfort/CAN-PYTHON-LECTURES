<script>
  export let lineNumbers = "";
  export let lineStartFrom = "";
</script>

<pre>
		<code
    data-trim
    data-noescape
    data-line-numbers={lineNumbers}
    data-ln-start-from={lineStartFrom}
    class="language-plaintext">
				<slot />
		</code>
</pre>
