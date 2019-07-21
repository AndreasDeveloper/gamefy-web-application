<template>
    <main class="main-content">
        <ArticleComp 
            :image="getPhotoUrl('articles', article.coverImage)" 
            :title="article.title" 
            :datePosted="formatTime(article.createdAt)" 
            :content="article.content" 
            :authorName="article.user.name" 
            :authorImage="getPhotoUrl('users', article.user.photo)"
            :authorBio="article.user.shortBio"
            :articleGenre="article.tags"
            :articleId="article.id" 
        />
    </main>
</template>

<script>
// Importing Components
import ArticleComp from '@/components/articlePage/ArticleComp';
// Importing Vuex
import { mapActions } from 'vuex';

export default {
    scrollToTop: true, // Make sure page is scrolled to the top
    // Components
    components: {
        ArticleComp
    },
    // Methods
    methods: {
        ...mapActions('articles', ['getArticle']),
        // Get Specific Article Method
        async getSpecificArticle() {
            const article = await this.getArticle(this.$route.params.name); 
        },
        // Get Article Photo
        getPhotoUrl(dest, photo) {
            return require(`@/assets/images/${dest}/${photo}`);
        },
        // Format Date Method
        formatTime(date) {
            return date.toLocaleString('en-us', { month: 'long', year: 'numeric' });
        }
    },
    // Computed
    computed: {
        article() {
            return this.$store.state.articles.currentArticle;
        }
    },
    // Created Lifecycle Hook
    mounted() {
        this.getSpecificArticle();
    },
    // Head Tags
    head() {
        return {
            title: `Gamefy - Article Title`,
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'Gamefy article page'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
