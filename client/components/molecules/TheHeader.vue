<template>
  <header class="[] [ py-4 ]">
    <div class="[] [ flex flex-wrap justify-start items-center ]">
      <nuxt-link to="/">
        <img :src="logo.url" :alt="logo.alt" width="40" />
      </nuxt-link>
      <nuxt-link to="/">
        <h5 class="[] [ p-1 text-xl text-center font-bold text-gray-800 ]">
          {{ title }}
        </h5>
      </nuxt-link>
    </div>
    <nav>
      <Categories />
    </nav>
  </header>
</template>

<script>
import { getStrapiMedia } from "~/utils/strapi-media";
export default {
  name: "TheHeader",
  props: {
    header: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { Title: title, Picture: picture } = props.header.data.attributes;
    const logo = {
      url: getStrapiMedia(picture.data.attributes.url),
      alt: picture.data.attributes.alternativeText,
    };

    return {
      title,
      logo,
    };
  },
};
</script>
