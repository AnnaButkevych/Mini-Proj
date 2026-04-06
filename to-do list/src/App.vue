<template>
  <div class="container">
    <h1>Список задач TO-DO List</h1>

    <div class="form">
      <input
        v-model="newTask"
        placeholder="Введіть задачу"
        @keyup.enter="addTask"
      />
      <button @click="addTask">Додати</button>
    </div>

    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
        Всі
      </button>
      <button
        :class="{ active: filter === 'active' }"
        @click="filter = 'active'"
      >
        Активні
      </button>
      <button :class="{ active: filter === 'done' }" @click="filter = 'done'">
        Виконані
      </button>
    </div>

    <TaskList
      :tasks="filteredTasks"
      @toggle="toggleTask"
      @remove="removeTask"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import TaskList from "./components/TaskList.vue";

const newTask = ref("");
const filter = ref("all");

const tasks = ref([]);

function addTask() {
  if (newTask.value.trim() === "") return;

  tasks.value.push({
    id: Date.now(),
    text: newTask.value,
    completed: false,
  });

  newTask.value = "";
}

function removeTask(id) {
  tasks.value = tasks.value.filter((t) => t.id !== id);
}

function toggleTask(id) {
  const task = tasks.value.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
}

const filteredTasks = computed(() => {
  if (filter.value === "active") {
    return tasks.value.filter((t) => !t.completed);
  }
  if (filter.value === "done") {
    return tasks.value.filter((t) => t.completed);
  }
  return tasks.value;
});
</script>

<style>
.container {
  max-width: 500px;
  margin: auto;
  font-family: Arial;
}

.form {
  margin-bottom: 15px;
}

input {
  padding: 6px;
  margin-right: 5px;
}

button {
  margin: 2px;
}

.filters {
  margin-bottom: 10px;
}
</style>
