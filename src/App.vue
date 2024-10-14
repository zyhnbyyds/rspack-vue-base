<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAppStore } from './store/app'

const { snackbarProps } = useAppStore()
const { t } = useI18n()
</script>

<template>
  <v-responsive>
    <v-snackbar
      v-model="snackbarProps.visible"
      :text="snackbarProps.text"
    >
      <template #actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbarProps.visible = false"
        >
          {{ t('close') }}
        </v-btn>
      </template>
    </v-snackbar>
    <v-app>
      <RouterView />
    </v-app>
  </v-responsive>
</template>
