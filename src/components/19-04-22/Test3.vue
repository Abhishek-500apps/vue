<template>
  <div>
    <h1>This is V-table-1Q</h1>

    <table align="center">
      <thead>
        <tr>
          <th>Name</th>

          <th>Index</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="table in table" :key="table.id">
          <td>{{ table.name }}</td>

          <td>{{ table.Index }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:"TablE",
  data() {
    return {
      table: [
        { name: "agile CRM", Index: "0" },

        { name: "mantra technologies", Index: "1" },

        { name: "500apps python", Index: "2" },

        { name: "500apps infinity", Index: "3" },
      ],
    };
  },
};
</script>
<style scoped>

</style>



