<template>
  <article class="card">
    <div class="card-media">
      <img :src="event.image || '/assets/event-1.svg'" :alt="event.title" />
    </div>
    <div class="card-body">
      <div class="badge" v-if="event.type">{{ event.type }}</div>
      <h3>{{ event.title }}</h3>
      <p class="date">{{ event.date }}</p>
      <p class="desc">{{ event.description }}</p>

      <div class="actions">
        <router-link class="btn" :to="`/events/${event.id}`">Деталі</router-link>
        <router-link class="btn ghost" :to="`/register/${event.id}`">Реєстрація</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ event: Object })
</script>

<style scoped>
.actions { display:flex; gap: 10px }
</style>
