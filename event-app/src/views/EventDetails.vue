<template>
  <div class="page">
    <div class="page-header">
      <button class="btn-back" @click="$router.back()">← Назад</button>
    </div>

    <div v-if="!event" class="empty-state">Подія не знайдена</div>

    <div v-else class="detail-layout">

      <div class="detail-hero">
        <img class="detail-image" :src="event.image || '/assets/event-1.svg'" :alt="event.title" />
        <div class="detail-hero-body">
          <div class="badge" v-if="event.type">{{ event.type }}</div>
          <h2>{{ event.title }}</h2>
          <p class="date">{{ event.date }}</p>
          <p class="detail-desc">{{ event.description }}</p>
          <router-link class="btn ghost" :to="`/register/${event.id}`">Зареєструватися →</router-link>
        </div>
      </div>

      <div class="registrations-section" v-if="registrations.length">
        <h3 class="section-label">Зареєстровані учасники</h3>
        <ul class="registrations-list">
          <li v-for="u in registrations" :key="u.email" class="registration-item">
            <div class="reg-avatar">{{ u.name.charAt(0).toUpperCase() }}</div>
            <div class="reg-info">
              <span class="reg-name">{{ u.name }}</span>
              <span class="reg-email">{{ u.email }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="registrations-section" v-else>
        <h3 class="section-label">Зареєстровані учасники</h3>
        <p class="empty-registrations">Поки що ніхто не зареєструвався. Будь першим!</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEvents } from '../composables/useEvents'
import { useRegistration } from '../composables/useRegistration'

const route = useRoute()
const { getById, load } = useEvents()
const { getRegistrations } = useRegistration()

const event = computed(() => getById(route.params.id))
const registrations = computed(() => getRegistrations(route.params.id) || [])

onMounted(() => {
  if (!getById(route.params.id)) load()
})
</script>