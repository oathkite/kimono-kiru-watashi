<template>
    <nav class="site-menu">
        <ul>
            <nuxt-link tag="li" to="/">
                <a>トップ</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/visiting-dressing">
                <a>訪問教室</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/visiting-dressing">
                <a>前結び着付</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/visiting-dressing">
                <a>着せ付</a>
            </nuxt-link>
            <nuxt-link tag="li" to="/visiting-dressing">
                <a>販売</a>
            </nuxt-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
$color: rgb(194, 167, 49);

.site-menu {
    position: relative;
    z-index: 100;

    ul {
        display: flex;
        list-style-type: none;
        padding-left: 0;

        li + li {
            margin-left: 40px;
        }

        a {
            text-decoration: none;
            color: #000;

            &:hover {
                color: $color;
            }
        }
    }

    @include media(xl, max) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: 0;
        background: #FFF7E7;
        border-top: 1px solid $color;
        background: #fff;

        ul {
            padding-left: 0;
            justify-content: space-between;
            padding: 0 24px;

            li {
                margin-left: 0!important;

                a {
                    display: block;
                    padding: 16px 8px;
                    white-space: nowrap;
                }
            }
        }
    }

    @include media(sm, max) {
        ul {
            // font-size: 1rem;
            padding: 0 8px;
        }
    }
}
</style>
