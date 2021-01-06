import { defineComponent } from 'vue';
import Counter from './components-tsx/Counter';
import Logo from '../assets/logo.png';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <h1>About</h1>
        <img src={Logo} />
        <Counter />
      </>
    );
  },
});
