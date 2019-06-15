<template>
    <div class="side-nav-wrap">
        <div class="hamburger-icon-wrap">
            <i class="icon ion-ios-menu"></i>
        </div>
        <div class="nav-icons-wrap">
            <i class="icon ion-ios-home"></i>
            <i class="icon ion-md-contact"></i>
            <i class="icon ion-logo-game-controller-b"></i>
        </div>
        <div class="bottom-icons-wrap">
            <i class="icon ion-ios-information-circle"></i>
            <i class="icon ion-ios-log-out"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideNav'
};
</script>

<style lang="scss" scoped>
// Importing Variables
@import './sass/main.scss';

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
    @media only screen and (max-width: $bp-small) { min-height: 10vh; width: 100%; flex-direction: row; z-index: 999; padding: 0 1rem; }
}

// All Wraps and Icons
.hamburger-icon-wrap, .nav-icons-wrap, .bottom-icons-wrap {
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: $bp-small) { flex-direction: row; }
    i { cursor: pointer; margin: 1rem 0; 
        @media only screen and (max-width: $bp-small) { margin: 0 1rem; }
    }
}
</style>
