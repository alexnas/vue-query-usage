import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isModalActive = ref<boolean>(false)

  return {
    isModalActive
  }
})
