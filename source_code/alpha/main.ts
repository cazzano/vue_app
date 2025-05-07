import { createApp } from "vue";
import Layout from "./Layouts.vue";
import router from "./routes";
import "./assets/tailwind.css"; // Import Tailwind CSS

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCircleInfo,
  faComment,
  faUser,
  faReply,
  faSun,
  faMoon,
  faCake,
  faRobot,
  faHand
} from '@fortawesome/free-solid-svg-icons';

// Add social media icons
// Remove brands import as package is not installed

// Add icons to the library
library.add(
  faCircleInfo,
  faComment,
  faUser,
  faHand,
  faReply,
  faSun,
  faMoon,
  faCake,
  faRobot
);

// Create Vue app
const app = createApp(Layout);

// Register Font Awesome component
app.component('FontAwesomeIcon', FontAwesomeIcon);

// Use router
app.use(router);

// Mount app
app.mount("#app");
