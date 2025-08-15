<script>
export default {
    name: "StepBlock"
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
                        <img src="@/assets/images/cluster-icon.svg" alt="Логотип московского иновационного кластера">
                    </div>
                </div>
            </div>
            <div class="block">
                <div class="explanation explanation--style--checkmark">
                    <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                    <div class="article">
                        <div class="article__body">Подтверждаете статус участника Реестра или Фонда МИК и статус субъекта МСП</div>
                    </div>
                </div>
                <div class="explanation explanation--style--checkmark">
                    <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                    <div class="article">
                        <div class="article__body">Подтверждаете вид деятельности: наука, ИТ или промышленность</div>
                    </div>
                </div>
                <div class="explanation explanation--style--checkmark">
                        <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
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
                        <img src="@/assets/images/MSP-icon.svg" alt="Логотип МСП банка">
                    </div>
                </div>
            </div>
            <div>
                <div class="explanation explanation--style--checkmark">
                    <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                    <div class="article">
                        <div class="article__body">Предоставляете необходимую информацию по кредитной заявке</div>
                    </div>
                </div>
                <div class="explanation explanation--style--checkmark">
                    <img src="@/assets/images/step-block-check-mark.svg" alt="Галочка">
                    <div class="article">
                         <div class="article__body">Подписывается кредитный договор, и деньги зачисляются на ваш счет</div>
                    </div>
                </div>
            </div>
        </div>
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