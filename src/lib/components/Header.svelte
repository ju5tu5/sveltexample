<script>
  // De 'oude' manier...
  // let header = document.querySelector('body > header')
  // let searchButton = document.querySelector('body > header > button')
  // searchButton.addEventListener('click', toggleSearchHandler)
  // function toggleSearchHandler() {
  //   header.classList.toggle('show-search')
  //   searchButton.classList.toggle('close')
  // }

  import Search from './Search.svelte'

  let showsearch = false
  let close = false

  // ToDo: afhandeling van zoeken!
</script>

<!-- <svelte:head>
  <link rel="stylesheet" href="/style.css" />
</svelte:head> -->

<header class:showsearch>
  <Search {showsearch} />

  <h1>99boards <span>but i'm riding one...</span></h1>
  <button class:close on:click={() => ((showsearch = !showsearch), (close = !close))}>Zoek een board</button>
</header>

<style>
  /* HEADER met grote titel en zoek icoon */
  header {
    position: relative;
    background: gold;
    margin: 0;
    margin-top: -13rem;
    padding: 1rem;
    /* cubic bezier tool http://cubic-bezier.com */
    transition: margin 0.3s cubic-bezier(0.66, 1.66, 0.72, 1.03);
  }

  h1 {
    margin: 4rem 0 3rem 0;
    font-family: roboto, helvetica, arial, sans-serif;
    font-weight: bold;
    letter-spacing: -0.1em;
    font-size: 4.3em;
    line-height: 80%;
  }

  h1 span {
    display: block;
    width: 20rem;
  }
  button {
    outline: none;
    position: absolute;
    top: 15rem;
    right: 0.2rem;
    width: 5rem;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    background-image: url('/search.svg');
    background-size: 3rem;
    background-repeat: no-repeat;
    background-position: top;
    height: 5rem;
    font-family: roboto, helvetica, arial, sans-serif;
    font-size: 0.8em;
    padding-top: 3rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .close {
    background-image: url('/close.svg');
    font-size: 0em;
  }

  button:hover {
    transform: scale(1.1);
  }

  /* MICRO INTERACTIE: deze class wordt aangeroepen als op de button wordt geklikt */
  .showsearch {
    margin-top: 0;
  }
</style>
