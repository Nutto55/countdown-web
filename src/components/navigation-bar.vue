<template>
  <n-flex
    justify="space-between"
    align="center"
  >
    <router-link to="/">
      <n-image
        class="w-28 md:w-36"
        :src="logo"
        preview-disabled
      />
    </router-link>
    <n-switch
      v-model:value="isLight"
      size="large"
    >
      <template #checked-icon>
        <n-icon :component="Sun" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="Moon" />
      </template>
    </n-switch>
  </n-flex>
</template>
<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { NFlex, NSwitch, NIcon, NImage, lightTheme, darkTheme } from 'naive-ui'
import { computed, ref, watch } from 'vue'
import { Sun, Moon } from '@vicons/fa'
import LogoWhite from '@/assets/images/logo-white.png'
import LogoBlack from '@/assets/images/logo-black.png'

const theme = useThemeStore()

const isLight = ref(theme.isLigth)
const logo = computed(() => {
  return isLight.value ? LogoBlack : LogoWhite
})

watch(isLight, () => {
  if (isLight.value) {
    theme.updateTheme(lightTheme)
  } else {
    theme.updateTheme(darkTheme)
  }
})
</script>
