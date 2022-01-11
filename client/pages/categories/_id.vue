<template>
  <ul>
    <li v-for="sticker in stickers" :key="sticker.id">
      <nuxt-link :to="`/stickers/${sticker.slug}`">
        {{ sticker.Title }}
        {{ sticker.Price }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { useFetch, useRoute, ref } from "@nuxtjs/composition-api";
import { flattenStickers } from "~/utils/flatten";
import {
  queryNestedAndFilterByCategory,
  queryNestedStickerEntry,
} from "~/utils/queries";
export default {
  setup() {
    const route = useRoute();
    const stickers = ref();
    const params =
      route.value.params.id === "all"
        ? queryNestedStickerEntry()
        : queryNestedAndFilterByCategory("sticker", route.value.params.id);
    /**
     * Query for stickers that belongs to category from slug
     * populate stickers - add media relationship to response
     * filter stickers that belong to slugs category...
     *
     * There must be a better way to do this...
     */
    useFetch(async ({ $axios }) => {
      const { data: query } = await $axios.$get("stickers", params);
      // map new array of stickers
      stickers.value = flattenStickers(query);
    });

    return {
      stickers,
    };
  },
};
</script>
