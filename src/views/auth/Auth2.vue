<script setup lang="ts">
import InputGlobal from "@/components/ui/Input/InputGlobal.vue";
import Button from "@/components/ui/Button/Button.vue";
import { CircleLock02Icon, Mail01FreeIcons } from "@hugeicons/core-free-icons";

</script>

<template>
    <main class="flex min-h-screen items-center justify-center p-4 bg-center bg-no-repeat"
        style="background-image: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.1)), url('/public/Background.jpeg'); background-size: cover;">

        <div class="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg space-y-5">
            <div class="mb-10 flex flex-col gap-3 text-center">
                <h1 class="text-2xl font-extrabold">Bem-vindo de volta</h1>
                <p class="text-sm font-medium text-neutral-mind-550">Entre na sua conta para continuar </p>
            </div>

            <form class="space-y-4">
                <div class="flex flex-col">
                    <label for="email" class="mb-1 text-sm ">Email:</label>
                    <InputGlobal placeholder="Email" :icon="Mail01FreeIcons" type="email" />
                </div>
                <div class="flex flex-col">
                    <label for="password" class="mb-1 text-sm ">Password:</label>
                    <InputGlobal placeholder="Senha" :icon="CircleLock02Icon" type="password" />
                </div>
            </form>

            <Button variant="neutral">Entrar</Button>
        </div>

    </main>
</template>

<style scoped></style>
