<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input v-model="name" placeholder="Ім'я" />
      <p v-if="errors.name">{{ errors.name }}</p>
    </div>

    <div>
      <input v-model="email" placeholder="Email" />
      <p v-if="errors.email">{{ errors.email }}</p>
    </div>

    <button :disabled="loading">
      {{ loading ? 'Відправка...' : 'Зареєструватися' }}
    </button>

    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRegistration } from '../composables/useRegistration'

const name = ref('')
const email = ref('')
const errors = ref({})

const emit = defineEmits(['success'])

const { register, loading, error } = useRegistration()

function validate() {
  errors.value = {}

  if (!name.value) {
    errors.value.name = "Введіть ім'я"
  }

  if (!email.value) {
    errors.value.email = "Введіть email"
  } else if (!email.value.includes('@')) {
    errors.value.email = "Некоректний email"
  }

  return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
  if (!validate()) return

  // optimistic UI
  emit('success')

  const result = await register({
    name: name.value,
    email: email.value
  })

  if (!result) {
    // rollback
    alert('Помилка! Спробуйте ще раз')
  } else {
    name.value = ''
    email.value = ''
  }
}
</script>

<style>
.error {
  color: red;
}
</style>