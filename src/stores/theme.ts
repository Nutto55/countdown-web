import { darkTheme, lightTheme } from 'naive-ui'
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => {
    const isLigth = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    return {
      isLigth,
      theme: isLigth ? lightTheme : darkTheme
    }
  },
  actions: {
    updateTheme(BuiltInGlobalTheme: BuiltInGlobalTheme) {
      this.theme = BuiltInGlobalTheme
    }
  }
})
