import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
  const snackbarProps = reactive({
    color: 'primary',
    text: '',
    timeout: 2000,
    visible: false,
  })

  return {
    snackbarProps,
  }
})
