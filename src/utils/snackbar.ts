import { useAppStore } from '../store/app'

const appStore = useAppStore()

export function showMsg(message: string) {
  appStore.$state.snackbarProps.visible = true
  appStore.$state.snackbarProps.text = message
}

export function closeMsg() {
  appStore.$state.snackbarProps.visible = false
}
