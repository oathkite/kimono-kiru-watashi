<script>
import Logo from '~/components/Logo.vue'
import SiteMenu from '~/components/SiteMenu.vue'
import RoundButton from '~/components/Button.vue'

export default {
  components: {
    Logo,
    SiteMenu,
    RoundButton
  }
}
</script>

<template>
    <header class="site-header">
        <h1 class="site-title">
            <nuxt-link class="logo" to="/">
                <logo/>
            </nuxt-link>

            <img class="shibori" src="~/static/images/shibori.png" alt="">
        </h1>

        <site-menu class="site-menu" />

        <div class="contact">
            <div class="address">
                <p>石川県白山市鶴来桑島町148<br>雅アート企画 / きもの 着る・私</p>
            </div>
            <div class="actions">
                <div>
                    <a class="button" href="https://docs.google.com/forms/d/1NcGRgto2Sh7yPCXoPlf6FYNUeSQYhNcth8LquxNDNhY/edit" target="_blank" rel="norefferer">
                        お問い合わせ
                    </a>
                </div>
                <div class="call">
                    <i class="fas fa-phone"></i> <a href="tel:0762734182">090-6814-2608</a>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
$color: rgb(194, 167, 49);

.button {
    display: inline-block;
    border: 1px solid $color;
    padding: 0.6rem 1.8rem;
    color: #000;
    text-decoration: none;
    border-radius: 2rem;
    transition: all ease 0.2s;

    &:hover {
        background: $color;
        color: #fff;
    }

    &.s {
        font-size: 0.8rem;
    }

    @include media(sm, max) {
        font-size: 0.8rem;
        padding: 0.4rem 1.2rem;
    }
}

.site-header {
    display: flex;
    align-items: center;
    padding: 16px 32px;

    @include media(sm, max) {
        padding: 8px 16px;
    }
}

.site-title {
    margin-right: auto;
    position: relative;

    .logo {
        position: relative;
        z-index: 1;
    }

    .shibori {
        position: absolute;
        width: 336px;
        top: -100px;
        left: -50px;
    }

    @include media(sm, max) {
        svg {
            height: auto;
            width: 150px;
        }

        .shibori {
            width: 200px;
            top: -50px;
            left: -20px;
        }
    }
}

.call {
    a {
        text-decoration: none;
        color: #000;
        pointer-events: none;
    }

    @include media(md, max) {
        a {
            text-decoration: underline;
            pointer-events: auto;
        }
    }
}

.contact {
    display: flex;
    align-items: center;
    margin-left: 32px;
    padding-left: 32px;
    border-left: 1px dashed $color;
    position: relative;
    z-index: 10;

    @include media(xl, max) {
        border: none;
        padding-left: 0;
        margin-left: 0;
    }
}

.actions {
    text-align: center;

    div + div {
        margin-top: 8px;
    }
}

.address {
    margin-right: 16px;
    font-size: 0.8rem;

    @include media(md, max) {
        display: none;
    }
}
</style>
