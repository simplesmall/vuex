<template>
  <div>
    center
    <input type="button" value="总行拨款" @click="changeMoney">
  </div>
</template>

<script>
  export default {
    name: "CenterBank",
    methods:{
      changeMoney(){
        this.$store.dispatch('setMoneySumAct',100)
        console.log('总行拨款100:',this.$store.state.moneySum)
      }
    }
  }
</script>

<style scoped>

</style>
