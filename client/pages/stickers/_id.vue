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
    useFetch(async ({ $axios }) => {
      sticker.value = await $axios.$get('stickers', route.value.params.id,)
      });

    return { sticker };
  },
};
</script>
