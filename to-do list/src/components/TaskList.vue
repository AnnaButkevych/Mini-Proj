<template>
  <ul>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="$emit('toggle', task.id)"
      @remove="$emit('remove', task.id)"
    />
  </ul>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: Array
})
</script>