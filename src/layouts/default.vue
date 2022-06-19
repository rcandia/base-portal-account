<script lang="ts" setup>
</script>

<template>
  <main
    position="relative"
    w="full"
    display="flex"
    flex="col"
    justify="center"
    bg="gray-200"
  >
    <router-view
      v-slot="{ Component }"
    >
      <div
        mx="auto"
        w="full"
        max-w="960px"
        px="4"
        py="10"
        min-h="100vh"
        flex="~ col"
        justify="center"
        items="center"
      >
        <component :is="Component" />
      </div>
    </router-view>
  </main>
</template>
