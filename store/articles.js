/* eslint-disable */

// Importing Files
import axios from 'axios';
import { showAlert } from '../components/alerts/alerts';

// State
export const state = () => ({
    articles: []
});

// Mutations
export const mutations = {
    SET_ARTICLES (store, data) {
        store.articles = data;
    }
};

// Actions
export const actions = {
    async addArticle ({ commit }, data) {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/articles', data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
};