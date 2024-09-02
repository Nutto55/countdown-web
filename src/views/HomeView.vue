<template>
  <main>
    <audio :src="HarryAudio" volume="1" autoplay loop></audio>
    <div>Nutto's freedom in:</div>
    <Countdown :endTime="endTime" />
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Countdown from '../components/Countdown.vue'
import dayjs from 'dayjs'
import HarryAudio from '@/assets/audio/harry.mp3'

const endTime = ref(dayjs('2024-09-31'))
</script>
