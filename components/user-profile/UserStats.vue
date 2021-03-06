<template>
    <!-- MAIN USER DATA | START -->
    <section class="data-block-wrap" v-if="user">
        <BlockHeader :blockHeaderName="`Welcome Back, ${user.name.split(' ')[0]}`" btnText="More Details" />
        <div class="main-data-wrap">
            <div class="user-data">
                <img :src="getPhotoUrl(user.photo)" alt="User Photo" class="user-data__image">
                <p class="user-data__short-bio">{{ user.shortBio }}</p>
                <a href="#" class="btn-1 btn-fullStory" @click="showModal">Full Story</a>
                <AuthorModal v-show="isModalVisible" @close="closeModal" :userName="user.name" :userBio="user.shortBio" :userSummary="user.longBio" :userGithub="user.userGithub" :userLinkedin="user.userLinkedin" />
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
                    <h3>Current Membership: {{ user.membership }}</h3>
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
    </section>
    <!-- MAIN USER DATA | END -->
</template>

<script>
// Importing Components
import BlockHeader from '../BlockHeader';
import AuthorModal from '../modals/AuthorModal';
// Importing Vuex
import { mapActions, mapState } from 'vuex';

export default {
    name: 'UserStats',
    data() {
        return {
            isModalVisible: false,
        }
    },
    // Components
    components: {
        BlockHeader,
        AuthorModal
    },
    // Computed
    computed: {
        user() {
            return this.$store.state.auth.user;
        }
    },
    // Methods
    methods: {
        // Modal Methods
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        // Get User Photo
        getPhotoUrl(photo) {
            return require(`@/assets/images/users/${photo}`);
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';


// Main Data Wrap
.main-data-wrap {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    @media only screen and (max-width: $bp-small) { flex-direction: column; }
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
    // - Media Queries - \\
    @media only screen and (max-width: $bp-largest-5) { width: 100%; margin-right: 2rem; }
    @media only screen and (max-width: $bp-small) { width: unset; margin-bottom: 2rem; }
}

// Articles-Membership Block
.articles-membership {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33333333333333%;
    // - Media Queries - \\
    @media only screen and (max-width: $bp-largest-5) { width: 100%; margin-right: 2rem; }
    @media only screen and (max-width: $bp-small) { width: unset; }
}
// Revenue Details Block
.revenue-details {
    width: 33.33333333333333%;
    // - Media Queries - \\
    @media only screen and (max-width: $bp-largest-5) { width: 100%; }
    @media only screen and (max-width: $bp-small) { width: unset; margin-bottom: 3rem; }
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
</style>
