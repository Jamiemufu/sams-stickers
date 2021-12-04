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

    useFetch(async ({ $axios }) => {
      await $axios
        .$get(`/categories?filters[slug][$eq]=${route.value.params.id}`, {
          params: {
            populate: "*",
          },
        })
        .then(({ data }) => {
          stickers.value = data[0].attributes.stickers.data;
        });
    });

    return {
      stickers,
    };
  },
};
</script>
