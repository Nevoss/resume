<template>
    <div>
        <h1 class="text-4xl font-semibold leading-snug">
            {{ intro.name }}
        </h1>
        <h3 class="text-xl font-thin leading-snug text-blue-600">
            {{ intro.jobTitle }}
        </h3>
        <ul class="my-5 flex items-center -mx-6">
            <li class="px-8">
                <a :href="`mailTo: ${intro.email}`" class="flex items-center -mx-2 text-gray-700 text-sm leading-loose">
                    <icon icon="email" class="text-gray-600 fill-current"/>
                    <span class="px-2">
                        {{ intro.email }}
                    </span>
                </a>
            </li>
            <li class="px-8">
                <a :href="intro.github.url" target="_blank" class="flex items-center -mx-2 text-gray-700 text-sm leading-loose">
                    <icon icon="github" class="text-gray-600 fill-current text-base" />
                    <span class="px-2">
                        {{ intro.github.text }}
                    </span>
                </a>
            </li>
        </ul>
        <p>
            {{ intro.openingSentence }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Intro",
        props: {
            intro: {
                type: Object,
                required: true,
            }
        }
    }
</script>
