<script>
export default{
    name: "ThirdBlockComponent"
}
</script>

<template>
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
</template>

<style>

/* Block */

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

/* Article */

.article__image--size80{
    margin-bottom: 0;
    width: 80px;
    height: 80px;
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

/* Explanation */

.explanation--style--small{
    font-size: 16px;
    margin-top: 24px;
}

@media(max-width:768px){
    .explanation--style--small{
        margin-top: 0px;
    }
}

.explanation--restricted{
    max-width: 50%;
}

@media(max-width: 1200px){
    .explanation--restricted{
        max-width: 60%;
    }
}

@media(max-width: 768px){
    .explanation--restricted{
        max-width: 100%;
        margin-bottom: 200px;
    }
}

</style>