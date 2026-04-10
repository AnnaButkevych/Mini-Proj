import { ref, watch } from 'vue'

export function useLocalStorage(key, initial = null) {
  const stored = localStorage.getItem(key)
  const state = ref(stored ? JSON.parse(stored) : initial)

  watch(state, (val) => {
    localStorage.setItem(key, JSON.stringify(val))
  }, { deep: true })

  return state
}
