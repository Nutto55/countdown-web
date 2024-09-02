<template>
  <div class="countdown-text">
    <h2 v-if="isLoading">Loading...</h2>
    <h1 v-else-if="isOver">Hooray!! 🥳🎉🎉</h1>
    <h2 v-else>
      {{ remainingDays }} days {{ remainingHours }} hours {{ remainingMinutes }} minutes
      {{ remainingSeconds }} seconds
    </h2>
  </div>
</template>
<script lang="ts" setup>
import dayjs, { Dayjs } from 'dayjs'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const isOver = ref(false)
const remainingDays = ref<number | null>(null)
const remainingHours = ref<number | null>(null)
const remainingMinutes = ref<number | null>(null)
const remainingSeconds = ref<number | null>(null)
const countdownInterval = ref<ReturnType<typeof setInterval> | null>(null)

const props = defineProps({
  endTime: Dayjs
})

onMounted(() => {
  const end = props.endTime
  if (!end) {
    isLoading.value = false
  } else {
    countdownInterval.value = setInterval(() => {
      countdown(end)
      isLoading.value = false
    }, 1000)
  }
})

const countdown = (end: Dayjs) => {
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
<style lang="css" scoped>
.countdown-text {
  color: #ffffff;
}
</style>
