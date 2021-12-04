<template>
  <div>
    <h1>Sticker here</h1>
    {{ title }}
    {{ price }}
  </div>
</template>

<script>
import { ref, useFetch, useRoute } from "@nuxtjs/composition-api";
export default {
  setup() {
    const title = ref(), price = ref();
    const route = useRoute();

    useFetch(async ({ $axios }) => {
      await $axios
        .$get(`/stickers?filters[slug][$eq]=${route.value.params.id}`, {
          params: {
            populate: "*",
          },
        })
        .then(({ data }) => {
          title.value = data[0].attributes.Title;
          price.value = data[0].attributes.Price;
        });
    });

    return { 
      title,
      price
    };
  },
};
</script>
