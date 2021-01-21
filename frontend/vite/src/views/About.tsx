import { defineComponent } from 'vue';
// import Logo from '../assets/logo.png'; // <img src={Logo} />

export default defineComponent({
  name: 'About',
  displayName: "About Page",
  setup() {
    return () => (
      <>
        <h1>About Admin Template</h1>
      </>
    );
  },
});
