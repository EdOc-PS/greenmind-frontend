<script setup lang="ts">


interface IconProps {
    variant?: "primary" | "neutral" | "ghost"
    type?: "submit" | "button" | "reset";
    children?: string;
}

const props = withDefaults(defineProps<IconProps>(), {
    type: "button",
    variant: "primary",
});


</script>

<template>
    <button
        class="h-10 px-4 py-2 w-full rounded-lg text-sm font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        :class="{
            'bg-green-market-500 text-white': variant === 'primary',
            'bg-neutral-market-500 text-white': variant === 'neutral',
            'bg-transparent hover:bg-gray-100': variant === 'ghost'
        }" :type="type">
        <slot />
    </button>
</template>

<style scoped></style>