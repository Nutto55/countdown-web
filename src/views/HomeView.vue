<template>
  <main>
    <div>Nutto's freedom in:</div>
    <Countdown :endTime="endTime" />
    <div class="click-icon-wrapper">
      <div class="click-icon-container">
        <img :src="ClickIcon" width="48px" height="48px" />
        <div class="click-text">Click Me!</div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Howl } from 'howler'
import dayjs from 'dayjs'

import Countdown from '../components/Countdown.vue'
import BgAudio from '@/assets/audio/bg.mp3'
import ClickIcon from '@/assets/images/click.png'

const endTime = ref(dayjs('2024-09-31'))

onMounted(() => {
  setupAudio()
})

const setupAudio = () => {
  const audio = new Howl({
    src: BgAudio,
    autoplay: true,
    loop: true,
    volume: 0.5,
    onload: () => {
      console.info('load')
    },
    onplay: () => {
      console.info('play')
    }
  })
}
</script>
<style lang="css" scoped>
.click-icon-wrapper {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 16px 32px;
  margin-bottom: 16px;
  margin-right: 16px;
  border-radius: 8px;
}

.click-icon-wrapper:hover {
  cursor: pointer;
  background-color: var(--color-background-mute);
}

.click-icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}

.click-text {
  margin-left: 16px;
  font-size: 18px;
}

@media (min-width: 1024px) {
  .click-icon-wrapper {
    margin-bottom: 32px;
    margin-right: 32px;
  }
}
</style>
