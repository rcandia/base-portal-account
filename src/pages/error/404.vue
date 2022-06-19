<route>
name: Error 404
</route>

<script setup lang="ts">
import { SingleSpaKey } from '~/types'

import { useAuth } from '~/hooks'

const { user } = useAuth()

const singleSpaProps = inject(SingleSpaKey)
</script>

<template>
  <section flex="~ col" w="full" h="screen" justify="center" align="center" mx="auto" max-w="630px" px="8">
    <h2 text="indigo-800 h2" font="bold">
      Whoops! Something went wrong...
    </h2>
    <h5 text="h5" mb-10>
      We cound't find the page you're looking for. Please, back to dashboard.
    </h5>
    <button
      w="full md:298px"
      mx="auto"
      mt-10
      bg="indigo-800"
      text="white"
      p-2
      rounded
      @click="singleSpaProps?.singleSpa.navigateToUrl(!user ? '/account/login' : '/v2/dashboard')"
    >
      {{ !user ? 'Go to login' : 'Go to dashboard' }}
    </button>
  </section>
</template>
