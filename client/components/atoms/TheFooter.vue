<template>
  <footer class="[ footer ] [ ]">
    <p v-html="Copyright" class="[] []">
      <!-- Copyright text here -->
    </p>
    <p class="[] []">
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
.footer {
  padding: 15px 25px;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
