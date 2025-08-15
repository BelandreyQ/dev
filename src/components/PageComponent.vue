<script>
export default {
  name: 'PageComponent'
}
</script>

<template>
        <div class="block block--style--margins">
            <div class="article article--restricted--big">
                <img src="@/assetes/images/plus.svg" alt="" class="article__plus">
                <h2 class="article__title">Льготные кредиты на инвестиционные цели для субъектов МСП</h2>
                <div class="article__body article__body--margin">— это мера финансовой поддержки, реализуемая Правительством Москвы совместно с Корпорацией МСП.</div>
            </div>
            <div class="block block--style--horizontal">
                <div class="block block--style--horizontal">
                    <div class="article article--style--withImage">
                        <div class="article__image">
                            <picture>
                                <source media="(max-width: 768px)" srcset="@/assetes/images/MSP-icon-mobile.svg">
                                <img src="@/assetes/images/MSP-icon.svg" alt="Логотип МСП банка">
                            </picture>
                        </div>
                        <div class="article article--align--center">
                            <div class="article__title article__title--text--extra--small">МСП Банк</div>
                            <div class="article__body">выдает заемные средства</div>
                        </div>
                    </div>
                    <div class="article article--style--withImage">
                        <div class="article__image">
                            <picture>
                                <source media="(max-width: 768px)" srcset="@/assetes/images/png/block-two-moskov-crest-mobile.png">
                                <img src="@/assetes/images/png/block-two-moskov-crest.png" alt="Герб Москвы">
                            </picture>
                        </div>
                        <div class="article article--align--center">
                            <div class="article__title article__title--text--extra--small">Правительство Москвы</div>
                            <div class="article__body">субсидирует ставку по кредиту</div>
                        </div>
                    </div>
                </div>
                <div class="grid grid--style--side">
                    <div class="article">
                        <h3 class="article__title article__title--text--extra--small">Льготная ставка в рамках программы</h3>
                    </div>
                    <img src="@/assetes/images/png/block-two-side-percent.png" alt="Знак процента" class="grid__image--side">
                    <div class="article">
                        <div class="article__title">3%</div>
                        <div class="article__body">действует первые три года </div>
                    </div>
                    <div class="article">
                        <div class="article__title">11%</div>
                        <div class="article__body">далее</div>
                    </div>
                </div>
            </div>
            <div class="block block--style--opportunities">
                <h3>На что можно потратить льготный кредит</h3>
                <div class="block block--style--horizontal--gap--small">
                    <div class="explanation">
                        <div class="article">
                            <div class="article__image article__image--style--white">
                                <img src="@/assetes/images/block-two-cogs-icon.svg" alt="Шестерёнки">
                            </div>
                        </div>
                        <div class="article">
                            <div class="article__body">Модернизацию и расширение производства</div>
                        </div>
                    </div>
                    <div class="explanation">
                        <div class="article">
                            <div class="article__image article__image--style--white">
                                <img src="@/assetes/images/block-two-cart-icon.svg" alt="Корзина">
                            </div>
                        </div>
                        <div class="article">
                            <div class="article__body">Покупку нового оборудования</div>
                        </div>
                    </div>
                    <div class="explanation">
                        <div class="article">
                            <div class="article__image article__image--style--white"> 
                                <img src="@/assetes/images/block-two-handshake-icon.svg" alt="Партнёры">
                            </div>
                        </div>
                        <div class="article__body">
                            <div class="article__body">Приобретение производственных площадей</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block block--style--margins">
            <div class="article">
                <img src="@/assetes/images/plus.svg" alt="" class="article__plus">
                <h2 class="article__title">Кто может получить кредит на льготных условиях</h2>
            </div>
            <div class="block block--style--third">
                <div class="article article--restricted--big">
                    <h3 class="article__title--text--small">Компании из Реестра стартапов и технологических компаний</h3>
                    <div class="article__body">В столице появился Реестр стартапов и технологических компаний. Её участниками могут стать московские инновационные компании. Они получают упрощённый доступ к мерам поддержки от города.</div>
                </div>
                <div class="explanation explanation--restricted explanation--style--small">
                    <div class="article">
                        <div class="article__image article__image--style--white article__image--size80">
                            <img src="@/assetes/images/block-three-members-icon.svg" alt="Сообщество">
                        </div>
                    </div>
                    <div>Все участники Реестра могут получить льготный кредит вне зависимости от сферы деятельности при соответствии основным требованиям для заемщиков</div>
                </div>
                <button class="button button--style--gradient">Подробнее о Реестре</button>
            </div>
        </div>
        <div class="block block--style--margins">
            <div class="article">
                <img src="@/assetes/images/plus.svg" alt="" class="article__plus">
                <h2 class="article__title">Если вы не состоите в Реестре стартапов и технологических компаний, то льготный кредит могут получить:</h2>
            </div>
            <div class="grid">
                <div class="block block--style--info block--style--info--big">
                    <img src="@/assetes/images/block-four-metall-icon.svg" alt="Обработка металла" class="block__image">
                    <div class="article">
                        <h4 class="article__body">Компании, занимающиеся обрабатывающим производством</h4>
                        <h4 class="article__title article__title--text--extra--small">ОВЭД 10-33*</h4>
                        <h4 class="article__undertext">* за исключением ОВЭД 12 — производство табачных изделий</h4>
                    </div>
                </div>
                <div class="block block--style--info block--style--info--big">
                    <img src="@/assetes/images/block-four-tower-icon.svg" alt="Вышка связи" class="block__image">
                    <div class="article">
                        <div class="article__body">Компании из сферы информации и связи</div>
                        <div class="article__title article__title--text--extra--small">ОВЭД 58-63</div>
                    </div>
                </div>
                <div class="block block--style--info block--style--info--big">
                    <img src="@/assetes/images/block-four-freelance-icon.svg" alt="Офисный работник" class="block__image">
                    <div class="article">
                        <div class="article__body">Компании, занимающиеся профессиональной, научной и технической деятельностью</div>
                        <div class="article__title article__title--text--extra--small">ОВЭД 71, 72, 74</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block block--style--margins">
            <div class="article">
                <img src="@/assetes/images/plus.svg" alt="Заявление" class="article__plus">
                <h2 class="article__title">Требования для получения льготного кредита</h2>
            </div>
            <div class="grid">
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-request-icon.svg" alt="Заявление" class="block__image">
                    <div class="article">
                        <div class="article__body">Постановка на учет в качестве налогоплательщика на территории Москвы</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-member-icon.svg" alt="Статус участника" class="block__image">
                    <div class="article">
                        <div class="article__body">Наличие статуса участника Московского инновационного кластера</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-priority-icon.svg" alt="Статус субъекта" class="block__image">
                    <div class="article">
                        <div class="article__body">Наличие статуса субъекта малого и среднего предпринимательства</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-date-icon.svg" alt="Календарный год" class="block__image">
                    <div class="article">
                        <div class="article__body">Продолжительность регистрации в качестве юрлица или ИП составляет не менее 12 месяцев до дня подачи заявки</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-city-icon.svg" alt="Площадка на карте" class="block__image">
                    <div class="article">
                        <div class="article__body">Площадка в Москве (земельный участок, объект капитального строительства в собственности/аренде), на которой планируется реализация инвестиционного проекта</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-investor-icon.svg" alt="Рост активов" class="block__image">
                    <div class="article">
                        <div class="article__body">Положительные значения чистых активов и чистой прибыли за последний отчетный период</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-graph-icon.svg" alt="Расход оборотных средств" class="block__image">
                    <div class="article">
                        <div class="article__body">Доля расходов на оборотные средства при реализации проекта не более 30% (закупка сырья, материалов)от суммы кредита</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-money-icon.svg" alt="Прибыль" class="block__image">
                    <div class="article">
                        <div class="article__body">Доля собственных средств в проекте не менее 25% от суммы бюджета проекта</div>
                    </div>
                </div>
                <div class="block block--style--info">
                    <img src="@/assetes/images/block-five-kremlin-icon.svg" alt="Кремль" class="block__image">
                    <div class="article">
                        <div class="article__body">Готовность реализации проекта на территории Москвы</div>
                    </div>
                </div>
            </div>
        </div>
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

.block--style--horizontal--gap--small{
    align-content: center;
    flex-direction: row;
    gap: 40px;
}

@media (max-width:768px){
    .block--style--horizontal--gap--small{
        gap: 20px;
        flex-direction: column;
    }
}


.block--nospace{
    justify-content: start;
    gap: 60px;
}

@media (max-width: 768px){
    .block--nospace{
        gap: 20px;
    }
}

.block--style--opportunities{
    box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.08);
    margin-top: 60px;
    gap: 30px;
    padding: 40px 40px 30px 40px;
    border-radius: 30px;
    font-size: 32px;
    font-weight: 500;
    line-height: 120%;
}

@media(max-width: 1200px){
    .block--style--opportunities{
        font-size: 24px;
        padding: 40px 30px 30px 30px;
    }
}

@media(max-width: 768px){
    .block--style--opportunities{
        font-size: 20px;
        padding: 30px 20px 20px 20px;
    }
}

.block--style--info{
    justify-content: unset;
    box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.08);
    padding: 30px;
    border-radius: 30px;
    gap: 20px;
}

@media(max-width:768px){
    .block--style--info{
        gap: 20px;
    }
}

.block--style--info--big{
    gap: 60px;
}

.block--style--third{
    color: #FFFFFF;
    background-image: 
        url(@/assetes/images/png/block-three-img-pc.png),
        linear-gradient(to right, #6F6DCA, #906DCA);
    gap: 16px;
    padding: 60px;
    border-radius: 60px;
}

@media(max-width:1200px){
    .block--style--third{
        background-image: 
            url(@/assetes/images/png/block-three-img-tablet.png),
            linear-gradient(to right, #6F6DCA, #906DCA);
        padding: 40px;
    }
}

@media(max-width:768px){
    .block--style--third{
        background-image: 
            url(@/assetes/images/png/block-three-img-mobile.png),
            linear-gradient(to right, #6F6DCA, #906DCA);
        background-position: center 80%;
        background-size: 100%;
        gap: 30px;
        padding: 30px 20px;
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

.block__image{
    width: 70px;
    height: 70px;
}

.block__image--size--small{
    width: 40px;
    height: 40px;
}

.block__logo{
    align-self: center;
    width: 222px;
    height: 47px;
}

/* Article */

.article--style--withImage{
    justify-items: center;
}

@media(max-width: 768px){
    .article--style--withImage{
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 16px;
    }
}

.article--restricted{
    max-width: 660px;
}

@media(max-width:768px){
   .article--restricted{
        max-width: 100%;
   }
}

.article--restricted--big{
    max-width: 60%;
}

@media(max-width:768px){
   .article--restricted--big{
        max-width: 100%;
   }
}

.article--align--center{
    justify-items: center;
}

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

.article__title--text--small{
    font-size: 32px;
    line-height: 120%;
    margin-bottom: 20px;
}

@media(max-width: 1200px){
    .article__title--text--small{
        font-size: 24px;
    }
}

@media(max-width: 768px){
    .article__title--text--small{
        font-size: 16px;
        margin-bottom: 16px;
    }
}

.article__title--text--extra--small{
    font-size: 24px;
    line-height: 120%;
    margin: 10px 0;
}

@media(max-width: 1200px){
    .article__title--text--extra--small{
        font-size: 20px;
    }
}

@media(max-width: 768px){
    .article__title--text--extra--small{
        font-size: 18px;
    }
}

.article__body--margin{
    margin: 20px 0;
}

.article__body--text--small{
    font-size: 16px;
    line-height: 140%;
}

@media(max-width:1200px){
   .article__body--text--small{
        font-size: 14px;
   }
}

.article__undertext{
    color: #8D8F92;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    margin-top: 20px;
}

@media(max-width: 768px){
    .article__image{
        width: 46px;
        height: 46px;
    }
}

.article__image--style--white{
    background-color: #FFFFFF;
    box-shadow: 0 4px 36px 0 rgba(0, 0, 0, 0.08);
    width: 94px;
    height: 94px;
}

@media(max-width: 1200px){
    .article__image--style--white{
        width: 60px;
        height: 60px;
    }
}

.article__image--size80{
    margin-bottom: 0;
    width: 80px;
    height: 80px;
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

.grid--style--side{
    overflow: visible;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    background-image: radial-gradient(circle at 85% -20%, #836ECB 0%, #836ECB 10%, #F8F8F8 35%);
    max-width: 506px;
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 40px;
    row-gap: 10px;
    column-gap: 10px;
}

@media(max-width: 1200px){
    .grid--style--side{
        font-size: 16px;
    }
}

@media(max-width: 768px){
    .grid--style--side{
        align-self: center;
        margin-top: 20px;
    }
}

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

/* header */
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
