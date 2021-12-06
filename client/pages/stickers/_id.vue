<template>
  <div>
    <h1>Sticker here</h1>
    {{ sticker }}
  </div>
</template>

<script>
import { ref, useFetch, useRoute } from "@nuxtjs/composition-api";
import { flattenSingleSticker } from "~/utils/flatten";
import { queryNestedAndFilterBySlug } from "~/utils/queries";
export default {
  setup() {
    const sticker = ref();
    const route = useRoute();
    const params = queryNestedAndFilterBySlug("sticker", route.value.params.id);

    useFetch(async ({ $axios }) => {
      const { data: query } = await $axios.$get("/stickers", params);

      sticker.value = flattenSingleSticker(query);
    });

    return {
      sticker,
    };
  },
};
</script>
