<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
    scrollToTop: true,
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
        <div class="content-block">
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
        </div>

        <div class="content-block">
            <h2 class="content-title center">師範紹介</h2>

            <div class="profile">
                <div class="portrait">
                    <span>
                        <img src="~/static/images/portrait.jpg" alt="Masako Kyuji">
                    </span>
                </div>

                <div class="biography">
                    <div class="name">
                        <span class="ja">久司 雅子</span>
                        <span class="en">Masako Kyuji</span>
                    </div>
                    <div>着物着付け師範</div>
                    <div>1957年 富山県生まれ 石川県育ち</div>
                    <div>2005年 教室開設</div>
                    <div>2009年 訪問型教室へ移行</div>
                    <div>これまでの生徒数 41名<span>（2019年2月時点）</span></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.profile {
    display: flex;
    justify-content: center;

    .portrait {
        width: 240px;
        margin-right: 40px;

        img {
            max-width: 100%;
            vertical-align: top;
        }

        span {
            display: inline-block;
            border-radius: 28px;
            overflow: hidden;
        }

        @include media(md, max) {
            margin-right: 20px;
            width: 160px;

            span {
                border-radius: 14px;
            }
        }
    }

    .biography {
        line-height: 1.8;

        > * {
            margin-bottom: 12px;
        }

        .name {
            span {
                display: block;
            }

            .ja {
                font-size: 1.2rem;
            }
        }

        @include media(md, max) {
            font-size: 0.8rem;

            > * {
                margin-bottom: 6px;
            }

            span {
                display: inline-block;
            }
        }
    }
}

.concept {
    text-align: center;
    font-size: 1.2rem;

    p {
        line-height: 3;
    }

    span {
        display: inline-block;
    }

    @include media(md, max) {
        font-size: 1rem;
    }
}
</style>
