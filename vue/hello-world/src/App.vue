<script setup>
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User.vue'

const message = ref('')

onMounted(() => {
  fetch('http://localhost:8081/api/message')
    .then(response => response.json())
    .then(data => message.value = data.message)
    .catch(err => console.error("Failed to fetch message:", err))
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <HelloWorld :msg="message" />
    </div>
  </header>

  <main>
    <User />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin: 4rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
