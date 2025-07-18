<script setup lang="ts">
import { useUserList } from "../composables/useUserList";

const { users, loading, error, loadUsers } = useUserList();
</script>

<template>
  <div>
    <h1>User List</h1>
    <button @click="loadUsers">Load Users</button>

    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>

    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
