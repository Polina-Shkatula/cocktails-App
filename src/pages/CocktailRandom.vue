<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import AppLayout from "../components/AppLayout.vue";
import { COCKTAIL_RANDOM, INGREDIEENT_PIC } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const cocktail = ref(null);

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break;
    const ingredient = cocktail.value[`strIngredient${i}`];

    ingredients.push(ingredient);
  }
  return ingredients;
});

async function getCocktail() {
  const data = await axios.get(COCKTAIL_RANDOM);
  cocktail.value = data.data.drinks[0];
}

getCocktail();
</script>

<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="slider">
            <swiper :slides-per-view="3" :space-between="50" class="swiper">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img :src="`${INGREDIEENT_PIC}${ingredient}-Small.png`" />
                <div class="name">
                  {{ ingredient }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/styles/variables' as *
@use '../assets/styles/main'

.slider
    padding: 50px 0

.swiper
    width: 100%
    max-width: 586px

.name
    padding-top: 20px
</style>
