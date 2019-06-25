<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
        <i class="icon ion-ios-close close-icon" @click="close(); stop();"></i>
        <div class="modal">
        <no-ssr placeholder="Loading..">
            <youtube :video-id="videoLink" ref="youtube" player-width="750" player-height="400" @ready="ready" class="yt-player"></youtube>
        </no-ssr>
        </div>
    </div>
</transition>
</template>

<script>
// Importing Components
import VueYoutubeEmbed from 'vue-youtube-embed';

export default {
    name: 'Modal',
    // Methods - Youtube Video Embed Methods
    methods: {
        ready(event) {
            this.player = event.target;
        },
        close() {
            this.$emit('close');
        },
        playVideo() {
            this.player.playVideo();
        },
        stop() {
            this.player.stopVideo();
        }
    },
    // Props
    props: ['videoLink'],
    // Components
    components: {
        VueYoutubeEmbed
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba($color-black, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    overflow-y: hidden;
}

.modal {
    background: $color-white;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}
.close-icon {
    position: absolute;
    font-size: 5rem;
    color: $color-white;
    top: 5%;
    right: 5%;
    cursor: pointer;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .3s ease
}

iframe#youtube-player-3 {
    @media only screen and (max-width: $bp-small) {
        width: 300px !important;
        height: 300px !important;
    }
}
</style>