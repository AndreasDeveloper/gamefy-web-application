<template>
    <div class="main-content">
        <!-- MAIN USER DATA | START -->
        <div class="main-user-data">
            <BlockHeader blockHeaderName="Welcome Back, John" btnText="More Details" />
            <div class="main-data-wrap">
                <div class="user-data">
                    <img src="~assets/images/user.jpg" alt="User Photo" class="user-data__image">
                    <p class="user-data__short-bio">Working as a Software Engineer. Aside of software, i adore cloud and any related service to it.</p>
                    <a href="#" class="btn-fullStory">Full Story</a>
                </div>
                <div class="articles-membership">
                    <div class="articles-membership__articles-block data-block">
                        <h2>Articles</h2>
                        <h3>Articles Posted: 16</h3>
                        <h3>Articles Total Views: 6.326</h3>
                        <h3>Followers Gained: 667</h3>
                    </div>
                    <div class="articles-membership__membership-block data-block">
                        <h2>Membership</h2>
                        <h3>Current Membership: Free</h3>
                    </div>
                </div>
                <div class="revenue-details">
                    <div class="revenue-block data-block">
                        <h2>Revenue</h2>
                        <h3>Monthly Earning: &dollar; 144.50</h3>
                        <h3>Total Earned: &dollar; 656.20</h3>
                    </div>
                    <div class="more-details-block blue-block">
                        <h2>More Details</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- MAIN USER DATA | END -->

        <!-- RECENT ARTICLES | START -->
        <div class="main-user-data">
            <BlockHeader blockHeaderName="Recent Articles" btnText="New Article" />
        </div>
        <!-- RECENT ARTICLES | END -->
    </div>
</template>

<script>
// Importing Components
import BlockHeader from '../../components/BlockHeader';

export default {
    name: 'userProfile',
    // Components 
    components: {
        BlockHeader
    },
    // Head
    head() {
        return {
            title: 'User Profile - Gamefy',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Gamefy user profile'
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../../components/sass/main.scss';

// Main Section Wrapper
.main-user-data {
  min-height: 60vh;
  margin: 4rem 15rem 4rem 8rem;
  padding: 0 5rem;
  padding-top: 4rem;
  background-color: $color-white;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba($color-black, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: $bp-small) { margin: 4rem 4rem; }
}

// Main Data Wrap
.main-data-wrap {
    display: flex;
    align-items: center;
    margin-top: 2rem;
}

// User Data Block
.user-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33333333333333%;
    // User Image
    &__image {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        margin-bottom: 3rem;
    }
    // Short Bio
    &__short-bio {
        color: $color-font-2;
        font-size: 2.2rem;
        font-weight: 300;
        text-align: center;
        margin-bottom: 2rem;
    }
}

// Articles-Membership Block
.articles-membership {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33333333333333%;
}
// Revenue Details Block
.revenue-details {
    width: 33.33333333333333%;
}
// Data Blocks
.data-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: $color-white;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    > h2 { font-size: 3rem; font-weight: 300; margin-bottom: 1.5rem; }
    > h3 { font-size: 2.5rem; font-weight: 200; padding: .3rem 0; }
}
// Blue Blocks
.blue-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5.5rem;
    background-color: $color-primary;
    border-radius: 1rem;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    color: $color-white;
    font-size: 1.7rem;
    text-transform: uppercase;
    cursor: pointer;
    > h2 { font-weight: 400; }
}
</style>
