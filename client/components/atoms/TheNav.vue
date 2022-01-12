<template>
  <nav>
    <ul class="[ nav ] []">
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/about`"> About </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/stickers`"> Stickers </nuxt-link>
      </li>
      <li class="[ nav__item ] []" @click="isOpen = !isOpen">
        Categories
        <font-awesome-icon :icon="['fa', 'caret-down']" />
        <div class="[ nav__item--modal ]">
          <transition name="fade" mode="in-out">
            <NavDropDown
              :items="populatedCategories"
              v-if="isOpen && populatedCategories"
            />
          </transition>
        </div>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/faq`"> FAQ </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/custom`"> Custom Stickers </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/contact`"> Contact </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/search`">
          <font-awesome-icon :icon="['fa', 'search']" class="nav__item--icon" />
        </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/user`">
          <font-awesome-icon
            :icon="['fa', 'user-circle']"
            class="nav__item--icon"
          />
        </nuxt-link>
      </li>
      <li class="[ nav__item ] []">
        <nuxt-link :to="`/cart`">
          <font-awesome-icon
            :icon="['fa', 'shopping-cart']"
            class="nav__item--icon"
          />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useAsync, useContext, useFetch, ref } from "@nuxtjs/composition-api";
import { flattenCategory } from "~/utils/flatten";
export default {
  name: "TheNav",
  setup() {
    const populatedCategories = ref();
    const isOpen = false;

    useFetch(async ({ $api }) => {
      const { data: categories } = await $api.$get("categories");
      populatedCategories.value = flattenCategory(categories);
    });

    return {
      populatedCategories,
      isOpen,
    };
  },
};
</script>
<style lang="scss">
.nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;

  &__item {
    padding: 0 10px;

    :hover {
      cursor: pointer;
    }

    &--modal {
      display: block;
      position: absolute;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
