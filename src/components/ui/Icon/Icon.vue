<script setup lang="ts">
import { computed } from "vue";
import * as AllIcons from "@hugeicons/vue";

interface IconProps {
    name: string;
    color?: string;
    size?: number;
    strokeWidth?: number;
}

const props = withDefaults(defineProps<IconProps>(), {
    color: "#000",
    size: 24,
    strokeWidth: 2,
});

const IconComponent = computed(() => {
    return (AllIcons as any)[props.name] || null;
});
</script>

<template>
    <component v-if="IconComponent" :is="IconComponent" :size="props.size" :color="props.color"
        :stroke-width="props.strokeWidth" />
</template>

<style scoped></style>