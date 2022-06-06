<template>
  <div>
    <div class="text-left">
      <b-button @click="Create()" variant="outline-primary"
        ><b>ADD Student</b></b-button
      >
    </div>
    <br /><br />
    <b-table
      class="css-serial"
      striped
      hover
      bordered
      :items="tableData"
      :fields="columns"
    >
      <template #cell(DateOfBirth)="data">{{
        date_format(data.item.DateOfBirth)
      }}</template>
      <template #cell(action)="data">
        <b-button @click="Edit(data.item)" variant="info"
          ><b-icon-pencil-fill /></b-button
        >&nbsp;
        <b-button v-b-modal.modal-1 @click="remove(data.item)" variant="danger"
          ><b-icon-x-square
        /></b-button>
      </template>
    </b-table>
    <b-modal
      v-model="modalShow"
      :title="Title"
      header-bg-variant="primary"
      body-bg-variant="success"
      hide-footer
    >
      <b-card style="width: 29rem; height: 500px; background-color: lightgreen">
        <b-form @submit="save">
          <slot :formdata="editedItem" name="input-fields"> </slot>
          <b-button
            id="submit"
            type="submit"
            v-b-tooltip.hover.left
            title="Save"
            variant="success"
            ><b-icon-save /></b-button
          >&nbsp;
        </b-form>
      </b-card>
    </b-modal>
    <b-modal
      id="modal-1"
      ref="deleteConfirmation"
      title="Delete Details"
      header-bg-variant="primary"
      @ok="Delete"
    >
      <b-card style="width: 29rem; height: 100px; background-color: lightgreen">
        Do you want to delete data?
      </b-card>
    </b-modal>
  </div>
</template>


<script>
import Moment from "moment";
export default {
  name: "Student_Details",
  props: ["columns", "formFields"],
  data() {
    return {
      editedItem: this.formFields,
      modalShow: false,
      editedIndex: -1,
      tableData: [],
      delete_data: null,
    };
  },
  computed: {
    Title() {
      return this.editedIndex === -1 ? "Add Student" : "Edit Details";
    },
  },
  methods: {
    Create() {
      this.modalShow = true;
      this.editedItem = Object.assign({}, this.formFields);
      // this.editedItem.Sno =this.tableData.length+1;
      this.editedIndex = -1;
    },
    Edit(item) {
      this.modalShow = true;
      this.editedIndex = this.tableData.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },
    Delete() {
      console.log("this.item", this.delete_data);
      const index = this.user.indexOf(this.delete_data);
      //confirm("Are you sure you want to delete this item?") &&
      this.user.splice(index, 1);
    },
    close() {
      this.modalShow = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.formFields);
        this.editedIndex = -1;
      }, 1000);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tableData[this.editedIndex], this.editedItem);
      } else {
        this.tableData.push(this.editedItem);
      }
      this.close();
    },
    remove(data) {
      this.delete_data = data;
      this.$refs.deleteConfirmation.show();
    },
    date_format(item) {
      return Moment(item).format("ll");
    },
  },
};
</script>
<style>
#submit {
  position: relative;
  bottom: 515px;
  width: 40px;
  height: 35px;
  right: -380px;
}
.css-serial {
  counter-reset: Student_details; /* Set the serial number counter to 0 */
}
.css-serial tr td:first-child:before {
  counter-increment: Student_details; /* Increment the serial number counter */
  content: counter(Student_details); /* Display the counter */
}
</style>