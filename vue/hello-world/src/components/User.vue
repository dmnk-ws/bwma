<script setup>
import { ref, onMounted } from 'vue'
import UserItem from './UserItem.vue'
import IconUser from "@/components/icons/IconUser.vue"

const users = ref([])

onMounted(() => {
  fetch('http://127.0.0.1:8081/users')
      .then(response => response.json())
      .then(data => users.value = data)
      .catch(err => console.error("Failed to fetch users:", err))
})
</script>

<template>
  <div class="header">
    <i><IconUser /></i>
    <h1>Users</h1>
  </div>
  <UserItem v-for="user in users" :key="user.id">
    <template #heading>{{ user.firstname }} {{ user.lastname }}</template>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <div v-if="user.address">
      <p>Address:</p>
      <p>{{ user.address?.street }}</p>
      <p>{{ user.address?.city }}, {{ user.address?.state }} {{ user.address?.zip }}</p>
      <p>{{ user.address?.country }}</p>
    </div>
  </UserItem>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h1 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>