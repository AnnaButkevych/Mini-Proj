import { ref } from 'vue'

export function useRegistration() {
  const loading = ref(false)
  const error = ref(null)

  async function register(data) {
    loading.value = true
    error.value = null

    try {
      // імітація API
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.3 ? resolve() : reject()
        }, 1000)
      })

      return true
    } catch (e) {
      error.value = 'Помилка відправки'
      return false
    } finally {
      loading.value = false
    }
  }

  return { register, loading, error }
}