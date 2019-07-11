<template>
  <div class="container">
    <TopNav />
    <SideNav />
    <nuxt />
  </div>
</template>


<script>
// Importing Components
import TopNav from '../components/navigation/TopNav';
import SideNav from '../components/navigation/SideNav';

export default {
  components: {
    TopNav,
    SideNav
  }
};
</script>


<style lang="scss">
// Importing SASS Components
@import '../components/sass/main.scss';

// Container
.container {
  display: flex;
  flex-direction: column;
}
// Main Content
.main-content {
  background-color: $color-background-1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  order: 2;
  margin-left: 7rem;
  @media only screen and (max-width: $bp-small) { margin-left: 0; }
}

html {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  // * --- MEDIA QUERIES --- * \\
  @include respond(phone) { font-size: 50%; }
  @include respond(tab-land) { font-size: 56.25%; } // width < 1200? // IF THEY ARE CONFLICTING. LAST ONE APPLIES! // 1 rem = 9px; 9/16 = 56.25%
  @include respond(tab-port) { font-size: 50%; }    // width < 900?  // 1 rem = 8px; 8/16 = 50%
  @include respond(big-desktop) { font-size: 75%; } // 1 rem = 12px; 12/16 = 75%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

// Section Standard Wrapper
.section-wrap-standard {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  margin: 3rem 10rem;
  // - Media Queries - \\
  @media only screen and (max-width: $bp-largest-5) { min-height: 40vh; margin: 3rem 6rem; }
  // @media only screen and (max-width: $bp-medium) { min-height: 40vh; margin: 3rem 6rem; }
  @media only screen and (max-width: $bp-small) { margin: 3rem 5rem; }
}

// Blue Blocks
.blue-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5.5rem;
    background-color: $color-primary;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    color: $color-white;
    font-size: 1.7rem;
    text-transform: uppercase;
    cursor: pointer;
    height: 100%;
    text-align: center;
    > h2 { font-weight: 400; }
}

// Authentication Blocks
.auth-block {
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba($color-black, .25);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    background-color: $color-white;
    display: flex;
    height: 50rem;
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
</style>