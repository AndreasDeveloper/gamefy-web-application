<template>
    <!-- USER SETTINGS | START -->
    <div class="data-block-wrap">
        <BlockHeader blockHeaderName="Settings" />
        <div class="user-settings-wrap">
            <SettingsField fieldName="Username:" v-bind:fieldKey="'John Doe'" btnStyle="normal" btnText="Edit"  />
            <SettingsField fieldName="Email:" v-bind:fieldKey="'johndoe@gmail.com'" btnStyle="normal" btnText="Edit"  />
            <SettingsField fieldName="Password:" v-bind:fieldKey="'************'" btnStyle="normal" btnText="Edit"  />
            <SettingsField fieldName="Location:" v-bind:fieldKey="'Los Angeles, CA'" btnStyle="normal" btnText="Edit"  />
        </div>
        <div class="dangerous-zone-wrap section-header-standard">
            <h2>Dangerous Settings</h2>
            <span></span>
            <div class="user-settings-wrap">
                <SettingsField fieldName="Delete Account" btnStyle="danger" btnText="Delete"  />            
            </div>
        </div>
    </div>
    <!-- USER SETTINGS | END -->
</template>

<script>
// Importing Components
import BlockHeader from '../BlockHeader';
import SettingsField from './SettingsFields';

export default {
    name: 'UserSettings',
    // Components
    components: {
        BlockHeader,
        SettingsField
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.user-settings-wrap {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}
.dangerous-zone-wrap {
    display: flex; 
    flex-direction: column;
    // align-items: flex-start !important;
    align-items: unset !important;
    margin-top: 4rem;
    > h2 { text-transform: none; color: $color-font-2; margin-bottom: 1rem; font-weight: 300; }
    > span { width: 6rem; height: .3rem; background-color: $color-primary; margin-left: .5rem; }
}
</style>
