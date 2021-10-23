export const state = () => ({
  church: null,
})

export const mutations = {
  setChurch(state, val) {
    state.church = val
    console.log('VUEX: set church to ', state.church)
  },
}
