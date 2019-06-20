<template>
    <div class="section-header-standard block-header">
        <div class="block-header__firstPart">
            <h2>{{ blockHeaderName }}</h2>
            <span></span>
        </div>
        <a href="#" class="btn-moreDetails">{{ btnText }} <span v-html="plusIcon"></span></a>
    </div>
</template>

<script>
export default {
    name: 'BlockHeader',
    // Props
    props: ['blockHeaderName', 'btnText', 'plusIcon']
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
    > a > span  { margin-left: .5rem; font-size: 1.7rem; } // Plus/Add Icon
}

// User Settings Page Wrap
.usp-wrap > .block-header > a[data-v-1960eb22] { display: none !important; }
</style>
