<script>
export default{
    name: "ContactsComponent"
}
</script>

<template>
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

<style>

/* Block */

.block--style--contacts{
    color: #FFFFFF;
    background-color: #383B4A;
    background-image: url(@/assets/images/block-eight-texture.svg);
    margin-bottom: 40px;
    gap: 10px;
    border-radius: 20px;
    padding: 50px 60px 40px 60px;
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

/* Article */

.article__title--style--gradient{
    color: transparent;
    background-image: linear-gradient(to right, #16FF00, #4DFFC9);
    background-clip: text;  
}
</style>