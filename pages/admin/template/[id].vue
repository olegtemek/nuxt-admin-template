<template>
  <div>

    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Edit</h1>
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
      <MyButton title="Изменить" @click="save" />

    </section>

  </div>
</template>



<script setup lang="ts">
import { useTemplateStore } from '~/store/template';
definePageMeta({
  layout: 'admin'
})
const route = useRoute();

const list = [
  {
    id: 1,
    name: 'test'
  },
  {
    id: 2, name: 'test 2'
  }
]

await useTemplateStore().fetchOne(route.params.id)

const template = computed(() => {
  return useTemplateStore().getTemplate
})



const save = () => {
  const validate = useValidate(template.value).validate(['title', 'description', 'managerId'])
  if (!validate) {
    return
  }

  useTemplateStore().update(template.value, template.value.id)
}


</script>