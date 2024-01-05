<!-- es la base -->
<template>
  <div>
    <h2>{{ titulo }}</h2>
    <!-- <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>-->
    <!-- <p>{{ counter }} <sup>2</sup> = {{ operacionCuadrada() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadrada() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadrada() }}</p>-->
    <!-- <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>-->
    <p>
      {{ counter }}
      <sup>2</sup>
      = {{ operacionCuadradaComputada }}
    </p>
    <button @click="suma()">+1</button>
    <button @click="resta()">-1</button>
  </div>
</template>

<script>
export default {
  // props:['titulo', 'valor'],
  props: {
    titulo: String,
    // titulo:{
    //   type: String,
    //   required: true,
    // },
    // valor: Number,
    valor: {
      type: Number,
      required: false, //si es siempre requerido
      default: 100, //si no se envia el valor.
      validator(value) {
        //SIEMPRE DEBE RETORNAR UN BOOLEANO.
        // console.log("error");
        return value > 0 ? true : false;
      }
    }
  },
  data() {
    return {
      counter: this.valor //padre
    };
  },
  methods: {
    operacionCuadrada() {
      console.log("Se calcula el cuadrado -> ", this.counter);
      return this.counter * this.counter;
    },
    suma() {
      return this.counter++;
    },
    resta() {
      return this.counter--;
    }
  },

  computed: {
    operacionCuadradaComputada() {
      console.log("Se calcula el cuadrado Computada");
      return this.counter * this.counter;
    }
  }
};
</script>

<style scoped>

h2{
  font-family: 'Times New Roman', Times, serif;
}

p{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
/* *{
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
} */

button{
  background: rgb(81, 148, 142);
  border-radius: 5px;
  font-size: 21px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 4px;
  padding: 2px 15px;
}

button:hover{
  background: #aeb45e;
}

</style>