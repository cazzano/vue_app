// src/plugins/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import type { App } from 'vue';

// Add icons to the library
library.add(faUserSecret, faHome, faSearch);

export default {
  install: (app: App): void => {
    app.component('FontAwesomeIcon', FontAwesomeIcon);
  }
};
