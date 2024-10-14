const snackbar = ref(false)

export function showMsg() {
  snackbar.value = true
}

export function closeMsg() {
  snackbar.value = false
}
