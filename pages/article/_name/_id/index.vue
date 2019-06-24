<template>
    <div class="main-content">
        <ArticleComp title="Next" datePosted="12/20/1200" content="123" />
    </div>
</template>

<script>
// Importing Components
import ArticleComp from '@/components/articlePage/ArticleComp';

export default {
    // Components
    components: {
        ArticleComp
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

<style>

</style>
