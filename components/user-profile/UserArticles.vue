<template>
    <!-- RECENT ARTICLES | START -->
    <section class="data-block-wrap">
        <BlockHeader blockHeaderName="Recent Articles" btnText="New Article" v-bind:plusIcon="plusHtml" />

        <div class="articles-wrap" v-if="user && user.articles.length > 0">
            <div class="latest-article">
                <img  :src="getPhotoUrl(user.articles[0].coverImage)" v-bind:alt="user.articles[0].title" class="latest-article__image">
                <div class="latest-article__content-wrap">
                    <h3 class="latest-article__date">{{ formatTime(user.articles[0].createdAt) }}</h3>
                    <h2 class="latest-article__name">{{ user.articles[0].title }}</h2>
                    <p class="latest-article__content">{{ user.articles[0].content }}</p>
                </div>
            </div>
            <div class="articles-col ac-1">
                <ArticleBlockSm v-if="user.articles.length > 1" :articleClass="'article-block-sm abs-top-one'" :articleImage="getPhotoUrl(user.articles[1].coverImage)" :articleImageAlt="user.articles[1].title" :articleDate="formatTime(user.articles[1].createdAt)" :articleName="user.articles[1].title" />
                <ArticleBlockSm v-if="user.articles.length > 2" :articleClass="'article-block-sm'" :articleImage="getPhotoUrl(user.articles[2].coverImage)" :articleImageAlt="user.articles[2].title" :articleDate="formatTime(user.articles[2].createdAt)" :articleName="user.articles[2].title" />
            </div>
            <div class="articles-col ac-2">
                <ArticleBlockSm v-if="user.articles.length > 3" v-bind:articleClass="'article-block-sm abs-top-one'" :articleImage="getPhotoUrl(user.article[3].coverImage)" :articleImageAlt="user.articles[3].title" :articleDate="user.articles[3].createdAt" :articleName="user.articles[3].title" />
                <div class="more-details-block blue-block">
                    <h2>More Details</h2>
                </div>
            </div>
        </div>
        <h2 class="no-msg" v-else>No Articles to display</h2>
    </section>
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
            plusHtml: '<i class="icon ion-ios-add"></i>'
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
        // Get User Photo
        getPhotoUrl(photo) {
            return require(`@/assets/images/articles/${photo}`);
        },
        // Format Date Method
        formatTime(date) {
            return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
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
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
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
    cursor: pointer;
    transition: all .2s ease-in-out;
    // Image
    &__image {
        width: auto;
        height: 20rem;
        margin-bottom: 2rem;
        border-radius: 1rem 1rem 0 0;
        @media only screen and (max-width: $bp-largest-5) { height: 14rem; }
    }
    // Content Wrap
    &__content-wrap { padding: 0 2rem; margin-top: 4rem;
        @media only screen and (max-width: $bp-small) { padding-bottom: 3rem; }
    }
    // Date
    &__date { color: $color-primary; font-size: 1.4rem; font-weight: 300; margin-bottom: 1rem; }
    // Name 
    &__name { font-size: 2.8rem; font-weight: 300; margin-bottom: 2rem;
        @media only screen and (max-width: $bp-largest-5) { font-size: 1.9rem; }
    }
    // Content
    &__content { font-size: 2rem; font-weight: 300; color: $color-font-1; 
        @media only screen and (max-width: $bp-largest-5) { font-size: 1.6rem; }
    }
    // On Hover
    &:hover { transform: scale(1.05); }
    // - Media Queries - \\
    @media only screen and (max-width: $bp-medium) { margin-right: 2rem; }
    @media only screen and (max-width: $bp-small) { width: unset; margin-bottom: 3rem; }
}

// Articles Column One
.articles-col {
    display: flex;
    flex-direction: column;
    // - Media Queries - \\
    @media only screen and (max-width: $bp-medium) { margin-right: 2rem; }
}

.no-msg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: 300;
}
</style>
