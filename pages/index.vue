<template>
  <div>

    <div class="main-content">
      <!-- HEADER | START -->
      <div class="header">
        <div class="posted-by-wrap">
          <img src="~assets/images/user.jpg">
          <h2>Posted by John Doe</h2>
        </div>
        <div class="article-info-wrap">
          <h1 class="article-info-wrap__article-title">Death Stranding revealed combat and more details about gameplay</h1>
          <span class="article-info-wrap__divider"></span>
          <p class="article-info-wrap__article-desc-short">
            Already most anticipated game for 2019, Death Stranding, revealed new gameplay slash story trailer that features vehicles,
            combat, stealth and much more.
          </p>
          <a href="#" class="btn-readMore article-info-wrap__button">Read More</a>
        </div>
      </div>
      <!-- HEADER | END -->

      <!-- POPULAR AUTHORS | START -->
      <PopularAuthors />
      <!-- POPULAR AUTHORS | END -->
      
      <!-- RECENT ARTICLES | START -->
      <RecentArticles />
      <!-- RECENT ARTICLES | END -->
    </div>
  </div>
</template>

<script>
// Importing Components
import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';
import PopularAuthors from '../components/PopularAuthors';
import RecentArticles from '../components/RecentArticles';

export default {
  name: 'homePage',
  // Components
  components: {
    SideNav,
    TopNav,
    PopularAuthors,
    RecentArticles
  },
  // Head Tags
  head() {
    return {
      title: 'Gamefy - Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Gamefy landing page'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../components/sass/main.scss';

// Header
.header {
  background-image: url(~assets/images/hero.jpg);
  background-position: center;
  background-size: cover;
  height: 60vh;
  margin: 4rem 15rem 4rem 8rem;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba($color-black, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media only screen and (max-width: $bp-small) { margin: 4rem 4rem; }
}
// Posted By Tab
.posted-by-wrap {
  margin-left: 2rem;
  background-color: $color-white;
  border-radius: 7rem;
  width: 17%;
  position: relative;
  display: flex;
  align-items: center;
  // - Media Queries - \\
  @media only screen and (max-width: $bp-desktop) { width: 20%; }
  @media only screen and (max-width: $bp-largest-5) { width: 25%; }
  @media only screen and (max-width: $bp-medium) { width: 30%; }
  @media only screen and (max-width: $bp-small) { width: 55%; }
  @media only screen and (max-width: $bp-vsmall-3b) { width: 65%; }
  // Image
  img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    margin-left: -.3rem;
  }
  // Posted By Text
  h2 { margin-left: 1rem; font-weight: 400; font-size: 1.7rem; }
}
// Article in Header Wrapper
.article-info-wrap {
  background-color: $color-white;
  border-radius: 1rem;
  height: 28rem;
  width: 60rem;
  margin-left: 2rem;
  margin-top: 10rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // - Media Queries - \\
  @media only screen and (max-width: $bp-desktop) { margin-top: 2rem; }
  @media only screen and (max-width: $bp-largest-5) { margin-top: 50rem; }
  @media only screen and (max-width: $bp-medium) { margin-top: 35rem; }
  @media only screen and (max-width: $bp-small) { width: 25rem; margin-top: 8rem; }
  // Article Title
  &__article-title {
    font-weight: 400;
    font-size: 2.5rem;
    width: 95%;
    margin-top: .5rem;
    @media only screen and (max-width: $bp-small) { font-size: 1.6rem; }
  }
  // Divider 
  &__divider {
    width: 8rem;
    height: 3px;
    background-color: $color-primary;
    margin-top: -1rem;
  }
  // Article Description
  &__article-desc-short {
    color: $color-font-1;
    font-weight: 300;
    font-size: 1.8rem;
    width: 95%;
    margin-top: -1rem;
    @media only screen and (max-width: $bp-small) { font-size: 1.2rem; }
  }
}
</style>