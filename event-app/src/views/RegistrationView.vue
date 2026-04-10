<template>
  <div class="page">
    <div class="page-header">
      <button class="btn-back" @click="$router.back()">← Назад</button>
    </div>

    <div class="register-layout">

      <div class="register-info" v-if="event">
        <div class="badge" v-if="event.type">{{ event.type }}</div>
        <h2>{{ event.title }}</h2>
        <p class="date">{{ event.date }}</p>
        <p class="detail-desc">{{ event.description }}</p>
      </div>

      <div class="register-form-wrap">
        <h3 class="form-title">Реєстрація</h3>
        <p class="form-subtitle">Заповніть форму і ми надішлемо підтвердження на вашу пошту</p>
        <EventForm :eventId="event?.id" @success="onSuccess" />
      </div>

    </div>

    <Modal v-if="success" @close="success = false">
      <div class="modal-success">
        <div class="modal-icon">✓</div>
        <h3>Ви успішно зареєструвалися!</h3>
        <p>Очікуйте підтвердження на вашу пошту.</p>
        <button @click="$router.push('/')">На головну</button>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import EventForm from '../components/EventForm.vue'
import Modal from '../components/Modal.vue'
import { useEvents } from '../composables/useEvents'

const route = useRoute()
const { getById } = useEvents()
const event = computed(() => getById(route.params.id))

const success = ref(false)
function onSuccess() {
  success.value = true
}
</script>