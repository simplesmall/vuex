const actions = {
  setMoneySumAct(context,val){
    context.commit('setMoneySum',val)
  },
  setBorrowSumAct(context,val){
    context.commit('setBorrowSum',val)
  },
  setSaveSumAct(context,val){
    context.commit('setSaveSum',val)
  }
}
export default  actions
