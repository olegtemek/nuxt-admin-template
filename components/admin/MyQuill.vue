<template>
  <div class="form-group mb-6">
    <h3>{{ props.title }}</h3>
    <quill-editor theme="snow" toolbar="full" contentType="html" v-model:content="quill" style="min-height: 500px;" />
  </div>
</template>


<script setup lang="ts">
import '@vueup/vue-quill/dist/vue-quill.snow.css';
const { QuillEditor } = await import('@vueup/vue-quill');
const { vueApp } = useNuxtApp();
if (!vueApp._context.components.QuillEditor) vueApp.component('QuillEditor', QuillEditor);


const props = defineProps({
  modelValue: String,
  title: String
})
const quill: Ref<string> = ref(props.modelValue ?? '')
const emits = defineEmits(['update:modelValue'])
watch(() => quill.value, (first, second) => {
  emits('update:modelValue', quill.value)
})





</script>
