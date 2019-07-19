<template>
    <div class="auth-block">
        <div class="auth-block__left-side">
            <h2>Don't have an account?</h2>
            <nuxt-link to="/signup" class="btn-signup btn-1">Signup</nuxt-link>
        </div>
        <div class="auth-block__right-side">
            <h1>Login To Gamefy</h1>
            <form class="login-form" @submit.prevent="submit">
                <input type="email" v-model="email" placeholder="E-mail Address" class="login-form__input" required>
                <input type="password" v-model="password" placeholder="Password" class="login-form__input" required>
                <button type="submit" class="btn-login btn-1">Login</button>
            </form>
            <h3>Can't access your account?</h3>
        </div>
    </div>  
</template>

<script>
// Importing Components
import { mapGetters, mapActions } from 'vuex';
import { showAlert } from '@/components/alerts/alerts.js';

export default {
    name: 'LoginBlock',
    // Data
    data() {
        return {
            email: '',
            password: ''
        }
    },
    // Methods
    methods: {
        // Map Actions
        ...mapActions('auth', ['login']),
        // Submit Method
        async submit() {
            const storeLogin = await this.login({
                email: this.email,
                password: this.password
            });
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

// Login Form
.login-form {
    display: flex;
    flex-direction: column;
    // Input
    &__input {
        border: none;
        outline: none;
        background-color: $color-background-1;
        padding: 1rem;
        margin: 1rem 0;
    }
}
</style>
