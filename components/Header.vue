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
            <nuxt-link to="/">
                <logo/>
            </nuxt-link>
        </h1>

        <site-menu class="site-menu" />

        <div class="contact">
            <div class="address">
                <p>石川県白山市鶴来桑島町148<br>雅アート企画 / きもの 着る・私</p>
            </div>
            <div class="actions">
                <div>
                    <round-button size="s">お問い合わせ</round-button>
                </div>
                <div>
                    <i class="fas fa-phone"></i> 076-273-4182
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
$color: rgb(194, 167, 49);

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

    @include media(sm, max) {
        svg {
            height: auto;
            width: 120px;
        }
    }
}

.contact {
    display: flex;
    align-items: center;
    margin-left: 32px;
    padding-left: 32px;
    border-left: 1px dashed $color;

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
