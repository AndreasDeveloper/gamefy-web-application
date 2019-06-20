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
            title: 'User Profile - Gamefy',
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

// Main Section Wrapper
.data-block-wrap {
  min-height: 60vh;
  margin: 4rem 15rem 4rem 8rem;
  padding: 0 5rem;
  padding-top: 4rem;
  background-color: $color-white;
  border-radius: 2rem;
  box-shadow: 0px 4px 4px rgba($color-black, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: $bp-small) { margin: 4rem 4rem; }
}
</style>
