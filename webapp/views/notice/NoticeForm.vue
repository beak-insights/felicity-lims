<script setup lang="ts">
import 'ckeditor5/ckeditor5.css';
import { PropType, toRefs, ref, onMounted } from "vue";
import { NoticeType } from "@/types/gql";
import { 
	AddNoticeDocument, AddNoticeMutation, AddNoticeMutationVariables,
	EditNoticeDocument, EditNoticeMutation, EditNoticeMutationVariables
} from "@/graphql/operations/notice.mutations";

import { useNoticeStore } from "@/stores/notice";
import useApiUtil  from "@/composables/api_util";

import { useField, useForm } from "vee-validate";
import { object, string, array, number, date } from "yup";
import { formatDate } from "@/utils";
import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	Autosave,
	BlockQuote,
	Bold,
	Essentials,
	Heading,
	Indent,
	IndentBlock,
	Italic,
	List,
	Paragraph,
	SelectAll,
	TextTransformation,
	TodoList,
	Underline,
	Undo
} from 'ckeditor5';

const isLayoutReady = ref(false);
const config = ref<any>(null);
const editor = ref(ClassicEditor)

onMounted(( )=>{
		config.value = {
      			toolbar: {
				items: [
					'undo',
					'redo',
					'|',
					'heading',
					'|',
					'bold',
					'italic',
					'underline',
					'|',
					'link',
					'insertTable',
					'blockQuote',
					'|',
					'bulletedList',
					'numberedList',
					'todoList',
					'outdent',
					'indent'
				],
				shouldNotGroupWhenFull: false
			},
			plugins: [
				AccessibilityHelp,
				Autoformat,
				Autosave,
				BlockQuote,
				Bold,
				Essentials,
				Heading,
				Indent,
				IndentBlock,
				Italic,
				List,
				Paragraph,
				SelectAll,
				TextTransformation,
				TodoList,
				Underline,
				Undo
			],
			heading: {
				options: [
					{
						model: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					},
					{
						model: 'heading1',
						view: 'h1',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					},
					{
						model: 'heading2',
						view: 'h2',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					},
					{
						model: 'heading3',
						view: 'h3',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					},
					{
						model: 'heading4',
						view: 'h4',
						title: 'Heading 4',
						class: 'ck-heading_heading4'
					},
					{
						model: 'heading5',
						view: 'h5',
						title: 'Heading 5',
						class: 'ck-heading_heading5'
					},
					{
						model: 'heading6',
						view: 'h6',
						title: 'Heading 6',
						class: 'ck-heading_heading6'
					}
				]
			},
			placeholder: 'Begin typing...',
    };

		isLayoutReady.value = true;
})


const props = defineProps({
  notice: Object as PropType<NoticeType>,
});

const emit = defineEmits(["close"]);

const { withClientMutation } = useApiUtil();
const noticeStore = useNoticeStore();

// Notice
const { notice } = toRefs(props);
const minDateTime = ref(new Date());

const noticeSchema = object({
  uid: number(),
  title: string().required("Notice is required"),
  body: string().required("Notice body message is required"),
  expiry: date().required("Expiry is required").typeError("Invalid Date format"),
  groups: array(), // .required().min(0, "Add at least 1 sample")
  departments: array(),
});

const { handleSubmit, errors } = useForm({
  validationSchema: noticeSchema,
  initialValues: {
    uid: notice?.value?.uid,
    title: notice?.value?.title,
    body: notice?.value?.body,
    expiry: notice?.value?.expiry,
    groups: notice?.value?.groups,
    departments: notice?.value?.departments,
  },
});

const { value: title } = useField<string>("title");
const { value: body } = useField<string>("body");
const { value: expiry } = useField("expiry");

const submitNoticeForm = handleSubmit((values) => {
  if (!values.uid) addNotice(values as NoticeType);
  if (values.uid) updateNotice(values as NoticeType);
});

//
function addNotice(payload: NoticeType) {
  withClientMutation<AddNoticeMutation, AddNoticeMutationVariables>(AddNoticeDocument,
    {
      payload: {
        title: payload.title,
        body: payload.body,
        expiry: formatDate(payload.expiry, "YYYY-MM-DD HH:mm"),
        groups: payload.groups || [],
        departments: payload.departments || [],
      },
    },
    "createNotice"
  ).then((result) => {
    noticeStore.addNotice(result);
    emit("close");
  });
}

function updateNotice(payload: NoticeType) {
  withClientMutation<EditNoticeMutation, EditNoticeMutationVariables>(EditNoticeDocument,
    {
      uid: payload.uid,
      payload: {
        title: payload.title,
        body: payload.body,
        expiry: formatDate(payload.expiry, "YYYY-MM-DD HH:mm"),
        groups: payload.groups || [],
        departments: payload.departments || [],
      },
    },
    "updateNotice"
  ).then((result) => {
    noticeStore.updateNotice(result);
    emit("close");
  });
}
</script>

<template>
  <form action="post" class="space-y-4 p-4" @submit.prevent="submitNoticeForm">
    <div class="space-y-4">
      <div class="space-y-2">
        <label class="block text-sm font-medium text-foreground">Title</label>
        <input
          class="w-full px-3 py-2 text-foreground bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
          v-model="title"
          placeholder="Notice title..."
        />
        <div v-if="errors.title" class="text-sm text-destructive">{{ errors.title }}</div>
      </div>
      
      <div class="space-y-2">
        <label class="block text-sm font-medium text-foreground">Body</label>
        <div class="main-container min-w-full prose prose-slate">
          <div class="editor-container editor-container_balloon-editor" ref="editorContainerElement">
            <div class="editor-container__editor">
              <div ref="editorElement">
                <ckeditor 
                v-if="isLayoutReady" 
                v-model="body" 
                :editor="editor" 
                :config="config"
                tag-name="textarea"/>
              </div>
            </div>
          </div>
        </div>
        <div v-if="errors.body" class="text-sm text-destructive">{{ errors.body }}</div>
      </div>
      
      <div class="space-y-2">
        <label class="block text-sm font-medium text-foreground">Expiration</label>
        <VueDatePicker 
          class="w-full" 
          v-model="expiry"
          :min-date="minDateTime" 
          placeholder="Select Expiry Date"
        ></VueDatePicker>
        <div v-if="errors.expiry" class="text-sm text-destructive">{{ errors.expiry }}</div>
      </div>
    </div>
    
    <div class="border-t border-border my-4"></div>
    
    <button
      type="submit"
      class="w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
    >
      Save Notice
    </button>
  </form>
</template>
