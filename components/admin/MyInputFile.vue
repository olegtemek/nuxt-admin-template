<template>
  <div class="form-group mb-6">
    <h3>{{ props.title }}</h3>
    <input type="file" class="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" :placeholder="props.title"
      @change="modelEmit" />
    <p v-if="typeof props.modelValue == 'string' || filePreview">{{ typeof props.modelValue == 'string' ? props.modelValue
      : filePreview }}
    </p>

  </div>
</template>



<script setup lang="ts">
const props = defineProps({
  title: String,
  modelValue: [String, Object]
})

const filePreview: Ref<any> = ref(null)

const emits = defineEmits(['update:modelValue'])

const modelEmit = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target && target.files) {


    let fileReader = new FileReader();

    fileReader.onload = function (e: any) {

      if (target.files) {
        filePreview.value = URL.createObjectURL(target.files[0])
      }

    };

    fileReader.readAsDataURL(target.files[0])

    emits('update:modelValue', target.files[0])
  }
}

</script>
