<template>
    <div class="side-nav-wrap">
        <div class="hamburger-icon-wrap">
            <i class="icon ion-ios-menu"></i>
            <i class="icon ion-ios-add" v-if="user"></i>
        </div>
        <div class="nav-icons-wrap">
            <a href="/" class="nav-icons-wrap__nLink" ref="icon1"><i class="icon ion-ios-home"></i></a>
            <a href="/account" class="nav-icons-wrap__nLink" ref="icon2"><i class="icon ion-md-contact"></i></a>
            <a href="/products" class="nav-icons-wrap__nLink" ref="icon3"><i class="icon ion-logo-game-controller-b"></i></a>
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
        ...mapActions('auth', ['fetch', 'logout']),
        checkRoute() {
            if (this.$route.path === '/') {
                this.$refs.icon1.classList.toggle('sideLine');
            } else if (this.$route.path === '/account') {
                this.$refs.icon2.classList.toggle('sideLine');
            } else if (this.$route.path === '/products') {
                this.$refs.icon3.classList.toggle('sideLine');
            }
        },
        async checkUser() {
            const user = await this.fetch();
        },
        async logoutUser() {
            await this.logout();
        }
    },
    // Lifecycle Method - Created
    created() {
        this.checkUser();
    },
    // Lifecycle Method - Mounted
    mounted() {
        this.checkRoute();
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
