<template>
  <div>
    county === > {{localMoney}}
    <input type="button" value="乡下慢慢贷款" @click="changeMoney">
  </div>
</template>

<script>
  export default {
    name: "CountyBank",
    data() {
      return {
        localMoney: 0
      }
    },
    watch: {
      '$store.state.moneySum': function (val) {
        this.localMoney = val
      }
    },
    methods: {
      changeMoney() {
        this.$store.dispatch('setMoneySumAct', -20)
        console.log('乡下慢慢贷款20:', this.$store.state.moneySum)
      }
    }
  }
</script>

<style scoped>

</style>
