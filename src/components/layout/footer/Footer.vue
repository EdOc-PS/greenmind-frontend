<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import { FigmaIcon, Github01Icon, Linkedin01Icon } from "@hugeicons/core-free-icons";
</script>

<template>
    <footer class="w-full h-100 bg-neutral-market-500 mt-20 ">
        <div class="max-w-410 mx-auto py-10 px-6 sm:px-8 lg:px-10 flex flex-col h-full justify-between">
            <div class="flex justify-between">
                <div class="flex flex-col gap-4">
                    <p class="font-extrabold text-2xl text-green-market-500">GREEN MARKET</p>
                    <p class="w-70 text-neutral-400">Nós ajudamos você a encontrar a planta dos seus sonhos</p>
                    <ul class="flex gap-5">
                        <li>
                            <a class="bg-neutral-800 p-3 flex rounded-full"
                                href="https://www.linkedin.com/in/eduardo-octavio/" target="_blank">
                                <HugeiconsIcon :icon="Linkedin01Icon" :size="26" color="#a3a3a3" />
                            </a>
                        </li>
                        <li>
                            <a class="bg-neutral-800 p-3 flex rounded-full" href="https://github.com/EdOc-PS"
                                target="_blank">
                                <HugeiconsIcon :icon="Github01Icon" :size="26" color="#a3a3a3" />
                            </a>
                        </li>
                        <li>
                            <a class="bg-neutral-800 p-3 flex rounded-full"
                                href="https://www.figma.com/design/68KpfJnPEAMShrFU6ZuLr8/E-Commerce-Plant-Shop-Website--Community-?node-id=17-40&t=ERGWRKxThdIClLqN-0"
                                target="_blank">
                                <HugeiconsIcon :icon="FigmaIcon" :size="26" color="#a3a3a3" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex gap-5">
                    <ul class="flex flex-col gap-3">
                        <li class="text-neutral-300 font-bold">
                            Informação
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Sobre nos
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Produto
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Blog
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-3">
                        <li class="text-neutral-300 font-bold">
                            Empresa
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Comunidade
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Carreiras
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Nossa história
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-3">
                        <li class="text-neutral-300 font-bold">
                            Contato
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Começando
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Preços
                        </li>
                        <li class="text-neutral-400 text-sm">
                            Recursos
                        </li>
                    </ul>
                </div>

            </div>

            <div class="flex gap-1">
                <p class="text-sm  text-green-market-500">© 2026 Eduardo Octávio - </p>
                <a href="https://eduardo-octavio-red.vercel.app/" class="text-sm  text-green-market-500">
                    Portifolio</a>
            </div>
        </div>
    </footer>
</template>