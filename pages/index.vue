<template>
  <div>
    <h1 class="text-4xl">
      Welcome to your sidebase app!
    </h1>
    <p>
      Checkout the page protected by `nuxt-auth` here:
    </p>
    <pre>signed in? {{ data }}</pre>
    <button v-if="data" class="rounded-xl shadow-xl p-2 m-2" @click="signOut()">
      sign out
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })

const { data, signOut } = useSession()
</script>
