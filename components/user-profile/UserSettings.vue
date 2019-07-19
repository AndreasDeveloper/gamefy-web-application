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
                    <input class="form__upload" type="file" accept="image/*" id="photo" name="photo" @change="processFile($event)">
                    <label for="photo">Upload photo</label>
                </div>
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
                <div class="form__group">
                    <label for="longBio" class="form__label"></label>
                    <textarea id="longBio" class="form__input" v-model="longBio" :placeholder="`${user.longBio}`" required rows="5"></textarea>
                </div>
                <div class="form__group">
                    <label for="userGithub" class="form__label"></label>
                    <input id="userGithub" class="form__input" type="text" v-model="userGithub" :placeholder="`${user.userGithub}`" required>
                </div>
                <div class="form__group">
                    <label for="userLinkedin" class="form__label"></label>
                    <input id="userLinkedin" class="form__input" type="text" v-model="userLinkedin" :placeholder="`${user.userLinkedin}`" required>
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
                <div class="setting-field">
                    <div class="keyValWrap">
                        <h3 class="setting-field__fieldKey">Delete account</h3>
                    </div>
                    <a href="" class="btn-1 btn-editField danger" ref="deleteBtn" @click.prevent="showModal">Delete</a>
                    <ConfirmationModal v-show="isConfirmationModalVisible" @close="closeModal" @deleteMe="deleteUser" />
                </div>
            </div>
        </div>
    </section>
    <!-- USER SETTINGS | END -->
</template>

<script>
// Importing Components
import BlockHeader from '@/components/BlockHeader';
import SettingsField from '@/components/user-profile/SettingsFields';
import ConfirmationModal from '@/components/modals/ConfirmationModal';
// Importing Vuex
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'UserSettings',
    // Data
    data() {
        return {
            photo: '',
            name: '',
            email: '',
            location: '',
            shortBio: '',
            longBio: '',
            userGithub: '',
            userLinkedin: '',
            passwordCurrent: '',
            password: '',
            passwordConfirm: '',
            // Confirmation Modal
            isConfirmationModalVisible: false
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
        ...mapActions('auth', ['updateData', 'updatePassword', 'deleteAccount']),
        // Submit Method for User Data
        async submit() {
            this.$refs.saveBtn.innerHTML = 'Saving..';
            const form = new FormData();
            form.append('name', this.name);
            form.append('email', this.email);
            form.append('location', this.location);
            form.append('shortBio', this.shortBio);
            form.append('longBio', this.longBio);
            form.append('userGithub', this.userGithub);
            form.append('userLinkedin', this.userLinkedin);
            form.append('photo', this.photo);
            const dataUpdate = await this.updateData(form);
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
        },
        // Submit Method for Deleting User / Account
        async deleteUser() {
            this.$refs.deleteBtn.innerHTML = 'Deleting..';
            await this.deleteAccount();
            this.$refs.deleteBtn.innerHTML = 'Deleted';
        },
        // Confirmation Modal Methods
        showModal() {
            this.isConfirmationModalVisible = true;
        },
        closeModal() {
            this.isConfirmationModalVisible = false;
        },
        // Getting Input File (image)
        processFile(e) {
            this.photo = e.target.files[0];
        }
    },
    // Components
    components: {
        BlockHeader,
        SettingsField,
        ConfirmationModal
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
    > button { border: none; margin-left: 2.5rem; margin-top: -.5rem; 
        @media only screen and (max-width: $bp-small) {
            margin-left: 0;
        }
    }
    // - Media Queries - \\
    @media only screen and (max-width: $bp-small) {
        flex-direction: column;
    }
}

// Main Wrapper
.setting-field {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0 1rem 0;
    // Field Value/Key
    &__fieldKey {
        font-size: 2.2rem;
        color: $color-font-2;
        font-weight: 400;
        border: none;
        outline: none;
    }
    > a { margin-right: 0 !important; border-radius: .3rem;
        @media only screen and (max-width: $bp-small) { margin-top: 2rem; }
    }
    // - Media Queries - \\
    @media only screen and (max-width: $bp-small) {
        display: block; 
        margin: 0;
        text-align: center;
    }
}

.section-header-standard {
    @media only screen and (max-width: $bp-small) { margin-right: 0 !important; }
}
</style>
