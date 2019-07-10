<template>
    <div class="login-block">
        <div class="login-block__left-side">
            <h2>Don't have an account?</h2>
            <nuxt-link to="/signup" class="btn-signup btn-1">Signup</nuxt-link>
        </div>
        <div class="login-block__right-side">
            <h1>Login To Gamefy</h1>
            <form action="" method="" class="login-form">
                <input type="email" placeholder="E-mail Address" class="login-form__input" required>
                <input type="password" placeholder="Password" class="login-form__input" required>
                <button type="submit" class="btn-login btn-1">Login</button>
            </form>
            <h3>Can't access your account?</h3>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'LoginBlock'
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.login-block {
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba($color-black, .25);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    background-color: $color-white;
    display: flex;
    height: 45rem;
    // Left Side
    &__left-side {
        background-color: $color-primary;
        border-radius: 5px 0 0 5px;
        color: $color-white;
        padding: 5rem !important;
        justify-content: center !important;
        h2 { font-size: 2rem; font-weight: 400; margin: 2rem 0; }
    }
    // Right Side
    &__right-side {
        h1 { color: $color-primary; font-size: 2.5rem; font-weight: 800; }
        h3 { color: $color-font-1; font-size: 1.6rem; font-weight: 300; text-decoration: underline; cursor: pointer; margin-bottom: -5rem; }
    }
    &__left-side, &__right-side {
        padding: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
}

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
