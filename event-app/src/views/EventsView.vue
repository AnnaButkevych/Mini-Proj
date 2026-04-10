<template>
  <div>
    <Loader v-if="loading" />

    <div v-else>
      <div class="events-grid">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useEvents } from '../composables/useEvents'
import EventCard from '../components/EventCard.vue'
import Loader from '../components/Loader.vue'

const { events, loading, load } = useEvents()

onMounted(load)
</script>