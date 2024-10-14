import { useAppStore } from '../store/app'

export function showMsg(message: string) {
  const appStore = useAppStore()
  appStore.$state.snackbarProps.visible = true
  appStore.$state.snackbarProps.text = message
}

export function closeMsg() {
  const appStore = useAppStore()
  appStore.$state.snackbarProps.visible = false
}
