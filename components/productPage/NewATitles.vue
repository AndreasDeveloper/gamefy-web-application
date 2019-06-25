<template>
    <div class="section-wrap-standard">
        <SectionHeader sectionName="New Announced Titles" />

        <div class="new-ann-titles-wrap">
            <!-- New Announced Title Block -->
            <div class="nat-block" v-for="title in newATitles.slice(0,3)" :key="title.id" v-bind:style="{backgroundImage: `url(${title.image})`}">
                <div class="nat-block-onHover">
                    <h3 class="nat-block-onHover__header">Available</h3>
                    <h3 class="nat-block-onHover__avDate">{{ title.date }}</h3>
                    <span></span>
                    <h2 class="nat-block-onHover__title">{{ title.name }}</h2>
                    <h4 class="nat-block-onHover__titleGenre">{{ title.genre1 }} / {{ title.genre2 }}</h4>
                    <p class="nat-block-onHover__titleDesc">{{ title.description }}</p>
                    <a href="#" class="btn-1 btn-readMoreGray">Read More <i class="icon ion-ios-arrow-forward"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importing Components
import SectionHeader from '../SectionHeader';

export default {
    name: 'NewATitles',
    // Components
    components: {
        SectionHeader
    },
    // Data
    data() {
        return {
            newATitles: [
                {
                    id: 1,
                    image: require(`@/assets/images/cp-2.jpeg`),
                    date: '16.04.2020.',
                    name: 'Cyberpunk 2077',
                    genre1: 'Action',
                    genre2: 'Adventure',
                    description: 'Cyberpunk 2077 is a new IP developed by The Witcher developers CD Projekt Red'
                },
                {
                    id: 2,
                    image: require(`@/assets/images/ds-2.jpg`),
                    date: '08.11.2019.',
                    name: 'Death Stranding',
                    genre1: 'Action',
                    genre2: 'Adventure',
                    description: 'Death Stranding is an upcoming action game developed by Kojima Productions'
                },
                {
                    id: 3,
                    image: require(`@/assets/images/sw-1.jpg`),
                    date: '15.11.2019.',
                    name: 'Star Wars Jedi: Fallen Order',
                    genre1: 'Action',
                    genre2: 'Adventure',
                    description: 'Star Wars Jedi: Fallen Order is an upcoming single-player game developed by Respawn Ent.'
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

// New Announced Titles Wrapper
.new-ann-titles-wrap {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    margin-bottom: 5rem;
    margin-left: -5rem;
    @media only screen and (max-width: $bp-small) { flex-direction: column; margin: 0 auto; }
}

// NAT Block
.nat-block {
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    position: relative;
    background-position: center;
    background-size: cover;
    width: 450px;
    height: 532px;
    // On Hover
    &:hover {
        .nat-block-onHover { display: flex; opacity: 1; }
    }
    // - Media Queries - \\
    @media only screen and (max-width: $bp-desktop) { width: 350px; height: 422px; }
    @media only screen and (max-width: $bp-small) { margin-bottom: 4rem; width: 250px; height: 322px; }
}
.nat-block-onHover {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-white;
    height: 100%;
    padding: 2rem 1.5rem;
    transition: all .2s ease-in-out;
    // Header - AVAILABLE
    &__header {
        color: $color-font-1;
        font-size: 2rem;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: .5rem;
    }
    // Date
    &__avDate {
        color: $color-font-2;
        font-size: 1.8rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }
    // Divider - SPAN
    span { width: 5rem; height: .2rem; background-color: $color-primary; margin-bottom: 2rem; }
    // Name
    &__title {
        color: $color-primary;
        font-size: 2.5rem;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1rem;
    }
    // Genre
    &__titleGenre {
        color: $color-font-1;
        font-size: 1.8rem;
        font-weight: 300;
        margin-bottom: 2rem;
    }
    // Description
    &__titleDesc {
        color: $color-font-1;
        font-size: 1.6rem;
        font-weight: 300;
        text-align: center;
        margin-bottom: 5rem;
    }
}
</style>
