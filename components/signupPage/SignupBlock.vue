<template>
    <div class="auth-block">
        <div class="auth-block__left-side">
            <h2>Already have an account?</h2>
            <nuxt-link to="/login" class="btn-signup btn-1">Login</nuxt-link>
        </div>
        <div class="auth-block__right-side">
            <h1>Signup On Gamefy</h1>
            <form action="" method="" class="signup-form">
                <input type="email" placeholder="E-mail Address" class="signup-form__input" required>
                <input type="text" placeholder="Name" class="signup-form__input" required>
                <input type="text" placeholder="Location" class="signup-form__input" required>

                <input type="password" placeholder="Password" class="signup-form__input" required>
                <input type="password" placeholder="Confirm Password" class="signup-form__input" required>
                <button type="submit" class="btn-login btn-1">Signup</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignupBlock',
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
