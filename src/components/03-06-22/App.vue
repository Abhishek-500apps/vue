<template>
  <div id="app">
    <textarea rows="10" v-model="text"></textarea>
    <br />
    <text-reader @load="text = $event"></text-reader>
    {{FileReader}}
  </div>
</template>

<script>
import FileReader from "./FileReader";
export default {
  name: "app",
  data: () => ({ text: "" }),
  components: {
    FileReader,
  },
};
</script>