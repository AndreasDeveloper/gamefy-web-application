<template>
    <div class="section-header-standard">
        <h2>{{ sectionName }}</h2>
        <a href="#" class="btn-1 btn-viewAll">View All</a>
    </div>
</template>

<script>
export default {
    name: 'SectionHeader',
    // Props
    props: ['sectionName']
};
</script>

<style lang="scss" scoped>

</style>
