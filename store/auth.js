/* eslint-disable */

import axios from 'axios';
import { showAlert } from '../components/alerts/alerts';

// State
export const state = () => ({
    user: null
});

// Mutations
export const mutations = {
    set_user (store, data) {
        store.user = data
    },
    reset_user (store) {
        store.user = null
    }
};

// Actions
export const actions = {
    // Fetch User Account
    async fetch ({ commit }) {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/users/account');
            commit('set_user', response.data.doc);
            return response;
        } catch (err) {
            commit('reset_user');
        }
    },
    // Login Action
    async login ({ commit }, data) {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/login', data);
            commit('set_user', response.data.user);
            // If successfully logged in
            if (response.data.status === 'success') {
                // Alert
                showAlert('success', 'Logged in successfully');
                window.setTimeout(() => {
                    location.assign('/account');
                }, 1500);
            }
            return response;
        } catch (err) {
            // Alert
            showAlert('error', err.response.data.message);
        }
    },
    // Signup Action
    async signup ({ commit }, data) {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/signup', data);
            commit('set_user', response.data.user);
            // If successfully signed up
            if (response.data.status === 'success') {
                // Alert
                showAlert('success', 'Signed up successfully');
                window.setTimeout(() => {
                    location.assign('/account');
                }, 1500);
            }
        } catch (err) {
            // Alert
            showAlert('error', err.response.data.message);
        }
    },
    // Update User Data Action
    async updateData ({ commit }, data) {
        try {
            const response = await axios.patch('http://localhost:3000/api/v1/users/updateAccount', data);
            commit('set_user', response.data.user);
            // If successfully updated
            if (response.data.status === 'success') {
                // Alert
                showAlert('success', 'Data updated successfully');
                window.setTimeout(() => {
                    location.assign('/account');
                }, 1500);
            }
        } catch (err) {
            // Alert
            showAlert('error', err.response.data.message);
        }
    },
    // Update User Password Action
    async updatePassword ({ commit }, data) {
        try {
            const response = await axios.patch('http://localhost:3000/api/v1/users/updatePassword', data);
            commit('set_user', response.data.user);
            // If successfully updated
            if (response.data.status === 'success') {
                // Alert
                showAlert('success', 'Password updated');
                window.setTimeout(() => {
                    location.assign('/account');
                }, 1500);
            }
        } catch (err) {
            // Alert
            showAlert('error', err.response.data.message);
        }
    },
    // Logout Action
    async logout ({ commit }) {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/users/logout');
            commit('reset_user');
            if (response.data.status === 'success') location.assign('/');
        } catch (err) {
            // Alert
            showAlert('error', 'Error logging out. Try again');
        }
    }
};

// Getters
export const getters = {
    gettingUser: state => state.user
};