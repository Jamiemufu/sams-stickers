<template>
  <div class="[] [ flex flex-wrap justify-start items-center ]">
    <nuxt-link to="/" v-if="$props.logo">
      <img :src="logo.url" :alt="logo.alt" width="40" />
    </nuxt-link>
    <nuxt-link to="/">
      <h5 class="[] [ p-1 text-xl text-center font-bold text-gray-800 ]">
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
