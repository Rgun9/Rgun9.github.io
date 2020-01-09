<template>
  <section class="coming">
    <div class="page-wrap">

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getClist();
  },
  methods: {
    getClist() {
      this.axios
        .get(
          "http://api.kele8.cn/agent/https://www.gcores.com/gapi/v1/originals?page[limit]=20&page[offset]=0"
        )
        .then(response => {
        //   ({ data: this.mi } = response);
        //   this.mi.movieList.forEach(e => {
        //     e.img = e.img.replace("/w.h/", "/165.200/");
        //     //   window.console.log(e);
        //   });
          window.console.log(response);
        });
    }
  }
};
</script>

<style></style>
