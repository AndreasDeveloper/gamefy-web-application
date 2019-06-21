<template>
    <div class="section-wrap-standard">
        <SectionHeader sectionName="Popular Titles" />
        <!-- Popular Titles Slider -->
        <div class="pt-slider">
            <i class="icon ion-ios-arrow-back arrow-left"></i>
            <i class="icon ion-ios-arrow-forward arrow-right"></i>
            <div class="pt-slider-elements">
                <div class="pt-slider-elements__row-1">
                    <div class="pt-el pt-el-1"></div>
                    <div class="pt-el pt-el-2"></div>
                    <div class="pt-el pt-el-3"></div>
                    <div class="pt-el pt-el-4"></div>
                    <div class="pt-el pt-el-4"></div>
                    <div class="pt-el pt-el-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Importing Components
import SectionHeader from '../SectionHeader';

export default {
    name: 'PopularTitles',
    // Data
    data() {
        return {
            popularTitles: [
                { id: 1, image: require(`@/assets/images/w3-2.jpg`) },
                { id: 2, image: require(`@/assets/images/f4-1.jpg`) },
                { id: 3, image: require(`@/assets/images/dl2-1.jpg`) },
                { id: 4, image: require(`@/assets/images/d2-1.jpg`) }
            ]
        }
    },
    // Components
    components: {
        SectionHeader
    }
};
</script>

<style lang="scss" scoped>
// Importing SASS Components
@import '../sass/main.scss';

.pt-slider {
    position: relative;
}

// Slider Elements Wrap
.pt-slider-elements {
    width: 100%;
    margin-top: 3rem;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
}
.pt-slider-elements.active {
    cursor: -webkit-grabbing;
    cursor: -moz-grabbing;
    cursor: grabbing;
}

// Slider Elements
.pt-el {
    color: $color-white;
    width: 30rem;
    height: 38rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    -webkit-transform: scale(0.98);
    transform: scale(0.97); 
    opacity: 1;
    background-position: center;
    background-size: cover;
    margin-left: 2rem;
    box-shadow: 0px 4px 4px rgba($color-black, 0.25);
    // Text
    h3 { font-size: 3.5rem; font-weight: 600; text-transform: uppercase; }
}

.pt-slider .arrow-left,
.pt-slider .arrow-right,
.pt-slider-elements,
.pt-el {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}

// Arrow Buttons 
.arrow-left, .arrow-right {
    color: $color-primary;
    font-size: 3rem;
    background-color: $color-white;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 .5rem rgba($color-black, 0.3);
    box-shadow: 0 0 .5rem rgba($color-black, 0.3);
    padding: 1.6rem 2.8rem;
    text-align: center;
    z-index: 998;
    cursor: pointer;
    transition: all .1s ease-in-out;
    position: absolute;
}
.arrow-left:hover, .arrow-right:hover {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    -webkit-box-shadow: 0 0 .8rem rgba($color-black, 0.4);
    box-shadow: 0 0 .8rem rgba($color-black, 0.4);
}
.arrow-left { top: 40%; left: -1%; }
.arrow-right { top: 40%; right: 5%; }

// Seed Data - TEST ***
.pt-el-1 { background-image: url(~assets/images/w3-2.jpg); }
.pt-el-2 { background-image: url(~assets/images/f4-1.jpg); }
.pt-el-3 { background-image: url(~assets/images/dl2-1.jpg); }
.pt-el-4 { background-image: url(~assets/images/d2-1.jpg); }

</style>
