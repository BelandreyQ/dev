<script>
export default{
    name: "SingleRow"
}
</script>

<template>
    <div class="block block--style--margins">
            <div class="article">
                <img src="@/assets/images/plus.svg" alt="" class="article__plus">
                <h2 class="article__title">Если вы не состоите в Реестре стартапов и технологических компаний, то льготный кредит могут получить:</h2>
            </div>
            <div class="grid">
                <div class="block block--style--info block--style--info--big">
                    <img src="@/assets/images/block-four-metall-icon.svg" alt="Обработка металла" class="block__image">
                    <div class="article">
                        <h4 class="article__body">Компании, занимающиеся обрабатывающим производством</h4>
                        <h4 class="article__title article__title--text--extra--small">ОВЭД 10-33*</h4>
                        <h4 class="article__undertext">* за исключением ОВЭД 12 — производство табачных изделий</h4>
                    </div>
                </div>
                <div class="block block--style--info block--style--info--big">
                    <img src="@/assets/images/block-four-tower-icon.svg" alt="Вышка связи" class="block__image">
                    <div class="article">
                        <div class="article__body">Компании из сферы информации и связи</div>
                        <div class="article__title article__title--text--extra--small">ОВЭД 58-63</div>
                    </div>
                </div>
                <div class="block block--style--info block--style--info--big">
                    <img src="@/assets/images/block-four-freelance-icon.svg" alt="Офисный работник" class="block__image">
                    <div class="article">
                        <div class="article__body">Компании, занимающиеся профессиональной, научной и технической деятельностью</div>
                        <div class="article__title article__title--text--extra--small">ОВЭД 71, 72, 74</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style>
    .block--style--info--big{
        gap: 60px;
    }
</style>