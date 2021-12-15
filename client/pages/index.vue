<template>
  <div class="[] [ p-10 ]">
    <h1>display all stickers here</h1>
    {{ stickers }}
  </div>
</template>

<script>
import { useFetch, ref } from '@nuxtjs/composition-api';
import { flattenStickers } from "~/utils/flatten";
import { queryNestedStickerEntry } from "~/utils/queries.js";
export default {
  setup() {
    const stickers = ref();
    const params = queryNestedStickerEntry()
    
    useFetch(async ( {$axios }) => {
      const { data: query } = await $axios.$get('/stickers', params)
      stickers.value = flattenStickers(query)
    })

    return {
      stickers
    }
  }
};
</script>
