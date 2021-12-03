<template>
  <div class="[] [ container mx-auto bg-gray-100 ]">
    <TheHeader :header="header"/>
    <Nuxt />
    <TheFooter :footer="footer"/>
  </div>
</template>
<script>
import { useContext, useAsync } from '@nuxtjs/composition-api'
export default {
  setup() {
    const { $strapi } = useContext();
    const footer = useAsync(() => $strapi.$footer.find());
    const header = useAsync(() => $strapi.$header.find({populate: '*'}));

    return {
      footer,
      header
    };
  },
};
</script>
