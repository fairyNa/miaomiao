const state={
    nm: window.localStorage.getItem('nowNM') || '北京',
    id: window.localStorage.getItem('nowID') || '1'
};
const mutations={
    city_info(state,payload){
        state.nm=payload.nm;
        state.id=payload.id
    }
};
const actions={

};
export default{
    namespaced:true,
    state,
    mutations,
    actions
}