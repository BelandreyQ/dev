<script>
export default{
    name: "ConnectorBlock"
}
</script>

<template>
    <div class="block block--style--margins">
        <div class="article">
            <img src="@/assetes/images/plus.svg" alt="" class="article__plus">
            <h2 class="article__title">Как получить льготный кредит</h2>
        </div>
        <div class="connector">
            <div class="connector__line"></div>
            <div class="grid grid--style--patch">
                <div class="article">
                    <div class="article__image article__image--style--number">1</div>
                    <h4 class="article__title article__title--text--extra--small">Регистрация на i.moscow и подача заявки</h4>
                    <div class="article__body">Укажите сведения о заёмщике, параметры кредита, приложив бухгалтерскую отчётность и документ, подтверждающий право собственности или иное право на объект капитального строительства/земельный участок</div>
                </div>
                <div class="article">
                    <div class="article__image article__image--style--number">2</div>
                    <h4 class="article__title article__title--text--extra--small">Отбор заявок в Фонде МИК</h4>
                    <div class="article__body">Специалисты Московского инновационного кластера проверят, чтобы ваша заявка соответствовала требования для получения льного кредита</div>
                </div>
                <div class="article">
                    <div class="article__image article__image--style--number">3</div>
                    <h4 class="article__title article__title--text--extra--small">Передача заявки в МСП Банк</h4>
                    <div class="article__body">Фонд МИК передаёт отобранные заявки в МСП банк, который откроет доступ для работы с заявкой, назначит менеджера. Он поможет в работе с заявкой</div>
                </div>
                <div class="article">
                    <div class="article__image article__image--style--number">4</div>
                        <h4 class="article__title article__title--text--extra--small">Решение кредитного комитета</h4>
                    <div class="article__body">Кредитный комитет МСП банка примет решение по вашей кредитной заявке и уведомит об этом</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

/* Connector */

.connector{
    position: relative;
    margin-top: 20px;
}

.connector__line{
    position: absolute;
    top: 30px;
    width: 77%;
    height: 2px;
    background-image: repeating-linear-gradient(to right, black 0, black 2px, transparent 2px, transparent 6px);
    z-index: -1;
}

@media(max-width:768px){
    .connector__line{
        display: none;
    }
}

/* Grid */

.grid--style--patch{
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

@media(max-width:768px){
    .grid--style--patch{
        grid-template-columns: auto;
    }
}

/* Article */

.article__image--style--number{
    background-color: #16FF00;
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}

</style>