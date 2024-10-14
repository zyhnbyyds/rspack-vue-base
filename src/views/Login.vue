<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { apiRegisterUseEmail, apiSendVerifyCode } from '../apis/auth.api'
import { router } from '../router'
import { useAuthStore } from '../store/auth'
import { showMsg } from '../utils/snackbar'

const { t } = useI18n()
const { $state } = useAuthStore()

const email = ref('1873329653@qq.com')
const verifyCode = ref('')
const valid = ref(false)
const isSendVerifyCode = ref(true)
const [loading, load] = useToggle(false)

async function sendVerifyCode() {
  if (!email.value)
    return
  load(true)
  const { code } = await apiSendVerifyCode(email.value)
  load(false)
  if (code === 0) {
    isSendVerifyCode.value = true
    showMsg(t('send_email_success'))
  }
}

async function handleClickLogin() {
  if (!isSendVerifyCode.value) {
    return
  }
  const { code, data } = await apiRegisterUseEmail(email.value, verifyCode.value)
  if (code === 0) {
    showMsg(t('register_success'))
    router.push('/home')
    $state.registerUserInfo = data
  }
}
</script>

<template>
  <v-container class="flex items-center justify-center h-screen overflow-hidden">
    <div class="fixed right-4 top-4">
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            variant="text"
            v-bind="props"
          >
            {{ $i18n.locale }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in $i18n.availableLocales"
            :key="index"
            :active="$i18n.locale === item"
            height="36"
            :value="index"
            @click="$i18n.locale = item"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-card class="p-4 max-w-md w-full" target="parent">
      <v-card-title class="justify-center text-lg mb-5 font-bold">
        {{ t('email_login_title') }}
      </v-card-title>

      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            :label="t('email_address')"
            prepend-inner-icon="mdi-email"
            type="email"
            required
          />
          <v-text-field
            v-if="isSendVerifyCode"
            v-model="verifyCode"
            :label="t('verify_code')"
            prepend-inner-icon="mdi-key"
            type="text"
            maxlength="6"
            required
          />
        </v-form>

        <div class="flex justify-end">
          <v-btn
            v-if="isSendVerifyCode"
            size="small"
            variant="plain"
            @click="sendVerifyCode"
          >
            {{ t('re_send_email_verify_code') }}
          </v-btn>
        </div>
      </v-card-text>

      <v-card-actions class="flex justify-end">
        <v-btn v-if="isSendVerifyCode" variant="outlined" :disabled="!valid" color="primary" @click="handleClickLogin">
          {{ t('login') }}
        </v-btn>
        <v-btn v-else color="primary" variant="outlined" :loading="loading" @click="sendVerifyCode">
          {{ t('send_email_verify_code') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
</style>
