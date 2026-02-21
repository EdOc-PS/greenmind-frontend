<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import { Star } from "@hugeicons/core-free-icons";
</script>

<template>
    <div class="bg-green-market-500 rounded-lg p-8 w-120 flex flex-col gap-10">
        <p class="text-sm text-neutral-market-575">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum,
            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.</p>
        <div class="flex justify-between">
            <h2 class="text-lg font-bold text-neutral-market-575">Nome</h2>
            <div class="flex gap-1 items-center">
                <HugeiconsIcon :icon="Star" :size="20" color="#1E1E1E" />
                <p class="text-lg font-bold text-neutral-market-575">5.0</p>
            </div>
        </div>
    </div>
</template>