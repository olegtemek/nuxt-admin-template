<template>
  <div class="form-group mb-6">
    <h3>{{ props.title }}</h3>
    <vue-date-picker :model-value="props.modelValue" auto-apply @update:model-value="modelEmit"
      :format="format"></vue-date-picker>
  </div>
</template>



<script setup lang="ts">
const props = defineProps({
  title: String,
  modelValue: String
})

const emits = defineEmits(['update:modelValue'])

// FORMAT LIKE => 2023-08-12T00:00:00.000Z
const format = (date: string) => {
  return new Date(Date.parse(date)).toISOString()
}
const modelEmit = (value: string) => {
  emits('update:modelValue', format(value))
}

</script>
