<template>
  <teleport to="body">
    <div class="overlay" @click="$emit('close')">
      <div class="modal" @click.stop>
        <slot />
        <button @click="$emit('close')">Закрити</button>
      </div>
    </div>
  </teleport>
</template>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.modal {
  background: white;
  padding: 20px;
  margin: 100px auto;
  width: 300px;
}
</style>