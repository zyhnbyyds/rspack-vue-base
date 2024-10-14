<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { apiSendVerifyCode } from '../apis/login.api'

const { t } = useI18n()

const email = ref('1873329653@qq.com')
const code = ref('')
const valid = ref(false)
const isSendVerifyCode = ref(false)
const snackbar = ref(false)

async function sendVerifyCode() {
  if (!email.value)
    return
  const { code } = await apiSendVerifyCode(email.value)
  if (code === 0) {
    isSendVerifyCode.value = true
    snackbar.value = true
  }
}
</script>

<template>
  <v-container class="flex items-center justify-center min-h-screen">
    <div class="absolute right-2 top-2">
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            variant="text"
            class="text-sm"
            v-bind="props"
          >
            {{ $i18n.locale }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in $i18n.availableLocales"
            :key="index"
            :value="index"
            @click="$i18n.locale = item"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-card class="pa-6 max-w-md w-full bg-slate-200">
      <v-card-title class="justify-center text-lg font-bold mb-5">
        {{ t('email_login_title') }}
      </v-card-title>
      <v-snackbar
        v-model="snackbar"
        position="fixed"
        vertical
      >
        <p>This is a longer paragraph explaining something</p>
      </v-snackbar>

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
            v-model="code"
            :label="t('verify_code')"
            prepend-inner-icon="mdi-key"
            type="text"
            maxlength="6"
            required
          />
        </v-form>
      </v-card-text>

      <v-card-actions class="flex justify-end">
        <v-btn v-if="isSendVerifyCode" :disabled="!valid" color="primary">
          {{ t('login') }}
        </v-btn>
        <v-btn v-else color="primary" @click="sendVerifyCode">
          {{ t('send_email_verify_code') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<style scoped>
/* TailwindCSS 样式辅助布局 */
</style>
