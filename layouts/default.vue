<template>
  <div class="container">
    <TopNav />
    <SideNav />
    <nuxt />
  </div>
</template>


<script>
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';

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
</style>