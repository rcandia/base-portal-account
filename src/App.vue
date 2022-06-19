<script setup lang="ts">
import { useAuth } from '~/hooks'

const { token } = useAuth()

const route = useRoute()
const isFirstMount = ref(true)

watch(route, (val) => {
  if (!isFirstMount.value)
    return
  if (val.name !== 'Error 404')
    token.value = null

  isFirstMount.value = false
})
</script>

<template>
  <router-view />
</template>
