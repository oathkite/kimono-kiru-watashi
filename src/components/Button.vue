<script>
export default {
    props: {
        to: {
            type: String,
            default: '/',
            required: false
        },
        size: String
    }
}
</script>

<template>
    <nuxt-link
        class="button"
        :class="size"
        :to="to"
    >
        <slot></slot>
    </nuxt-link>
</template>

<style lang="scss" scoped>
$button-color: rgb(194, 167, 49);

.button {
    display: inline-block;
    border: 1px solid $button-color;
    padding: 0.6rem 1.8rem;
    color: #000;
    text-decoration: none;
    border-radius: 2rem;
    transition: all ease 0.2s;

    &:hover {
        background: $button-color;
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
</style>
