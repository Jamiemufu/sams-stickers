<template>
  <div class="[] [ container mx-auto ]">
    <TheHeader :header="header" />
    <Nuxt />
    <TheFooter :footer="footer" />
  </div>
</template>

<script>
import { useContext, useAsync } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { $axios } = useContext();
    const footer = useAsync(() =>
      $axios.$get("/footer", {
        params: {
          populate: "*",
        },
      })
    );
    const header = useAsync(() =>
      $axios.$get("/header", {
        params: {
          populate: "*",
        },
      })
    );

    return {
      footer,
      header,
    };
  },
};
</script>
