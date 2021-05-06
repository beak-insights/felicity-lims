<template>
  <div class="content-preview">
    <vue3-markdown-it :source="content" class="markdown-wrapper" />
  </div>
</template>

<script>
import { ref, onUnmounted } from 'vue'
import { emitter } from './Editor.vue'
export default {
  name: 'FilePreview',
  props: {},
  setup (props, context) {
    const content = ref('')
    emitter.on('editor-content', value => {
      content.value = value
    })
    onUnmounted(() => {
      emitter.off('editor-content')
    })
    return { content }
  }
}
</script>

<style scoped>
.content-preview {
  width: 50%;
  background-color: antiquewhite;
}
.markdown-wrapper {
  height: calc(100vh - 56px);
}

.markdown-wrapper .fullscreen {
    height: 100vh;
}

</style>