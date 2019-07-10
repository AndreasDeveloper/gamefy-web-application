<template>
    <section class="section-wrap-standard">
        <SectionHeader sectionName="Trailers" />
        <!-- Trailers Block -->
        <div class="trailers-wrap">
            <div class="trailer-block" v-for="trailer in trailers" :key="trailer.id">
                <div class="trailer-block__bk"></div>
                    <i class="icon ion-ios-play trailer-block__icon" @click="showModal"></i>
                    <Modal v-show="isModalVisible" @close="closeModal" v-bind:videoLink="trailer.link" ref="tModal" />
                    <img v-bind:src="trailer.thumbnail" v-bind:alt="`${trailer.gameName} Thumbnail Cover`" class="trailer-block__image">
                <div class="trailer-block__content">
                    <h3 class="trailer-block__content__developer">{{ trailer.developer }}</h3>
                    <h2 class="trailer-block__content__name">{{ trailer.gameName }}</h2>
                    <h4 class="trailer-block__content__type">{{ trailer.trailerShowcase }}</h4>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// Importing Components
import SectionHeader from '../SectionHeader';
import Modal from '../modals/Modal';

export default {
    name: 'Trailers',
    // Data
    data() {
        return {
            trailers: [
                {
                    id: 1,
                    developer: 'CD Projekt Red',
                    gameName: 'Cyberpunk 2077',
                    trailerShowcase: 'E3 2019 Trailer',
                    thumbnail: require(`@/assets/images/trailer-1.jpg`),
                    link: 'LembwKDo1Dk'
                },
                {
                    id: 2,
                    developer: 'Kojima Productions',
                    gameName: 'Death Stranding',
                    trailerShowcase: 'New Trailer',
                    thumbnail: require(`@/assets/images/trailer-2.jpg`),
                    link: 'Hen8tPH0A2w'
                },
                {
                    id: 3,
                    developer: 'Ubisoft Paris',
                    gameName: 'Ghost Recon Breakpoint',
                    trailerShowcase: 'E3 2019 Trailer',
                    thumbnail: require(`@/assets/images/trailer-3.jpg`),
                    link: 'MseMleqxsBM'
                }
            ],
            // Modal Data
            isModalVisible: false
        }
    },
    // Components
    components: {
        SectionHeader,
        Modal
    },
    // Methods
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

// Main Wrapper
.trailers-wrap {
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: 2rem;
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
}
// Recent Article Card
.trailer-block { 
    position: relative;
    background-color: $color-white;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    margin-right: 8rem;
    width: 100%;
    // - Media Queries - \\
    @media only screen and (max-width: $bp-largest-5) { margin-right: 2rem; }
    @media only screen and (max-width: $bp-small) { margin-bottom: 4rem; margin-right: 0; }
    // Article Card Background
    &__bk {
        position: absolute;
        width: 100%;
        height: 15rem;
        background-color: $color-primary;
        border-radius: 1rem 1rem 0 0;
    }
    // Cover Wrapper
    &__icon {
        position: absolute;
        top: 25%;
        background-color: rgba($color-white, .85);
        border-radius: 50%;
        color: $color-primary;
        font-size: 2.5rem;
        padding: 2rem 3rem;
        cursor: pointer;
        text-align: center;
        z-index: 50;
        @media only screen and (max-width: $bp-desktop) { top: 20%; }
    }
    // Article Image
    &__image {
        border-radius: 1rem;
        width: 85%;
        height: 18rem;
        z-index: 10;
        margin-top: 3.5rem;
        // - Media Queries - \\
        @media only screen and (max-width: $bp-desktop) { height: 15rem; }
        @media only screen and (max-width: $bp-largest-5) { height: 15rem; }
        @media only screen and (max-width: $bp-small) { width: 80%; height: 18rem; }
        @media only screen and (max-width: $bp-vsmall-4) { margin-top: 3rem; }
    }
    // Content
    &__content {
        margin-top: 3rem;
        height: 15rem;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // Developer
        &__developer { color: $color-primary; font-size: 1.8rem; font-weight: 400; }
        // Game Name
        &__name { font-size: 3rem; font-weight: 300; text-align: center; }
        // Type of the Trailer
        &__type { font-size: 2rem; font-weight: 200; }
    }
}
</style>
