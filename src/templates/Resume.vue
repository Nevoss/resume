<template>
  <div
    class="p-8 bg-white my-10 mx-auto shadow-md rounded-lg text-gray-900"
    :class="{
      'font-resume-heb': $page.intro.id === 'heb',
      'font-resume': $page.intro.id !== 'heb',
    }"
    :style="{
      maxWidth: '960px',
      direction: $page.intro.direction,
    }"
  >
    <section class="flex -mx-4">
      <div class="px-4 w-1/4 flex items-start justify-center">
        <div class="rounded-full overflow-hidden" style="max-width: 150px;">
          <g-image :src="$page.intro.image" />
        </div>
      </div>
      <div class="px-4 w-3/4">
        <Intro :intro="$page.intro" />
      </div>
    </section>
    <hr class="my-8" />
    <section class="flex -mx-4">
      <div class="px-4 w-1/4">
        <h5 class="font-bold">
          Experience
        </h5>
      </div>
      <div class="px-4 w-3/4">
        <div v-for="(job, index) in $page.experience.data" :key="job.title">
          <Job :job="job" :direction="$page.experience.id" />
          <hr v-show="index + 1 < $page.experience.data.length" class="my-8" />
        </div>
      </div>
    </section>
    <hr class="my-8" />
    <section class="flex -mx-4">
      <div class="px-4 w-1/4">
        <h5 class="font-bold">
          Education
        </h5>
      </div>
      <div class="px-4 w-3/4">
        {{ $page.education }}
      </div>
    </section>
  </div>
</template>

<page-query>
    query($id: ID!) {
        intro: intros(id: $id) {
            id
            direction
            name
            jobTitle
            email
            github {
                text
                url
            }
            openingSentence
            image(width: 100, quality: 90)
    }

        experience: experience(id: $id) {
            id
            data {
                jobTitle
                title
                workPeriod {
                    start
                    end
                }
                descriptionPoints
            }
        }

        education: education(id: $id) {
            id
            data {
                title
                institution
                period
            }
        }
    }
</page-query>

<script>
import Intro from '../components/resume/Intro'
import Job from '../components/resume/Job'
export default {
  components: { Job, Intro },
  metaInfo: {
    title: 'Resume',
  },
}
</script>

<style>
/** icons: https://iconify.design/icon-sets/simple-line-icons/ */
@import url('https://fonts.googleapis.com/css?family=Raleway|Rubik&display=swap');

body {
  @apply bg-gray-100;
}
</style>
