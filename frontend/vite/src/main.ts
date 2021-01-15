import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router';
import store from './store';

// TailwindCSS
import './assets/css/style.css'

// FontAwesome Free - Non vue js plugin and use as <i class=”fab fa-coffee”></i>
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

// Vue FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)
// dom.watch()  // for use as e.g <i class=”fas fa-coffee”></i>

// Layout Components
import LayoutDashboard from './views/layouts/LayoutDashboard.vue';
import LayoutEmpty from './views/layouts/LayoutEmpty.vue';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('default-layout', LayoutDashboard);
app.component('empty-layout', LayoutEmpty);
app.use(router);
app.use(store);
app.mount('#app');