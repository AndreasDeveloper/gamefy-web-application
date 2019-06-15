<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
// Importing SASS Components
@import '../components/sass/_mixins.scss';

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
</style>