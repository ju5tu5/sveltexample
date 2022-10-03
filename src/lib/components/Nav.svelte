<script>
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li><a href="/" class:active={$page.url.pathname === '/'}>Home</a></li>
		<li><a href="/two" class:active={$page.url.pathname === '/two'}>Twee</a></li>
		<li><a href="/paarden" class:active={$page.url.pathname === '/paarden'}>Paarden</a></li>
		<li><a href="/about" class:active={$page.url.pathname === '/about'}>About</a></li>
	</ul>
</nav>

<style>
	ul {
		padding: 0;
		display: flex;
		gap: 1em;
	}
	li {
		list-style-type: none;
	}
	a.active {
		font-weight: bold;
	}
</style>
