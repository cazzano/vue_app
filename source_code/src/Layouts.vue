<template>
  <div class="min-h-screen flex flex-col bg-base-100">
    <!-- Navigation Bar -->
    <div class="navbar bg-primary text-primary-content shadow-lg">
      <div class="container mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">My Portfolio</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <router-link to="/" class="flex items-center">
                <Home class="w-4 h-4" />
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/skills" class="flex items-center">
                <Code class="w-4 h-4" />
                Skills
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="flex items-center">
                <Mail class="w-4 h-4" />
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Main Content -->
    <main class="flex-grow container mx-auto p-4">
      <router-view />
    </main>
    
    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <p class="font-bold">My Portfolio &copy; 2025 - All rights reserved</p>
      </div> 
      <div>
        <div class="grid grid-flow-col gap-4">
          <a class="btn btn-ghost btn-circle">
            <Github class="w-5 h-5" />
          </a>
          <a class="btn btn-ghost btn-circle">
            <Linkedin class="w-5 h-5" />
          </a>
          <a class="btn btn-ghost btn-circle">
            <MessageCircle class="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Home, Code, Mail, Github, Linkedin, MessageCircle } from 'lucide-vue-next'

export default {
  name: 'Layout',
  components: {
    Home,
    Code,
    Mail,
    Github,
    Linkedin,
    MessageCircle
  }
}
</script>
