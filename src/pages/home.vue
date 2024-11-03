<template>
  <countdown-item :endTime="endTime" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import dayjs from '@/libs/dayjs'
import CountdownItem from '@/components/countdown-item.vue'

import { useRoute } from 'vue-router'

const endTime = ref(dayjs('2024-09-31'))
</script>
