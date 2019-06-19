<template>
    <div class="section-header-standard block-header">
        <div class="block-header__firstPart">
            <h2>{{ blockHeaderName }}</h2>
            <span></span>
        </div>
        <a href="#" class="btn-moreDetails">{{ btnText }}</a>
    </div>
</template>

<script>
export default {
    name: 'BlockHeader',
    // Props
    props: ['blockHeaderName', 'btnText']
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import './sass/main.scss';

// Header
.block-header {
    margin-bottom: 0 !important;
    &__firstPart { 
    display: flex; 
    flex-direction: column;
        > h2 { text-transform: none; color: $color-font-2; margin-bottom: 1rem; }
        > span { width: 6rem; height: .3rem; background-color: $color-primary; margin-left: .5rem; }
    }
    > a { margin: 0; }
  }
</style>
