import { ref, computed } from 'vue'
import { useLocalStorage } from './useLocalStorage'

export function useRegistration() {
  const loading = ref(false)
  const error = ref(null)

  // registrations: { [eventId]: [ { name, email } ] }
  const registrations = useLocalStorage('registrations', {})

  function getRegistrations(eventId) {
    return registrations.value && registrations.value[eventId]
      ? registrations.value[eventId]
      : []
  }

  async function register(data) {
    loading.value = true
    error.value = null

    const id = data.eventId || 'global'
    // optimistic update
    registrations.value[id] = registrations.value[id] || []
    const newEntry = { name: data.name, email: data.email }
    registrations.value[id].push(newEntry)

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.25 ? resolve() : reject(new Error('network'))
        }, 700)
      })

      return true
    } catch (e) {
      // rollback optimistic change
      const list = registrations.value[id] || []
      const idx = list.findIndex(
        (r) => r.email === newEntry.email && r.name === newEntry.name
      )
      if (idx !== -1) list.splice(idx, 1)

      error.value = 'Помилка відправки'
      return false
    } finally {
      loading.value = false
    }
  }

  return { register, loading, error, getRegistrations, registrations }
}