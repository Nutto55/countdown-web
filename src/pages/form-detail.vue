<template>
  <div class="flex justify-center mt-8">
    <div class="w-3/4 md:w-1/2">
      <form-section />
    </div>
  </div>
</template>
<script lang="ts" setup>
import FormSection from '@/components/form-section.vue'
import { useMeta } from 'vue-meta'
import Logo from '@/assets/images/logo.png'

useMeta({
  title: 'Form config',
  og: {
    image: window.location.origin + Logo
  }
})
</script>
