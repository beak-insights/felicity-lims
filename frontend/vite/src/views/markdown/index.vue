<template>
<div id="editor">
    <h2 class="heading">Source</h2>
    <h2 class="heading">Output</h2>
    <textarea v-model='source' placeholder="hey" name="tt"></textarea>
    <Preview :content="source" />
    
</div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import Preview from './Preview.vue'
import VueMarkdownIt from 'vue3-markdown-it';
import { defineComponent, ref, reactive, computed } from 'vue';
export default defineComponent({
  name: "mark-down-docs",
  components: {
    VueMarkdownIt,
    Preview
  },
  setup() {
    const md = new MarkdownIt()
    let source = ref('# Hello World!')
    var result = md.render(source.value);
    return { source, result }
  },
  data() {
    return {}
  },
});
</script>


<style lang="css" scoped>
html,
body,
#editor {
    margin: 0;
    height: 100%;
    font-family: "Helvetica Neue", Arial, sans-serif;
    color: rgb(51, 51, 51);
}
textarea,
#editor div,
.heading {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
}
textarea {
    height: 500px;
    border: 2px solid #ccc;
    resize: none;
    outline: none;
    background-color: #ffffff;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    padding: 20px;
}
.heading {
    text-decoration: underline;
}
</style>