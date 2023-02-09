<template>
  <div>
    <h1 class="text-4xl">
      Welcome to your sidebase app! (pages/index.vue)
    </h1>
    <p>
      Checkout the page protected by `nuxt-auth` here:
    </p>
    <NuxtLink to="/xxx">
      /xxx
    </NuxtLink>
    <p>
      Checkout a nested unprotected route here:
    </p>
    <NuxtLink to="/xxx">
      /xxx/nest
    </NuxtLink>

    <br>
    <hr>
    <br>

    <pre>signed in? {{ data }}</pre>
    <button v-if="data" class="rounded-xl shadow-xl p-2 m-2" @click="signOut()">
      sign out
    </button>
  </div>
</template>

<script setup lang="ts">
const { data, signOut } = useSession()
</script>
