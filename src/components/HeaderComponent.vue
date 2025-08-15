<script>
export default {
  name: 'HeaderComponent'
}
</script>

<template>
    <header class="header">
        <div class="header__upper">
            <div class="header__structure">
                <a href="">
                    <picture>
                        <source media="(max-width: 768px)" srcset="@/assetes/images/logo-mini.svg">
                        <img src="@/assetes/images/logo.svg" alt="Логотип Московского инновационного кластера">
                    </picture>
                </a>
                <button class="header__tab header__tab--active">Организациям и ИП</button>
                <div class="header__divider"></div>
                <button class="header__tab">Физическим лицам</button>
            </div>
            <div class="header__structure">
                <button class="button--style--border button--align--center button--mobile--vanish">Кластер «Ломоносов»</button>
                <div class="button--style--header" data-mobile-menu-trigger>
                    <button class="button--mobile--vanish">Авторизация</button>
                    <img src="@/assetes/images/header-user-icon.svg" alt="" class="header__image">
                </div>
            </div>
        </div>
        <div id="lower-header" class="header__lower">
            <a href="" class="header__link">Инвестиции</a>
            <a href="" class="header__link">Спрос и кооперация</a>
            <a href="" class="header__link">Поддержка стартапов</a>
            <a href="" class="header__link">Гранты</a>
            <a href="" class="header__link">Инфраструктура</a>
            <a href="" class="header__link">Патентование</a>
            <a href="" class="header__link">Проекты для мегаполиса</a>
            <a href="" class="header__link">О Кластере</a>
            <img src="@/assetes/images/header-search-icon.svg" alt="Поиск">
        </div>
    </header>
</template>

<style scoped>

.header{
    font-size: 14px;
    font-weight: 500;
    line-height: 120%;
}

@media(max-width:1200px){
    .header{
        font-size: 12px;
    }
}

.header__upper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #1C1D22;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 100px;
}

@media(max-width: 1200px){
    .header__upper{
        padding: 0 32px;
    }
}

@media(max-width:768px){
    .header__upper{
        padding: 8px 20px;
    }
}

.header__lower{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1240px;
    font-weight: 400;
}

@media(max-width:1200px){
    .header__lower{
        padding: 16px 32px;
    }
}

@media(max-width:768px){
    .header__lower{
        display: none;
    }

    .open{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.header__structure{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.header__tab{
    position: relative;
    color: #A1A3A6;
    cursor: pointer;
    padding: 27px 0;
    font-weight: 400;
}

@media(max-width:768px){
    .header__tab{
        display: none;
    }
}

.header__tab--active{
    color: #1C1D22;
    font-weight: 500;
}

.header__tab--active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: linear-gradient(to right, #16FF00, #4DFFC9);
    border-radius: 1px;
}

.header__image{
    margin-left: 10px;
    width: 18px;
    height: 18px;
}

.header__link{
    padding: 16px 0;
}

.header__divider{
    width: 0;
    height: 12px;
    border-left: 1.5px solid #CBCBCE;
}

@media(max-width:768px){
    .header__divider{
        display: none;
    }
}

.button--style--header{
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 40px;
}

@media(max-width:768px){

    .button--style--header{
        gap: 20px;
    }

    .button--style--header::after{
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        background-image: url('@/assetes/images/header-extra-icon.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
}

@media(max-width:768px){
    .button--mobile--vanish{
        display: none;
    }
}

.button--align--center{
    align-self: center;
}

</style>