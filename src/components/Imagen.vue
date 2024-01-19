<template>
  <div class="container">
    <img :src="urlImg" alt="No se muestra imagen" />
    <h1>{{ texto }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String
    },
    urlImg: {
      type: String
    }
  }
};
</script>

<style scoped>
img {
  width: 150px;
  height: 200px;
}
h1 {
  font-size: 20px;
}

</style>