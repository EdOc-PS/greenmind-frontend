<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import { ShoppingBasket02Icon, UserIcon } from '@hugeicons/core-free-icons';
</script>

<template>
    <header className="w-full top-0 z-50 fixed bg-white">
        <div className="max-w-410 mx-auto py-6 px-6 sm:px-8 lg:px-10 flex items-center justify-between">
            <p class="font-extrabold text-2xl text-gre">GREEN MARKET</p>

            <div class="flex gap-8">
                <button>
                    <HugeiconsIcon :icon="UserIcon" :size="22" color="#1E1E1E" />
                </button>
                <button>
                    <HugeiconsIcon :icon="ShoppingBasket02Icon" :size="22" color="#1E1E1E" />
                </button>
            </div>
        </div>
    </header>
</template>