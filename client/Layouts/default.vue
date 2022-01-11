<template>
  <div class="[] []">
    <TheHeader :header="header" />
    <Nuxt />
    <TheFooter :footer="footer" />
  </div>
</template>

<script>
import { useContext, useAsync } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { $api } = useContext();
    const footer = useAsync(() =>
      $api.$get("/footer", {
        params: {
          populate: "*",
        },
      })
    );
    const header = useAsync(() =>
      $api.$get("/header", {
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
