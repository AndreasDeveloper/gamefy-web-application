<template>
    <main class="main-content">
        <ArticleComp 
            :image="article.image" 
            :title="article.title" 
            :datePosted="article.date" 
            :content="article.content" 
            :authorName="article.authorName" 
            :authorImage="article.authorImage"
            authorBio="Software Engineer & cloud expert" 
            :articleGenre="article.genres"
            :articleId="article.id" 
        />
    </main>
</template>

<script>
// Importing Components
import ArticleComp from '@/components/articlePage/ArticleComp';

export default {
    scrollToTop: true, // Make sure page is scrolled to the top
    // Components
    components: {
        ArticleComp
    },
    // Data
    data() {
        return {
            article: {
                id: 60,
                date: '06/11/2019',
                image: require(`@/assets/images/cp-1.jpg`),
                title: 'E3 2019 Just Started',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus. Leo a diam sollicitudin tempor id. Ut porttitor leo a diam sollicitudin tempor id. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut. Tincidunt id aliquet risus feugiat in. Lacus laoreet non curabitur gravida arcu ac. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ac odio tempor orci dapibus. Ut faucibus pulvinar elementum integer. Diam vulputate ut pharetra sit amet aliquam. Sagittis nisl rhoncus mattis rhoncus urna neque. Neque volutpat ac tincidunt vitae semper quis. Molestie a iaculis at erat pellentesque adipiscing. Convallis a cras semper auctor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Massa tincidunt dui ut ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Convallis posuere morbi leo urna molestie. Diam ut venenatis tellus in metus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Ultrices vitae auctor eu augue ut lectus. Dui sapien eget mi proin. Aenean sed adipiscing diam donec adipiscing. Enim eu turpis egestas pretium aenean pharetra magna. Sit amet dictum sit amet justo donec. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Aliquam eleifend mi in nulla posuere sollicitudin. Diam sollicitudin tempor id eu nisl nunc mi. Consectetur a erat nam at lectus urna. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Pulvinar neque laoreet suspendisse interdum consectetur. Massa id neque aliquam vestibulum morbi blandit cursus. Blandit aliquam etiam erat velit scelerisque. Elementum nibh tellus molestie nunc. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Condimentum id venenatis a condimentum vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Eget nunc lobortis mattis aliquam. Volutpat lacus laoreet non curabitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus. Leo a diam sollicitudin tempor id. Ut porttitor leo a diam sollicitudin tempor id. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. In aliquam sem fringilla ut. Tincidunt id aliquet risus feugiat in. Lacus laoreet non curabitur gravida arcu ac. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ac odio tempor orci dapibus. Ut faucibus pulvinar elementum integer. Diam vulputate ut pharetra sit amet aliquam. Sagittis nisl rhoncus mattis rhoncus urna neque. Neque volutpat ac tincidunt vitae semper quis. Molestie a iaculis at erat pellentesque adipiscing. Convallis a cras semper auctor. Consectetur adipiscing elit duis tristique sollicitudin nibh. Massa tincidunt dui ut ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Convallis posuere morbi leo urna molestie. Diam ut venenatis tellus in metus. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Ultrices vitae auctor eu augue ut lectus. Dui sapien eget mi proin. Aenean sed adipiscing diam donec adipiscing. Enim eu turpis egestas pretium aenean pharetra magna. Sit amet dictum sit amet justo donec. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Aliquam eleifend mi in nulla posuere sollicitudin. Diam sollicitudin tempor id eu nisl nunc mi. Consectetur a erat nam at lectus urna. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Pulvinar neque laoreet suspendisse interdum consectetur. Massa id neque aliquam vestibulum morbi blandit cursus. Blandit aliquam etiam erat velit scelerisque. Elementum nibh tellus molestie nunc. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Condimentum id venenatis a condimentum vitae. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Eget nunc lobortis mattis aliquam. Volutpat lacus laoreet non curabitur.',
                authorName: 'John Doe',
                authorImage: require(`@/assets/images/user.jpg`),
                genres: [{g: 'gaming'}, {g: 'e3'}, {g: 'tech'}, {g: 'keanu'}],
                authorId: 1 // Representing authors ID
            }
        }
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

<style lang="scss" scoped>

</style>
