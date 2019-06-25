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
                    <p>{{ shortenContent(article.content) }}..</p>
                </div>
                <div class="ra-card__buttons-wrap">
                    <a href="#" class="btn-1 btn-author">Author</a>
                    <no-ssr>
                    <nuxt-link v-bind:to="`article/${nameToLink(article.title)}/${article.id}`" class="btn-1 btn-readMore ra-card__buttons-wrap__readMoreBtn">Read More</nuxt-link> 
                    </no-ssr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importing Components
import SectionHeader from '../SectionHeader';

export default {
    name: 'RecentArticles',
    // Data 
    data() {
        return {
            recentArticles: [
                {
                    id: 60,
                    date: '06/11/2019',
                    image: require(`@/assets/images/e3.jpg`),
                    title: 'E3 2019 Just Started',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus. Leo a diam sollicitudin tempor id. Ut porttitor leo a diam sollicitudin tempor id. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut. Tincidunt id aliquet risus feugiat in. Lacus laoreet non curabitur gravida arcu ac. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ac odio tempor orci dapibus. Ut faucibus pulvinar elementum integer. Diam vulputate ut pharetra sit amet aliquam. Sagittis nisl rhoncus mattis rhoncus urna neque. Neque volutpat ac tincidunt vitae semper quis. Molestie a iaculis at erat pellentesque adipiscing. Convallis a cras semper auctor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Massa tincidunt dui ut ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Convallis posuere morbi leo urna molestie. Diam ut venenatis tellus in metus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Ultrices vitae auctor eu augue ut lectus. Dui sapien eget mi proin. Aenean sed adipiscing diam donec adipiscing. Enim eu turpis egestas pretium aenean pharetra magna. Sit amet dictum sit amet justo donec. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Aliquam eleifend mi in nulla posuere sollicitudin. Diam sollicitudin tempor id eu nisl nunc mi. Consectetur a erat nam at lectus urna. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Pulvinar neque laoreet suspendisse interdum consectetur. Massa id neque aliquam vestibulum morbi blandit cursus. Blandit aliquam etiam erat velit scelerisque. Elementum nibh tellus molestie nunc. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Condimentum id venenatis a condimentum vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Eget nunc lobortis mattis aliquam. Volutpat lacus laoreet non curabitur. ',
                    authorName: 'John Doe',
                    authorId: 1 // Representing authors ID
                },
                {
                    id: 61,
                    date: '06/06/2019',
                    image: require(`@/assets/images/ps.jpg`),
                    title: 'Project Scarlett 2020',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus. Leo a diam sollicitudin tempor id. Ut porttitor leo a diam sollicitudin tempor id. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut. Tincidunt id aliquet risus feugiat in. Lacus laoreet non curabitur gravida arcu ac. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ac odio tempor orci dapibus. Ut faucibus pulvinar elementum integer. Diam vulputate ut pharetra sit amet aliquam. Sagittis nisl rhoncus mattis rhoncus urna neque. Neque volutpat ac tincidunt vitae semper quis. Molestie a iaculis at erat pellentesque adipiscing. Convallis a cras semper auctor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Massa tincidunt dui ut ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Convallis posuere morbi leo urna molestie. Diam ut venenatis tellus in metus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Ultrices vitae auctor eu augue ut lectus. Dui sapien eget mi proin. Aenean sed adipiscing diam donec adipiscing. Enim eu turpis egestas pretium aenean pharetra magna. Sit amet dictum sit amet justo donec. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Aliquam eleifend mi in nulla posuere sollicitudin. Diam sollicitudin tempor id eu nisl nunc mi. Consectetur a erat nam at lectus urna. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Pulvinar neque laoreet suspendisse interdum consectetur. Massa id neque aliquam vestibulum morbi blandit cursus. Blandit aliquam etiam erat velit scelerisque. Elementum nibh tellus molestie nunc. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Condimentum id venenatis a condimentum vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Eget nunc lobortis mattis aliquam. Volutpat lacus laoreet non curabitur. ',
                    authorName: 'Andrew Dough',
                    authorId: 2 // Representing authors ID
                },
                {
                    id: 62,
                    date: '16/05/2019',
                    image: require(`@/assets/images/cp-1.jpg`),
                    title: 'Keanu in Cyberpunk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus. Leo a diam sollicitudin tempor id. Ut porttitor leo a diam sollicitudin tempor id. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut. Tincidunt id aliquet risus feugiat in. Lacus laoreet non curabitur gravida arcu ac. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ac odio tempor orci dapibus. Ut faucibus pulvinar elementum integer. Diam vulputate ut pharetra sit amet aliquam. Sagittis nisl rhoncus mattis rhoncus urna neque. Neque volutpat ac tincidunt vitae semper quis. Molestie a iaculis at erat pellentesque adipiscing. Convallis a cras semper auctor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Massa tincidunt dui ut ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Convallis posuere morbi leo urna molestie. Diam ut venenatis tellus in metus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Ultrices vitae auctor eu augue ut lectus. Dui sapien eget mi proin. Aenean sed adipiscing diam donec adipiscing. Enim eu turpis egestas pretium aenean pharetra magna. Sit amet dictum sit amet justo donec. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Aliquam eleifend mi in nulla posuere sollicitudin. Diam sollicitudin tempor id eu nisl nunc mi. Consectetur a erat nam at lectus urna. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Pulvinar neque laoreet suspendisse interdum consectetur. Massa id neque aliquam vestibulum morbi blandit cursus. Blandit aliquam etiam erat velit scelerisque. Elementum nibh tellus molestie nunc. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Condimentum id venenatis a condimentum vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Eget nunc lobortis mattis aliquam. Volutpat lacus laoreet non curabitur. ',
                    authorName: 'John Doe',
                    authorId: 1 // Representing authors ID
                }
            ]
        }
    },
    // Components
    components: {
        SectionHeader
    },
    // Methods
    methods: {
        // Convert Name of the article to link slug
        nameToLink: (articleName) => {
            return articleName.split(" ").join("-").toLowerCase();
        },
        shortenContent: (article) => {
            return article.slice(0, 100);
        }
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

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