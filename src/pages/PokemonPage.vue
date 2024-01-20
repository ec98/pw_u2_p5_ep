<template>
  <h1 v-if="!ganadorId"> Espere por favor... loading...</h1>
  <div v-else>
    <h1>Adivina el pokemon</h1>
    <PokemonImagen :pokemonId="ganadorId.id" :showPokemon="viewPokemon" />
    <PokemonOpciones @comunicate="viewOnClickOptions($event)" :listaPokemons="arrPokemons"/>
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import getPokemonsFachada from "../helpers/pokemonHelper.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  beforeCreate() {
    console.log("Antes de que se cree el componente.");
  },
  created() {
    console.log("Se creo el componente.");
  },
  beforeMount() {
    console.log("Antes de que mounte carge el componenten en la pagina.");
  },
  mounted() {
    console.log("se monto el componente pokemon page.");
    this.construirLoad();
  },
  beforeUpdate() {
    console.log("Antes de que se actualice el componente.");
  },
  updated() {
    console.log("Basicamente, se actualiza el componente.");
  },
  beforeDestroy() {
    console.log("Antes de que se destruya.");
  },
  destroyed() {
    console.log("Destruir");
  },
  methods: {
    async construirLoad() {
      const arrayPokemons = await getPokemonsFachada();
      console.log("Usando el componente de arreglos -> " + arrayPokemons);
      this.arrPokemons = arrayPokemons;
      const indexWinner = Math.floor(Math.random() * 4);
      this.ganadorId = this.arrPokemons[indexWinner];
    },
    viewOnClickOptions(dataOption){
      console.log("Dio click y enviando reporte.", dataOption);
      //desestructurando...
      console.log("Id pokemon -> ",dataOption.id);
      console.log("Nombre pokemon -> ",dataOption.name);
      console.log("Hobby -> ",dataOption.hobby);
      if(dataOption.id === this.ganadorId.id){
        this.viewPokemon= true;
        console.log("ganaste");
      }
    },
  },
  data(){
    return{
      arrPokemons: [],
      ganadorId:null,
      viewPokemon: false,
    }
  }
};
</script>

<style>
</style>