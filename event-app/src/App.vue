<template>
  <div class="container">
    <header>
      <h1>Події</h1>
      <nav>
        <router-link to="/">Список подій</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>
