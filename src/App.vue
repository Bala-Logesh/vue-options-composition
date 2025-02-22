<template>
  <div class="container">
    <nav class="navbar bg-body-tertiary p-5 mb-5">
      <form class="container-fluid justify-content-center gap-5">
        <router-link to="/" class="btn btn-outline-primary me-2">Options API</router-link>
        <router-link to="/composition" class="btn btn-outline-success me-2">Composition API</router-link>
      </form>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>