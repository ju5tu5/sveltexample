<script>
  import { PrismicImage } from '@prismicio/svelte'

  export let data
</script>

<article>
  <h2>{data.name} <span>{data.length}"</span></h2>
  <PrismicImage field={data.image} />

  <ul>
    <li>Brand: {data.brand}</li>
    <li>Type: {data.type}</li>
    <li>Length: {data.length}"</li>
    <li>Width: {data.width}"</li>
    <li>Wheelbase: {data.wheelbase}"</li>
    <li>Trucks: {data.trucks}</li>
    <li>Wheels: {data.wheels}</li>
  </ul>
  <a href="/">Take me back</a>
</article>

<style>
</style>
