<template>
  <div class="main-container">
    <CenterBank class="container"/>
    <CountyBank class="container"/>
    <ProvinceBank class="container"/>
  </div>
</template>

<script>
  import CenterBank from "./CenterBank";
  import CountyBank from "./CountyBank";
  import ProvinceBank from "./ProvinceBank";

  export default {
    name: "Main",
    components: {
      CenterBank,
      CountyBank,
      ProvinceBank
    }
  }
</script>

<style scoped>
  .main-container {
    display: flex;
  }

  .container {
    width: 400px;
    height: 400px;
    background-color: pink;
    margin: 5px;
  }
</style>
