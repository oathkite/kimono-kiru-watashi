<template>
    <div class="key-visual">
        <div class="kv-wrapper">
            <img class="micky" src="~/static/images/illust-micky.png" alt="">
            <img class="tsuru" src="~/static/images/illust-tsuru.png" alt="">
            <img class="nyaji" src="~/static/images/illust-nyaji.png" alt="">
            <img class="max" src="~/static/images/illust-max.png" alt="">

            <div class="kv-texts">
                <div class="kv-text text0">
                    <span>あ</span>
                    <span>、</span>
                    <span>着</span>
                    <span>れ</span>
                    <span>た</span>
                </div>

                <div class="kv-text text1">
                    <span>あ</span>
                    <span>る</span>
                    <span>日</span>
                    <span>突</span>
                    <span>然</span>
                </div>

                <div class="kv-text text2">
                    <span>や</span>
                    <span>っ</span>
                    <span>て</span>
                    <span>来</span>
                    <span>る</span>
                    <span>の</span>
                    <span>で</span>
                    <span>す</span>
                </div>
            </div>
        </div>

        <svg viewBox="0 0 1053 581">
            <g class="kv-images">
                <image class="kv-image img0" xlink:href="~/static/images/test-kv.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#round-1)"></image>
                <!-- <image class="kv-image img1" xlink:href="~/static/images/test-kv-2.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#round-1)"></image>
                <image class="kv-image img2" xlink:href="~/static/images/test-kv-3.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#round-1)"></image> -->
            </g>
            <clipPath id="round-1">
                <path d="M0.824768329,292.5 C0.824768329,387 112.886061,512 196.090368,537 C279.294676,562 496.203014,581 612.592855,581 C728.982695,581 915.110249,520 972.82422,457 C1030.53819,394 1065.16657,280.5 1047.85238,216.5 C1030.53819,152.5 1002.16215,88.5 906.934104,56.5 C811.706052,24.5 682.811519,8.52651283e-14 541.412291,8.52651283e-14 C400.013064,8.52651283e-14 210.999811,7.5 130.681202,56.5 C50.3625929,105.5 0.824768329,198 0.824768329,292.5 Z"></path>
            </clipPath>
        </svg>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Anime from 'animejs'

export default {
    computed: {
        ...mapGetters([
            'isSplashFinish'
        ]),
        imgMax: function() {
            return document.querySelectorAll('.kv-text').length - 1
        },
        nextSlide: function() {
            if (this.current >= this.imgMax) {
                return 0
            } else {
                return this.current + 1
            }
        }
    },
    data: function() {
        return {
            current: 0
        }
    },
    watch: {
        isSplashFinish (val) {
            this.show()
        }
    },
    methods: {
        show: function() {
            // Anime({
            //     targets: '.kv-image.img' + this.current,
            //     opacity: 1,
            //     easing: 'easeInOutQuad'
            // })

            Anime({
                targets: '.kv-text.text' + this.current + ' span',
                opacity: 1,
                translateY: [0, -5],
                easing: 'easeInOutQuad',
                dulation: 400,
                delay: function(el, i, l ) {
                    return i * 240 + 800
                },
                complete: (anim) => {
                    this.hide()
                }
            })
        },
        hide: function() {
            // Anime({
            //     targets: '.kv-image.img' + this.current,
            //     opacity: 0,
            //     easing: 'easeInOutQuad',
            //     delay: 2000
            // })

            Anime({
                targets: '.kv-text.text' + this.current + ' span',
                opacity: 0,
                delay: 2000,
                begin: (anim) => {
                    this.current = this.nextSlide
                    this.show()
                }
            })
        },
        reset: function() {
            Anime.running.forEach(element => {
                element.pause()
                element.reset()
            })
        }
    },
    mounted: function() {
        if (this.$store.state.isSplashFinish) {
            this.show()
        }
    },
    beforeDestroy: function() {
        this.reset()
    }
}
</script>


<style lang="scss" scoped>
$text-shadow: rgba(0,0,0,0.2);

.kv-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: #fff;

    span {
        opacity: 0;
        display: inline-block;
    }

    text-shadow: 2px 2px 4px $text-shadow;

    @include media(sm, max) {
        font-size: 1.4rem;
    }
}

.kv-wrapper {
    width: calc(100% - 64px);
    max-width: 1120px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);

    .micky {
        position: absolute;
        left: 5.8%;
        width: 9.107%;
    }

    .tsuru {
        position: absolute;
        right: -2%;
        width: 15.535%;
    }

    .nyaji {
        position: absolute;
        left: 8%;
        width: 6.339%;
        transform: translateY(338%);
    }

    .max {
        position: absolute;
        right: 6%;
        width: 10.446%;
        transform: translateY(230%);
    }

    @include media(sm, max) {
        width: calc(100% - 32px);
    }
}

.key-visual {
    text-align: center;
    padding: 0 32px;
    position: relative;

    .kv-image {
        opacity: 0;

        &:nth-child(1) {
            opacity: 1;
        }
    }

    @include media(sm, max) {
        padding: 0 16px;
    }

    svg {
        width: 100%;
        max-width: 1120px;
        height: auto;
    }
}
</style>
