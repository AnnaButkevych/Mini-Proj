<template>
  <div class="container">
    <h1>Реєстрація на подію</h1>

    <EventForm @success="showSuccess" />

    <Modal v-if="success" @close="success = false">
      Ви успішно зареєструвалися!
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EventForm from './components/EventForm.vue'
import Modal from './components/Modal.vue'

const success = ref(false)

function showSuccess() {
  success.value = true
}
</script>

<style>
.container {
  max-width: 500px;
  margin: auto;
  font-family: Arial;
}
</style>