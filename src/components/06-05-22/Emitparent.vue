<template>
  <div>
    <EmitChild @login="fun()"></EmitChild>
  </div>
</template> 
<script>
import EmitChild from './Emitchild.vue'
export default {
  name: "EmitParent",
  components: { 
      EmitChild 
  },
  methods:{
    fun()
    {
      document.write("sample check emit");
    },
  },
};
</script>
