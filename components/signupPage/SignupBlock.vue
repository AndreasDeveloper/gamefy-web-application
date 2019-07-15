<template>
    <div class="auth-block">
        <div class="auth-block__left-side">
            <h2>Already have an account?</h2>
            <nuxt-link to="/login" class="btn-signup btn-1">Login</nuxt-link>
        </div>
        <div class="auth-block__right-side">
            <h1>Signup On Gamefy</h1>
            <form action="" method="" class="signup-form" @submit.prevent="submit">
                <input type="email" v-model="email" placeholder="E-mail Address" class="signup-form__input" required>
                <input type="text" v-model="name" placeholder="Name" class="signup-form__input" required>
                <input type="text" v-model="location" placeholder="Location" class="signup-form__input" required>

                <input type="password" v-model="password" placeholder="Password" class="signup-form__input" required>
                <input type="password" v-model="passwordConfirm" placeholder="Confirm Password" class="signup-form__input" required>
                <button type="submit" class="btn-login btn-1">Signup</button>
            </form>
        </div>
    </div>
</template>

<script>
// Importing Vuex
import { mapGetters, mapActions } from 'vuex';
// Importing Components
import { showAlert } from '@/components/alerts/alerts.js';

export default {
    name: 'SignupBlock',
    // Data
    data() {
        return {
            email: '',
            name: '',
            location: '',
            password: '',
            passwordConfirm: ''
        }
    },
    // Methods
    methods: {
        // Map Actions
        ...mapActions('auth', ['signup']),
        // Submit Method
        async submit() {
            const storeSignup = await this.signup({
                email: this.email,
                name: this.name,
                location: this.location,
                password: this.password,
                passwordConfirm: this.passwordConfirm
            });
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.auth-block__right-side > h1 { margin-bottom: 1rem; }

// Signup Form
.signup-form {
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
