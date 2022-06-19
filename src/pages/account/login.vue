<route>
name: Login
</route>

<script setup lang="ts">
import { Field, Form, SubmissionHandler } from 'vee-validate'
import { loginSchema } from '~/helpers'
const submit: SubmissionHandler = data => alert(JSON.stringify(data))
</script>

<template>
  <h1 text="center indigo-800 xl" mb-2 font-bold>
    Login
  </h1>
  <Form v-slot="{ errors }" flex="~ col" space-y-4 bg-white rounded-lg p-4 :validation-schema="loginSchema" @submit="submit">
    <div flex="~ col">
      <label>Email</label>
      <Field name="email" placeholder="Email" border="~ rounded gray" p-2 />
      <span text="sm red-500">{{ errors.email }}</span>
    </div>
    <div flex="~ col">
      <label>Password</label>
      <Field name="password" type="password" placeholder="Password" border="~ rounded gray" p-2 />
      <span text="sm red-500">{{ errors.password }}</span>
    </div>
    <button type="submit" bg="indigo-800" text="white" p-2 rounded>
      Submit
    </button>
  </Form>
</template>
