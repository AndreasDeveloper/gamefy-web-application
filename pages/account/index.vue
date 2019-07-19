<template>
    <div class="main-content">
        <UserStats />
        <UserArticles />
        <UserSettings />
    </div>
</template>

<script>
// Importing Components
import BlockHeader from '../../components/BlockHeader';
import UserStats from '../../components/user-profile/UserStats';
import UserArticles from '../../components/user-profile/UserArticles';
import UserSettings from '../../components/user-profile/UserSettings';

export default {
    name: 'userProfile',
    // Components 
    components: {
        BlockHeader,
        UserStats,
        UserArticles,
        UserSettings
    },
    // Head
    head() {
        return {
            title: 'Gamefy - User Profile',
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
</style>
