<template>
  <div>
    <h1 class="text-4xl">
      Secret!
    </h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>
