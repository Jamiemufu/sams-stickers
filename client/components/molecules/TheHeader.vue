<template>
  <header class="[] [ py-4 ]">
    <TheLogo :logo="logo" :title="title" />
    <TheNav />
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
    // conditional check for image with logo
    const logo = picture.data?.attributes ? {
      url: getStrapiMedia(picture.data.attributes.url),
      alt: picture.data.attributes.alternativeText,
    } : null

    return { 
      title,
      logo,
    };
  },
};
</script>
