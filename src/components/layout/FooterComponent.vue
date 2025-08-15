<script>
export default{
    name: "FooterComponent"
}
</script>

<template>
    <footer class="block block--style--margins block--style--footer">
        <div class="block block--style--footer--left">
            <div class="block">
                <img src="@/assets/images/logo.svg" alt="Логотип Московского инновационного кластера" class="block__logo block__logo--style--footer">
                <div class="block__buttons block__buttons--footer">
                    <img src="@/assets/images/footer-telegram-icon.svg" alt="Телеграм" class="block__image--size--small">
                    <img src="@/assets/images/footer-vk-icon.svg" alt="ВКонтакте" class="block__image--size--small">
                </div>
            </div>
            <div class="block block--style--horizontal--mobile">
                <div class="explanation explanation--style--small">
                    <img src="@/assets/images/footer-phone-icon.svg" alt="Телефон">
                    <div>8 495 870-45-55</div>
                </div>
                <div class="explanation explanation--style--small">
                    <img src="@/assets/images/footer-mail-icon.svg" alt="Почта">
                    <div>support@i.moscow</div>
                </div>
            </div>
            <button class="button">Служба поддержки</button>
        </div>
        <div class="grid grid--style--footer">
            <div class="grid__label grid__label--footer">Бизнесу</div>
            <div class="grid__label grid__label--footer"> </div>
            <div class="grid__label grid__label--footer">Новаторам</div>
            <a href="">Инвестиции</a>
            <a href="">Спрос и кооперация</a>
            <a href="">Создание стартапов</a>
            <a href="">Поддержка стартапов</a>
            <a href="">Гранты</a>
            <a href="">Академия инноваторов</a>
            <a href="">Инфраструктура</a>
            <a href="">Патентование</a>
            <a href="">Обучение</a>
            <a href="">Проекты для мегаполиса</a>
            <a href="">О Кластере</a>
            <a href="">Венчурная академия</a>
            <a href="">Истории успеха</a>
            <a href="">Календарь мероприятий</a>
        </div>
    </footer>
    <div class="block block--style--footer block--style--footer--lower">Соглашение о пользовании информационной системы обеспечения деятельности инновационного кластера на территории города Москвы</div>
</template>

<style scoped>

/* Block */

.block--style--footer{
    flex-direction: row;
    border-top: 1px solid #E2E2E5;
}

@media(max-width: 768px){
    .block--style--footer{
        flex-direction: column;
    }
}

.block--style--footer--left{
    margin-right: 20px;
    gap: 40px;
}

.block--style--footer--lower{
    color: #A1A3A6;
    margin: 0 100px;
    padding: 28px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
}

@media(max-width: 768px){
    .block--style--footer--lower{
        margin: 0 32px;
    }
}

@media(max-width: 1200px){
    .block--style--footer--lower{
        margin: 0 20px;
    }
}

.block__logo--style--footer{
    margin-bottom: 60px;
}

@media(max-width: 768px){
    .block__logo--style--footer{
        margin-bottom: 20px;
    }
}

/* Grid */

.grid--style--footer{
    height: min-content;
    column-gap: 115px;
    row-gap: 20px;
}

@media(max-width: 1200px){
    .grid--style--footer{
        column-gap: 30px;
        row-gap: 15px;
    }
}

@media(max-width: 768px){
    .grid--style--footer{
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 10px;
    }
}

.grid__label--footer{
    font-weight: 500;
    margin-bottom: 10px;
}

@media (max-width: 1200px){
    .grid__label--footer{
        grid-row: 1;
        margin-top: 0;
    }
}

@media (max-width: 768px){
    .grid__label--footer{
        margin-bottom: 5px;
    }
}

/* Button */

@media(max-width:768px){
    .block__buttons--footer{
        flex-direction: row;
        align-self: center;
    }
}

</style>