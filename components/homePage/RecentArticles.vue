<template>
    <section class="section-wrap-standard">
        <SectionHeader sectionName="Recent Articles" />
        <div class="recent-article-cards-wrap" v-if="articles.length > 0">
            <!-- Button Arrow Forward -->
            <div class="btn-arrForward"><i class="icon ion-ios-arrow-forward"></i></div>
            <!-- Recent Article Card -->
            <div class="ra-card" v-for="article in articles.slice(0,3)" :key="article.id">
                <div class="ra-card__bk"></div>
                <img :src="getPhotoUrl(article.coverImage)" :alt="article.title" class="ra-card__image">
                <div class="ra-card__content">
                    <h3>{{ article.title }}</h3>
                    <p>{{ shortenContent(article.content) }}..</p>
                </div>
                <div class="ra-card__buttons-wrap">
                    <a href="#" class="btn-1 btn-author">Author</a>
                    <no-ssr>
                    <nuxt-link :to="`articles/${nameToLink(article.title)}`" class="btn-1 btn-readMore ra-card__buttons-wrap__readMoreBtn">Read More</nuxt-link> 
                    </no-ssr>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// Importing Components
import SectionHeader from '../SectionHeader';
// Importing Vuex
import { mapActions } from 'vuex';

export default {
    name: 'RecentArticles',
    // Components
    components: {
        SectionHeader
    },
    // Methods
    methods: {
        ...mapActions('articles', ['getRecent3Articles']),
        // Convert Name of the article to link slug
        nameToLink: (articleName) => {
            return articleName.split(" ").join("-").toLowerCase();
        },
        shortenContent: (article) => {
            return article.slice(0, 100);
        },
        // Get Recent Articles
        async getRecentArticles() {
            await this.getRecent3Articles();
        },
        // Get Article Photo
        getPhotoUrl(photo) {
            return require(`@/assets/images/articles/${photo}`);
        }
    },
    // Computed
    computed: {
        articles() {
            return this.$store.state.articles.recent3Articles ? this.$store.state.articles.recent3Articles : [];
        }
    },
    // Computed Lifecycle Hook
    created() {
        this.getRecentArticles();
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.recent-article-cards-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
}

// Recent Article Card
.ra-card { 
    position: relative;
    background-color: $color-white;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 45rem;
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
        // Title
        h3 { font-size: 3rem; font-weight: 300; margin-bottom: 2rem; }
        // Description Short
        p { font-size: 1.6rem; font-weight: 300; color: $color-font-1; width: 95%; }
    }
    // Buttons Wrap
    &__buttons-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10rem;
        width: 80%;
        // - Media Queries - \\
        @media only screen and (max-width: $bp-desktop) { margin-top: 4rem; }
        @media only screen and (max-width: $bp-small) { margin-top: 4rem; }
        @media only screen and (max-width: $bp-vsmall-4) { margin-top: 1rem; }
        // Read More Button
        &__readMoreBtn {
            width: 35%;
            font-size: 1.2rem;
            @media only screen and (max-width: $bp-desktop) { width: 40%; }
            @media only screen and (max-width: $bp-medium) { width: 50%; }
        }
    }
}
</style>