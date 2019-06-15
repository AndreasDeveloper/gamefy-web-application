<template>
    <div class="section-wrap-standard">
        <div class="section-header-standard">
            <h2>Recent Articles</h2>
            <a href="#" class="btn-viewAll">View All</a>
        </div>
        <div class="recent-article-cards-wrap">
            <div class="ra-card">
                <div class="ra-card__bk"></div>
                <img src="../static/images/e3.jpg" alt="Article Image" class="ra-card__image">
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
                <img src="../static/images/e3.jpg" alt="Article Image" class="ra-card__image">
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
                <img src="../static/images/e3.jpg" alt="Article Image" class="ra-card__image">
                <div class="ra-card__content">
                    <h3>E3 2019 Just Started</h3>
                    <p>E3 2019 Started. Some of the gigants you will be watching this year are: EA, Ubisoft, Microsoft, Square Enix and more.</p>
                </div>
                <div class="ra-card__buttons-wrap">
                    <a href="#" class="btn-author">Author</a>
                    <a href="#" class="btn-readMore ra-card__buttons-wrap__readMoreBtn">Read More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecentArticles'
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import './sass/main.scss';

.recent-article-cards-wrap {
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
        @media only screen and (max-width: $bp-largest-5) { height: 15rem; }
        @media only screen and (max-width: $bp-vsmall-4) { margin-top: 3rem; }
    }
    // Content
    &__content {
        margin-top: 3rem;
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
        margin-top: 5rem;
        width: 80%;
        // - Media Queries - \\
        @media only screen and (max-width: $bp-desktop) { margin-top: 2rem; }
        @media only screen and (max-width: $bp-small) { margin-top: 8rem; }
        @media only screen and (max-width: $bp-vsmall-4) { margin-top: 4rem; }
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