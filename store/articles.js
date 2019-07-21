/* eslint-disable */

// Importing Files
import axios from 'axios';
import { showAlert } from '../components/alerts/alerts';

// State
export const state = () => ({
    recent3Articles: [],
    currentArticle: {}
});

// Mutations
export const mutations = {
    SET_RECENT_ARTICLES (store, data) {
        store.recent3Articles = data;
    },
    SET_CURRENT_ARTICLE (store, data) {
        store.currentArticle = data;
    }
};

// Actions
export const actions = {
    // Add new Article Acion
    async addArticle ({ commit }, data) {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/articles', data);
        } catch (err) {
            console.log(err);
        }
    },
    // Get Recent 3 Articles Action
    async getRecent3Articles ({ commit }) {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/articles/recent-3-articles');
            commit('SET_RECENT_ARTICLES', response.data.data.recentArticles);
        } catch (err) {
            console.log(err);
        }
    },
    // Get Specific Article Action
    async getArticle ({ commit }, route) {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/articles/${route}`);
            commit('SET_CURRENT_ARTICLE', response.data.article);
        } catch (err) {
            console.log(err);
        }
    }
};