<template>
    <div class="setting-field">
        <div class="keyValWrap">
            <h2 class="setting-field__fieldName">{{ fieldName }}</h2>
            <h3 class="setting-field__fieldKey">{{ fieldKey }}</h3>
        </div>
        <a href="#" class="btn-editField" v-bind:class="btnStyle">{{ btnText }}</a>
    </div>
</template>

<script>
export default {
    name: 'SettingsField',
    // Props
    props: ['fieldName', 'fieldKey', 'btnStyle', 'btnText']
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/_variables.scss';

// Main Wrapper
.setting-field {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0 1rem 0;
    // Field Name
    &__fieldName {
        color: $color-black;
        font-size: 2.6rem;
        font-weight: 300;
        text-transform: none;
    }
    // Field Value/Key
    &__fieldKey {
        font-size: 2.4rem;
        font-weight: 200;
        margin-left: 1.5rem;
    }
    > a { margin-right: 0 !important; }
}
.keyValWrap { display: flex; align-items: center; }
</style>
