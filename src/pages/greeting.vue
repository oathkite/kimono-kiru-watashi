<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
    components: {
        PageTitle
    },
    head () {
        return {
            title: 'ごあいさつ'
        }
    }
}
</script>

<template>
    <section class="container">
        <page-title>ごあいさつ</page-title>
        <div class="concept">
            <p class="sentence-block">
                <span>やる気の出るスーツや疲れた日のスウェット、</span>
                <span>ちょっとしたお出かけには素敵なワンピース…</span>
                <span>洋服は忙しい私達の毎日を</span>
                <span>楽しくお洒落に支えてくれます。</span>
            </p>
            <p class="sentence-block">
                <span>それでも、、、</span>
                <span>七五三や成人式、結婚式などの場面では</span>
                <span>「着物が着たい」「着物が着れたら…」</span>
                <span>と思ったことはありませんか？</span>
                <span>夏祭りや花火大会で浴衣を着たり、</span>
                <span>晴れ着で初詣に行ってみたいと思ったことも…</span>
            </p>
            <p class="sentence-block">
                <span>また、「着物や小物はあるけれど、</span>
                <span>着方を忘れてしまった…」</span>
                <span>「最近背中で帯を結ぶのが辛くて…」</span>
                <span>といった事はありませんか？</span>
                <span>『きもの着る・私』では、様々な着物が</span>
                <span>着たい・着てみたいという皆様とご一緒に</span>
                <span>ゆっくりゆったりレッスンできる</span>
                <span>伸びやかで楽な教室を開設いたしました。</span>
                <span>ある日突然「あ、着れた！」</span>
                <span>という日が皆様に訪れますように。</span>
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.concept {
    padding-bottom: 80px;
    line-height: 3;
    text-align: center;
    font-size: 1.2rem;

    span {
        display: inline-block;
    }

    @include media(md, max) {
        font-size: 1rem;
    }
}
</style>
