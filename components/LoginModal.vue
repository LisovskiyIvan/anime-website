<template>
    <div class="modal-overlay">
        <div class="wrapper">
            <button class="close btn btn-outline-secondary" type="button">Х</button>
            <div class="form-box login">
                <h2 class="headingFont">Войти</h2>
                <form action="#" class="textFont">
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
                        <a href="#">Забыли пароль?</a>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Войти</button>
                    <div class="login-register">
                        <p>Хотите зарегистрироваться? <a href="#" class="register-link">Регистрация</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.wrapper {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
    z-index: 2;
}

.wrapper .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    font-size: 1.5em;
}

.wrapper .form-box {
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
</style>