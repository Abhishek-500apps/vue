<template>
  <div>
    <label for="tags-pills">Enter tags</label>
    <b-form-tags input-id="tags-pills" v-model="value" tag-variant="primary"
      tag-pills size="lg" separator=" " placeholder="Enter new tags separated by space">
      </b-form-tags>
    <p class="mt-2">Value: {{ value }}</p>
  </div>
</template>
<script>
  export default {
      name:"AbhI",
    data() {
      return {
        value: [],
      }
    }
  }
</script>
