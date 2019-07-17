<template>
    <section class="main-content">
        <div class="error-message">
            <h1>Something went wrong. Error Occured.</h1>
            <h2>Try again later.</h2>
            <nuxt-link to="/" class="error-message__linkToHome">Home</nuxt-link>
        </div>
    </section>
</template>

<script>
export default {
    // Head Tags
    head() {
        return {
            title: 'Gamefy - Error Occured',
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'Error Occured. Try again.'
                }
            ]
            }
        }
    };
</script>

<style lang="scss" scoped>
@import '../../components/sass/main';

.error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > * { margin: .5rem 0; }
    h1 {
        font-size: 3.5rem;
        font-weight: 400;
    }
    h2 { 
        font-size: 2rem;
        font-weight: 300;
    }
    &__linkToHome {
        color: $color-black;
        font-size: 1.8rem;
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
