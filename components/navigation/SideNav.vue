<template>
    <div class="side-nav-wrap">
        <div class="hamburger-icon-wrap">
            <i class="icon ion-ios-menu"></i>
            <nuxt-link to="/new-article" :class="[{ 'sideLine': this.$route.path === '/new-article' }, 'nav-icons-wrap__nLink']"><i class="icon ion-ios-add" v-if="user"></i></nuxt-link>
        </div>
        <div class="nav-icons-wrap">
            <nuxt-link to="/" :class="[{ 'sideLine': this.$route.path === '/' }, 'nav-icons-wrap__nLink']" ref="icon1"><i class="icon ion-ios-home"></i></nuxt-link>
            <nuxt-link to="/account" :class="[{ 'sideLine': this.$route.path === '/account' }, 'nav-icons-wrap__nLink']" ref="icon2" v-if="user"><i class="icon ion-md-contact"></i></nuxt-link>
            <nuxt-link to="/products" :class="[{ 'sideLine': this.$route.path === '/products' }, 'nav-icons-wrap__nLink']" ref="icon3"><i class="icon ion-logo-game-controller-b"></i></nuxt-link>
        </div>
        <div class="bottom-icons-wrap">
            <i class="icon ion-ios-information-circle"></i>
            <i v-if="user" class="icon ion-ios-log-out" @click="logoutUser"></i>
            <nuxt-link to="/login" v-else><i class="icon ion-ios-log-in" ></i></nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'SideNav',
    // Computed
    computed: {
        user() {
            return this.$store.state.auth ? this.$store.state.auth.user : null;
        }
    },
    // Methods
    methods: {
        // Map Actions
        ...mapActions('auth', ['logout']),
        async logoutUser() {
            await this.logout();
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing Variables
@import '../sass/main.scss';

// Side Navigation Main Wrapper
.side-nav-wrap {
    min-height: 100vh;
    width: 7rem;
    background-color: $color-primary;
    color: $color-white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 3.8rem;
    position: fixed;
    // - Media Queries - \\
    @media only screen and (max-width: $bp-small) { min-height: 9vh; width: 100%; flex-direction: row; align-items: unset; z-index: 999; padding: 0 1rem; }
    @media only screen and (max-width: $bp-vsmall-3b) { min-height: 10vh; }
}

// All Wraps and Icons
.hamburger-icon-wrap, .nav-icons-wrap, .bottom-icons-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    @media only screen and (max-width: $bp-small) { flex-direction: row; width: unset; }
    i, a { cursor: pointer; margin: 1rem 0; text-align: center; color: $color-white;
        @media only screen and (max-width: $bp-small) { margin: 0 1rem; padding-top: 2rem; }
    }
    &__nLink { color: $color-white; width: 100%; text-align: center; margin: 1rem 0; 
        @media only screen and (max-width: $bp-small) { margin: 0; padding-top: 2rem; }
    }
}

// Side Line Navigation
.sideLine {
    border-left: .4rem solid $color-white;
    @media only screen and (max-width: $bp-small) { border-left: 0; border-top: .4rem solid $color-white; }
}
</style>
