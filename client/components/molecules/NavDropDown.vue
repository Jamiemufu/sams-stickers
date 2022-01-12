<template>
  <ul class="[ nav-dropdown ]">
    <li class="[ nav-dropdown__item ]">
      <nuxt-link :to="`/categories/all`"> All </nuxt-link>
    </li>
    <li
      v-for="category in items"
      :key="category.id"
      class="[ nav-dropdown__item ]"
    >
      <nuxt-link :to="`/categories/${category.slug}`">
        {{ category.Title }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
  setup() {},
};
</script>
<style lang="scss">
.nav-dropdown {
  &__item {
    padding: 5px 0;
  }
}
</style>