<template>
  <div>
    province
    <input type="button" value="城里面快超消费" @click="changeMoney">
  </div>
</template>

<script>
  export default {
    name: "ProvinceBank",
    methods:{
      changeMoney(){
        this.$store.dispatch('setMoneySumAct',-50)
        console.log('城里面快超消费50:',this.$store.state.moneySum)
      }
    }
  }
</script>

<style scoped>

</style>
