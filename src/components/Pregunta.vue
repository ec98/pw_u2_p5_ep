<template>
  <div>
    <img v-if="img" v-bind:src="img" alt="No se puede visualizar la imagen" />
    <div class="dark"></div>
    <div class="container">
      <input v-model="pregunta" type="text" />
      <p>Recuerda que debes terminar con un signo de interogacion ('?')</p>
      <div v-if="preguntaValida === true">
        <h2>{{ pregunta }}</h2>
        <h1>{{ respuesta }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: null,
      respuesta: null,
      img: null,
      preguntaValida: false,
    };
  },
  methods: {
    async consumirAPI() {
      this.respuesta = "pensando.";
      this.respuesta = "pensando..";

      //   const data = await fetch("https://yesno.wtf/api").then((respuesta) =>
      //     respuesta.json()
      //   );
      const { answer, image } = await fetch("https://yesno.wtf/api").then((r) =>
        r.json()
      );

      //   console.log(data);
      console.log(answer);
      console.log(image);
      this.respuesta = "pensando...";
      this.respuesta = answer === "yes" ? "SI!" : "NO!";
      // if(answer === "yes"){
      //   this.respuesta = "Si";
      // } else{
      //   this.respuesta = "No";
      // }
      this.img = image;
      //depende de la funcionalidad de la api porque necesita esperar una respuesta de la peticion.
    },
  },
  watch: {
    pregunta(value, oldValue) {
      this.preguntaValida = false;
      // console.log(value);
      // console.log(oldValue);
      if (!value.includes("?")) {
        return;
      }
      //CONSUMO DEL API.
      this.consumirAPI();
      this.preguntaValida = true;
    },
  },
};
</script>

<style scoped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
.dark {
  background-color: rgba(0, 0, 0, 0.6);
}

input:focus {
  outline: none;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

.container {
  position: relative;
}
p {
  color: rgb(209, 252, 68);
  font-size: 20px;
  margin-top: 10px;
}
h1,
h2 {
  color: white;
}
h2 {
  margin-top: 170px;
}
</style>