<template>
    <main class="main-content">
        <SignupBlock />
    </main>
</template>

<script>
// Importing Components
import SignupBlock from '@/components/signupPage/SignupBlock';

export default {
    // Components 
    components: {
        SignupBlock
    },
    // Head Tags
    head() {
        return {
            title: 'Gamefy - Signup',
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
