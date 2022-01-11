<template>
  <nav>
    <ul class="[] [ flex flex-row flex-wrap py-7 ]">
      <!-- add manual 'all' link to navigation -->
      <li
        class="[] [ bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-2 border border-gray-400 rounded shadow ]"
      >
        <nuxt-link :to="`/categories/all`">
         All
        </nuxt-link>
      </li>
      <!-- all other categories in CMS -->
      <li
        class="[] [ bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-2 border border-gray-400 rounded shadow ]"
        v-for="category in categories.data"
        :key="category.id"
      >
        <nuxt-link :to="`/categories/${category.attributes.slug}`">
          {{ category.attributes.Title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useAsync, useContext } from "@nuxtjs/composition-api";
export default {
  name: "TheNav",
  setup() {
    const { $axios } = useContext();

    const categories = useAsync(() => $axios.$get("categories"));

    return {
      categories,
    };
  },
};
</script>
