<template>
  <div class="Movie">
    <div class="navbar">
      <h1 class="nav-header">电影</h1>
    </div>
    <topnav></topnav>
    <section class="movielist">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import topnav from "@/components/Topnav.vue";
export default {
  components: {
    topnav
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang='less'>
.Movie{

}
  .movielist{
    width: 100%;
    .tab-content{
      width: 95%;position: relative;overflow: hidden;
    }
  }
</style>
