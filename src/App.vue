<template>
  <div class="container">
    <nav class="navbar bg-body-tertiary p-5 mb-5">
      <form class="container-fluid justify-content-center gap-5">
        <router-link to="/" class="btn me-2" :class="routeName == '/' ? 'btn-primary' : 'btn-outline-primary'">Options
          API</router-link>
        <router-link to="/composition" class="btn me-2"
          :class="routeName == '/composition' ? 'btn-success' : 'btn-outline-success'">Composition API</router-link>
      </form>
    </nav>
    <router-view />
  </div>
</template>

<script>
// Options API
// export default {
//   computed: {
//     routeName() {
//       return this.$route.path
//     }
//   }
// }

import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    let routeName = computed(() => route.path)

    return { routeName }
  }
}
</script>