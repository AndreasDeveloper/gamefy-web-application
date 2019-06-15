<template>
    <div class="section-wrap-standard">
        <div class="section-header-standard">
            <h2>Popular Authors</h2>
            <a href="#" class="btn-viewAll">View All</a>
        </div>
        <div class="popular-authors-cards-wrap">
            <div class="pa-card">
                <h3>IT / TECH</h3>
                <h4>667 Followers</h4>
                <img src="../static/images/user.jpg" alt="Popular Author Image" class="pa-card__image">
                <h2>John Doe</h2>
                <p>John is a software engineer and cloud expert</p>
                <a href="#" class="btn-more">More <i class="icon ion-ios-arrow-forward"></i></a>
            </div>

            <div class="pa-card">
                <h3>IT / TECH</h3>
                <h4>530 Followers</h4>
                <img src="../static/images/user-2.jpg" alt="Popular Author Image" class="pa-card__image">
                <h2>Andrew Dough</h2>
                <p>Andrew is a web designer and web developer</p>
                <a href="#" class="btn-more">More <i class="icon ion-ios-arrow-forward"></i></a>
            </div>

            <div class="pa-card">
                <h3>MARKETING / SALES</h3>
                <h4>500 Followers</h4>
                <img src="../static/images/user-3.jpg" alt="Popular Author Image" class="pa-card__image">
                <h2>Alex Ripley</h2>
                <p>Alex is marketing expert working with tech gigants</p>
                <a href="#" class="btn-more">More <i class="icon ion-ios-arrow-forward"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopularAuthors'
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import './sass/main.scss';

// Popular Authors Cards Wrapper
.popular-authors-cards-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
}
// Card
.pa-card {
    background-color: $color-white;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    margin-right: 8rem;
    width: 100%;
    // - Media Queries - \\
    @media only screen and (max-width: $bp-largest-5) { margin-right: 2rem; }
    @media only screen and (max-width: $bp-medium) { margin-right: 2rem; padding: 3rem 1rem; }
    @media only screen and (max-width: $bp-small) { margin-bottom: 4rem; padding: 2rem; margin-right: 0; }
    // Genre
    h3 { font-weight: 300; font-size: 2rem; margin-bottom: 1rem; }
    // Followers
    h4 { font-weight: 300; font-size: 1.8rem; color: $color-primary; margin-bottom: 2rem; }
    // Author Image
    &__image {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        margin-bottom: 2rem;
    }
    // Authors Name
    h2 { font-weight: 400; font-size: 2.5rem; margin-bottom: 1.5rem; }
    // Authors Short Bio
    p { font-weight: 300; font-size: 1.8rem; width: 80%; text-align: center; margin-bottom: 3rem; }
}
</style>
