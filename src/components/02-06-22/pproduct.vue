<template>
  <div>
    <sideview></sideview>
    <center>
      <br /><br />
            <cproduct 
        :Columns="['Id', 'Product', 'Sku', 'Type', 'Quality', 'Operation']"
        :formFields="{}"
      >
        <!-- /* form input fields in this slot */ -->
        <template v-slot:input-fields="{ formdata }">
          <br /> 
          <b>Product:</b>
          <b-form-input
            id="input-2"
            v-model="formdata.Product"
            :options="Product_options"
            type="text"
            value-field="id"
            text-field="name"
            required
            placeholder="Enter product"
          >
          </b-form-input
          ><br />
          <b> Sku:</b>
          <b-form-input
            id="input-3"
            v-model="formdata.Sku"
            :options="Sku_options"
            type="text"
            value-field="id"
            text-field="name"
            required
          >
          </b-form-input
          ><br />
          <b> Type:</b>
          <b-form-input
            v-model="formdata.Type"
            id="input-4"
            type="text"
            :options="Type_options"
            value-field="id"
            text-field="name"
            required
          >
          </b-form-input
          ><br />
          <b>Quality:</b>
          <b-form-input
            v-model="formdata.Quality"
            id="input-5"
            type="number"
            required
          >
          </b-form-input>
          <br /><br />
        </template>
      </cproduct>
    </center>
  </div>
</template>
<script>
import cproduct from "./cproduct.vue";
import sideview from "./sideview.vue";
export default {
  name: "add_product", //snake case
  components: { cproduct, sideview },
};
</script>
<style scoped>
#color {
  background-color: rgb(8, 236, 164);
}
#Card {
  position: relative;
  left: 1950px;
}
#product {
  position: relative;
  top: 40px;
}
#sku {
  position: relative;
  top: 40px;
}
#type {
  position: relative;
  top: 40px;
}
#search {
  position: relative;
  top: 40px;
}
#bshow {
  position: relative;
  left: 120px;
}
</style>