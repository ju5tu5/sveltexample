<script>
	import * as prismic from '@prismicio/helpers';
	export let data;
	let { document } = data;
</script>

<section>
	{@html prismic.asHTML(document.data.title)}

	{@html prismic.asHTML(document.data.main)}
</section>

<style>
</style>
