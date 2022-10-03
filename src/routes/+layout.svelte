<script>
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>w00t</title>
</svelte:head>

<Header text="w00t" />

<Nav />

<main>
	<slot />
</main>

<footer>
	<p>Copyleft 2022, all wrongs reversed.</p>
</footer>

<style>
</style>
