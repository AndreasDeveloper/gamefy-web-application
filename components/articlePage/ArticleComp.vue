<template>
    <article class="article-wrap">
        <div class="image-wrap">
            <div class="image-wrap__icons">
                <i class="icon ion-ios-bookmark"></i>
                <i class="icon ion-ios-heart"></i>
                <i class="icon ion-ios-share-alt"></i>
            </div>
            <nuxt-link to="/" class="btn-1 btn-return returnBtn"><i class="icon ion-ios-arrow-round-back"></i> Return</nuxt-link>
            <img :src="image" :alt="`${title} article image`">
        </div>
        <div class="article">
            <div class="article-topper">
                <div class="title-n-div">
                    <h1 class="article-topper__title">{{ title }}</h1>
                    <span class="article-divider"></span>
                </div>
                <div class="date-n-btn">
                    <a href="#" class="btn-1 btn-edit"><i class="icon ion-md-create"></i>Edit</a>
                    <h2 class="article-topper__date">{{ datePosted }}</h2>
                </div>
            </div>
            <div class="article-main-content">
                <p class="article-main-content__text">{{ content }}</p>
                <span class="article-divider"></span>
            </div>
            <div class="author-data">
                <div class="posted-by-block">
                    <img :src="authorImage" :alt="`${authorImage} Image`" class="posted-by-block__authorImage">
                    <div class="pbb-userData">
                        <h3 class="posted-by-block__authorName">{{ authorName }}</h3>
                        <h4 class="posted-by-block__authorBio">{{ authorBio }}</h4>
                    </div>
                </div>
                <span class="author-data-divider"></span>
                <div class="genres-block">
                    <h3 v-for="genre in articleGenre" :key="genre.id" class="genres-block__genre">{{ genre.g }}</h3>
                </div>
            </div>
        </div>
    </article>
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
        authorImage: { type: String, required: true },
        authorBio: { type: String, required: true },
        articleGenre: { type: Array, required: false },
        articleId: { type: Number, required: true }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

// Main Article Wrapper
.article-wrap {
    margin: 5rem 20rem 4rem 13rem;
    background-color: $color-white;
    box-shadow: 0 4px 4px rgba($color-black, .25);
    min-height: 100vh;
    border-radius: 1rem;
    @media only screen and (max-width: $bp-small) { margin: 5rem 2rem 4rem 2rem; }
}
// Article Image
.image-wrap > img { width: 100%; border-radius: 1rem 1rem 0 0; }
.image-wrap {
    position: relative;
    // Icons
    &__icons {
        position: absolute;
        right: 2%;
        top: 3%;
        display: flex;
        align-items: center;
        i { font-size: 2.5rem; color: $color-white; cursor: pointer; margin: 0 .8rem; }
    }
}
// Article Wrap
.article {
    display: flex;
    flex-direction: column;
    padding: 3.5rem 4rem;
}
// Article Top Content
.article-topper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;
    // Title
    &__title { font-size: 3.8rem; font-weight: 400; }
    // Date
    &__date { 
        color: $color-primary;
        padding: .8rem 2rem;
        font-size: 1.6rem;
        font-weight: 300;
        border: 1px solid $color-primary;
        border-radius: 10rem;
        margin-left: 1rem;
    }
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
}
.date-n-btn { display: flex; align-items: center; }
.title-n-div { display: flex; flex-direction: column; 
    @media only screen and (max-width: $bp-small) { text-align: center; margin-bottom: 3rem; }
}
// Article Divider
.article-divider { width: 10rem; height: .2rem; background-color: $color-primary; margin-top: 2rem;
    @media only screen and (max-width: $bp-small) { margin: 0 auto; margin-top: 2rem; }
}
// Actual Text in Article
.article-main-content {
    display: flex;
    flex-direction: column;
    &__text {
        color: $color-font-2;
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.5rem;
    }
}
.author-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
}
// Posted By Block
.posted-by-block {
    display: flex;
    align-items: center;
    background-color: $color-white;
    box-shadow: 0 4px 4px rgba($color-black, .25);
    border-radius: 10rem;
    padding-right: 2rem;
    width: 50%;
    // Image
    &__authorImage {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }
    // Author Name
    &__authorName { font-size: 2.5rem; font-weight: 400; margin-bottom: .2rem; }
    // Author Short Bio
    &__authorBio { font-size: 2rem; font-weight: 300; }
    @media only screen and (max-width: $bp-small) { width: 100%; margin-bottom: 5rem; }
}
.pbb-userData { display: flex; flex-direction: column; margin-left: 2rem; }
.author-data-divider { width: .1rem; height: 10rem; background-color: $color-font-1; margin: 0 5rem;
    @media only screen and (max-width: $bp-small) { display: none; }
}
// Genres Block
.genres-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    width: 50%;
    // Genre Block
    &__genre {
        background-color: $color-white;
        box-shadow: 0 4px 4px rgba($color-black, .25);
        border-radius: 2rem;
        color: $color-font-2;
        font-size: 1.6rem;
        font-weight: 300;
        padding: .8rem;
        margin: 1rem;
        text-transform: uppercase;
        cursor: pointer;
    }
    @media only screen and (max-width: $bp-small) { width: 100%; }
}
// Return Button
.returnBtn {
    position: absolute;
    top: 3%;
    left: 3%;
    text-transform: unset;
}
</style>
