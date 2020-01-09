<template>
  <MovieCont :mi="mi.movieList" :top="false"></MovieCont>
</template>

<script>
import MovieCont from '@/components/MovieCont.vue'


export default {
  components:{
    MovieCont,
  },
  data() {
    return {
      mi: null
    };
  },
  created() {
    this.getTlist();
  },
  computed: {},
  methods: {
    getTlist() {
      this.axios.get(
          'http://www.softeem.xin/maoyanApi/ajax/movieOnInfoList'
      ).then(response => {
        ({ data: this.mi } = response);
        this.mi.movieList.forEach(e => {
          e.img = e.img.replace("/w.h/", "/165.200/");
          //   window.console.log(e);
        });
        window.console.log(this.mi);
      });
    }
  }
};
</script>

<style lang="less">
.movielists {
  margin-top: 100px;
  background-color: #f5f5f5;
  margin-bottom: 70px;
  width: 100%;
  overflow: hidden;
  .movieitem {
    padding-left: 15px;
    background-color: #fff;
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .main-block {
      position: relative;
      width: 100%;
      .avatar {
        width: 64px;
        height: 90px;
        position: relative;
        margin-top: 12px;
        float: left;
        .img-bg {
          background-color: #e1e1e1;
          background-size: 100% 100%;
          img {
            background-color: transparent;
            height: 90px;
            width: 100%;
            display: block;
          }
        }
      }
      .mb-outline-b {
        padding: 12px 14px 12px 0;
        margin-left: 74px;
        height: 90px;
        max-height: 90px;
        position: relative;

        .column {
          padding-right: 5px;
          margin-right: 48px;
          overflow: hidden;
          .movie-title {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-height: 24px;
            margin-left: 6px;
            margin-bottom: 7px;
            line-height: 24px;
            overflow: hidden;
            font-size: 17px;
            color: #333;
            font-weight: 700;
            padding-right: 5px;
          }
          .detail {
            box-sizing: border-box;
            line-height: 1;

            .score {
              font-size: 13px;
              margin: 6px;
              color: #666;
              .grade {
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
              }
            }
            .actor,
            .show-info {
              width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 13px;
              color: #666;
              margin: 6px;
              line-height: 15px;
            }
          }
        }
        .button-block {
          font-size: 12px;
          position: absolute;
          height: 100%;
          right: 14px;
          top: 0%;
          bottom: 0;
          margin: auto;
          .btn-normal {
            width: 47px;
            height: 27px;
            margin-top: 100%;
            line-height: 28px;
            text-align: center;
            box-sizing: border-box;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12px;
            cursor: pointer;
            &.ys {
              background-color: #3c9fe6;
            }
            .fix {
              line-height: 28px;
              text-align: center;
              color: #fff;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
