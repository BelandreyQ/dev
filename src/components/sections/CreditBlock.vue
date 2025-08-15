<script>
export default{
    name:"CreditBlock"
}
</script>
    
<template>
    <div class="block block--style--credit">
        <div class="article article--restricted">
            <h1 class="article__title">Льготные кредиты на инвестиционные цели</h1>
            <div class="article__body--text--small">Совместная программа Правительства Москвы, Корпорации МСП и МСП Банка для компаний, реализующих инвестиционные проекты в сферах науки, промышленности и ИТ</div>
        </div>
        <div class="grid grid--style--credit">
            <div class="grid__label">Сумма кредита</div>
            <div class="grid__cell">
                <div>до</div>
                <div class="grid__text--huge">300</div>
                <div>млн ₽</div>
            </div>
            <div class="grid__label">Ставка</div>
            <div class="grid__cell">
                <div class="grid__text--huge">3%</div>
                <div>годовых</div>
            </div>
            <div class="grid__label">На срок до</div>
            <div class="grid__cell">
                <div class="grid__text--huge">7</div>
                <div>лет</div>
            </div>
        </div>
        <div class="block__buttons">
            <button class="button button--style--gradient">Подать заявку</button>
            <button class="button">Получить консультацию</button>
        </div>
    </div>
</template>

<style scoped>

/* block */

.block--style--credit{
    background-image: 
        url(@/assets/images/png/block-one-venture-credit-pc.png),
        linear-gradient(to right, #6F6DCA, #906DCA);
    color: #FFFFFF;
    margin: 0 20px 20px 20px;
    padding: 40px 80px 120px 80px;
    border-radius: 0 0 80px 80px;
}

@media (max-width: 1200px) {
    .block--style--credit{
        background-image: 
            url(@/assets/images/png/block-one-venture-credit-tablet.png),
            linear-gradient(to right, #6F6DCA, #906DCA);
        margin: 0;
        padding: 40px 30px;
    }
}

@media (max-width: 768px) {
    .block--style--credit{
        background-image: 
            url(@/assets/images/png/block-one-venture-credit-mobile.png),
            linear-gradient(to right, #6F6DCA, #906DCA);
        background-position: right 75%;
        padding: 40px 20px;
    }
}


/* grid */

.grid--style--credit{
    grid-template-columns: repeat(3, min-content);
    grid-template-rows: repeat(2, min-content);
    margin-top: 40px;
    column-gap: 50px;
    row-gap: 18px;
}

@media (max-width: 1200px){
    .grid--style--credit{
        grid-template-columns: min-content;
        grid-auto-flow: dense;
        gap: 6px;
    }
}

@media (max-width: 768px){
    .grid--style--credit{
        margin-top: 20px;
    }
}

.grid__cell{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: baseline;
    gap: 10px;
    font-size: 24px;
}

@media (max-width: 768px){
    .grid__cell{
        font-size: 16px;
    }
}

.grid__text--huge{
    font-size: 70px;
    font-weight: 600;
    line-height: 100%;
}

@media (max-width: 1200px){
    .grid__text--huge{
        font-size: 40px;
    }
}

@media (max-width: 768px){
    .grid__text--huge{
        font-size: 30px;
    }
}

/* article */

.article__body--text--small{
    font-size: 16px;
    line-height: 140%;
}

@media(max-width:1200px){
   .article__body--text--small{
        font-size: 14px;
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
</style>