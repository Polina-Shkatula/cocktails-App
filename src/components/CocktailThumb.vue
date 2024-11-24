<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`" class="wrap">
      <div
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
        class="pic"
      ></div>
      <div class="name">{{ cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>

<style lang="sass" scoped>
@use '../assets/styles/variables' as *
@use '../assets/styles/main'

.root
    display: flex
    width: calc((100% - 76px)/3)
    margin-right: 38px
    padding-bottom: 20px
    justify-content: center

    &:nth-child(3n + 3)
        margin-right: 0

.wrap
    display: flex
    flex-direction: column
    align-items: center

.pic
    width: 120px
    height: 120px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.name
    padding-top: 15px
    letter-spacing: 0.1em
</style>
