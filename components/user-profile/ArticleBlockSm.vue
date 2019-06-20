<template>
    <div v-bind:class="articleClass">
        <img v-bind:src="articleImage" v-bind:alt="articleImageAlt" class="article-block-sm__image">
            <div class="article-block-sm__content">
                <h3 class="article-block-sm__content__date">{{ articleDate }}</h3>
                <h2 class="article-block-sm__content__name">{{ articleName }}</h2>
            </div>
        </div>
</template>

<script>
export default {
    name: 'ArticleBlockSm',
    // Props
    props: ['articleImage', 'articleImageAlt', 'articleDate', 'articleName', 'articleClass']
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

// Article Block Small
.article-block-sm {
    position: relative;
    cursor: pointer;
    transition: all .2s ease-in-out;
    // Image
    &__image { 
        width: auto;
        height: 18rem;
        border-radius: 1rem 1rem 0 0;
    }
    // Content
    &__content {
        background-color: $color-white;
        box-shadow: 0px 4px 4px rgba($color-black, 0.25);
        border-radius: 0 0 1rem 1rem;
        height: 7rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        margin-top: -2rem;
        // Date
        &__date { font-size: 1.2rem; font-weight: 300; color: $color-primary; margin-bottom: .7rem; }
        // Name
        &__name { font-size: 2.2rem; font-weight: 300; }
    }
    // On Hover
    &:hover { transform: scale(1.05); }
}

// Article Block Small on Top
.abs-top-one { margin-bottom: 3rem; }
</style>
