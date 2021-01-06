<script>
import { h, ref, reactive } from 'vue'

export default {
  props: {
    value: String
  },
  setup(props, context) {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })

    let { attrs, slots, emit } = context
    console.log(attrs, slots, emit)
    
    return () => h('div', [count.value, props.value, object.foo])
  }
}
</script>