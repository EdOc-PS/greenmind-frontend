<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import type { HugeIconType } from "@/utils/icon";



interface IconProps {
    variant?: "primary" | "neutral" | "ghost"
    type?: "submit" | "button" | "reset";
    icon?: HugeIconType;
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
            'bg-green-market-500 text-neutral-market-500': variant === 'primary',
            'bg-neutral-market-500 text-white': variant === 'neutral',
            'bg-transparent hover:bg-gray-100': variant === 'ghost'
        }" :type="type">
        <div class="flex items-center justify-center gap-2">
            <slot />
            <HugeiconsIcon v-if="props.icon" :icon="props.icon" :size="18" :color="{'#1E1E1E' : variant === 'primary', '#FFF' : variant === 'neutral'}" />
        </div>


    </button>
</template>

<style scoped></style>