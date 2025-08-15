<script>
import StepElement from '../ui/StepElement.vue';

export default {
    name: "StepBlock",
    components:{
        StepElement
    }
}
</script>

<template>
    <div class="block block--style--margins">
        <div class="block block--style--horizontal">
            <div class="article">
                <img src="@/assets/images/plus.svg" alt="" class="article__plus">
                <h2 class="article__title">Отбор заявок на получение льготного инвестиционного кредита</h2>
            </div>
            <div class="button--style--border button--style--big">проходит в 2 этапа</div>
        </div>
        <StepElement
            isGreen
            stepNumber="1"
            stepTitle="В Московском инновационном кластере"
            stepDesk1="Подтверждаете статус участника Реестра или Фонда МИК и статус субъекта МСП"
            stepDesk2="Подтверждаете вид деятельности: наука, ИТ или промышленность"
            stepDesk3="Реализация проекта на территории Москвы"
        >
            <img src="@/assets/images/cluster-icon.svg" alt="Логотип московского иновационного кластера">
        </StepElement>
        <StepElement
            stepNumber="2"
            stepTitle="В МСП Банке"
            stepDesk1="Предоставляете необходимую информацию по кредитной заявке"
            stepDesk2="Подписывается кредитный договор, и деньги зачисляются на ваш счет"
        >
            <img src="@/assets/images/MSP-icon.svg" alt="Логотип МСП банка">
        </StepElement>
    </div>
</template>

<style>

/* Button */

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

/* Article */

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

@media(max-width:768px){
    .article--align--center--mobile{
        justify-items: center;
    }
}


/* Grid */

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
    background-image: url(@/assets/images/block-six-texture-one.svg);
}

@media(max-width: 768px){
    .grid--style--step--one{
        background-image: url(@/assets/images/block-six-texture-one-mobile.svg);
    }
}

.grid--style--step--two{
    background-color: #BEE7FF;
    background-image: url(@/assets/images/block-six-texture-two.svg);
}

@media(max-width: 768px){
    .grid--style--step--two{
        background-image: url(@/assets/images/block-six-texture-two-mobile.svg);
    }
}

</style>