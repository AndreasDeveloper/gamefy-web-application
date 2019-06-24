<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ datePosted }}</h2>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'ArticleComp',
    // Props
    props: {
        image: { type: String, required: true },
        title: { type: String, required: true },
        datePosted: { type: String, required: true },
        content: { type: String, required: true },
        authorName: { type: String, required: true },
        authorBio: { type: String, required: true },
        articleId: { type: String, required: true }
    }
};
</script>

<style lang="scss" scoped>

</style>
