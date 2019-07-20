/* eslint-disable */

// Importing Files
import axios from 'axios';
import { showAlert } from '../components/alerts/alerts';

// State
export const state = () => ({
    recent3Articles: []
});

// Mutations
export const mutations = {
    SET_RECENT_ARTICLES (store, data) {
        store.recent3Articles = data;
    }
};

// Actions
export const actions = {
    // Add new Article ACtion
    async addArticle ({ commit }, data) {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/articles', data);
        } catch (err) {
            console.log(err);
        }
    },
    // Get Recent 3 Articles
    async getRecent3Articles ({ commit }) {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/articles/recent-3-articles');
            commit('SET_RECENT_ARTICLES', response.data.data.recentArticles);
        } catch (err) {
            console.log(err);
        }
    }
};