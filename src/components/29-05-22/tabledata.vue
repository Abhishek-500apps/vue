<template>
  <div>
    <br />
    <nav>
      <h1 style="color: white"><b>Student Details</b></h1>
      &nbsp;
      <b-col cols="2"
        ><h2 id="card" class="form-control form-control-lg">
          <b>LoginUser:</b>Lavanya
        </h2></b-col
      >
      <b-card>
        <center>
          <br /><br />
          <cassign
            :columns="[
              'Sno',
              'Name',
              'Age',
              'Gender',
              'DateOfBirth',
              'Class',
              'Action',
            ]"
            :formFields="{}"
          >
            <!--  form input fields in this slot-->
            <template v-slot:input-fields="{ formdata }">
              <!-- <b> S.no:</b>
                      <b-form-input
                        id="input-1"
                        v-model="formdata.Sno"
                        type="number"
                        required
                        placeholder="Enter serialNumber"
                      >
                      </b-form-input
                      > -->
              <br />
              <b>Name:</b>
              <b-form-input
                id="input-2"
                v-model="formdata.Name"
                type="text"
                required
                placeholder="Enter name"
              >
              </b-form-input
              ><br />
              <b> Age:</b>
              <b-form-input
                id="input-3"
                v-model="formdata.Age"
                type="number"
                min="1"
                max="100"
                required
                placeholder="Enter Age"
              >
              </b-form-input
              ><br />
              <b> Gender:</b>
              <b-form-select
                id="input-4"
                v-model="formdata.Gender"
                :options="GenderOptions"
                value-field="Gender"
                text-field="id"
                required
              >
              </b-form-select
              ><br />
              <b>DateOfBirth:</b>
              <b-form-input
                id="input-5"
                v-model="formdata.DateOfBirth"
                type="date"
                required
                placeholder="Enter DateOfBirth"
              >
              </b-form-input
              ><br />
              <b>Class:</b>
              <b-form-select
                id="input-6"
                v-model="formdata.Class"
                :options="ClassOptions"
                value-field="Class"
                text-field="Class"
                required
              >
              </b-form-select
              ><br /><br />
            </template>
          </cassign>
        </center>
      </b-card>
    </nav>
  </div>
</template>


<script>
import cassign from "./cassign.vue";
export default {
  name: "Add_Student",
  components: { cassign },
  data() {
    return {
      GenderOptions: [
        { id: "Select Gender", Gender: "Select Gender" },
        { id: "M", Gender: "Male" },
        { id: "F", Gender: "Female" },
      ],
      ClassOptions: [
        { Class: "Select Class" },
        { Class: "B-tech" },
        { Class: "Degree" },
        { Class: "Diploma" },
        { Class: "Inter" },
        { Class: "SSC" },
      ],
    };
  },
};
</script>
<style>
nav {
  background-color: rgb(46, 46, 103);
}
#card {
  position: relative;
  left: 1570px;
}
</style>