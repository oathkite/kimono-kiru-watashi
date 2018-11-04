<template>

    <div class="key-visual">
        <div class="kv-wrapper">
            <img class="micky" src="~/static/images/illust-micky.png" alt="">
            <img class="tsuru" src="~/static/images/illust-tsuru.png" alt="">
            <img class="nyaji" src="~/static/images/illust-nyaji.png" alt="">
            <img class="max" src="~/static/images/illust-max.png" alt="">
        </div>
        <svg viewBox="0 0 1053 581">
            <image xlink:href="~/static/images/test-kv.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipping-path)"></image>
            <clipPath id="clipping-path">
                <path d="M0.824768329,292.5 C0.824768329,387 112.886061,512 196.090368,537 C279.294676,562 496.203014,581 612.592855,581 C728.982695,581 915.110249,520 972.82422,457 C1030.53819,394 1065.16657,280.5 1047.85238,216.5 C1030.53819,152.5 1002.16215,88.5 906.934104,56.5 C811.706052,24.5 682.811519,8.52651283e-14 541.412291,8.52651283e-14 C400.013064,8.52651283e-14 210.999811,7.5 130.681202,56.5 C50.3625929,105.5 0.824768329,198 0.824768329,292.5 Z" id="path-1"></path>
            </clipPath>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.kv-wrapper {
    width: calc(100% - 64px);
    max-width: 1120px;
    padding-bottom: 51.178%;
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
