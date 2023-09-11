<script>
  import { PrismicImage } from '@prismicio/svelte'

  /** @type {import("@prismicio/client").Content.BoardListSlice} */
  export let slice
</script>

{#each slice.items as item}
  <article>
    <h2>{item.board.data.name} <span>{item.board.data.length}"</span></h2>
    <PrismicImage field={item.board.data.image} />
    <a href="/{item.board.uid}"><span>Nerd stats</span></a>
  </article>
{/each}

<style>
  h2 {
    width: 20rem;
    margin: 1rem 0;
    font-family: roboto, helvetica, arial, sans-serif;
    font-weight: bold;
    font-size: 1.4rem;
  }
  span {
    font-weight: 100;
    font-size: 1rem;
  }
  article {
    position: relative;
    padding: 1rem;
    border-radius: 0.2em;
    border: 0.1em black solid;
    box-shadow: 3px 3px 6px 3px #ccc;
  }
  article + article {
    margin-top: 1rem;
  }
  a span {
    display: none;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
