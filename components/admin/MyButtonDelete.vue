<template>
  <button @click="destroy()"
    class="inline-flex px-5 py-3 text-white bg-red-600 hover:bg-purple-700 focus:bg-red-700 rounded-md "
    type="submit">Delete</button>
</template>



<script setup lang="ts">
const emits = defineEmits(['destroy'])

const destroy = () => {
  let res = confirm('Are u sure, u want delete?')
  if (!res) {
    return
  }

  emits('destroy', true)
}
</script>
