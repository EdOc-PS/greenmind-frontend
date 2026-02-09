<script setup lang="ts">
import InputGlobal from "@/components/ui/Input/InputGlobal.vue";
import Button from "@/components/ui/Button/Button.vue";
import { CircleLock02Icon, Mail01FreeIcons } from "@hugeicons/core-free-icons";
import { ref } from "vue";

const active = ref(false);

function toggleActive(value: boolean) {
    active.value = value;
}

</script>

<template>
    <main class="flex min-h-screen bg-neutral-50 p-4">

        <img src="../../assets/fundo-auth.png" alt="" class="w-1/2 rounded-3xl">

        <div class="w-1/2 flex flex-col items-center justify-center p-8 relative ">

            <div class="flex flex-col gap-10 w-1/2 items-center ">
                <div class="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg space-y-5">
                    <div class="mb-10 flex flex-col gap-3 text-center" v-if="!active">
                        <h1 class="text-2xl font-extrabold">Bem-vindo de volta</h1>
                        <p class="text-sm font-medium text-neutral-market-550">Entre na sua conta para continuar </p>
                    </div>

                    <div class="mb-10 flex flex-col gap-3 text-center" v-if="active">
                        <h1 class="text-2xl font-extrabold">Criar conta</h1>
                        <p class="text-sm font-medium text-neutral-market-550">Gerencie a loja a partir de agora, preencha
                            os dados abaixo</p>
                    </div>

                    <div class="flex gap-1 justify-center bg-neutral-50 rounded-lg p-1">
                        <button @click="toggleActive(false)" :class="[
                            'flex-1 p-2 rounded-md text-sm font-medium cursor-pointer text-neutral-market-500',
                            !active ? 'bg-green-market-500 ' : 'bg-neutral-50'
                        ]">
                            Login
                        </button>
                        <button @click="toggleActive(true)" :class="[
                            'flex-1 p-2 rounded-md text-sm font-medium cursor-pointer text-neutral-market-500',
                            active ? 'bg-green-market-500' : 'bg-neutral-50'
                        ]">
                            Registrar
                        </button>
                    </div>

                    <form class="space-y-4" v-if="!active">
                        <div class="flex flex-col">
                            <label for="email" class="mb-1 text-sm ">Email:</label>
                            <InputGlobal placeholder="Email" :icon="Mail01FreeIcons" type="email" />
                        </div>
                        <div class="flex flex-col">
                            <label for="password" class="mb-1 text-sm ">Password:</label>
                            <InputGlobal placeholder="Senha" :icon="CircleLock02Icon" type="password" />
                        </div>
                        <Button variant="neutral">Entrar</Button>
                    </form>

                    <form class="space-y-4" v-if="active">
                        <div class="flex flex-col">
                            <label for="email" class="mb-1 text-sm ">Nome:</label>
                            <InputGlobal placeholder="Nome:" :icon="Mail01FreeIcons" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="mb-1 text-sm ">Email:</label>
                            <InputGlobal placeholder="Email" :icon="Mail01FreeIcons" type="email" />
                        </div>
                        <div class="flex flex-col">
                            <label for="password" class="mb-1 text-sm ">Senha:</label>
                            <InputGlobal placeholder="Senha" :icon="CircleLock02Icon" type="password" />
                        </div>

                        <div class="flex flex-col">
                            <label for="password" class="mb-1 text-sm ">Repita a senha:</label>
                            <InputGlobal placeholder="Senha" :icon="CircleLock02Icon" type="password" />
                        </div>

                        <Button variant="neutral">Criar conta</Button>
                    </form>



                </div>
            </div>

            <div class="flex gap-1 absolute bottom-5">
                <p class="text-sm  text-neutral-market-550">© 2026 Eduardo Octávio.</p>
                <a href="https://eduardo-octavio-red.vercel.app/" class="text-sm  text-neutral-market-550">
                    Portifolio</a>
            </div>
        </div>

    </main>
</template>

<style scoped></style>
