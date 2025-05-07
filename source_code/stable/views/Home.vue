<template>
  <div class="py-8">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <div class="mx-auto mb-4 w-32 h-32 rounded-full bg-base-200 flex items-center justify-center shadow-lg border-4 border-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-20 h-20 text-primary">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
            <circle cx="12" cy="9" r="3"></circle>
            <path d="M17.8 20.2a7.14 7.14 0 0 0-11.6 0"></path>
          </svg>
        </div>
        <h1 class="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <BadgeCheck class="text-primary" />
          Vincenzo Cazzano
        </h1>
        <p class="text-xl text-gray-600 flex items-center justify-center gap-2">
          <Code2 size="18" />
          Full-Stack Web Developer
        </p>
      </div>
      <div class="card bg-base-100 p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          <UserCircle class="text-primary" />
          About Me
        </h2>
        <p class="mb-4">
          Hello! I'm a passionate full-stack developer with expertise in modern web technologies.
          I love creating elegant, responsive, and user-friendly applications that solve real-world problems.
        </p>
        <p class="mb-4">
          With over 5 years of experience in the field, I've worked on a variety of projects ranging from
          small business websites to complex enterprise applications. My approach combines technical expertise
          with creative problem-solving to deliver high-quality solutions.
        </p>
        <div class="divider"></div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
            <Briefcase class="text-primary" />
            Recent Projects
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="card border border-base-300 p-4">
              <h4 class="font-bold flex items-center gap-2">
                <ShoppingCart size="16" />
                E-commerce Platform
              </h4>
              <p class="text-sm text-gray-600 flex items-center gap-1 mt-1">
                <Code size="14" />
                Vue.js, Node.js, MongoDB
              </p>
            </div>
            <div class="card border border-base-300 p-4">
              <h4 class="font-bold flex items-center gap-2">
                <CheckSquare size="16" />
                Task Management App
              </h4>
              <p class="text-sm text-gray-600 flex items-center gap-1 mt-1">
                <Code size="14" />
                React, Express, PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BadgeCheck, Code2, UserCircle, Briefcase, ShoppingCart, CheckSquare, Code } from 'lucide-vue-next'

export default {
  name: 'Home',
  components: {
    BadgeCheck,
    Code2,
    UserCircle,
    Briefcase,
    ShoppingCart,
    CheckSquare,
    Code
  }
}
</script>
