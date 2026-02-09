<script setup lang="ts">



interface CardProps {
    img: string
    title: string
    value: string | number
}

const props = withDefaults(defineProps<CardProps>(), {
    title: "",
    value: 0,
    img: ""
});

</script>

<template>
    <div class="flex flex-col gap-2 cursor-pointer">
        <img :src="props.img" alt="" class="rounded-xl h-90 w-75 object-cover object-center">
        <div>
            <p class="font-medium text-neutral-market-500">{{ props.title }}</p>
            <p class="text-neutral-market-550 text-sm">R$ {{ props.value }}</p>
        </div>
    </div>
</template>