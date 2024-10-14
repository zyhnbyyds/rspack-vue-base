<script lang='ts' setup>
import { doGetUserList } from '../apis/user.api'

const userList = ref([])

function getUserList() {
  doGetUserList().then((res) => {
    userList.value = res.data
  })
}

getUserList()
</script>

<template>
  <div>
    Home
    <div>
      {{ userList }}
    </div>
  </div>
</template>

<style scoped></style>
