<template>
    <!-- RECENT ARTICLES | START -->
    <div class="data-block-wrap">
        <BlockHeader blockHeaderName="Recent Articles" btnText="New Article" />

        <div class="articles-wrap">
            <div class="latest-article">
                <img v-bind:src="recentArticles[0].image" v-bind:alt="recentArticles[0].imageAlt" class="latest-article__image">
                <div class="latest-article__content-wrap">
                    <h3 class="latest-article__date">{{ recentArticles[0].datePosted }}</h3>
                    <h2 class="latest-article__name">{{ recentArticles[0].name }}</h2>
                    <p class="latest-article__content">{{ recentArticles[0].shortDesc }}</p>
                </div>
            </div>
            <div class="articles-col ac-1">
                
                <ArticleBlockSm v-bind:articleClass="'article-block-sm abs-top-one'" v-bind:articleImage="recentArticles[1].image" v-bind:articleImageAlt="recentArticles[1].imageAlt" v-bind:articleDate="recentArticles[1].datePosted" v-bind:articleName="recentArticles[1].name" />
                <ArticleBlockSm v-bind:articleClass="'article-block-sm'" v-bind:articleImage="recentArticles[2].image" v-bind:articleImageAlt="recentArticles[2].imageAlt" v-bind:articleDate="recentArticles[2].datePosted" v-bind:articleName="recentArticles[2].name" />
            </div>
            <div class="articles-col ac-2">
                <ArticleBlockSm v-bind:articleClass="'article-block-sm abs-top-one'" v-bind:articleImage="recentArticles[3].image" v-bind:articleImageAlt="recentArticles[3].imageAlt" v-bind:articleDate="recentArticles[3].datePosted" v-bind:articleName="recentArticles[3].name" />
                <div class="more-details-block blue-block">
                    <h2>More Details</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- RECENT ARTICLES | END -->
</template>

<script>
// Importing Components
import BlockHeader from '../BlockHeader';
import ArticleBlockSm from '../user-profile/ArticleBlockSm';

export default {
    name: 'UserArticles',
    // Components
    components: {
        BlockHeader,
        ArticleBlockSm
    },
    // Data
    data() {
        return {
            recentArticles: [
                {
                    id: 1,
                    datePosted: '03/24/2019',
                    name: 'E3 2019 Just Started',
                    shortDesc: 'E3 2019 Started. Some of the gigants you will be watching this year are: EA, Ubisoft, Microsoft, Square Enix and more.',
                    image: require(`@/assets/images/e3.jpg`),
                    imageAlt: 'E3 2019 Cover'
                },
                {
                    id: 2,
                    datePosted: '06/01/2019',
                    name: 'Death Stranding best details',
                    shortDesc: 'Short Desc',
                    image: require(`@/assets/images/hero.jpg`),
                    imageAlt: 'Death Stranding Screenshot'
                },
                {
                    id: 3,
                    datePosted: '03/24/2019',
                    name: 'Norman Reedus and Hideo',
                    shortDesc: 'Short Desc',
                    image: require(`@/assets/images/trailer-2.jpg`),
                    imageAlt: 'Death Stranding Screenshot'
                },
                {
                    id: 4,
                    datePosted: '06/11/2019',
                    name: 'Keanu in Cyberpunk',
                    shortDesc: 'Short Desc',
                    image: require(`@/assets/images/cp-1.jpg`),
                    imageAlt: 'Johnny Silverhand'
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.articles-wrap {
    display: flex;
    padding-top: 5rem;
    padding-bottom: 5rem;
    justify-content: space-around;
}

// Latest Article Block
.latest-article {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $color-white;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    border-radius: 1rem;
    width: 30%;
    // Image
    &__image {
        width: auto;
        height: 20rem;
        margin-bottom: 2rem;
        border-radius: 1rem 1rem 0 0;
    }
    // Content Wrap
    &__content-wrap { padding: 0 2rem; }
    // Date
    &__date { color: $color-primary; font-size: 1.4rem; font-weight: 300; margin-bottom: 1rem; }
    // Name 
    &__name { font-size: 2.8rem; font-weight: 300; margin-bottom: 2rem; }
    // Content
    &__content { font-size: 2rem; font-weight: 300; color: $color-font-1; }
}

// Articles Column One
.articles-col {
    display: flex;
    flex-direction: column;
}

</style>
