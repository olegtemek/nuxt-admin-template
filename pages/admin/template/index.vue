<template>
  <div>
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
      <div class="mr-6">
        <h1 class="text-4xl font-semibold mb-2">Title</h1>
      </div>
      <div class="flex flex-wrap items-start justify-end -mb-3">
        <router-link to="/admin/template/create"
          class="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            class="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          add button
        </router-link>
      </div>
    </div>

    <section class="w-full">
      <table class="table-fixed w-full">
        <thead>
          <tr class="text-left">
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-left border border-t-2 border-r-0 border-l-0 border-b-0 border-gray border-solid"
            v-for="item of templates" :key="item.id">
            <td>{{ item.id ?? '-' }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.position }}</td>
            <td class="flex-initial justify-start items-start">
              <router-link :to="`/admin/template/${item.id}`"
                class="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ">Edit</router-link>


              <AdminMyButtonDelete @destroy="destroy(item.id)" />
            </td>
          </tr>

        </tbody>
      </table>
    </section>
  </div>
</template>



<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
import { useTemplateStore } from '~/store/template';

await useTemplateStore().fetchAll()

const templates = computed(() => {
  return useTemplateStore().getTemplates
})
const destroy = (id: number) => {
  useTemplateStore().destroy(id)
}
</script>