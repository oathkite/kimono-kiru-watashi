<template>
        <h1 class="page-title">
            <span><slot/></span>
        </h1>
</template>

<style lang="scss" scoped>
.page-title {
    font-weight: normal;
    z-index: 10;
    text-align: center;
    font-size: 36px;
    padding: 30px 0 48px;

    @include media(md, max) {
        font-size: 24px;
        padding: 24px 0;
    }
}
</style>
