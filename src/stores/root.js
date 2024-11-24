import { defineStore } from "pinia";
import axios from "axios";
import {
  INGREDIEENTS_URL,
  COCKTAILS_BY_INGREDIEENT_URL,
} from "../constants/api";

export const useRootStore = defineStore("root", {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: [],
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIEENTS_URL);
      this.ingredients = data.data.drinks;
    },
    async getCocktails(ingredient) {
      const data = await axios.get(`${COCKTAILS_BY_INGREDIEENT_URL}${ingredient}`);
      this.cocktails = data.data.drinks;
    },
    setIngredient(val) {
      this.ingredient = val;
    }
  },
});
