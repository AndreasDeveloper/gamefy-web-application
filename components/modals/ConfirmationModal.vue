<template>
    <transition name="modal-fade">
        <div class="confirmation-modal-bk">
            <div class="confirmation-modal">
                <h2>Are you sure you want to delete your account?</h2>
                <h3>If you decide to come back, you have 30 days to contact us and we will re-activate your account.</h3>
                <div class="button-wrap">
                    <button class="btn-1 btn-edit button-wrap__button-1" @click="close()">I changed my mind</button>
                    <button class="btn btn-editField danger button-wrap__button-2" @click="deleteMe()">Delete</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ConfirmationModal',
    // Methods
    methods: {
        close() {
            this.$emit('close');
        },
        deleteMe() {
            this.$emit('deleteMe')
        }
    },
}
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main';

// Modal Background
.confirmation-modal-bk {
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
// Confirmation Modal
.confirmation-modal {
    background-color: $color-white;
    padding: 1rem;
    height: 25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // Messages
    > h2, h3 {
        color: $color-black;
        margin: .5rem 4rem;
    }
    > h2 {
        font-size: 2.5rem;
        font-weight: 500;
    }
    > h3 {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 3rem;
    }
}
// Buttons
.button-wrap {
    > button {
        border: none;
        box-shadow: 0 4px 4px rgba($color-black, .25);
        padding: .8rem 2.5rem;
        margin: 0 1rem;
        font-size: 1.6rem;
        font-weight: 400;
        cursor: pointer;
    }
    &__button-1 {
        border-radius: 0;
        text-transform: none;
        &:hover { transform: none; }
    }
}
</style>
