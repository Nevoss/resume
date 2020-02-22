<template>
  <div>
    <div class="flex justify-between">
      <div>
        <span class="block">
          <span class="font-bold">
            {{ job.title }}
          </span>
        </span>
        <span class="block text-sm">
          {{ job.jobTitle }}
        </span>
      </div>
      <div>
        <span class="text-sm">
          {{ workPeriod }}
        </span>
      </div>
    </div>
    <ul class="mt-4">
      <li
        v-for="point in job.descriptionPoints"
        class="flex items-center -mx-4 pt-1 text-sm"
      >
        <icon
          :icon="direction === 'rtl' ? 'arrow-left' : 'arrow-right'"
          class="mx-4 text-xs text-gray-500"
        />
        {{ point }}
      </li>
    </ul>
  </div>
</template>

<script>
import { format, parse } from 'date-fns'

export default {
  name: 'Job',
  props: {
    direction: {
      type: String,
      required: true,
    },
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    workPeriod() {
      return `${this.formatDate(this.job.workPeriod.start)} - ${this.formatDate(
        this.job.workPeriod.end
      )}`
    },
  },
  methods: {
    formatDate(date) {
      return format(parse(date, 'yyyy-MM', new Date()), 'MMM yyyy')
    },
  },
}
</script>
