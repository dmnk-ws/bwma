<script setup>
import { ref } from 'vue'
import UserItem from './UserItem.vue'
import IconUser from "@/components/icons/IconUser.vue"

const users = ref([]);
const loading = ref(false);
const fetchUsers = () => {
  loading.value = true;

  fetch('http://127.0.0.1:8081/users')
    .then(response => response.json())
    .then(data => {
      users.value = data;
      loading.value = false;
    })
    .catch(err => console.error("Failed to fetch users:", err));
}
</script>

<template>
  <div class="container">
    <button class="load-button" @click="fetchUsers" :disabled="loading">Load Users</button>
  </div>

  <div v-if="loading" class="container">
    <div  class="spinner"></div>
  </div>
  <template v-else>
    <div v-if="users.length > 0" class="header">
      <i><IconUser /></i>
      <h1>Users</h1>
    </div>
    <UserItem v-for="user in users" :key="user.id">
      <template #heading>{{ user.firstname }} {{ user.lastname }}</template>
      <p>Username: {{ user.username }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone: {{ user.phone }}</p>
      <div v-if="user.address">
        <p>Address: {{ user.address?.street }}, {{ user.address?.zip }} {{ user.address?.city }}, {{ user.address?.state }}, {{ user.address?.country }}</p>
      </div>
    </UserItem>
  </template>
</template>

<style scoped>
.container {
  display: flex;
  place-content: center;
}

.load-button {
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 4rem;
}

.load-button:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

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

.spinner {
  border: 1px solid white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: gray;
  animation: spin 500ms ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>