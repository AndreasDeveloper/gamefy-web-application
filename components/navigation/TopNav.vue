<template>
    <div class="top-nav-wrap">
        <div class="search-wrap">
            <form class="search-wrap__form">
                <button type="submit" class="search-form__button"><i class="icon ion-ios-search"></i></button>
                <input type="text" placeholder="Search Articles, Products">
            </form>
        </div>
        <div class="logo-wrap">
            <img src="~assets/images/gamefy-logo.png">
        </div>
        <!-- User State depends on if either user is logged in or not. If not logged in, buttons will be shown, otherwise, message is displayed -->
        <div class="user-state-wrap">
            <nuxt-link to="/account" v-if="user" class="user-state-wrap__message">Welcome, <span>{{ user.name.split(' ')[0] }}</span></nuxt-link>
            <div class="signup-nav-wrap" v-else>
                <h2>Not a User?</h2>
                <nuxt-link to="/signup" class="btn-signup btn-signup--empty">Signup</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
// Importing Vuex
import { mapActions } from 'vuex';

export default {
    name: 'TopNav',
    // Computed
    computed: {
        user() {
            return this.$store.state.auth ? this.$store.state.auth.user : null;
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

// Top Navigation Main Wrapper
.top-nav-wrap {
    background-color: $color-white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    width: 100%;
    padding: 0 12rem;
    margin-left: 3rem;
    @media only screen and (max-width: $bp-small) { padding: 0 1rem; margin-left: 0; margin-top: 10rem; }
}

// Search Button Wrapper
.search-wrap {
    @media only screen and (max-width: $bp-vsmall-3b) { margin-top: -3rem; }
    &__form {
        position: relative;
        display: flex;
        border: .1rem solid $color-font-1; 
        border-radius: 16rem;
        width: 22rem;
        @media only screen and (max-width: $bp-small) { width: 60%; }
        // Input Field
        input { 
            border: none; 
            outline: none; 
            padding: 1rem; 
            margin-left: 2rem;
            &::placeholder { color: $color-font-1; }
            @media only screen and (max-width: $bp-small) { width: 60%; }
        }
        // Button
        button {
            position: absolute;
            top: 26%;
            left: 5%;
            border: none;
            background: none;
            color: $color-font-1;
            font-size: 1.4rem;
        }
    }
}

// Logo Wrapper
.logo-wrap {
    margin-top: -1rem;
    @media only screen and (max-width: $bp-small) { margin-left: -12rem; }
    @media only screen and (max-width: $bp-vsmall-3b) { width: 12rem; height: 12rem; }
    img {
        margin-top: 2rem;
        width: 16rem;
        height: 16rem;
        @media only screen and (max-width: $bp-vsmall-3b) { width: 12rem; height: 12rem; margin-top: 0; }
    }
}

// User State Wrapper
.user-state-wrap {
    &__message, h2 {
        color: $color-font-1;
        font-size: 1.8rem;
        font-weight: 300;
        margin: 0 2rem;
        span { text-decoration: underline; }
    }
}

.signup-nav-wrap { display: flex; align-items: center; }

</style>
