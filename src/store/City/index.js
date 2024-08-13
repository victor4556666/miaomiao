const state = {
    name: localStorage.getItem('name') || '北京',
    id: localStorage.getItem('id') || 110100
};
const mutations = {
    changeCity(state, payload) {
        state.name = payload.name
        state.id = payload.cityId
    }
};
const actions = {

};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
