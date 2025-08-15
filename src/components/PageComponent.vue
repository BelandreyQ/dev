<script>
export default {
  name: 'PageComponent'
}
</script>

<template>
        <div class="block block--style--margins">
            <div class="block block--style--horizontal">
                <div class="article">
                    <img src="@/assetes/images/plus.svg" alt="" class="article__plus">
                    <h2 class="article__title">Отбор заявок на получение льготного инвестиционного кредита</h2>
                </div>
                <div class="button--style--border button--style--big">проходит в 2 этапа</div>
            </div>
            <div class="grid grid--style--step grid--style--step--one">
                <div class="block">
                    <div class="explanation explanation--style--step">
                        <div class="article">
                            <div class="article__image article__image--style--number article__image--style--step--one">1</div>
                        </div>
                        <div class="article">
                            <div class="article__title article__title--text--extra--small">В Московском инновационном кластере</div>
                        </div>
                    </div>
                    <div class="article article--align--center--mobile">
                        <div class="article__image article__image--style--white">
                            <img src="@/assetes/images/cluster-icon.svg" alt="Логотип московского иновационного кластера">
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="explanation explanation--style--checkmark">
                        <img src="@/assetes/images/step-block-check-mark.svg" alt="Галочка">
                        <div class="article">
                            <div class="article__body">Подтверждаете статус участника Реестра или Фонда МИК и статус субъекта МСП</div>
                        </div>
                    </div>
                    <div class="explanation explanation--style--checkmark">
                        <img src="@/assetes/images/step-block-check-mark.svg" alt="Галочка">
                        <div class="article">
                            <div class="article__body">Подтверждаете вид деятельности: наука, ИТ или промышленность</div>
                        </div>
                    </div>
                    <div class="explanation explanation--style--checkmark">
                        <img src="@/assetes/images/step-block-check-mark.svg" alt="Галочка">
                        <div class="article">
                            <div class="article__body">Реализация проекта на территории Москвы</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid--style--step grid--style--step--two">
                <div class="block">
                    <div class="explanation explanation--style--step">
                        <div class="article">
                            <div class="article__image article__image--style--number article__image--style--step--one">2</div>
                        </div>
                        <div class="article">
                            <div class="article__title article__title--text--extra--small">В МСП Банке</div>
                        </div>
                    </div>
                    <div class="article article--align--center--mobile">
                        <div class="article__image article__image--style--white">
                            <img src="@/assetes/images/MSP-icon.svg" alt="Логотип МСП банка">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="explanation explanation--style--checkmark">
                        <img src="@/assetes/images/step-block-check-mark.svg" alt="Галочка">
                        <div class="article">
                            <div class="article__body">Предоставляете необходимую информацию по кредитной заявке</div>
                        </div>
                    </div>
                    <div class="explanation explanation--style--checkmark">
                        <img src="@/assetes/images/step-block-check-mark.svg" alt="Галочка">
                        <div class="article">
                            <div class="article__body">Подписывается кредитный договор, и деньги зачисляются на ваш счет</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="block block--style--margins">
            <div class="block block--style--contacts">
                <div class="article">
                    <h2 class="article__title">Остались вопросы?</h2>
                    <div class="article__title article__title--text--extra--small">Свяжитесь с нами</div>
                </div>
                <div class="block block--style--horizontal block--nospace">
                    <div class="article">
                        <div class="article__undertext">Телефон</div>
                        <div class="article__title article__title--style--gradient">+7 499 577 00 55 доб 1</div>
                    </div>
                    <div class="article">
                        <div class="article__undertext">Почта</div>
                        <div class="article__title article__title--style--gradient">_____@cluster.mos.ru</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

body{
    letter-spacing: 0px;
    font-weight: 400;
    line-height: 120%;
}

/* BLock */

.block--nospace{
    justify-content: start;
    gap: 60px;
}

@media (max-width: 768px){
    .block--nospace{
        gap: 20px;
    }
}

.block--style--contacts{
    color: #FFFFFF;
    background-color: #383B4A;
    background-image: url(@/assetes/images/block-eight-texture.svg);
    margin-bottom: 40px;
    gap: 10px;
    border-radius: 20px;
    padding: 50px 60px 40px 60px;
}

/* Article */

@media(max-width:768px){
    .article--align--center--mobile{
        justify-items: center;
    }
}

.article__title--style--gradient{
    color: transparent;
    background-image: linear-gradient(to right, #16FF00, #4DFFC9);
    background-clip: text;  
}

@media(max-width: 768px){
    .article__image{
        width: 46px;
        height: 46px;
    }
}

.article__image--style--number{
    background-color: #16FF00;
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
}

.article__image--style--step--one{
    background-color: transparent;
    border: 1px solid hsl(162, 25%, 45%);
}

/* grid */

.grid--style--step{
    grid-template-columns: 50% 50%;
    background-repeat: no-repeat;
    background-position: right center;
    padding: 40px;
    gap: 20px;
    border-radius: 60px;
}

@media(max-width:768px){
    .grid--style--step{
        grid-template-columns: auto;
        background-position: center;
    }
}

.grid--style--step--one{
    background-color: #D8FDDB;
    background-image: url(@/assetes/images/block-six-texture-one.svg);
}

@media(max-width: 768px){
    .grid--style--step--one{
        background-image: url(@/assetes/images/block-six-texture-one-mobile.svg);
    }
}

.grid--style--step--two{
    background-color: #BEE7FF;
    background-image: url(@/assetes/images/block-six-texture-two.svg);
}

@media(max-width: 768px){
    .grid--style--step--two{
        background-image: url(@/assetes/images/block-six-texture-two-mobile.svg);
    }
}

.grid--style--patch{
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

@media(max-width:768px){
    .grid--style--patch{
        grid-template-columns: auto;
    }
}

.grid__image--side{
    width: 151px;
    height: 156px;
    margin-top: -120px;
}

@media (max-width: 1200px){
    .grid__image--side{
        width: 82px;
        height: 85px;
        margin-top: -60px;
    }
}

@media (max-width: 768px){
    .grid__image--side{
        width: 102px;
        height: 107px;
        margin-top: -70px;
    }
}

/* connector */

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

/* button */

.button--style--big{
    padding: 14px 24px;
    font-size: 24px;
}

@media(max-width:1200px){
    .button--style--big{
        font-size: 20px;
    }
}

@media(max-width:768px){
    .button--style--big{
        align-self: center;
        font-size: 18px;
    }
}

</style>
