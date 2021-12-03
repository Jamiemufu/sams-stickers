<template>
  <header class="[] [ flex p-5 ]">
    <div class="[ header__logo] [ flex justify-center items-center ]">
      <img
        :src="logo.url"
        :alt="logo.alt"
        width="60"
        class="[] [ mx-auto ]"
      />
      <h5 class="[] [ p-1 font-bold text-1xl ]">{{ title }}</h5>
    </div>
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
