<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | Freedom Countdown` : `Freedom Countdown`
    }}</template>
  </metainfo>
  <n-config-provider :theme="theme.theme">
    <n-space
      vertical
      size="large"
    >
      <n-layout>
        <n-layout-header class="px-4 py-2">
          <navigation-bar />
        </n-layout-header>
        <n-layout-content>
          <main>
            <router-view />
          </main>
        </n-layout-content>
      </n-layout>
    </n-space>
    <n-global-style />
  </n-config-provider>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/navigation-bar.vue'
import { useThemeStore } from './stores/theme'
import {
  NLayout,
  NConfigProvider,
  NSpace,
  NLayoutHeader,
  NLayoutContent,
  NGlobalStyle
} from 'naive-ui'

const theme = useThemeStore()
</script>
