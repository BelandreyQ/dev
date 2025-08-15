<script>
import SideBlock from './ui/SideBlock.vue';

export default{
    name: 'OpportunitiesBlockComponent',
    components:{    
        SideBlock
    }
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
            <SideBlock/>
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