<template>
  <div class="form-group mb-6">
    <h3>{{ props.title }}</h3>


    <select @change="handleSelect" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
      <option :value="0">-</option>
      <option :selected="props.modelValue == item[props.value]" :value="item[props.value]" v-for="item of props.list"
        :key="item">{{
          item[props.label] }}</option>
    </select>
  </div>
</template>



<script setup lang="ts">
const props = defineProps({
  title: String,
  list: Array,
  label: String,
  value: String,
  modelValue: [String, Number],
})
const emits = defineEmits(['update:modelValue'])
const handleSelect = (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>
