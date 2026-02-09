<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import { CallRinging03Icon, DeliveryBox01Icon, Plant02Icon} from "@hugeicons/core-free-icons";
import Footer from "@/components/layout/footer/Footer.vue";
import Header from "@/components/layout/header/Header.vue";
</script>

<template>
    <!-- Header -->
    <Header />   
    <main class="mt-20 max-w-410 mx-auto py-6 px-6 sm:px-8 lg:px-10 flex flex-col items-center gap-35">
        <div>
            <img src="../../assets/Background.jpeg" alt="" class="w-full rounded-3xl">
        </div>

        <!-- Sobre -->
        <div class="flex flex-col gap-15">
            <div class="text-center">
                <h1 class="text-2xl font-bold text-neutral-market-500">Sobre nos</h1>
                <p class="text-p-market mt-5">Encomende agora e aprecie a beleza da natureza</p>
            </div>

            <div class="flex gap-15 justify-between">
                <div class="flex flex-col w-1/3 items-center gap-10">
                    <div class="w-15 h-15 bg-green-market-500 rounded-full justify-center items-center flex">
                        <HugeiconsIcon :icon="Plant02Icon" :size="28" color="#1E1E1E" />
                    </div>
                    <div class="text-center">
                        <h5 class="text-md font-bold text-neutral-market-500"> Grande variedade </h5>
                        <p class="text-p-market text-sm">
                            Oferecemos muitos tipos diferentes de produtos com menos variações em cada categoria.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col w-1/3 items-center gap-10">
                    <div class="w-15 h-15 bg-green-market-500 rounded-full justify-center items-center flex">
                        <HugeiconsIcon :icon="DeliveryBox01Icon" :size="28" color="#1E1E1E" />
                    </div>
                    <div class="text-center">
                        <h5 class="text-md font-bold text-neutral-market-500"> Frete rápido e grátis </h5>
                        <p class="text-p-market text-sm">
                            Prazo de entrega de 4 dias ou menos, frete grátis e opção de entrega rápida.
                        </p>
                    </div>
                </div>

                <div class="flex flex-col w-1/3 items-center gap-10">
                    <div class="w-15 h-15 bg-green-market-500 rounded-full justify-center items-center flex">
                        <HugeiconsIcon :icon="CallRinging03Icon" :size="28" color="#1E1E1E" />
                    </div>
                    <div class="text-center">
                        <h5 class="text-md font-bold text-neutral-market-500"> Suporte 24 horas </h5>
                        <p class="text-p-market text-sm">
                            Respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana e
                            em tempo real.
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </main>

    <!-- Rodapé -->
    <Footer />
    
</template>

<style scoped></style>
