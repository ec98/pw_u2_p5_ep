<template>
  <div class="container">
    <h2>Pokemon</h2>
    <div>
      <label>ID</label>
      <input @keypress.enter="construirAPIURL()" v-model="id" type="text" />
    </div>
    <div class="form">
      <label>Nombre</label>
      <input v-model="name" />

      <label>Altura</label>
      <input v-model="height" />

      <label>Ancho</label>
      <input v-model="weight" />

      <label>Experiencia</label>
      <input v-model="base_experience" />
    </div>
  </div>
</template>
  

<script>
export default {
  data() {
    return {
      id: null,
      name: "",
      height: "",
      weight: "",
      base_experience: ""
    };
  },
  methods: {
    async PokemonAPI() {
      const urlPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.id}`
      ).then(p => p.json());

      this.name = urlPokemon.name;
      this.height = urlPokemon.height;
      this.weight = urlPokemon.weight;
      this.base_experience = urlPokemon.base_experience;
    }
  },
  watch: {
    id() {
      this.PokemonAPI();
    }
  }
};
</script>

<style>
.container {
  display: flex;
  align-content: center;
  align-items: center;
}

.form {
}
</style>