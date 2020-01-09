<template>
  <div class="movie">
    <div class="tab-content">
      <div class="most-expected" v-if="top">
          <p class="title">近期最受期待</p>
          <ul class="most-expected-list">
              <li></li>
          </ul>
      </div>
      <ul class="movielists" v-if="mi">
        <li
          class="movieitem"
          v-for="(item, index) in mi"
          :key="index"
        >
          <div class="main-block">
            <div class="avatar">
              <div class="img-bg">
                <img :src="item.img" alt="" />
              </div>
            </div>
            <div class="mb-outline-b">
              <div class="column">
                <div class="movie-title">{{ item.nm }}</div>
                <div class="detail">
                  <div class="score">
                    <span class="score-suffix">观众评 </span>
                    <span class="grade">{{ item.sc }}</span>
                  </div>
                  <div class="actor">主演: {{ item.star }}</div>
                  <div class="show-info">
                    {{ item.showInfo }}
                  </div>
                </div>
              </div>
              <div class="button-block">
                <div class="btn-normal" :class="{ ys: !item.globalReleased }">
                  <span class="fix" v-if="item.globalReleased">购票</span>
                  <span class="fix " v-else>预售</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mi", "top"]
};
</script>

<style lang="less">
    .most-expected{
        padding: 12px 0 12px 15px;
        background-color: #fff;
        margin-bottom: 10px;
        p{
            margin: 0;font-size: 14px;
            color:#333;margin-bottom: 12px;
        }
        .most-expected-list{
            overflow: scroll;
            white-space: normal;
            li{
                display: inline-block;
                width: 85px;
                overflow: hidden;
                margin-right: 10px;
            }
        }
    }
</style>
