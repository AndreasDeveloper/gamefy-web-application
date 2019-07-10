<template>
    <main class="main-content">
        <NewATitles />
        <PopularTitles />
        <Trailers />
    </main>
</template>

<script>
// Importing Components
import SectionHeader from '../../components/SectionHeader';
import NewATitles from '../../components/productPage/NewATitles';
import PopularTitles from '../../components/productPage/PopularTitles';
import Trailers from '../../components/productPage/Trailers';

export default {
    name: 'products',
    // Components
    components: {
        SectionHeader,
        NewATitles,
        PopularTitles,
        Trailers
    },
    // Head Tags
    head() {
        return {
            title: 'Gamefy - Products',
            meta: [
                {
                hid: 'description',
                name: 'description',
                content: 'Gamefy products page'
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
