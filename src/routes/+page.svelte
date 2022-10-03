<script>
	import * as helpers from '@prismicio/helpers';
	export let data;
	let { document } = data;
</script>

<section>
	{@html helpers.asHTML(document.data.title)}

	{@html helpers.asHTML(document.data.main)}
</section>

<style>
	h2 {
		color: hotpink;
	}
</style>
