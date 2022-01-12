<template>
  <div class="[ logo-header ] [ ]">
    <nuxt-link to="/" v-if="$props.logo">
      <img :src="logo.url" :alt="logo.alt" width="40" />
    </nuxt-link>
    <nuxt-link to="/">
      <h5 class="[ logo-header__title ] []">
        {{ title }}
      </h5>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TheLogo",
  props: {
    title: {
      type: String,
      default: "Sam's Stickers",
    },
    logo: {
      type: Object,
      required: false,
    },
  },
};
</script>
<style lang="scss">
  .logo-header {
    color: white;

    &__title {
      font-size: 22px;
    }
  }
</style>
