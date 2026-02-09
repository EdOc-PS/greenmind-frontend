<script setup lang="ts">
import Button from "@/components/ui/Button/Button.vue";
</script>

<template>
    <div class="flex flex-col gap-15 mt-20">
        <div class="text-center">
            <h1 class="text-2xl font-bold text-neutral-market-500">Categorias</h1>
            <p class="text-p-market mt-5">Encontre o que você procura</p>
        </div>

        <div class="flex gap-15 justify-between bg-green-market-500 w-full">
            <div class=" max-w-310 mx-auto py-20 px-6 sm:px-8 lg:px-10 flex flex-col items-center gap-15 w-full">
                <div class="flex w-full justify-between">
                    <div class="flex flex-col items-center gap-4">
                        <img src="/src/assets//back-n.png" alt="" class="h-125 rounded-xl">
                        <p class="font-medium text-neutral-market-500">Plantas Naturais</p>
                    </div>

                    <div class="flex flex-col items-center gap-4">
                        <img src="/src/assets//back-p.png" alt="" class="h-125 rounded-xl">
                        <p class="font-medium text-neutral-market-500">Plantas Artificiais</p>
                    </div>

                    <div class="flex flex-col items-center gap-4">
                        <img src="/src/assets//back-a.png" alt="" class="h-125 rounded-xl">
                        <p class="font-medium text-neutral-market-500">Acessórios</p>
                    </div>
                </div>
                <div class="w-1/3">
                    <p class="text-neutral-market-575 text-center mb-5">Traga mais vida para o seu dia a dia com
                        nossa seleção especial.</p>
                    <Button variant="neutral">Ver todas as categorias</Button>
                </div>


            </div>
        </div>

    </div>
</template>