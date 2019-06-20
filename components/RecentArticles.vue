<template>
    <div class="section-wrap-standard">
        <SectionHeader sectionName="Recent Articles" />
        <div class="recent-article-cards-wrap">
            <!-- Button Arrow Forward -->
            <div class="btn-arrForward"><i class="icon ion-ios-arrow-forward"></i></div>
            <!-- Recent Article Card -->
            <div class="ra-card" v-for="article in recentArticles" :key="article.id">
                <div class="ra-card__bk"></div>
                <img v-bind:src="article.image" alt="Article Image" class="ra-card__image">
                <div class="ra-card__content">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.shortDesc }}</p>
                </div>
                <div class="ra-card__buttons-wrap">
                    <a href="#" class="btn-author">Author</a>
                    <a href="#" class="btn-readMore ra-card__buttons-wrap__readMoreBtn">Read More</a>
                </div>
            </div>

            <!-- <div class="ra-card">
                <div class="ra-card__bk"></div>
                <img src="~assets/images/e3.jpg" alt="Article Image" class="ra-card__image">
                <div class="ra-card__content">
                    <h3>E3 2019 Just Started</h3>
                    <p>E3 2019 Started. Some of the gigants you will be watching this year are: EA, Ubisoft, Microsoft, Square Enix and more.</p>
                </div>
                <div class="ra-card__buttons-wrap">
                    <a href="#" class="btn-author">Author</a>
                    <a href="#" class="btn-readMore ra-card__buttons-wrap__readMoreBtn">Read More</a>
                </div>
            </div>

            <div class="ra-card">
                <div class="ra-card__bk"></div>
                <img src="~assets/images/e3.jpg" alt="Article Image" class="ra-card__image">
                <div class="ra-card__content">
                    <h3>E3 2019 Just Started</h3>
                    <p>E3 2019 Started. Some of the gigants you will be watching this year are: EA, Ubisoft, Microsoft, Square Enix and more.</p>
                </div>
                <div class="ra-card__buttons-wrap">
                    <a href="#" class="btn-author">Author</a>
                    <a href="#" class="btn-readMore ra-card__buttons-wrap__readMoreBtn">Read More</a>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
// Importing Components
import SectionHeader from '../components/SectionHeader';

export default {
    name: 'RecentArticles',
    // Data 
    data() {
        return {
            recentArticles: [
                {
                    image: require(`@/assets/images/e3.jpg`),
                    title: 'E3 2019 Just Started',
                    shortDesc: 'E3 2019 Started. Some of the gigants you will be watching this year are: EA, Ubisoft, Microsoft, Square Enix and more.',
                    author: 1 // Representing authors ID
                },
                {
                    image: require(`@/assets/images/ps.jpg`),
                    title: 'Project Scarlett 2020',
                    shortDesc: 'Microsoft & Xbox team announced new project name Scarlett which is coming out next year for holidays.',
                    author: 2 // Representing authors ID
                },
                {
                    image: require(`@/assets/images/cp-1.jpg`),
                    title: 'Keanu in Cyberpunk',
                    shortDesc: 'One of the biggest surprises on E3 2019, was when Keanu Reeves himself appeared at Microsoft\'s expo right after Cyberpunk\'s trailer.',
                    author: 1 // Representing authors ID
                }
            ]
        }
    },
    // Components
    components: {
        SectionHeader
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import './sass/main.scss';

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