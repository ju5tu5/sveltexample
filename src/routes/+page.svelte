<script>
  import * as prismic from '@prismicio/client'
  import { SliceZone } from '@prismicio/svelte'
  import { components } from '$lib/slices'

  export let data
</script>

<article>
  {@html prismic.asHTML(data.intro)}
</article>

<SliceZone slices={data.slices} {components} />
