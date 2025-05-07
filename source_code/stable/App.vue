<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const greetMsg = ref("");
const name = ref("");
async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>
<template>
  <main class="flex flex-col items-center justify-center min-h-screen p-4 bg-base-100">
    <h1 class="text-3xl font-bold mb-6">Welcome to Tauri + Vue</h1>
    <div class="flex justify-center items-center space-x-4 mb-6">
      <a href="https://vitejs.dev" target="_blank" class="transition-transform hover:scale-110">
        <img src="/vite.svg" class="h-16 hover:drop-shadow-[0_0_0.5rem_#747bff]" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank" class="transition-transform hover:scale-110">
        <img src="/tauri.svg" class="h-16 hover:drop-shadow-[0_0_0.5rem_#24c8db]" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="transition-transform hover:scale-110">
        <img src="./assets/vue.svg" class="h-16 hover:drop-shadow-[0_0_0.5rem_#249b73]" alt="Vue logo" />
      </a>
    </div>
    <div class="alert alert-info mb-6 max-w-md">
      <font-awesome-icon :icon="['fas', 'circle-info']" class="w-6 h-6" />
      <span>Click on the Tauri, Vite, and Vue logos to learn more.</span>
    </div>
    <div class="card w-96 bg-base-200 shadow-xl mb-6">
      <div class="card-body">
        <h2 class="card-title">
          <font-awesome-icon :icon="['fas', 'comment']" class="mr-2" />
          Say Hello!
        </h2>
        <form @submit.prevent="greet" class="flex flex-col gap-4">
          <div class="relative">
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <font-awesome-icon :icon="['fas', 'user']" />
            </span>
            <input
              type="text"
              id="greet-input"
              v-model="name"
              placeholder="Enter a name..."
              class="input input-bordered w-full pl-10"
            />
          </div>
          <div class="card-actions justify-end">
            <button
              type="submit"
              class="btn btn-primary"
            >
              <font-awesome-icon :icon="['fas', 'hand']" class="mr-2" />
              Greet
            </button>
          </div>
        </form>
        <div v-if="greetMsg" class="mt-4">
          <div class="badge badge-lg">
            <font-awesome-icon :icon="['fas', 'reply']" class="mr-1" />
            Response:
          </div>
          <p class="text-lg mt-2">{{ greetMsg }}</p>
        </div>
      </div>
    </div>
    <div class="flex gap-2 mt-4">
      <button class="btn btn-sm" onclick="document.documentElement.setAttribute('data-theme', 'light')">
        <font-awesome-icon :icon="['fas', 'sun']" class="mr-1" />
        Light
      </button>
      <button class="btn btn-sm" onclick="document.documentElement.setAttribute('data-theme', 'dark')">
        <font-awesome-icon :icon="['fas', 'moon']" class="mr-1" />
        Dark
      </button>
      <button class="btn btn-sm" onclick="document.documentElement.setAttribute('data-theme', 'cupcake')">
        <font-awesome-icon :icon="['fas', 'cake']" class="mr-1" />
        Cupcake
      </button>
      <button class="btn btn-sm" onclick="document.documentElement.setAttribute('data-theme', 'cyberpunk')">
        <font-awesome-icon :icon="['fas', 'robot']" class="mr-1" />
        Cyberpunk
      </button>
    </div>
  </main>
</template>
