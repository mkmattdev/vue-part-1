import { ref } from 'vue'

// A composable is a function that encapsulates reusable reactive logic.
// By convention its name starts with "use".
export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = initialValue
  }

  return { count, increment, decrement, reset }
}
