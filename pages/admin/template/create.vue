<template>
  <div>

    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Create</h1>
      </div>
    </div>



    <section class="w-full">

      <AdminMyInput title="Title" v-model="template.name" />


      <AdminMyTextArea title="Position" v-model="template.position" />

      <AdminMySelect title="Pick Item" v-model="template.select" :list="list" label="name" value="id" />
      <AdminMyInputDate title="Date" v-model="template.date" />
      <AdminMyInputImage title="image" v-model="template.image" />
      <AdminMyInputFile title="file" v-model="template.file" />
      <AdminMyMultiSelect title="multi select" v-model="template.list" :list="list" label="name" value="id" />
      <AdminMyQuill title="Quill" v-model="template.description" />
      {{ template }}

      <AdminMyButton title="Save" @click="save" />

    </section>

  </div>
</template>



<script setup lang="ts">
import { ITemplate } from '~/types/ITemplate';
import { useTemplateStore } from '~/store/template';
definePageMeta({
  layout: 'admin'
})



const list = [
  {
    id: 1,
    name: 'test',
  },
  {
    id: 2,
    name: 'test 2',
  },
]

const template: Ref<ITemplate> = ref({
  name: '',
  position: '',
  description: '',
  file: '',
  list: [],
  image: '',
  select: '',
  date: ''
})

const save = () => {
  const validate = useValidate(template.value).validate(['name', 'description', 'managerId'])
  if (!validate) {
    return
  }

  useTemplateStore().create(template.value)
}
</script>