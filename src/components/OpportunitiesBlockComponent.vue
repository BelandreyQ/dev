<script>
export default{
    name: 'OpportunitiesBlockComponent'
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
</template>

<style>

/* Block */

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

/* Grid */

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

.article__body--margin{
    margin: 20px 0;
}

.article--align--center{
    justify-items: center;
}
</style>