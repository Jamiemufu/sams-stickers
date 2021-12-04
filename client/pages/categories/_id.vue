<template>
    <ul>
      <li v-for="sticker in stickers" :key="sticker.id">
        {{ sticker.attributes.Title }}
        {{ sticker.attributes.Price }}
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
        .then(({data}) => {
          stickers.value = data[0].attributes.stickers.data;
        });
    });

    return {
      stickers,
    };
  },
};
</script>
