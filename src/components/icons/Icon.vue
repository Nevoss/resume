<template>
  <component :is="icon" class="fill-current" />
</template>

<script>
import Email from './Email'
import Github from './Github'
import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'

export default {
  name: 'Icon.vue',
  components: {
    Email,
    Github,
    ArrowRight,
    ArrowLeft,
  },
  props: {
    icon: {
      type: String,
      required: false,
    },
  },
}
</script>
