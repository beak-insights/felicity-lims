<template>
<div id="editor">
    <h2 class="heading">Source</h2>
    <h2 class="heading">Output</h2>
    <textarea v-model='text' placeholder="hey" name="tt">hello world</textarea>
    <div>
        <VueMarkdownIt :source='text' class="flex-1 p-2 m-1"></VueMarkdownIt>
    </div>
</div>
</template>

<script>
import VueMarkdownIt from 'vue3-markdown-it';
export default {
    components: {
        VueMarkdownIt
    },
    name: 'Preview',
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style scoped>
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