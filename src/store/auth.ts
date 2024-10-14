import type { RegisterRes } from '../apis/interface'
import { defineStore } from 'pinia'
import { removeToken, setToken } from '../utils/request'

export const useAuthStore = defineStore('auth-store', () => {
  const registerUserInfo = ref<RegisterRes | null>(null)
  const token = computed(() => registerUserInfo.value?.token)

  watch(
    () => registerUserInfo.value?.token,
    (newToken) => {
      if (newToken) {
        setToken(newToken)
      }
      else {
        removeToken()
      }
    },
  )

  return {
    registerUserInfo,
    token,
  }
})
