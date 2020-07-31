<template>
  <div>
    <CenterBank/>
    <CountyBank/>
    <ProvinceBank/>
  </div>
</template>

<script>
  import CenterBank from "./CenterBank";
  import CountyBank from "./CountyBank";
  import ProvinceBank from "./ProvinceBank";

  export default {
    name: "Main",
    components:{
      CenterBank,
      CountyBank,
      ProvinceBank
    }
  }
</script>

<style scoped>

</style>
