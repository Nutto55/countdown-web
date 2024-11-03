<template>
  <n-space vertical>
    <n-form
      ref="formRef"
      :model="formValue"
      :rules="rules"
    >
      <n-form-item
        label="Event:"
        path="eventName"
      >
        <n-input
          v-model:value="formValue.eventName"
          placeholder="E.g. New year, Birthday, ..."
          clearable
        />
      </n-form-item>
      <n-form-item
        label="Date & Time:"
        path="datetime"
      >
        <n-date-picker
          class="w-full"
          v-model:formatted-value="formValue.datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetime"
          clearable
        />
      </n-form-item>
      <n-form-item
        label="Ended Text:"
        path="endedText"
      >
        <n-input
          v-model:value="formValue.endedText"
          placeholder="E.g. Hooray!, Finish, ..."
          clearable
        />
      </n-form-item>
    </n-form>
    <div class="flex justify-center">
      <n-button
        type="primary"
        @click="generateUrl"
      >
        Generate URL
      </n-button>
    </div>
    <n-input-group
      v-if="url"
      class="mt-6"
    >
      <n-input
        disabled
        v-model:value="url"
      />
      <n-popover trigger="click">
        <template #trigger>
          <n-button @click="copyLinkToClipboard">
            <n-icon class="mx-1"><copy /></n-icon>
          </n-button>
        </template>
        <span>Copied!</span>
      </n-popover>
      <n-button @click="openLink">
        <n-icon class="mx-1"><external-link-alt /></n-icon>
      </n-button>
    </n-input-group>
  </n-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from '@/libs/dayjs'
import { encrypt } from '@/utils/encryption'
import {
  NInput,
  NForm,
  NFormItem,
  NDatePicker,
  NSpace,
  NButton,
  NPopover,
  NIcon,
  NInputGroup,
  type FormInst,
  type FormRules
} from 'naive-ui'
import { ExternalLinkAlt, Copy } from '@vicons/fa'

const currentDateTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
const url = ref<string | null>(null)

const isValidForm = ref(true)
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  eventName: 'My Freedom in...',
  datetime: currentDateTime,
  endedText: 'Hooray! 🥳'
})
const rules = ref<FormRules>({
  datetime: [
    {
      required: true,
      message: 'Please input date & time'
    }
  ]
})

const generateUrl = async (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((error) => {
    if (error !== undefined) {
      isValidForm.value = false
      return
    }
    const encryptedCode = encrypt(JSON.stringify(formValue.value))
    url.value = window.location.origin + `?code=${encryptedCode}`
  })
}

const copyLinkToClipboard = () => {
  navigator.clipboard.writeText(url.value ?? '')
}

const openLink = () => {
  window.open(url.value ?? '', '_blank')
}
</script>
