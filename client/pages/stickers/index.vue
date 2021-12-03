<template>
  <div class="sticker">{{ stickers }}</div>
</template>

<script>
import { ref, useFetch, useRoute, useAsync, useContext, onMounted } from "@nuxtjs/composition-api";
export default {
  name: "_id",
  setup() {
    const { $strapi } = useContext()
    const stickers = useAsync(() => $strapi.find('stickers'))

    return {
        stickers,
    }
  },
};
</script>
