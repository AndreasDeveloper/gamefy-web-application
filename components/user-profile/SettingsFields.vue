<template>
    <div class="setting-field">
        <div class="keyValWrap">
            <h2 class="setting-field__fieldName">{{ fieldName }}</h2>
            <h3 class="setting-field__fieldKey" ref="setField" contentEditable="true">{{ fieldKey }}</h3>
        </div>
        <a href="" class="btn-1 btn-editField" v-bind:class="btnStyle" ref="editBtn" @click="focusElement">{{ btnText }}</a>
    </div>
</template>

<script>
export default {
    name: 'SettingsField',
    // Props
    props: ['fieldName', 'fieldKey', 'btnStyle', 'btnText'],
    // Methods
    methods: {
        // Adds editable area to input field div
        focusElement(el) {
            el.preventDefault();
            const settingKey = this.$refs.setField,
                  editBtn = this.$refs.editBtn;
            // Event Listener on Edit Button
            editBtn.addEventListener('click', e => {
                settingKey.focus();
            });
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/_variables.scss';
@import '../sass/_mixins.scss';

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
        transition: all .2s ease-in-out;
        // Content Editable on Click
        &[contentEditable]:focus { outline: none; border: 1px solid $color-font-1; padding: .2rem; }
    }
    > a { margin-right: 0 !important; border-radius: .3rem; 
        @media only screen and (max-width: $bp-small) { margin-top: 2rem; }
    }
    // - Media Queries - \\
    @media only screen and (max-width: $bp-small) { display: block; }
}
.keyValWrap { display: flex; align-items: center; }
</style>
