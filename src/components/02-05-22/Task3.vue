<template>
  <div>
    <h1>This is question-3</h1>

    <button @click="remove()">Click!</button>
  </div>
</template>

<script>
export default {
  name: "AbhI",
  data(){
    return {
      array: [1, 1, 2, 2, 2, 3, 4, 3, 2],
      
    }
  },
  methods: {
    remove() {
      document.write((this.array = [...new Set(this.array)]));
    }
  }
};
</script>