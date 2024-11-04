<template>
  <div class="flex flex-col min-h-dvh justify-center items-center -mt-24 md:-mt-28">
    <n-result
      status="404"
      title="404 Not Found"
      description=""
    >
      <template #footer>
        <n-button>
          <router-link to="/"> Home Page </router-link>
        </n-button>
      </template>
    </n-result>
  </div>
</template>
<script lang="ts" setup>
import { NResult, NButton } from 'naive-ui'
</script>
