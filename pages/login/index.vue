<template>
    <main class="main-content">
        <LoginBlock />
    </main>
</template>

<script>
// Importing Components
import LoginBlock from '@/components/loginPage/loginBlock';

export default {
    // Components
    components: {
        LoginBlock
    },
    // Head Tags
    head() {
        return {
            title: 'Gamefy - Login',
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
.main-content {
    min-height: 90vh !important;
}
</style>
