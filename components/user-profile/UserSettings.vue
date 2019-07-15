<template>
    <!-- USER SETTINGS | START -->
    <section class="data-block-wrap usp-wrap">
        <form class="form" @submit.prevent="submit">
            <div class="form-btn">
                <BlockHeader blockHeaderName="Settings" :btnOff="true" />
                <button type="submit" class="btn-1 btn-edit" ref="saveBtn">Save</button>
            </div>
            <div class="user-settings-wrap" v-if="user">
                <div class="form__group">
                    <label for="name" class="form__label"></label>
                    <input id="name" class="form__input" type="text" v-model="name" :placeholder="`${user.name}`" required>
                </div>
                <div class="form__group">
                    <label for="email" class="form__label"></label>
                    <input id="email" class="form__input" type="text" v-model="email" :placeholder="`${user.email}`" required>
                </div>
                <div class="form__group">
                    <label for="location" class="form__label"></label>
                    <input id="location" class="form__input" type="text" v-model="location" :placeholder="`${user.location}`" required>
                </div>
                <div class="form__group">
                    <label for="shortBio" class="form__label"></label>
                    <input id="shortBio" class="form__input" type="text" v-model="shortBio" :placeholder="`${user.shortBio}`" required>
                </div>
            </div>
        </form>

        <form clas="form" @submit.prevent="pwSubmit">
            <div class="form-btn">
                <BlockHeader blockHeaderName="Password Update" :btnOff="true" />
                <button type="submit" class="btn-1 btn-edit" ref="updateBtn">Update</button>
            </div>
            <div class="user-settings-wrap" v-if="user">
                <div class="form__group">
                    <label for="password-current" class="form__label"></label>
                    <input id="password-current" class="form__input" type="password" v-model="passwordCurrent" placeholder='••••••••' minlength="6" required>
                </div>
                <div class="form__group">
                    <label for="password" class="form__label"></label>
                    <input id="password" class="form__input" type="password" v-model="password" placeholder='••••••••' minlength="6" required>
                </div>
                <div class="form__group">
                    <label for="password-confirm" class="form__label"></label>
                    <input id="password-confirm" class="form__input" type="password" v-model="passwordConfirm" placeholder='••••••••' minlength="6" required>
                </div>
            </div>
        </form>

        <div class="dangerous-zone-wrap section-header-standard">
            <BlockHeader blockHeaderName="Dangerous Settings" :btnOff="true" />
            <div class="user-settings-wrap">
                <SettingsField fieldName="Delete Account" btnStyle="danger" btnText="Delete"  />
            </div>
        </div>
    </section>
    <!-- USER SETTINGS | END -->
</template>

<script>
// Importing Components
import BlockHeader from '../BlockHeader';
import SettingsField from './SettingsFields';
// Importing Vuex
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'UserSettings',
    // Data
    data() {
        return {
            name: '',
            email: '',
            location: '',
            shortBio: '',
            passwordCurrent: '',
            password: '',
            passwordConfirm: ''
        }
    },
    // Computed
    computed: {
        user() {
            return this.$store.state.auth ? this.$store.state.auth.user : null;
        }
    },
    // Methods
    methods: {
        ...mapActions('auth', ['updateData', 'updatePassword']),
        // Submit Method for User Data
        async submit() {
            this.$refs.saveBtn.innerHTML = 'Saving..';
            const storeUpdate = await this.updateData({
                name: this.name,
                email: this.email,
                location: this.location,
                shortBio: this.shortBio
            });
            this.$refs.saveBtn.innerHTML = 'Save';
        },
        // Submit Method for User Password
        async pwSubmit() {
            this.$refs.updateBtn.innerHTML = 'Updating..';
            const storePwUpdate = await this.updatePassword({
                passwordCurrent: this.passwordCurrent,
                password: this.password,
                passwordConfirm: this.passwordConfirm
            });
            this.$refs.saveBtn.innerHTML = 'Update';
        }
    },
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
    > h2 { text-transform: none; color: $color-font-2; margin-bottom: 1rem; font-weight: 300;
        @media only screen and (max-width: $bp-small) { text-align: center; } 
    }
    > span { width: 6rem; height: .3rem; background-color: $color-primary; margin-left: .5rem; 
        @media only screen and (max-width: $bp-small) { margin: 0 auto;}
    }
    @media only screen and (max-width: $bp-small) { text-align: unset !important; }
}

.form-btn {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    > button { border: none; margin-left: 2.5rem; margin-top: -.5rem; }
}
</style>
