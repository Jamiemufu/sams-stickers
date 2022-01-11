<template>
  <header class="[ header ] []">
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
<style lang="scss">
.header {
  width: 100%;
  padding: 10px 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
