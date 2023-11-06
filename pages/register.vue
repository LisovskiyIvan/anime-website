<template>
    <div class="register-page bg-dark">
        <Navigation />
        <div class="container-register">
            <div class="wrapper-register">
                <div class="form-box register">
                    <h2 class="headingFont">Регистрация</h2>
                    <form action="#" class="textFont">
                        <div class="input-box">
                            <input type="text" value="yaebanytiy" required>
                            <label>Username</label>
                        </div>
                        <div class="input-box">
                            <input type="email" value="nasral@rambler.ru" required>
                            <label>Email</label>
                        </div>
                        <div class="input-box">
                            <input type="password" value="123" required>
                            <label>Password</label>
                        </div>
                        <div class="remember-forgot">
                            <label>
                                <input type="checkbox">Запомнить меня
                            </label>
                            <NuxtLink to="recover_password">Забыли пароль?</NuxtLink>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Войти</button>
                        <div class="login-register">
                            <p>Уже есть аккаунт? <NuxtLink to="login" class="register-link">Войти</NuxtLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.register-page {
    height: 100vh;
    width: 100%;
}

.container-register {
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrapper-register {
    text-align: center;
    background-color: white;
    height: auto;
    width: 500px;
    margin-top: 10%;
    border-radius: 20px;
    z-index: 2;
}

.wrapper-register .form-box {
    width: 100%;
    padding: 40px;
}

.form-box h2 {
    font-size: 2em;
    text-align: center;
}

.input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #403F4C;
    margin: 30px 0;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #403F4C;
    pointer-events: none;
    transition: 0.5s;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #403F4C;
    font-weight: 600;
    font-size: 1em;
    padding: 0 35px 0 5px;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}

.remember-forgot {
    font-size: 0.9em;
    color: #403F4C;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-forgot label input {
    accent-color: #403F4C;
    margin-right: 3px;
}

.remember-forgot a {
    color: #403F4C;
    text-decoration: none;
    font-weight: 600;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.btn {
    width: 100%;
    height: 45px;
    cursor: pointer;
    font-size: 1em;
    font-weight: 500;
}

.login-register {
    font-size: 0.9em;
    color: #403F4C;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}

.login-register p a {
    color: #403F4C;
    text-decoration: none;
    font-weight: 600;
}

.login-register p a:hover {
    text-decoration: underline;
}

.btn-outline-primary {
    margin-right: 20px;
    color: #000;
    border-color: #000;
    background-color: #EFBCD5;
}

.btn-outline-primary:hover {
    background-color: #403F4C;
    color: #fff;
}</style>