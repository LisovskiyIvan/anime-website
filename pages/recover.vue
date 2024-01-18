<template>
    <div class="h-[100vh] w-[100%] bg-dark">
        <Navigation />
        <div class=" flex justify-center items-center flex-col">
            <div class="text-[30px] white mt-[30vh] w-[60%] ">
                <p>Забыли пароль? Очень жаль, восстановление пароля не предусмотрено. Советуем вспомнить пароль или создать
                    новый аккаунт.</p>
            </div>
            <NuxtLink to="register" class="text-[30px] white mt-[5vh] btn btn-outline-primary">Регистрация
            </NuxtLink>
        </div>
    </div>
</template>