/* eslint-disable */

// Importing Files
import axios from 'axios';
import { showAlert } from '../components/alerts/alerts';

// State
export const state = () => ({
    user: null
});

// Mutations
export const mutations = {
    SET_USER (store, data) {
        store.user = data
    },
    RESET_USER (store) {
        store.user = null
    }
};

// Actions
export const actions = {
    // Fetch User Account
    async fetchData ({ commit }) {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/users/account');
            commit('SET_USER', response.data.doc);
            return response;
        } catch (err) {
            commit('RESET_USER');
        }
    },
    // Login Action
    async login ({ commit }, data) {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/users/login', data);
            commit('SET_USER', response.data.data.user);
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
            commit('SET_USER', response.data.user);
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
            commit('SET_USER', response.data.user);
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
            commit('SET_USER', response.data.user);
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
            commit('RESET_USER');
            if (response.data.status === 'success') location.assign('/');
        } catch (err) {
            // Alert
            showAlert('error', 'Error logging out. Try again');
        }
    },
    // Delete User Action
    async deleteAccount ({ commit }) {
        try {
            await axios.delete('http://localhost:3000/api/v1/users/deleteAccount');
            commit('RESET_USER');
            // Alert
            showAlert('success', 'Successfully deleted your account');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        } catch (err) {
            // Alert
            showAlert('error', 'Error deleting your account. Try again');
        }
    }
};

// Getters
export const getters = {
    gettingUser: state => state.user
};