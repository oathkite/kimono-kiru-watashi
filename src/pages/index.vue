<script>
import KeyVisual from '~/components/KeyVisual.vue'
import Splash from '~/components/Splash.vue'

export default {
    scrollToTop: true,
    components: {
        KeyVisual,
        Splash
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
        <Splash/>
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
.intro {
    text-align: center;
    padding: 80px 32px;

    @include media(sm, max) {
        padding: 30px;
    }
}

.lead {
    font-size: 2rem;
    letter-spacing: 0.4rem;
    margin-bottom: 32px;

    @include media(sm, max) {
        margin-bottom: 30px;
        font-size: 1.4rem;

        span {
            display: block;
        }
    }
}

.sentence {
    line-height: 2.4;

    @include media(sm, max) {
        font-size: 1rem;

        span {
            display: block;
        }

        br {
            display: none;
        }
    }
}

.feature {
    display: flex;
    justify-content: center;
    padding-bottom: 80px;

    a {
        text-decoration: none;
        color: #000;
    }

    &-item {
        width: 30%;
        padding: 0 20px;
        transition: opacity ease 0.4s;

        &:hover {
            opacity: 0.6;
        }
    }

    &-name {
        text-align: center;
        margin-top: 10px;
    }
}
</style>

