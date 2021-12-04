<template>
  <footer class="[ footer ] [ flex flex-wrap justify-between items-center ]">
    <p v-html="Copyright" class="[] [ text-sm text-gray-700 py-2 ]">
      <!-- Copyright text here -->
    </p>
    <p class="[] [ text-sm text-gray-700 py-2 ]"> 
      Powered by Coffee,
      <a href="#" target="_blank" class="[] [ underline ]">Strapi</a>,
      <a href="#" target="_blank" class="[] [ underline ]">Nuxt</a>
      and developed by Jamiemufu
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    footer: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { Copyright } = props.footer.data.attributes;
    
    return {
      Copyright,
    };
  },
};
</script>
<style lang="scss">
</style>
