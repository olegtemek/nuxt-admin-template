<template>
  <div class="form-group mb-6">
    <h3>{{ props.title }}</h3>
    <Multiselect mode="multiple" :value="props.modelValue" @input="modelEmit" :options="props.list" :label="props.label"
      :valueProp="props.value">
    </Multiselect>
  </div>
</template>



<script setup lang="ts">
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css';

const props = defineProps({
  title: [String, Array],
  modelValue: [String, Array],
  list: Array,
  label: String,
  value: String
})



const emits = defineEmits(['update:modelValue'])

const modelEmit = (e: string[]) => {
  emits('update:modelValue', e)
}

</script>
