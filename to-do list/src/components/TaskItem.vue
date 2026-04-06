<template>
  <li :class="{ done: task.completed }">
    <span @click="$emit('toggle')">
      {{ task.text }}
    </span>
    <button @click="$emit('remove')">Видалити</button>
  </li>
</template>

<script setup>
defineProps({
  task: Object
})
</script>

<style>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>