import { ref } from "vue";

import { fetchUsers } from "../services/user.service";
import type { User } from "../types/user";

export function useUserList() {
  const users = ref<User[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadUsers = async () => {
    loading.value = true;
    error.value = null;

    try {
      users.value = await fetchUsers();
    } catch (err) {
      error.value = "Failed to load users";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    users,
    loading,
    error,
    loadUsers,
  };
}
