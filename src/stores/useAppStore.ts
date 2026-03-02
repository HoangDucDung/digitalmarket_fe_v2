import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarOpen = ref(false)
  const sidebarCollapsed = ref(false)
  const isMobile = ref(false)
  const searchQuery = ref('')

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  function toggleSidebarCollapse() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  function openSidebar() {
    sidebarOpen.value = true
  }

  function closeSidebar() {
    sidebarOpen.value = false
  }

  function setMobile(value: boolean) {
    isMobile.value = value
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query
  }

  return {
    sidebarOpen,
    sidebarCollapsed,
    isMobile,
    searchQuery,
    toggleSidebar,
    toggleSidebarCollapse,
    openSidebar,
    closeSidebar,
    setMobile,
    setSearchQuery,
  }
})
