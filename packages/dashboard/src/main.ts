import { createApp } from 'vue';
import App from './App.vue';

const mount = (el: Element) => {
  const app = createApp(App);
  app.mount(el);
};

const unmount = (el: Element, app: any) => {
  app.unmount();
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount, unmount };
