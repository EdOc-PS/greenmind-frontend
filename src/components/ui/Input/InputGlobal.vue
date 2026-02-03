<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import type { HugeIconType } from "@/utils/icon";

import { ViewIcon } from "@hugeicons/core-free-icons";

interface InputProps {
  placeholder?: string;
  icon?: HugeIconType;
  type?: "text" | "password" | "email" | "number";
}

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: "",
  type: "text"
});

const model = defineModel<string>();
</script>


<template>

  <div
    class="bg-white h-10 px-3 py-2 flex gap-2 rounded-lg items-center border border-neutral-200 transition-all focus-within:ring-2 focus-within:ring-green-mind-500/20 focus-within:border-green-mind-500">

    <HugeiconsIcon :icon="props.icon" :size="18" color="#1E1E1E" v-if="props.icon" class="shrink-0" />

    <input v-model="model" v-bind="$attrs" :type="props.type"
      class="outline-0 flex-1 min-w-0 text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
      :placeholder="props.placeholder">

    <div v-if="props.type === 'password'" class="shrink-0 cursor-pointer">
      <HugeiconsIcon :icon="ViewIcon" :size="18" color="#1E1E1E" />
    </div>
  </div>
</template>

<script lang="ts">
// Isso garante que atributos como 'id' ou 'type' caiam no <input> e não na <div>
export default {
  inheritAttrs: false
}
</script>