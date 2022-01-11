<template>
  <nav>
    <ul class="[ nav ] []">
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`"> About </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`"> Stickers </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`">
          Categories
          <font-awesome-icon :icon="['fa', 'caret-down']" />
        </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`"> FAQ </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`"> Enquiries </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`"> Contact </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`">
          <font-awesome-icon :icon="['fa', 'search']" class="nav__item--icon" />
        </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`">
          <font-awesome-icon
            :icon="['fa', 'user-circle']"
            class="nav__item--icon"
          />
        </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/categories/all`">
          <font-awesome-icon
            :icon="['fa', 'shopping-cart']"
            class="nav__item--icon"
          />
        </nuxt-link>
      </li>
      <!-- all other categories in CMS
      <li
        class="[ nav__item ] []"
        v-for="category in categories.data"
        :key="category.id"
      >
        <nuxt-link :to="`/categories/${category.attributes.slug}`">
          {{ category.attributes.Title }}
        </nuxt-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import { useAsync, useContext } from "@nuxtjs/composition-api";
export default {
  name: "TheNav",
  // setup() {
  //   const { $api } = useContext();

  //   const categories = useAsync(() => $api.$get("categories"));

  //   return {
  //     categories,
  //   };
  // },
};
</script>
<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: orange;

  &__item {
    padding: 0 10px;
    margin-top: 4px;

    &--icon {
      font-size: 22px;
    }
  }
}
</style>
