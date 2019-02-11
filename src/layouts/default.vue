<script>
import SiteHeader from '~/components/Header.vue'
import SiteFooter from '~/components/Footer.vue'

export default {
    scrollToTop: true,
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<template>
    <div class="body">
        <site-header/>
        <main class="site-body">
            <transition name="fade">
                <nuxt/>
            </transition>
        </main>
        <site-footer/>
    </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
