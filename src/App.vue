<template>
  <div>
    <div class="container" v-if="reiniciarGame">
      <!-- <PokemonPage /> -->
      <h1>Casino</h1>
      <h2>Puntaje: {{ puntaje }}</h2>
      <h2>Intento: {{ intento }}</h2>
      <Imagen :texto="texto1" :urlImg="url1" />
      <Imagen :texto="texto2" :urlImg="url2" />
      <Imagen :texto="texto3" :urlImg="url3" />
      <button v-on:click="play()">PLAY</button>
    </div>
    <div v-if="winnerPlayer">
      <h1>Puntaje: {{ puntaje }}</h1>
      <h1>Felicitaciones, has ganado un premio de $10.0000,00</h1>
      <button @click="reiniciar()">Reiniciar Juego</button>
    </div>

    <div v-if="lostPlayer">
      <h1>Has utilizado tus {{ intento }} intentos.</h1>
      <h1>El juego ha terminado, intentalo nuevamente.</h1>
      <button @click="reiniciar()">Reiniciar Juego</button>
    </div>
  </div>
</template>

<script>
// import PokemonPage from "./pages/PokemonPage.vue";
import Imagen from "./components/Imagen.vue";

export default {
  name: "App",
  components: {
    // PokemonPage
    Imagen
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      url1:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXXXXX",
      texto2: "XXXXXXX",
      texto3: "XXXXXXX",
      winnerPlayer: false,
      lostPlayer: false,
      reiniciarGame: true
    };
  },
  methods: {
    async play() {
      // this.texto1 = 'charmander';
      // Instancia del primero
      const data1 = await this.getAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;

      // Instancia del segundo
      const data2 = await this.getAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;

      // Instancia del tercero
      const data3 = await this.getAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;
      this.condicionesImagenes();
    },
    async getAPI() {
      const apiConsumed = await fetch("https://yesno.wtf/api").then(r =>
        r.json()
      );
      return apiConsumed;
    },
    condicionesImagenes() {
      this.intento++;
      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje += 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      } else {
        this.puntaje += 0;
      }

      if (this.puntaje >= 10) {
        this.winnerPlayer = true;
        this.reiniciarGame = false;
      }

      if (this.intento === 5 && this.puntaje < 10) {
        this.lostPlayer = true;
        this.reiniciarGame = false;
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXXXXXX";
      this.texto2 = "XXXXXXXX";
      this.texto3 = "XXXXXXXX";
      this.winnerPlayer = false;
      this.lostPlayer = false;
      this.reiniciarGame = true;
    }
  }
};
</script>

<style>
.container{
  display: grid;
  grid-template-columns: repeat(4,200px);
  justify-content: center;
  align-items: center;
}
h1{
  grid-column: span 4;
  text-align: center;
}

h2{
  grid-column: span 2;
  text-align: center;
}

</style>
