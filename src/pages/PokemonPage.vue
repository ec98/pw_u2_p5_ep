<template>
  <div>
    <h1>Adivina el pokemon</h1>
    <PokemonImagen :pokemonId="4" :showPokemon="true" />
    <PokemonOpciones />
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import getPokemonsFachada from "../helpers/pokemonHelper";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones
  },

  //montar el componente
  mounted() {
    console.log("se monto el componente pokemon page");
    this.construirLoad();
  },
  methods: {
    async construirLoad() {
      const arrayPokemons = await getPokemonsFachada();
      console.log("Usando el componente de arreglos -> " + arrayPokemons);
    }
  }
};
</script>

<style>
</style>