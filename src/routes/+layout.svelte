<script>
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<!-- Special, adds lines to the <head> in /src/app.html -->
<svelte:head>
  <title>99boards</title>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
</style>
