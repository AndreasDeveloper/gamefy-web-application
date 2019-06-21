<template>
    <div class="main-content">
        <NewATitles />
        <PopularTitles />
    </div>
</template>

<script>
// Importing Components
import SectionHeader from '../../components/SectionHeader';
import NewATitles from '../../components/productPage/NewATitles';
import PopularTitles from '../../components/productPage/PopularTitles';

export default {
    name: 'products',
    // Components
    components: {
        SectionHeader,
        NewATitles,
        PopularTitles
    }
};
</script>

<style lang="scss" scoped>

</style>
