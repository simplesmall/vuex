const mutations={
  setMoneySum(state,num){
    state.moneySum += num
  },
  setBorrowSum(state,val){
    state.borrowSum += val
  },
  setSaveSum(state,val){
    state.saveSum += val
  }
}
export default mutations
