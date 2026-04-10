import { ref } from 'vue'

const sampleEvents = [
  { id: '1', title: 'Vue Meetup', date: '2026-05-01', description: 'Meet fellow Vue devs' },
  { id: '2', title: 'Frontend Conf', date: '2026-06-12', description: 'Talks about web' },
  { id: '3', title: 'Hackathon', date: '2026-07-20', description: 'Build cool stuff' }
]

export function useEvents() {
  // initialize with sample data so direct navigation works
  const events = ref([...sampleEvents])
  const loading = ref(false)

  async function load() {
    loading.value = true
    try {
      const res = await fetch('/events.json')
      if (!res.ok) throw new Error('no file')
      const data = await res.json()
      if (Array.isArray(data) && data.length) {
        events.value = data
      }
    } catch (e) {
      // fallback to sampleEvents (already set)
      // console.warn('Could not load events.json, using sample data')
    } finally {
      loading.value = false
    }
  }

  function getById(id) {
    return events.value.find(e => String(e.id) === String(id))
  }

  return { events, loading, load, getById }
}
