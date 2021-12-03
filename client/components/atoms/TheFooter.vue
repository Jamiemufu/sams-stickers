<template>
  <footer class="[] [ p-5 flex justify-between items-center text-sm ]">
    <p v-html="Copyright">
      <!-- Copyright text here -->
    </p>
    <p>
      Powered by Coffee,
      <a href="#" target="_blank" class="[] [ underline ]">Strapi</a>,
      <a href="#" target="_blank" class="[] [ underline ]">Nuxt</a>
      and developed by Jamie Evans
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
