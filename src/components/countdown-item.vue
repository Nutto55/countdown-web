<template>
  <div>
    <h2 v-if="isLoading">
      <n-spin size="large" />
    </h2>
    <h1 v-else-if="isOver">{{ endText }}</h1>
    <div v-else>
      <h3>{{ eventName }}</h3>
      <h1>
        {{ remainingDays }} days {{ remainingHours }} hours {{ remainingMinutes }} minutes
        {{ remainingSeconds }} seconds
      </h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from '@/libs/dayjs'
import { onMounted, ref } from 'vue'
import { NSpin } from 'naive-ui'

interface CountdownItemProps {
  eventName?: string
  endText?: string
  endTime: dayjs.Dayjs
}

const props = withDefaults(defineProps<CountdownItemProps>(), {
  eventName: 'End at',
  endText: 'Finished'
})

onMounted(() => {
  const end = props.endTime
  console.info(end)
  if (!end) {
    isLoading.value = false
  } else {
    countdownInterval.value = setInterval(() => {
      countdown(end)
      isLoading.value = false
    }, 1000)
  }
})

const isLoading = ref(true)
const isOver = ref(false)
const remainingDays = ref<number | null>(null)
const remainingHours = ref<number | null>(null)
const remainingMinutes = ref<number | null>(null)
const remainingSeconds = ref<number | null>(null)
const countdownInterval = ref<ReturnType<typeof setInterval> | null>(null)

const countdown = (end: dayjs.Dayjs) => {
  const now = dayjs()
  if (end.isBefore(now) && countdownInterval.value) {
    isOver.value = true
    clearInterval(countdownInterval.value)
    return
  }

  const remainingTime = end.diff(now)

  remainingDays.value = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  remainingHours.value = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  remainingMinutes.value = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  remainingSeconds.value = Math.floor((remainingTime % (1000 * 60)) / 1000)
}
</script>
