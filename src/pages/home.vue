<template>
  <div class="flex flex-col min-h-dvh justify-center items-center -mt-20 md:-mt-24">
    <div>
      <div
        v-if="!isValidCode"
        class="flex flex-col items-center"
      >
        <h1>No countdown yet 😿</h1>
        <n-button
          class="mt-2"
          secondary
          type="primary"
          size="large"
        >
          <router-link to="form"> Create new </router-link>
        </n-button>
      </div>
      <countdown-item
        v-else
        :eventName="eventName"
        :endText="endText"
        :endTime="endTime"
      />
    </div>
    <div
      v-if="isValidCode"
      class="fixed bottom-0 right-0 mr-4 mb-4"
    >
      <n-button
        class="mt-2"
        secondary
        type="primary"
        size="large"
      >
        <router-link to="form"> Create new </router-link>
      </n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import dayjs from '@/libs/dayjs'
import CountdownItem from '@/components/countdown-item.vue'

import { useRoute } from 'vue-router'
import { z } from 'zod'

import { NButton } from 'naive-ui'
import { decrypt } from '@/utils/encryption'
import { DATETIME_FORMAT } from '@/const/datetime'
import { useMeta } from 'vue-meta'

useMeta({
  title: 'Home'
})

const route = useRoute()
const eventName = ref<string>()
const endText = ref<string>()
const endTime = ref(dayjs())
const isValidCode = ref(false)

onMounted(() => {
  configDetails()
})

const configDetails = () => {
  const code = route.query.code
  if (!code || Array.isArray(code)) {
    isValidCode.value = false
    return
  }

  try {
    const decryptedCode = decrypt(code)
    const parsedJson = JSON.parse(decryptedCode)

    console.info(parsedJson)

    const detailSchema = z.object({
      eventName: z.string().optional(),
      endTime: z.string().transform((d) => dayjs(d, DATETIME_FORMAT)),
      endText: z.string().optional()
    })

    const details = detailSchema.parse({
      ...parsedJson
    })

    eventName.value = details.eventName
    endText.value = details.endText
    endTime.value = details.endTime

    isValidCode.value = true
  } catch (error) {
    isValidCode.value = false
  }
}
</script>
