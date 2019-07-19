// State
export const state = () => ({

});

// Mutations
export const mutations = {

};

// Actions
export const actions = {
    async nuxtServerInit({ dispatch }) {
        console.log('Testing');
        await dispatch('auth/fetchData');
    }
};