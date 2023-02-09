<template>
  <div>
    <header class="p-4">
      is logged in? {{ data || false }}
      <button v-if="data" class="rounded-xl shadow-xl p-2 m-2" @click="signOut()">
        sign out
      </button>

      <ul>
        <li>
          <NuxtLink to="/explicit" class="text-blue-700">
            /explicit
          </NuxtLink>
        </li>
      </ul>
    </header>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { data, signOut } = useSession()
</script>
