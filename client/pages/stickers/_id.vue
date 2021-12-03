<template>
  <div class="sticker">{{ sticker }}</div>
</template>

<script>
import { ref, useFetch, useRoute } from "@nuxtjs/composition-api";
export default {
  name: "_id",
  setup() {
    const sticker = ref();
    const route = useRoute();
    useFetch(async ({ $strapi }) => {
      sticker.value = await $strapi.findOne('stickers', route.value.params.id,)
      });

    return { sticker };
  },
};
</script>
