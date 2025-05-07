<template>
  <div class="py-8 bg-base-200 min-h-screen">
    <div class="max-w-2xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8 text-center flex items-center justify-center text-base-content">
        <Mail class="mr-2 text-primary" />
        Contact Me
      </h1>

      <div class="card bg-base-100 shadow-xl mb-8">
        <div class="card-body">
          <div class="flex flex-col md:flex-row md:gap-6">
            <!-- Get In Touch Section -->
            <div class="md:w-1/2 mb-6 md:mb-0">
              <h2 class="card-title mb-4 flex items-center text-base-content">
                <MessageSquare class="mr-2 text-primary" size="20" />
                Get In Touch
              </h2>
              <p class="mb-4 text-base-content/70">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>

              <div class="space-y-4 mt-6">
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center mr-3">
                    <User size="18" class="text-primary" />
                  </div>
                  <span class="text-base-content">Vincenzo Cazzano</span>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center mr-3">
                    <Mail size="18" class="text-primary" />
                  </div>
                  <span class="text-base-content">cazzano@protonmail.com</span>
                </div>
                <div class="flex items-center">
                  <div class="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center mr-3">
                    <Info size="18" class="text-primary" />
                  </div>
                  <span class="text-base-content">Available for freelance work</span>
                </div>
              </div>
            </div>

            <!-- Message Form Section -->
            <div class="divider divider-horizontal hidden md:flex"></div>
            <div class="md:w-1/2">
              <h2 class="card-title mb-4 flex items-center text-base-content">
                <Send class="mr-2 text-primary" size="20" />
                Message Me
              </h2>
              <form @submit.prevent="submitForm" class="space-y-4">
                <div class="form-control w-full">
                  <label for="name" class="label">
                    <span class="label-text flex items-center">
                      <User class="mr-1 text-primary" size="14" />
                      Name
                    </span>
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="name"
                      v-model="formData.name"
                      placeholder="Your name"
                      class="input input-bordered w-full pl-10"
                      required
                    />
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User class="text-base-content/50" size="16" />
                    </div>
                  </div>
                </div>

                <div class="form-control w-full">
                  <label for="email" class="label">
                    <span class="label-text flex items-center">
                      <Mail class="mr-1 text-primary" size="14" />
                      Email
                    </span>
                  </label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      placeholder="Your email"
                      class="input input-bordered w-full pl-10"
                      required
                    />
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail class="text-base-content/50" size="16" />
                    </div>
                  </div>
                </div>

                <div class="form-control w-full">
                  <label for="message" class="label">
                    <span class="label-text flex items-center">
                      <MessageSquare class="mr-1 text-primary" size="14" />
                      Message
                    </span>
                  </label>
                  <div class="relative">
                    <textarea
                      id="message"
                      v-model="formData.message"
                      placeholder="Your message"
                      rows="4"
                      class="textarea textarea-bordered w-full pl-10 min-h-24"
                      required
                    ></textarea>
                    <div class="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                      <MessageSquare class="text-base-content/50" size="16" />
                    </div>
                  </div>
                </div>

                <div class="form-control mt-6">
                  <button
                    type="submit"
                    class="btn btn-primary w-full"
                  >
                    <Send class="mr-2" size="16" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Social Links Section -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title flex items-center justify-center text-base-content mb-6">
            <Globe class="mr-2 text-primary" size="20" />
            Find Me On Internet
          </h2>
          <div class="flex justify-center gap-6">
            <a href="#" class="btn btn-circle btn-lg btn-ghost hover:btn-primary hover:text-primary-content group transition-all duration-300">
              <Github size="24" />
              <span class="sr-only">GitHub</span>
            </a>
            <a href="#" class="btn btn-circle btn-lg btn-ghost hover:btn-primary hover:text-primary-content group transition-all duration-300">
              <Linkedin size="24" />
              <span class="sr-only">LinkedIn</span>
            </a>
            <a href="#" class="btn btn-circle btn-lg btn-ghost hover:btn-primary hover:text-primary-content group transition-all duration-300">
              <Twitter size="24" />
              <span class="sr-only">Twitter</span>
            </a>
          </div>
          <div class="flex justify-center gap-6 mt-2">
            <span class="text-sm font-medium">GitHub</span>
            <span class="text-sm font-medium">LinkedIn</span>
            <span class="text-sm font-medium">Twitter</span>
          </div>
        </div>
      </div>

      <!-- Toast for form submission confirmation -->
      <div id="toast-success" class="toast toast-end" v-if="showToast">
        <div class="alert alert-success">
          <CheckCircle size="16" />
          <span>Message sent successfully!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  User, 
  Mail, 
  MessageSquare, 
  Info, 
  Send, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle
} from 'lucide-vue-next';

export default {
  name: 'Contact',
  components: {
    User,
    Mail,
    MessageSquare,
    Info,
    Send,
    Globe,
    Github,
    Linkedin,
    Twitter,
    CheckCircle
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      showToast: false
    }
  },
  methods: {
    submitForm() {
      // Here you would typically send the form data to a backend service
      // For demo purposes, just show the toast
      this.showToast = true;
      
      // Reset the form
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      
      // Hide the toast after 3 seconds
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
}
</script>
