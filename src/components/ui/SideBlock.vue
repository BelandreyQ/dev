<script>
export default{
    name: "SideBlock"
}
</script>

<template>
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
</template>

<style>

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

</style>