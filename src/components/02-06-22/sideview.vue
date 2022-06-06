<template>
  <div>
    <b-navbar id="color">
      <b-button id="button" v-b-toggle.my-sidebar variant="info"
        ><b-navbar-brand
          ><h5 style="color: white"><b-icon-list /></h5></b-navbar-brand
      ></b-button>
      <h2 id="card" style="color: white; font-size: 20px">
        <b>Root<b-icon-chevron-down /></b>
      </h2> </b-navbar
    ><br /><br /><br />
    <b-sidebar id="my-sidebar" title="Products" shadow>
      <br /><br />
      <div>
        <b-dropdown-menu
          ><b-dropdowm-item
            ><button id="home_box" type="submit" @click="home()">
              <b-icon-house-door-fill /> Home
            </button></b-dropdowm-item
          ><br /><br /><b-dropdowm-item
            ><button id="grid_box" type="submit" @click="product()">
              <b-icon-ui-checks-grid /> Product
            </button></b-dropdowm-item
          ></b-dropdown-menu
        >
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: "home_page", // snake case
  data() {
    return {};
  },
  // add  to router link
  methods: {
    product() {
      this.$router.push("/pproduct");
    },
    home() {
      this.$router.push("/home");
    },
  },
};
</script>


<style>
#color {
  background-color: rgb(3, 10, 203);
  top: -60px;
}
#card {
  position: relative;
  left: 1900px;
}
</style>