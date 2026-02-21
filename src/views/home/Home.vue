<script setup lang="ts">
import { HugeiconsIcon } from "@hugeicons/vue";
import { ArrowRight, CallRinging03Icon, DeliveryBox01Icon, Plant02Icon, Search01Icon, Star } from "@hugeicons/core-free-icons";
import Footer from "@/components/layout/footer/Footer.vue";
import Header from "@/components/layout/header/Header.vue";
import Button from "@/components/ui/Button/Button.vue";
import CardSales from "@/components/layout/card-sales/CardSales.vue";
import Categorys from "@/components/layout/categorys/Categorys.vue";
import Comentary from "@/components/layout/card-comentary/Comentary.vue";
</script>

<template>
    <!-- Header -->
    <Header />
    <main>
        <div class="mt-20 max-w-410 mx-auto py-6 px-6 sm:px-8 lg:px-10 flex flex-col items-center gap-35">
            <!-- Banner -->
            <div class="w-full rounded-3xl bg-[#C0DAD7] flex justify-between px-12 pt-4">
                <div class="py-4 flex flex-col gap-10">
                    <h1 class="font-extrabold text-neutral-market-500 text-7xl">
                        Compre as plantas dos seus sonhos
                    </h1>

                    <div class="flex gap-10">
                        <div class="text-start">
                            <p class="font-medium text-3xl">50+</p>
                            <p class="text-sm">Espécies de Plantas</p>
                        </div>

                        <span class="h-15 w-0.5 bg-neutral-market-500"></span>

                        <div class="text-start">
                            <p class="font-medium text-3xl">100+</p>
                            <p class="text-sm">Clientes Atendidos</p>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg w-2/3 flex p-1">
                        <input type="text" placeholder="O que você está procurando?"
                            class="flex-1 w-full px-6 py-2 rounded-lg text-neutral-market-500 placeholder:text-neutral-market-550 focus:outline-none" />
                        <div class="bg-green-market-500 rounded-lg flex p-3 cursor-pointer">
                            <HugeiconsIcon :icon="Search01Icon" :size="24" color="#1E1E1E" />
                        </div>

                    </div>
                </div>
                <img src="../../assets/fundo-auth.png" class="h-130">
            </div>

            <!-- Top Vendas -->
            <div class="w-full flex gap-10 justify-between">
                <div class="flex flex-col max-w-60 gap-4">
                    <h3 class="font-bold text-3xl">Os mais procurados</h3>
                    <p class="text-p-market text-lg">
                        A maneira mais fácil de ter uma vida saudável comprando suas plantas favoritas</p>
                    <div class="w-2/3">
                        <Button variant="primary" :icon="ArrowRight"> Veja mais</Button>
                    </div>

                </div>

                <div class="flex justify-between gap-10">
                    <CardSales img="/src/assets/p1.png" title="Planta 1" value="1,400.00" />
                    <CardSales img="/src/assets/p2.png" title="Planta 2" value="1,200.00" />
                    <CardSales img="/src/assets/p3.png" title="Planta 3" value="1,000.00" />
                    <CardSales img="/src/assets/p2.png" title="Planta 4" value="900.00" />
                </div>
            </div>

            <!-- Sobre -->
            <div class="flex flex-col gap-15">
                <div class="text-center">
                    <h1 class="text-2xl font-bold text-neutral-market-500">Sobre nos</h1>
                    <p class="text-p-market mt-5">Encomende agora e aprecie a beleza da natureza</p>
                </div>

                <div class="flex gap-15 justify-between">
                    <div class="flex flex-col w-1/3 items-center gap-10">
                        <div class="w-16 h-16 bg-green-market-500 rounded-full justify-center items-center flex">
                            <HugeiconsIcon :icon="Plant02Icon" :size="32" color="#1E1E1E" />
                        </div>
                        <div class="text-center">
                            <h5 class="text-md font-bold text-neutral-market-500"> Grande variedade </h5>
                            <p class="text-p-market text-sm">
                                Oferecemos muitos tipos diferentes de produtos com menos variações em cada categoria.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col w-1/3 items-center gap-10">
                        <div class="w-16 h-16 bg-green-market-500 rounded-full justify-center items-center flex">
                            <HugeiconsIcon :icon="DeliveryBox01Icon" :size="32" color="#1E1E1E" />
                        </div>
                        <div class="text-center">
                            <h5 class="text-md font-bold text-neutral-market-500"> Frete rápido e grátis </h5>
                            <p class="text-p-market text-sm">
                                Prazo de entrega de 4 dias ou menos, frete grátis e opção de entrega rápida.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col w-1/3 items-center gap-10">
                        <div class="w-16 h-16 bg-green-market-500 rounded-full justify-center items-center flex">
                            <HugeiconsIcon :icon="CallRinging03Icon" :size="32" color="#1E1E1E" />
                        </div>
                        <div class="text-center">
                            <h5 class="text-md font-bold text-neutral-market-500"> Suporte 24 horas </h5>
                            <p class="text-p-market text-sm">
                                Respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana
                                e
                                em tempo real.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <!-- Categorias -->
        <Categorys />

        <div class="mt-20 max-w-410 mx-auto py-6 px-6 sm:px-8 lg:px-10 flex flex-col gap-35">
            <!-- Comentarios -->
            <div class="w-100">
                <h1 class="text-2xl font-bold text-neutral-market-500"> O que os clientes dizem sobre o GREEN MARKET?
                </h1>
            </div>
            <div
                class="flex gap-4 overflow-x-auto w-full pb-4 [scrollbar-width:thin] [scrollbar-color:rgba(82,82,82,0.35)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-400/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-neutral-400/60">
                <div class="min-w-[calc(33.33%-1rem)]">
                    <Comentary />
                </div>
                <div class="min-w-[calc(33.33%-1rem)]">
                    <Comentary />
                </div>
                <div class="min-w-[calc(33.33%-1rem)]">
                    <Comentary />
                </div>
                <div class="min-w-[calc(33.33%-1rem)]">
                    <Comentary />
                </div>
                <div class="min-w-[calc(33.33%-1rem)]">
                    <Comentary />
                </div>
                <div class="min-w-[calc(33.33%-1rem)]">
                    <Comentary />
                </div>
            </div>
        </div>
    </main>

    <!-- Rodapé -->
    <Footer />

</template>
