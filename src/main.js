import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser, faUsers, faBook, faSignInAlt, faPencil, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faUser, faUsers, faBook, faSignInAlt, faPencil, faTrash, faEye);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');