<!-- es la base -->
<template>
  <div>
    <h2>{{ titulo }}</h2>
    <!-- <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p> -->
    <!-- <p>{{ counter }} <sup>2</sup> = {{ operacionCuadrada() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadrada() }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadrada() }}</p> -->
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ operacionCuadradaComputada }}</p>
    
  </div>
</template>

<script>
export default {
  props:['titulo'],
  data(){
    return {
      counter: 5,
    }
  },
  methods:{
    operacionCuadrada(){
      console.log("Se calcula el cuadrado -> ",this.counter);
      return this.counter * this.counter;
    }
  },

  computed:{
    operacionCuadradaComputada(){
      console.log("Se calcula el cuadrado Computada");
      return this.counter * this.counter;
    }
  }
};
</script>

<style>
</style>
