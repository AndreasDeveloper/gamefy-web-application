<template>
    <transition name="modal-fade">
        <div class="author-modal-bk">
            <div class="author-modal">
                <i class="icon ion-ios-close author-modal__close-icon" @click="close()"></i>
                <h2 class="author-modal__name">John Doe</h2>
                <h3 class="author-modal__role">{{ userBio }}</h3>
                <span class="author-modal__divider"></span>
                <p class="author-modal__bio">{{ userSummary }}</p>
                <span class="author-modal__divider"></span>
                <div class="author-modal-links">
                    <div class="linkTo">
                        <i class="icon ion-logo-github"></i>
                        <a :href="userGithub" target="_blank">GitHub Profile</a>
                    </div>
                    <div class="linkTo">
                        <i class="icon ion-logo-linkedin"></i>
                        <a :href="userLinkedin" target="_blank">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'AuthorModal',
    // Methods
    methods: {
        close() {
            this.$emit('close');
        }
    },
    // Props
    props: ['userBio', 'userSummary', 'userGithub', 'userLinkedin']
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main';

// Modal Background
.author-modal-bk {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color-black, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    overflow-y: hidden;
}
// Actual Modal
.author-modal {
    position: relative;
    background-color: $color-white;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    display: flex;
    flex-direction: column;
    margin: 0 40rem;
    padding: 3rem;
    width: 150rem;
    // Close Icon
    &__close-icon {
        position: absolute;
        top: 5%;
        right: 5%;
        font-size: 3rem;
        cursor: pointer;
        color: $color-primary;
    }
    // User Name
    &__name { font-size: 3rem; font-weight: 400; }
    // User Role
    &__role { font-size: 2.5rem; font-weight: 300; margin-top: 1rem; }
    // Divider
    &__divider { background-color: $color-primary; width: 6rem; height: .2rem; margin-top: 1rem; }
    // User Bio
    &__bio { font-size: 1.8rem; font-weight: 300; color: $color-font-2; margin-top: 2rem; }
    // - Media Queries - \\
    @media only screen and (max-width: $bp-medium) { margin: 0 20rem; }
    @media only screen and (max-width: $bp-small) { margin: 0 2rem; }
}

// Links
.author-modal-links { margin-top: 2rem; }
.linkTo { 
    display: flex; 
    align-items: center; 
    i { margin-right: .8rem; font-size: 2rem; color: $color-font-2; }
    a { font-size: 1.4rem; color: $color-font-2; text-decoration: none; }
}

// Modal Transition
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .3s ease
}
</style>
