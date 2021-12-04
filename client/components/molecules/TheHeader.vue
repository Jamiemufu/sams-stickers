<template>
  <header class="[] [ py-4 ]">
    <div class="[ header__logo ] [ flex flex-wrap justify-start items-center ]">
      <img
        :src="logo.url"
        :alt="logo.alt"
        width="40"
      />
      <h5 class="[ header__title ] [ p-1 text-xl text-center font-bold text-gray-800 ]">{{ title }}</h5>
    </div>
    <nav class="[] []">
      <Categories />
    </nav>
  </header>
</template>
<script>
import { getStrapiMedia } from "~/utils/strapi-media";
export default {
  name: 'TheHeader',
  props: {
    header: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    const { Title:title, Picture:picture } = props.header.data.attributes;
    const logo = {
      url: getStrapiMedia(picture.data.attributes.url),
      alt: picture.data.attributes.alternativeText
    }

    return {
      title,
      logo,
    }
  }
}
</script>
