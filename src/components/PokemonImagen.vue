<template>
  <div class="pokemonContainer">
    <img class="ocultar" :src="imagenFuente" alt="Pokemon No Visual" />
    <img v-if="showPokemon" :src="imagenFuente" alt="Pokemon No Visual" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }
  }
};
</script>

<style>
.pokemonContainer {
  height: 200px;
  /* width: 400px; */
}

.ocultar {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute; /*Aqui se monta la imagen encima de tu otra imagen */
  right: 44%;
}
</style>