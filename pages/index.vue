<script>
import KeyVisual from '~/components/KeyVisual.vue'

export default {
    components: {
        KeyVisual
    },
    head () {
        return {
            titleTemplate: '',
            title: 'きもの 着る・私 － 石川・富山の訪問着付教室'
        }
    }
}
</script>

<template>
    <section class="container">
        <key-visual class="kv"></key-visual>

        <section class="intro">
            <p class="lead">
                <span>それは、ある日突然</span>
                <span>やってくるのです。</span>
            </p>

            <p class="sentence">
                自前の着物や小物をそのまま使用して、<br>
                <span>ゆっくり・ゆったり、</span>
                <span>ある日突然着れる様になった！</span><br>
                <span>という伸びやかな、</span>
                <span>らくな教室を開設しました。</span>
            </p>
        </section>
    </section>
</template>

<style lang="scss" scoped>
.kv {
    @include media(sm, max) {
        padding-top: 16px;
    }
}

.intro {
    text-align: center;
    padding: 48px 32px;

    @include media(sm, max) {
        padding: 16px;
    }
}

.lead {
    font-size: 1.6rem;
    margin-bottom: 32px;

    @include media(sm, max) {
        margin-bottom: 16px;
        font-size: 1.2rem;

        span {
            display: block;
        }
    }
}

.sentence {
    line-height: 2.4;

    @include media(sm, max) {
        font-size: 0.8rem;

        span {
            display: block;
        }

        br {
            display: none;
        }
    }
}
</style>

