<template>
    <section class="splash" v-if="!this.$store.state.isSplashFinish">
        <div class="splash-text">
            <span>あ</span>
            <span>、</span>
            <span>着</span>
            <span>れ</span>
            <span>た</span>
            <span>！</span>
        </div>
    </section>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import Anime from 'animejs'

export default {
    mounted: function() {
        this.show()
    },
    methods: {
        ...mapMutations({
            finish: 'finishSplash'
        }),
        show: function() {
            Anime({
                targets: '.splash-text span',
                opacity: 1,
                translateY: -10,
                duration: 800,
                easing: 'easeOutBack',
                delay: function(el, i, l) {
                    return i * 240;
                },
                complete: (Anime) => {
                    this.disappear()
                    this.finish()
                }
            })
        },
        disappear: function() {
            Anime({
                targets: '.splash',
                opacity: 0,
                translateY: 0,
                duration: 1200,
                easing: 'easeOutBack',
                delay: 800
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.splash {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #FFF7E7;
    z-index: 100;
    font-size: 28px;

    @include media(sm, max) {
        font-size: 20px;
    }
}

.splash-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);

    span {
        display: inline-block;
        opacity: 0;
    }
}
</style>
