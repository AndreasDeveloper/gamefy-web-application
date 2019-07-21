// State
export const state = () => ({

});

// Mutations
export const mutations = {

};

// Actions
export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('articles/getRecent3Articles');
    }
};