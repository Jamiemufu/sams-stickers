<template>
  <ul>
    <h1>display stickers for category here</h1>

    <li v-for="sticker in stickers" :key="sticker.id">
      <nuxt-link :to="`/stickers/${sticker.attributes.slug}`">
        {{ sticker.attributes.Title }}
        {{ sticker.attributes.Price }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import { useFetch, useRoute, ref } from "@nuxtjs/composition-api";
export default {
  setup() {
    const route = useRoute();
    const stickers = ref();
    /**
     * Query for stickers that belongs to category from slug
     * populate stickers - add media relationship to response
     * filter stickers that belong to slugs category...
     *
     * There must be a better way to do this...
     */
    useFetch(async ({ $axios }) => {
      await $axios.$get("stickers", {
        params: {
          populate: "sticker",
          "filters[categories][slug][$containsi]": route.value.params.id,
        },
      })
      .then(({data}) => {
        stickers.value = data;
      });
    });

    return {
      stickers,
    };
  },
};
</script>
