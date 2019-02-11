<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
    scrollToTop: true,
    components: {
        PageTitle
    },
    head () {
        return {
            title: '訪問教室'
        }
    }
}
</script>

<template>
    <section class="container">
        <page-title>訪問教室</page-title>

        <div class="content-block">
            <h2 class="content-title">訪問教室（石川・富山限定）</h2>
            <p class="lead">ご自宅でゆっくりゆったりレッスンを受けられる、家庭訪問型の着付け教室です。月１回から、ご都合に合わせてお選びいただけます。</p>

            <table class="table">
                <tr>
                    <th>授業時間</th>
                    <td>1回 1時間半</td>
                </tr>
            </table>

            <table class="table mt20">
                <tr>
                    <th>月1回</th>
                    <td>2,500円</td>
                </tr>
                <tr>
                    <th>月2回</th>
                    <td>4,000円</td>
                </tr>
                <tr>
                    <th>月3回</th>
                    <td>5,000円</td>
                </tr>
                <tr>
                    <th>月4回</th>
                    <td>6,000円</td>
                </tr>
            </table>

            <ul class="notice-list">
                <li>教室の曜日・時間帯は決まっておりませんのでご相談下さい。</li>
                <li>授業料は最初のレッスン日に一月分をまとめていただきます。</li>
                <li>日時の変更は前日まで無料で承ります。</li>
                <li>当日キャンセルのみ、授業料全額ご負担いただきます。</li>
            </ul>

            <div class="notice">
                <h3>遠方訪問について</h3>
                <p>別途交通費をいただいております。授業時間が「半日」や「一日」の、遠方の方向けの教室も承っておりますのでご相談下さい。</p>
            </div>
        </div>

        <div class="content-block">
            <h2 class="content-title">着付の教室（前結び型）</h2>
            <!-- <p class="lead">ご自宅でゆっくりゆったりレッスンを受けられる、家庭訪問型の着付け教室です。月１回から、ご都合に合わせてお選びいただけます。</p> -->

            <h3>準備品</h3>

            <p>教室の際は、下記のリストに記載されているものをご準備ください。ご用意が難しい場合はご相談ください。</p>

            <ul class="disc-list">
                <li>肌着</li>
                <li>補正用品（和装ブラ / ウエスト補正用タオル / 腰ヒモ2本程度）</li>
                <li>コーリンベルト…3本</li>
                <li>腰ベルト…1本</li>
                <li>帯板（だてじめと板が一体型で、サテン地で着物に固定できるもの）</li>
                <li>長襦袢</li>
                <li>着物</li>
                <li>帯</li>
                <li>帯枕</li>
                <li>帯上げ</li>
                <li>帯締め</li>
                <li>足袋</li>
                <li>クリップ…2個</li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.table {
    width: 100%;
    background: #fff;
    border-collapse: collapse;
    max-width: 640px;
    margin: 40px auto 0;

    @include media(md, max) {
        margin-top: 30px;
    }

    th {
        font-weight: normal;
        width: 30%;
        background: #f6f6f6;
    }

    th,
    td {
        padding: 10px;
        border: 1px solid #dbdbdb;
    }
}

.disc-list {
    list-style-type: none;
    margin-top: 40px;
    padding: 30px;
    background: #fff;

    @include media(md, max) {
        margin-top: 30px;
    }

    li {
        position: relative;
        padding-left: 18px;

        &::before {
            content: '•';
            position: absolute;
            top: 0;
            left: 0;
        }

        & + li {
            margin-top: 8px;
        }
    }
}

.notice-list {
    list-style-type: none;
    margin-top: 40px;
    padding: 0;

    @include media(md, max) {
        margin-top: 30px;
    }

    li {
        position: relative;
        padding-left: 18px;

        &::before {
            content: '※';
            position: absolute;
            top: 0;
            left: 0;
        }

        & + li {
            margin-top: 8px;
        }
    }
}

.notice {
    padding: 30px;
    margin-top: 40px;
    background: #fff;

    @include media(md, max) {
        margin-top: 30px;
        padding: 20px;
    }

    h3 {
        font-weight: normal;
        margin-bottom: 15px;
    }
}

.mt20 {
    margin-top: 20px;
}

h3 {
    font-weight: normal;
    margin-bottom: 15px;
}
</style>
